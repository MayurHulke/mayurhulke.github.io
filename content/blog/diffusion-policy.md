---
title: "Diffusion Policy: Robot Learning"
date: 2025-03-19T14:45:00+00:00
tags: ["Robotics", "Machine Learning", "Diffusion Models", "Research"]
draft: true
description: "How it works, where it wins, what still hurts, and what the community is fixing next."
ShowReadingTime: true
ShowToc: true
---

> **TL;DR** <abbr title="Diffusion Policy: A robot control method that gradually refines random actions into precise movements">Diffusion Policy</abbr> borrows the *denoising* trick from <abbr title="Stable Diffusion: A popular AI image generation model that creates images by gradually removing noise">Stable Diffusion</abbr> (start with pure noise, gradually refine) and applies it to a short horizon of robot actions instead of pixels.
> It crushes classic <abbr title="Behavior Cloning: A technique where an AI directly copies human demonstrations">behavior cloning</abbr> baselines on manipulation benchmarks, but the sampling loop is slow and still blind to out-of-distribution situations.
> Recent follow-ups (OneDP, RNR-DP, Consistency Policy, Diff-DAgger) attack those pain points with distillation, smarter noise scheduling, and uncertainty heads.

---

## Motivation & Intuition

Generative image models taught us a weird lesson: *start with random static, nudge it repeatedly, beautiful pictures emerge*.
Cheng Chi and colleagues asked: **what if a robot's next half-second of motion is treated like that noisy canvas?**

<div align="center">
{{< figure src="/images/diffusion_policy/policy.png" caption="Diffusion Policy applies the same iterative denoising process used in Stable Diffusion to robot actions. Starting with random noise, the model gradually refines action trajectories conditioned on visual observations. (Source: Chi et al., 'Diffusion Policy: Visuomotor Policy Learning via Action Diffusion', 2023)" >}}
</div>

In plain English:

1. Look at the scene through the robot's cameras.
2. Make up *completely random* future actions.
3. Run about 30 tiny clean-up steps that steer those actions toward what human demos considered "normal" for that visual situation.
4. Send **only the first action** to the motors; re-sense and repeat 30 ms later.

That's *Diffusion Policy* (DP) in one sentence.

---

## The Algorithm, Step by Step

| Stage | What happens | Why it matters |
|-------|-------------|----------------|
| **Encode observation** | <abbr title="CNN: Convolutional Neural Network, a deep learning architecture designed for processing grid-like data such as images">CNN</abbr> / <abbr title="ViT: Vision Transformer, a type of neural network that applies transformer architecture to image processing">ViT</abbr> turns RGB (optionally depth or point cloud) into a latent vector $o$ | Separates visual perception from control so only the perception backbone runs once per timestep. |
| **Add action noise** | Sample Gaussian noise $\epsilon \sim \mathcal{N}(0,I)$ for an $H$ step action sequence $a_{0:H-1}$ | Gives the model a *trajectory canvas* to sculpt. |
| **Iterative denoising** | For timestep $t=T \dots 1$: update $a$ with gradient step toward more likely actions given observation | Each step is a tiny gradient descent toward demo likelihood, conditioned on observation. |
| **Receding horizon exec.** | Take $a_{0}$, send to robot, shift horizon & refill tail with fresh noise | Keeps planning window small but ensures smoothness across iterations. |

Typical hyperparameters: $T=20–40$ denoise steps, horizon $H=8$ actions, control loop ≈1–5 Hz when run on a desktop <abbr title="GPU: Graphics Processing Unit, a specialized processor designed to accelerate graphics rendering and now widely used for deep learning computations">GPU</abbr>.

---

## Why It Works (Strengths)

* **Handles "many right answers."** The distribution can *branch* (pouring sauce clockwise or counter-clockwise), then sampling picks one branch instead of averaging them into nonsense.
* **Scales with <abbr title="DoF: Degrees of Freedom, the number of independent parameters that define a system's configuration">DoF</abbr>.** Diffusion models routinely juggle million-pixel grids; a 30-DoF arm trajectory is tiny.
* **Stable training.** Plain score-matching, no adversaries, no negative sampling tricks.
* **Built-in short planner.** Predicting eight future steps every frame gives local foresight without a separate <abbr title="MPC: Model Predictive Control, a method that uses a model of the system to predict future behavior and optimize control actions">MPC</abbr>.

Benchmarks confirm the hype: 15 RoboMimic + FrankaKitchen tasks, **+46.9% average success over <abbr title="IBC: Implicit Behavioral Cloning, a method that learns a policy by comparing pairs of actions">IBC</abbr>, <abbr title="LSTM-GMM: Long Short-Term Memory network with Gaussian Mixture Model outputs, a type of recurrent neural network that predicts a distribution of possible actions">LSTM-GMM</abbr>, etc.** [DP paper](https://arxiv.org/abs/2303.04137)

---

## Limitations & Pain Points

| Pain | Root cause | Real-world impact |
|------|------------|-------------------|
| **Inference latency** | 20-40 gradient steps per control cycle | ~1-2 Hz closed-loop rate on a single GPU, too slow for contact-rich tasks. |
| **Responsiveness vs. consistency** | Needs an 8-step horizon to avoid mode hopping | Robot may over-commit if the environment changes abruptly. |
| **<abbr title="OOD: Out-Of-Distribution, referring to situations or data points that differ significantly from what the model was trained on">OOD</abbr> blindness** | Pure behavior cloning; no self-uncertainty | Robot silently drifts when it leaves the demo manifold. |
| **Data/compute hunger** | Hundreds of clean demos, >10⁷ params | Expensive on real hardware or embedded CPUs. |

---

## How the Community Is Fixing Things (2024-25)

| Approach | Key idea | Win |
|----------|---------|-----|
| **One-Step Diffusion Policy (OneDP, 2024)** [Zhengdong Wang et al.](https://arxiv.org/abs/2410.21257) | Distill the $T$ step sampler into a *single* forward pass | **62 Hz** control instead of 1.5 Hz → real-time pick-and-place. |
| **Consistency / ManiCM (2024)** [Guanxing Lu et al.](https://arxiv.org/abs/2406.01586) | Enforce *consistency* along the diffusion <abbr title="ODE: Ordinary Differential Equation, a type of differential equation involving one independent variable and its derivatives">ODE</abbr>; training predicts the final answer from any noise level | 10× speed-up, still hits 30+ simulation tasks. |
| **Responsive Noise-Relaying DP (RNR-DP, 2025)** [Pang et al.](https://arxiv.org/abs/2502.12724) | Maintain a noise buffer: head is clean (executes), tail is noisy (keeps plan smooth) | Recovers responsiveness without shrinking horizon. |
| **Diff-DAgger (2024)** [Ye et al.](https://arxiv.org/abs/2410.14868) | Use high diffusion loss as an uncertainty signal to trigger human corrections | 14% higher success on out-of-distribution scenes. |
| **Large-Scale Diffusion Transformer (2024-25)** [Chen et al.](https://arxiv.org/html/2410.15959v1) | Scale to 1B params with factorized embeddings | Better cross-task generalization on Open-X Embodiment. |

Surveys (TechRxiv 2025) synthesize these trends [Survey 2025](https://arxiv.org/html/2504.08438v1).

---

## Open Questions (Research To-Do List)

1. **Sub-millisecond sampling.** Can we hit 500 Hz on an <abbr title="ARM SoC: System on a Chip based on ARM architecture, commonly used in mobile and embedded devices">ARM SoC</abbr>? OneDP is a start; neuromorphic variants like Spiking DP [SDP 2024](https://arxiv.org/html/2409.11195v1) are tantalizing.
2. **Truthful uncertainty.** Beyond Diff-DAgger, how do we fuse <abbr title="Epistemic uncertainty: Uncertainty due to lack of knowledge or data">epistemic</abbr> (data) and <abbr title="Aleatoric uncertainty: Uncertainty due to inherent randomness in the system being modeled">aleatoric</abbr> (sensor) uncertainty *without* killing multimodality?
3. **Task transfer.** Can a single DP backbone master hundreds of tasks with minimal fine-tuning? Hierarchical DP [HDP 2024](https://arxiv.org/abs/2411.12982) hints at one path.
4. **Multi-modal inputs.** Stable fusion of <abbr title="RGB-D: Color (RGB) plus Depth information, a type of visual data that includes both color and distance measurements">RGB-D</abbr>, force torque, language prompts is still clunky. ManiCM's point-cloud conditioning is a promising demo.
5. **Safety & constraints.** How to project diffusion samples onto a safe set (joint, wrench, collision) in real time?

---

## Practical Pointers

* **Code:** [https://diffusion-policy.cs.columbia.edu](https://diffusion-policy.cs.columbia.edu) (original)
               [https://research.nvidia.com/labs/dir/onedp/](https://research.nvidia.com/labs/dir/onedp/) (OneDP)
               Official PyTorch & Isaac Gym examples.
* **Colab quickstart:**

```bash
# Sim training (RoboMimic Lift)
python train.py --task=lift --horizon=8 --n_steps=40
# Real Franka robot inference
python control.py --checkpoint=weights.pt --camera=rsp
```

* **Data:** RoboMimic, Meta-World, FrankaKitchen, plus your own teleop logs.

---

## Takeaways

*Diffusion Policy = denoise your way to robot skill.* It unlocked a clean, generic recipe for multi-modal imitation and is now the reference line every new paper must beat.

But like early GANs, it's **slow**, assumes the world matches the demos, and ignores safety.
2024-25 research slashed sampling time, added uncertainty gates, and pushed toward larger, more universal models.
Expect the next wave to fuse language, tactile feedback, and hard constraints, giving robots that can improvise safely and quickly.

*If you're scouting for thesis topics, the treasure map is right above.*

---

### References

1. Cheng Chi et al., "Diffusion Policy: Visuomotor Policy Learning via Action Diffusion," *arXiv:2303.04137*, 2023.
2. Zhendong Wang et al., "One-Step Diffusion Policy," *arXiv:2410.21257*, 2024.
3. Pang et al., "Responsive Noise-Relaying Diffusion Policy," *arXiv:2502.12724*, 2025.
4. Lu et al., "ManiCM: Real-time 3D Diffusion Policy via Consistency Model," *arXiv:2406.01586*, 2024.
5. Ye et al., "Diff-DAgger: Uncertainty Estimation with Diffusion Policy," *arXiv:2410.14868*, 2024.
6. Chen et al., "Diffusion Transformer Policy," *arXiv:2410.15959*, 2024.
7. TechRxiv, "Diffusion Models for Robotic Manipulation: A Survey," 2025.
8. Li et al., "Spiking Diffusion Policy for Robotic Manipulation," *arXiv:2409.11195*, 2024.

## Technical Terms Glossary

- **Aleatoric uncertainty**: Uncertainty arising from inherent randomness in the system or observations
- **ARM SoC**: System on a Chip based on ARM architecture, used in mobile and embedded devices
- **Behavior Cloning**: A technique where an AI directly copies human demonstrations
- **CNN**: Convolutional Neural Network, specialized for processing grid-like data (images)
- **Diffusion Model**: A generative model that learns to gradually denoise random data
- **DoF**: Degrees of Freedom, independent parameters defining a system's configuration
- **Epistemic uncertainty**: Uncertainty due to lack of knowledge or data
- **GAN**: Generative Adversarial Network, a type of generative model with competitive training
- **GPU**: Graphics Processing Unit, specialized for parallel processing
- **IBC**: Implicit Behavioral Cloning, learns by comparing action pairs
- **LSTM-GMM**: Long Short-Term Memory with Gaussian Mixture Model, predicts action distributions
- **MPC**: Model Predictive Control, optimizes actions using future predictions
- **ODE**: Ordinary Differential Equation, involving one variable and its derivatives
- **OOD**: Out-Of-Distribution, situations different from training data
- **RGB-D**: Color images plus depth information
- **ViT**: Vision Transformer, applies transformer architecture to image processing 
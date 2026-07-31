---
title: "Generality or Speciality in AI ?"
date: 2024-12-16
draft: false
ShowToc: true
tags: ["Robotics", "AI"]
description: "If we can't deploy something useful to real world then what is the point of having this amazing AI technology at hand. This is my POV on Why I Believe AGI is the Unclear Goal (and Why Specialisation i"
canonicalURL: "https://mayurhulke.com/generality-or-speciality-in-ai/"
---
> If we can't deploy something useful to real world then what is the point of having this amazing AI technology at hand. This is my POV on Why I Believe AGI is the Unclear Goal (and Why Specialisation is the "Practical" Useful Way Forward)

In the quest to create machines that think and learn like humans, Artificial General Intelligence (AGI) has often been regarded as the **"holy grail"** of artificial intelligence. However, I believe that AGI may not be the most practical goal and could be based on a misunderstood view of intelligence itself. Instead, I suggest a more grounded approach that mirrors the highly specialised nature of human knowledge and skills.

**As a Staff Computer vision & Robotics engineer,** I spend all my time putting these AI & Robotics systems in production for real world applications where reliability is the most important thing. Based on my day to day hands on experience, I would like to put my thoughts in this post and explain why I think that AGI might not be the ideal goal, why specialisation should be considered a more pragmatic path, and what it means for the future of AI development, **with simple examples** to ground the discussion.

![](/images/blog/generality-or-speciality-in-ai/bf3316cf46.webp)

---

It’s hard to say anything clear about something as vague as "general intelligence." Even defining it is tricky. As an AI community I don't think we agreed on ,What does it really mean for AI to be "general"?

I mean should it be able to cook, make music, and solve hard math problems etc etc ?

TBH, Even for humans, being "general" is often just an missleading (in my personal opinion), we are often thought of as being versatile or capable of adapting to many different tasks but lets be honest this adaptability has limits, and much of it is context-dependent.

We can seem general because we can learn and adapt when needed, but this learning often requires time, effort, and resources. It’s not as instant or natural as it might appear.

But just for the sake of this conversation. even if we keep this vagueness aside. I don’t think I completely rejects the idea of generalisation. Instead, Based on day to day work in AI, I incline more towards supporting a modular approach, where different specialised systems work together (like a team of agents, each good at one specific thing). Also if you look at current wave of AI , we are focusing on building vertical agents working together to make AI more mainstream and useful.

Also, this argument makes sense when you think about how we (humans) work. Cognitive science shows that our brains rely on different parts for different tasks, like language, spatial reasoning, social understanding etc.

> for example, think about when you’re driving, one part of your brain focuses on

> 1. Controlling the car (Motor Skills),
> 2. Another keeps track of the route (Spatial Awareness), and
> 3. Yet another watches out for pedestrians (Situational Awareness).

Each part handles its own job, and together, they collectively solve the task at hand. In a way, human intelligence is naturally collaborative, with each part of the brain doing its own thing. So in a way "*having* *multiple specialised agents is better rather than one general agent"* argument is very valid.

### What is AGI, and Why Do I Feel It May Not Be Ideal?

AGI refers to an artificial intelligence system that can perform any intellectual task a human can, adapting seamlessly across domains without needing retraining or fine-tuning. Proponents see it as the ultimate goal of AI, enabling machines to exhibit creativity, reasoning, and decision-making across diverse tasks.

I believe this goal may overlook a key insight: **human intelligence itself is not general.** While humans may appear versatile, our capabilities are deeply tied to specialized modules, biological adaptations honed over millions of years.

For instance:

* A chess grandmaster excels at chess but may struggle to explain quantum physics.
* A skilled artist may not have the instinct to solve complex calculus problems.
* Even everyday tasks, like recognizing a face in a crowd or driving a car, involve specialized neural pathways and learned behaviors.

### The Specialization of Human Intelligence

Human intelligence thrives on **specialization, not generality.** Similarly, AI systems today excel in specific tasks, often outperforming humans, but fail in generalizing to unrelated domains. Pursuing AGI, therefore, may overlook this essential characteristic.

## Example 1: AlphaGo vs. Autonomous Driving (Oversimplified for the sake of this discussion)

* AlphaGo, developed by DeepMind, is a master at playing Go. But if tasked with identifying pedestrians on a crosswalk, it wouldn’t have a clue.
* Conversely, an autonomous vehicle AI like Tesla’s self-driving software is excellent at navigation but utterly useless in playing Go.
* Both systems represent extreme specialization, optimized for their respective tasks.

The idea of AGI would demand a single system capable of excelling in both domains and many more, ***a goal that might be unrealistic or even unnecessary.***

---

### Why Specialization Should Be a Focus

#### 1. **Efficiency in Problem-Solving**

AI systems designed for specific tasks are more efficient. For example:

* **Medical Diagnostics:** AI trained to detect skin cancer from images can outperform dermatologists, but it isn’t designed to diagnose heart disease.
* **Chatbots like GPT:** While GPT-4 can generate coherent responses on a vast range of topics, it struggles with real-time robotics or navigating physical environments.

#### 2. **Faster Iterative Progress**

Focusing on specialisation allows us (engineers & researchers) to solve real-world problems incrementally. Each specialized AI system addresses a tangible challenge, driving immediate societal benefits. For instance:

* AI tools in agriculture predict crop yields and optimise irrigation.
* AI in manufacturing improves quality control with vision systems for detecting defects.

These practical outcomes are easier to achieve than chasing the vague dream of AGI.

---

### What Are the Challenges with AGI?

Pursuing AGI presents numerous challenges that make it less attractive as a goal:

#### 1. **Definitional Ambiguity**

Even defining "general intelligence" is a challenge. What does it mean for an AI to be truly general?

> Human "generality" is often an illusion; most people are only "general" within the limits of their cultural and educational contexts.

#### 2. **Technological Feasibility**

AGI requires breakthroughs in areas like:

* **Common sense reasoning**: A trait humans take for granted but that AI struggles with.
* **Causal understanding**: Distinguishing correlation from causation remains a monumental challenge.
* **Energy efficiency**: Human brains are incredibly efficient; replicating their flexibility with current hardware is orders of magnitude more energy-intensive.
* **Ethical Risks**: The potential for AGI to act unpredictably, either through errors or malintent, raises critical concerns.

> Specialised **AI systems are easier to control and align with human values.**

---

### A Better Approach Could Be Specialised Modular Systems

I suggest a more practical vision for AI involves a modular approach where **specialized systems work together.** These systems would mimic the collaborative nature of human intelligence, where different brain regions handle distinct tasks.

## Example: A Robotic Pick-and-Place System
Imagine building a robot for a manufacturing line:

* **Perception Module:** Identifies objects using computer vision.
* **Planning Module:** Decides the best sequence to pick and place items.
* **Control Module:** Executes the task by moving robotic arms.

Each module specializes in a specific function, but the system as a whole achieves a broader goal. This design is not "general intelligence" but a practical, scalable solution.

---

### Embodied Intelligence

Being a robotics engineer, it is very clear to me that focusing on "embodied intelligence," where AI systems learn through interaction with the physical world. It is absolute necessary to make these system truly understand the context they operate in.This means building AI that learns by directly experiencing and reacting to its environment, rather than only processing abstract data.

## 🤖 Example: Boston Dynamics Robots

Boston Dynamics' robots like Spot and Atlas are great examples. These robots learn how to move and balance through practice in real-world environments. For example:

![](/images/blog/generality-or-speciality-in-ai/ba6d33833a.gif)

Credit: Spot Boston Dynamics

* **Spot:** This dog-like robot practices walking on uneven surfaces, climbing stairs, and navigating obstacles. When it encounters something tricky, it adjusts its movements based on feedback, similar to how a human learns to walk on ice by being careful and adapting their steps.

![](/images/blog/generality-or-speciality-in-ai/406664b749.gif)

Credit: Atlas Boston Dynamics

* **Atlas:** This humanoid robot practices running, jumping, and even doing backflips by repeatedly trying these tasks and improving over time. It learns balance and movement by interacting with the physical world.

Both robots are specialized. Spot is excellent at walking and navigating, while Atlas excels at dynamic movements. This approach shows how AI can become more capable in specific areas through real-world experiences, even though it remains specialised.

---

### A Pragmatic Path Forward (Real World Deployment POV)

I believe that while AGI captures the imagination, its practicality and necessity should be questioned. ***By focusing on specialisation, embodied intelligence, and modular systems***, AI can solve meaningful problems today while incrementally broadening its capabilities.

> Instead of asking, "How do we create AGI?" we should ask,
> "How can AI specialise and adapt to solve task at hand?"
>  It’s a shift in mindset that could define the future of artificial intelligence in real world use case.

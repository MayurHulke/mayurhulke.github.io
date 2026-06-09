---
title: "Perception → Decision → Action"
date: 2026-06-01
draft: false
tags: ["embodied-ai", "manipulation", "robotics"]
summary: "Why the hardest part of physical AI isn't seeing the world — it's closing the loop back to action."
---

> This is a starter post — replace it with your own writing. It exists so the
> homepage **Writing** section and the `/posts/` archive render with real content.

Every robotics demo looks like perception. A camera, a neural net, a crisp bounding box.
But the demo that matters is the one that closes the loop: perception that *commits* to a
decision, and a decision that survives contact with the real world.

## The loop, not the layer

It's tempting to treat perception, planning, and control as a pipeline — clean handoffs
between specialists. In contact-rich manipulation that abstraction leaks immediately. The
moment the gripper touches the part, perception and action stop being separate stages and
become a single feedback loop running at the speed of physics.

## Where the bottleneck actually is

A few things I keep coming back to:

1. **Sample efficiency.** World models earn their keep here — imagining outcomes is cheaper
   than collecting them on real hardware.
2. **Grounding.** Vision-language-action models can map instructions to behaviour, but
   "grounding" is doing a lot of work in that sentence.
3. **Memory.** Long-horizon tasks need spatial and episodic memory, not just a bigger context window.

More to come.

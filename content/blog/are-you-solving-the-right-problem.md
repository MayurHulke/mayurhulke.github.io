---
title: "Are You Solving the Right Problem?"
date: 2024-12-11
draft: false
aliases: ["/are-you-solving-the-right-problem/"]
ShowToc: true
tags: ["Notes", "Engineering"]
description: "I would like to take a moment and talk about the most important skill we, as engineers, must master which is understanding the problem before designing the solution. There’s a simple but powerful trut"
---
I would like to take a moment and talk about the most important skill we, as engineers, must master which is understanding the problem before designing the solution. There’s a simple but powerful truth in problem-solving:

> If you don’t fully understand the problem, you’ll either overcomplicate the solution or fail to solve it entirely.

This applies to everything from AI and robotics to everyday challenges at work or home. I would like to write about it because it’s so critical and I often find especially during interviews/projects/brainstorming sessions that engineers don't pay enough attention to it. As a result it leads to waste of resources and time on doing wrong things.

At its core, problem-solving isn’t just about creating solutions, it’s about aligning with reality. Every problem has a nature, a set of truths that define it. To truly solve it, you must humble yourself to understand it on its terms, not yours. This requires curiosity, patience, and often a willingness to discard your preconceptions. When we rush into solutions without fully grasping the problem, we’re imposing our biases rather than engaging with the reality of the situation. True understanding bridges the gap between intention and impact, letting the solution emerge naturally rather than being forced.

## The Trap of Overcomplication

When you don’t truly understand a problem, it’s tempting to throw everything at it , more tools, more features, more complexity. This often leads to bloated, inefficient solutions that don’t actually address the root cause.

For example, in computer vision, a team might decide to train a state-of-the-art neural network on terabytes of data to detect objects in images. But if the problem is actually low-light conditions affecting the camera feed, a simpler hardware fix like improving the sensor or lighting would solve it more effectively.

Complexity for its own sake not only wastes resources but also introduces more points of failure. A good solution is as simple as possible, but no simpler, something you can only achieve by fully understanding the problem.

## The Risk of Falling Short

On the flip side, failing to fully understand a problem can mean you miss crucial aspects of it, leading to solutions that don’t actually work.

Take autonomous vehicles as an example. If you only focus on ideal driving conditions, clear weather, perfect roads, you’ll fall short when your system encounters rain, fog, or poorly marked lanes. Understanding the problem in its entirety requires accounting for edge cases and variability. Without that, your solution might seem to work during testing but fail spectacularly in the real world.

## How to Truly Understand a Problem

1. **Ask Why (and Keep Asking)**

Get to the root cause of the problem. For example, if a robot arm is missing its pick targets, is it due to poor calibration, bad sensor data, or subpar gripper design? Keep digging until you understand *why* the problem exists.

2. **Break the Problem Into Parts**

Many problems are multi-faceted. Breaking them into smaller components helps you understand which areas need focus. For instance, in an AI workflow, you might isolate issues with data quality, model architecture, and deployment separately.

3. **Test Your Assumptions**

Often, the biggest mistakes come from assumptions that go unchallenged. Before diving into solutions, validate your understanding with experiments or feedback.

4. **Talk to the Right People**

Sometimes, the key to understanding a problem lies outside your immediate domain. If you’re working on a manufacturing line, the operator might have insights that no engineer or data scientist could uncover.

## The Takeaway

A great solution doesn’t just work, it works because it addresses the problem fully and efficiently. But you can’t get there if you don’t understand the problem first. Take the time to ask questions, test assumptions, and dig deep. You’ll save time, resources, and frustration in the long run.

In the end, solving a problem isn’t just about applying the right tools or algorithms. It’s about knowing what you’re solving in the first place. Get that right, and the solution often becomes much clearer and simpler than you initially thought.

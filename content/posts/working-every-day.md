---
draft: true
title: "The demo is the easy part"
date: 2026-11-02
tags: ["robotics", "autonomy", "deployment"]
summary: "Four jobs, one lesson: a robot that works once proves very little. What I have learned about the gap between a demo and a machine people rely on."
---

Every robotics team I have worked with has a video of the robot doing the task. It is usually a good video. The hard part starts the day after it is filmed.

I have now worked on four quite different machines: a powered prosthetic leg, a roadside traffic camera, a vehicle-inspection system and an industrial robot cell. Now I work on heavy machines. Each one taught me the same lesson from a different angle: **the demo answers "can it?", and customers only care about "will it, every day?"**

## The world does not hold still

At Chisel Robotics we built an adaptive bionic leg. In the lab, the controller could be tuned to the person in front of us. But people change. Weight changes, strength changes, gait changes over a long day, and the socket fits differently in the evening than in the morning.

A leg tuned once was a leg that slowly got worse. So the design goal became a machine that keeps learning from the person wearing it, rather than a person who keeps adapting to the machine.

That is still the first question I ask about any system: what will be different in six months, and who notices?

## Cheap, local and always on

At Q-Free the brief was simple to say: could one camera and about £1,000 of edge hardware replace sensors cut into the road? Detecting vehicles in a good frame was not the problem. The problem was rain at night, low sun on a wet road, eight lanes from one camera, and no data centre to fall back on.

The system had to run on the device, continuously, for months. That meant the "boring" work mattered most: what happens when a frame is bad, when the light changes in a second, when the box restarts. None of it shows up in a demo.

## Trust is the product

At BCA, buyers stopped walking around cars and started buying them from photos. The vision system was no longer a nice extra: each vehicle's images had to carry the trust a walk-around used to.

A model that finds a scratch 95% of the time sounds good until you ask what happens in the other 5%. The useful metric was not accuracy on a test set. It was how often a buyer felt misled, and we tracked it as a complaint rate.

## Pick the task the numbers pick

At Almetra, we turned factory video into timelines of the work: which steps, how long, where people waited. When we moved into robotics, that data turned out to matter more than any model.

It is tempting to automate the task a robot can do. It is better to automate the task the line needs done: the one that is frequent, slow and blocking everything after it. Learning from human demonstrations got us a long way, but the cells that worked combined learned policies with classical control and plain safety logic. Structure is not the enemy of learning; it is what lets you ship it.

## What I look for now

After a few years of this, my checklist for "will it work every day?" is short:

- **What changes over time,** and does the system notice before a person does?
- **What happens on a bad input,** not just a typical one?
- **Which number does the customer actually feel:** downtime, complaints, cycle time?
- **Where does learning help,** and where is a simple rule safer?
- **Can someone other than the author fix it** at 3 a.m.?

None of this is glamorous. But the gap between "it worked once" and "we rely on it" is where most robotics projects stall, and it is the gap I find most interesting to close.

---
title: "Story"
layout: story
description: "From competition robots in a workshop to heavy-machine autonomy at HIVE."
ShowToc: false
---

<p class="story-lead">Today I lead learned autonomy at <strong>HIVE</strong>, where retrofitted heavy machines already work in the field. The part of robotics I care about is what happens after the demo. Getting here took competition robots, a bionic leg, roadside cameras, car inspection and factory robots.</p>

<h2 class="act-head" id="origins">Beginnings</h2>

![Baymax hugging Hiro in Big Hero 6](/img/baymax-hug.webp)

No robotics degree was available to me, so I put one together myself. A robot, as I saw it, was three things stacked together: mechanics, electronics and code. I learned code from free online courses, mechanics from books and a summer fixing cars and bikes with local garage owners, and electronics in the university lab attached to my degrees: two bachelor's in parallel, in electronics and in signals and systems.

The spark came from films and books: *I, Robot*, *Big Hero 6*, Andy Weir's *Project Hail Mary* and, above all, Isaac Asimov's robot stories. I built my first robot at 14, after school and as a hobby, then started entering competitions and kept going: **30+ wins**, including national-level events, across RoboWar, Robo Soccer, Maze Solver, Call of Duty, coding championships and mechatronics design.

<div class="photo-grid">
<img src="/img/robots/robot-1.jpg" alt="Cutting the chassis, sparks flying" title="Cutting the chassis, sparks flying" loading="lazy">
<img src="/img/robots/robot-2.jpg" alt="The finished machine, flipper arm up" title="The finished machine, flipper arm up" loading="lazy">
<img src="/img/robots/robot-3.jpg" alt="Pneumatics and wiring going in" title="Pneumatics and wiring going in" loading="lazy">
<img src="/img/robots/robot-4.jpg" alt="Gear reduction on the drive motor" title="Gear reduction on the drive motor" loading="lazy">
<img src="/img/robots/robot-5.jpg" alt="Drive train laid out on the base plate" title="Drive train laid out on the base plate" loading="lazy">
<img src="/img/robots/robot-6.jpg" alt="Mid-build, in the workshop" title="Mid-build, in the workshop" loading="lazy">
</div>

The one I am proudest of was Maximus, named after Gladiator. Every part was designed and built by me, mostly from a car scrapyard: the motor was a starter motor out of a scrapped car, bought for next to nothing and rebuilt, which gave it more torque and speed than anything else in the arena at a fraction of the cost. It went four years without losing. Lack of resources makes you do crazy things.

After my degrees I moved to the UK for the MSc in Advanced Robotics and Artificial Intelligence at the University of Bristol.

<h2 class="act-head" id="chisel">Chisel Robotics</h2>

![With the intelligent bionic leg prototype](/img/mayur-leg.jpg)

It started in a dorm room in Bristol, during the MSc: a bionic leg for people who had lost a limb through war, accidents or other trauma. A prosthetic leg is usually set up once, but the person wearing it keeps changing. Weight, strength and gait shift over months, and even over a single day.

> **The person should not continually adapt to a static machine. The machine should learn to adapt to the person.**

The leg was fully actuated. Its control stack combined multimodal sensing, machine learning and real-time feedback to personalise gait and adjust to the surface underfoot. The NHS trials were evaluation and data collection at once, giving the controller real-world data instead of laboratory assumptions. The aim was to make this more accessible than premium powered systems, not just to build a clever prototype.

I turned the project into a company, Chisel Robotics, in 2018, ran it alongside my MSc and led it for five years in all, based at the [**Bristol Robotics Laboratory**](https://www.bristolroboticslab.com/), backed by **Innovate UK** and grown out of **NHS** research partnerships. The leg also became my thesis.

<h2 class="act-head" id="perception">Roadside cameras, then cars</h2>

Q-Free hired me while I was still at university. Counting traffic usually means cutting sensors into the road: [**axle sensors and inductive loops**](https://www.fhwa.dot.gov/policyinformation/tmguide/tmg_2022/traffic-data-collection.cfm) are accurate, but every install or repair means roadworks and lane closures. The question was whether one camera and about **£1,000 of edge hardware** could get the same information without digging up the road. I built an offline pipeline that detected, classified, tracked and measured the speed of vehicles on an **NVIDIA Jetson** at the roadside, covering four, six or eight lanes through rain, glare and changing light. It was deployed in the **UK and US**.

Then COVID [**moved BCA's car sales online**](https://www.bca.co.uk/news/latest-update-from-bca-ragrding-covid-19-20200408/). Buyers could no longer walk around a car, so the photos had to carry the trust instead. I worked on the production vision behind that: consistent views with the background replaced and reflections handled, **360° interiors**, **3D reconstruction**, and models that found fine damage on bodywork, seats and steering wheels. Inspection went from hours to minutes, and it all ran in production on **AWS**.

<h2 class="act-head" id="factory">Almetra, part one: watching factories</h2>

Almetra hired me in 2024 as a **Staff Computer Vision Engineer** to try an idea. Factory vision usually means a separate **YOLO model for each production station**. That works for one camera. It does not work for a customer with hundreds of stations, each with different products, tools and layouts.

> **Could a foundation model take raw production video and return a structured timeline of the work?**

<figure class="action-segmentation" data-action-segmentation aria-labelledby="action-segmentation-title">
<figcaption class="action-segmentation__header">
<div>
<span class="action-segmentation__kicker">Illustrative example · Factory streams at scale</span>
<h3 id="action-segmentation-title">From one live feed to hundreds of action timelines.</h3>
</div>
<button class="action-segmentation__control" type="button" data-action-control aria-controls="action-segmentation-stage">Play</button>
</figcaption>

<div class="action-segmentation__stage" id="action-segmentation-stage">
<div class="action-segmentation__feed-stage" role="img" aria-label="An illustration of one live factory feed zooming out into a wall of many live feeds, then sampling different stations">
<div class="action-segmentation__feed-grid" data-feed-grid aria-hidden="true"></div>
<div class="action-segmentation__focus-feed" data-focus-feed aria-hidden="true"></div>
<span class="action-segmentation__feed"><span aria-hidden="true"></span> Live factory feed</span>
<span class="action-segmentation__feed-scale" data-feed-scale aria-hidden="true">One live feed</span>
</div>

<div class="action-segmentation__model">
<div class="action-segmentation__station" data-station-context>
<span>Selected stream</span>
<strong><span data-station-id>Station 014</span><span aria-hidden="true"> · </span><span data-station-task>Assembly</span></strong>
</div>

<div class="action-segmentation__bridge" aria-hidden="true">
<span>Continuous frames</span>
<span></span>
<span>Action boundaries</span>
</div>

<div class="action-segmentation__timeline-scroll" data-action-timeline tabindex="0" role="img" aria-label="An illustrative assembly-station timeline dividing continuous factory video into five variable-length actions">
<div class="action-segmentation__timeline">
<span class="action-segmentation__playhead" aria-hidden="true"></span>
<div class="action-segmentation__segment" data-action-segment data-start="0" data-end="0.14"><strong>Pick red part</strong><span>seconds</span></div>
<div class="action-segmentation__segment" data-action-segment data-start="0.14" data-end="0.32"><strong>Insert component</strong><span>seconds</span></div>
<div class="action-segmentation__segment" data-action-segment data-start="0.32" data-end="0.57"><strong>Assemble</strong><span>variable</span></div>
<div class="action-segmentation__segment" data-action-segment data-start="0.57" data-end="0.70"><strong>Pull lever</strong><span>seconds</span></div>
<div class="action-segmentation__segment" data-action-segment data-start="0.70" data-end="1"><strong>Wait for material</strong><span>minutes</span></div>
</div>
</div>

</div>
</div>

<span class="action-segmentation__status" data-action-status aria-live="polite">Ready to play illustrative action segmentation.</span>
</figure>

The model had to turn long, messy video into a timeline of actions: picking a part, inserting a component, waiting for material. Some lasted two seconds, others five minutes, with pauses, rework and improvisation mixed in. The hard part was telling normal human variation from a genuine deviation from the customer's standard procedure.

Video poured in from every customer, every day. I ran **large-scale pre-training** of cross-customer **vision-language foundation models**, then distilled them into **student models** small enough to run on-station. Production teams could see cycle times, waiting and bottlenecks continuously, instead of from occasional pen-and-paper time studies.

<div class="customers">
<span class="customers-label">Deployed with</span>
<span class="customers-logos">
<img src="/logos/customers/abb.png" alt="ABB" loading="lazy">
<img src="/logos/customers/bosch.png" alt="Bosch" loading="lazy">
<img src="/logos/customers/continental.png" alt="Continental" loading="lazy">
<img src="/logos/customers/thermofisher.png" alt="Thermo Fisher Scientific" loading="lazy">
<img src="/logos/customers/viessmann.png" alt="Viessmann" loading="lazy">
<img src="/logos/customers/siemens-energy.png" alt="Siemens Energy" loading="lazy">
</span>
</div>

> Almetra grew from seed stage to a [**$19M Series A**](https://www.almetra.ai/blog/series-a-announcement-19m) and 40 people during this period.

The same data showed which tasks were worth automating: the frequent, slow ones that block a line, not the ones a robot happens to be able to do.

<h2 class="act-head" id="manipulation">Almetra, part two: robots on the line</h2>

In January 2026 I became **Robotics Lead at [Almetra](https://www.almetra.ai/)** and built the robotics division from the ground up with the co-founder and CTO. Knowing which task to automate was the easy half. Getting a robot arm to do it on a real line, every shift, was the other half.

![Working on the Franka Research 3 Duo cell at Almetra](/img/franka-build.jpg)

<div class="autonomy-pathway autonomy-pathway--almetra" role="group" aria-labelledby="autonomy-pathway-title">
<div class="autonomy-pathway__header">
<div>
<span class="autonomy-pathway__kicker">Almetra · vision to robotics</span>
<h3 id="autonomy-pathway-title">From perception to physical action</h3>
</div>
<p class="autonomy-pathway__summary">Factory video showed which steps mattered. The robotics work started there.</p>
</div>
<ol class="autonomy-pathway__steps">
<li class="autonomy-pathway__step"><span class="autonomy-pathway__number">01</span><span class="autonomy-pathway__label">Perceive</span><span class="autonomy-pathway__detail">Capture continuous, camera-only video of human work across production stations.</span></li>
<li class="autonomy-pathway__step"><span class="autonomy-pathway__number">02</span><span class="autonomy-pathway__label">Understand</span><span class="autonomy-pathway__detail">Split messy video into work steps: what happened, when and for how long.</span></li>
<li class="autonomy-pathway__step"><span class="autonomy-pathway__number">03</span><span class="autonomy-pathway__label">Plan</span><span class="autonomy-pathway__detail">Prioritise valuable actions using unit economics, then turn selected demonstrations into robot skill plans.</span></li>
<li class="autonomy-pathway__step"><span class="autonomy-pathway__number">04</span><span class="autonomy-pathway__label">Act</span><span class="autonomy-pathway__detail">Execute on the Franka Research 3 Duo and UR16e, combining learned policies with classical control.</span></li>
</ol>
</div>

We went customer by customer: learning from human demonstrations, diffusion policies for contact-rich tasks, and classical control where predictability mattered. I led the **perception-to-action stack** and ran a customer pilot on a production line with a robot in the loop; the details are confidential.

Two programmes tested the work beyond our own lab, and I led the technical side of both. Through Google DeepMind's [**Gemini Robotics Accelerator**](https://deepmind.google/accelerators/robotics/), I worked with the Google DeepMind robotics team and ran the Gemini Robotics family on our hardware, from **Gemini Robotics-ER** for planning to an **on-device model** for lower-latency control.

![At the Google DeepMind Accelerator, alongside the Head of Robotics at Google DeepMind](/img/deepmind-accelerator.jpg)

Through the 2026 [**MassRobotics Physical AI Fellowship**](https://www.massrobotics.org/massrobotics-aws-and-nvidia-announce-second-cohort-of-physical-ai-fellowship/), I worked with the **AWS** and **NVIDIA** robotics teams. The programme took our work to Boston and the **Robotics Summit & Expo**.

<div class="photo-pair">
<img src="/img/boston-booth.jpg" alt="At our stand during the Physical AI Fellowship, Robotics Summit and Expo, Boston" loading="lazy">
<img src="/img/event-badges.jpg" alt="Event badges from MACHINA, Google DeepMind Startup Night and RAISE Summit" loading="lazy">
</div>

<h2 class="act-head" id="hive">Now: HIVE</h2>

A wheel loader in a quarry still needs a person in the cab, in the dust, and every machine is driven one at a time. [**HIVE**](https://hiveautonomy.no/) retrofits the machines customers already own, so they work under human supervision instead. They are already working in the field, in mines, quarries, ports and warehouses.

I joined in September 2026 to lead the learned-autonomy work: vision-language-action models, the data and training behind them, and one shared intelligence that learns from real work and carries across machines, sites and tasks. We are 40+ people across London, Norway and the US, and growing.

<h2 class="act-head" id="long-game">The long game</h2>

Ever since I was a kid, I have wondered whether we will become a species that lives beyond one planet. It genuinely bothered me that no one had [returned to the Moon since Apollo 17](https://www.nasa.gov/mission/apollo-17/). When NASA's [**Artemis programme**](https://www.nasa.gov/feature/artemis-/) set out to go back and stay, that old hope came back, and with it a question: who builds everything before the crews arrive?

<div class="photo-pair space-conference-photos">
<img src="/img/space-conference/ukseds-2024-badge.jpg" alt="UKSEDS National Student Space Conference 2024 programme and Mayur Hulke attendee badge" width="865" height="1080" loading="lazy" decoding="async">
<img src="/img/space-conference/ukseds-2024-auditorium.jpg" alt="Audience inside the University of Bristol auditorium during the UKSEDS National Student Space Conference 2024" width="868" height="1080" loading="lazy" decoding="async">
</div>

At the 2024 UKSEDS conference, I met astronaut [Dan Tani](https://www.instagram.com/reel/C4Ct7syClsj/?igsi=MWp4N3pubnR6eDh5bg==) and heard him talk about how hard working in space already is. I do not expect crews in pressure suits to do the heavy construction as well.

<div class="instagram-reel-embed" aria-label="Instagram Reel of astronaut Dan Tani speaking at the 2024 UKSEDS National Student Space Conference">
<blockquote class="instagram-media" data-instgrm-permalink="https://www.instagram.com/reel/C4Ct7syClsj/?utm_source=ig_embed&amp;utm_campaign=loading" data-instgrm-version="14">
<a href="https://www.instagram.com/reel/C4Ct7syClsj/">Watch Dan Tani speak at the UKSEDS conference on Instagram</a>
</blockquote>
</div>

Someone, or more likely some machine, will have to prepare landing areas, move regolith, build roads and berms, assemble habitats and fix things when they break, mostly while no crew is around. NASA's [Moon to Mars Architecture](https://www.nasa.gov/moontomarsarchitecture/) and [lunar-surface technology programme](https://www.nasa.gov/lunar-surface-technology/) already include robotic excavation, regolith transport and autonomous construction, and [ESA has studied lunar construction](https://www.esa.int/Enabling_Support/Preparing_for_the_Future/Discovery_and_Preparation/3D_printing_our_way_to_the_Moon) with local material.

HIVE's own line is *built for the moon, proven on Earth*. The wheel loaders and haulers I work on now are the same kind of machine that would do that job.

I would love to spend my career on that puzzle and, one day, help build the machines that prepare the first infrastructure before people arrive on the Moon. It is a very long game, but honestly, that is part of the fun.

<h2 class="act-head" id="outside">Outside robotics</h2>

I've been a student-athlete my whole life, and I really enjoy swimming.

<div class="outside-story">
<figure class="outside-story__swim">
<img src="/img/swimming-lane.jpg" alt="Swimming breaststroke down a competition lane" loading="lazy">
</figure>
<div class="outside-story__side">
<div class="outside-story__notes">
<p>I started competing at <strong>eight</strong> and continued through school, my Bachelor's and Master's, representing my universities and winning <strong>five national championships</strong>. I only recently retired.</p>
<p>I also completed <strong>10, 15, 20 and 30 km</strong> sea swims off the English coast and in the Indian Ocean, and at 12 I swam <strong>47 km</strong> across the Indian Ocean.</p>
<p>These days, I mostly swim in open water and scuba dive. Diving has sparked a real interest in deep-ocean exploration. I am PADI certified to <strong>30 m</strong> and working towards Divemaster. When I am not in the water, I shoot and edit short films.</p>
<p>And one that surprises people: I have never had a fizzy drink in my life. Not one.</p>
</div>
<div class="outside-story__dives">
<img src="/img/diving-night.jpg" alt="Night dive with a group, torches lighting the reef" loading="lazy">
<img src="/img/diving-cave.jpg" alt="Surfacing inside a sea cave with fellow divers" loading="lazy">
</div>
</div>
</div>

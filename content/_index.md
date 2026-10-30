---
kicker: "Mayur Hulke · Robotics & autonomy engineer"
tagline: "From a robot that works once to robots that work every day. 🤖"
hero_sub: "Perception, manipulation and autonomy for factories and heavy machines: deployed with customers, not just demoed."
description: "Mayur Hulke is a robotics and autonomy engineer working across perception, manipulation and heavy-machine autonomy."
---

<h2 class="systems-eyebrow">So far, I've deployed</h2>

<div class="systems-featured">
<div class="system-card">
<h3 class="system-name"><span aria-hidden="true">🦾</span> Industrial robotic manipulation</h3>
<span class="system-attr">Built & led · Almetra Robotics</span>
<p>A perception-to-action stack for industrial manipulation across Franka Research 3 Duo and Universal Robots arms, learning from human demonstrations and robot-interaction data while combining diffusion policies with classical control for contact-rich tasks.</p>
<span class="system-stat">Completed customer pilot · Franka Research 3 Duo · Universal Robots</span>
</div>
</div>

<div class="systems-grid">
<div class="system-card">
<h3 class="system-name"><span aria-hidden="true">🏭</span> Factory-scale action segmentation</h3>
<span class="system-attr">Pre-trained & distilled · Almetra</span>
<p>I pre-trained vision-language foundation models for spatio-temporal action segmentation, then distilled them into compact student models that run on-station.</p>
<span class="system-stat">10,000 video-hours/day captured, processed and stored · Hundreds of stations · 60+ factory sites</span>
</div>
<div class="system-card">
<h3 class="system-name"><span aria-hidden="true">🛣️</span> Non-intrusive roadside perception</h3>
<span class="system-attr">Built & deployed · Q-Free</span>
<p>An offline, camera-based edge system that recovered traffic counts, vehicle classes, speeds and flow across multiple lanes and changing weather.</p>
<span class="system-stat">99.7% detection accuracy · 93.5% mAP · 65+ FPS · 10 units deployed across the UK and US</span>
</div>
<div class="system-card">
<h3 class="system-name"><span aria-hidden="true">🚗</span> 3D vehicle perception & inspection</h3>
<span class="system-attr">Built & deployed · BCA</span>
<p>A production vision stack for remote vehicle buying: scene transformation, reflection handling, 360° capture, multi-view 3D reconstruction and fine-grained cosmetic-damage detection.</p>
<span class="system-stat">Inspection time: ~4 hours → under 90 minutes · Production complaint rate: 1.3%</span>
</div>
<div class="system-card">
<h3 class="system-name"><span aria-hidden="true">🦿</span> Adaptive powered bionic leg</h3>
<span class="system-attr">Founded & led · Chisel Robotics</span>
<p>A fully actuated lower-limb prosthesis using multimodal sensing and machine learning to personalise gait and adapt to changes in the user and walking surface.</p>
<span class="system-stat">Under 50 ms closed-loop feedback · 4 NHS trials · Performance legs for a Rio Paralympic gold medallist <span aria-hidden="true">🥇</span></span>
</div>
</div>

<h2 class="act-head" id="origins">Beginnings <span aria-hidden="true">🛠️</span></h2>

![Baymax hugging Hiro in Big Hero 6](/img/baymax-hug.webp)

I got into robotics mainly through movies and books: *I, Robot*, *Big Hero 6*, Andy Weir's *Project Hail Mary* and, especially, Isaac Asimov's robot stories.

I started building robots after school, just as a hobby. Once I began entering competitions, it became the thing I wanted to keep doing: **30+ wins** 🏆, including national-level events, across RoboWar, Robo Soccer, Maze Solver, Call of Duty, coding championships and mechatronics design.

<div class="photo-grid">
<img src="/img/robots/robot-1.jpg" alt="Cutting the chassis, sparks flying" title="Cutting the chassis, sparks flying" loading="lazy">
<img src="/img/robots/robot-2.jpg" alt="The finished machine, flipper arm up" title="The finished machine, flipper arm up" loading="lazy">
<img src="/img/robots/robot-3.jpg" alt="Pneumatics and wiring going in" title="Pneumatics and wiring going in" loading="lazy">
<img src="/img/robots/robot-4.jpg" alt="Gear reduction on the drive motor" title="Gear reduction on the drive motor" loading="lazy">
<img src="/img/robots/robot-5.jpg" alt="Drive train laid out on the base plate" title="Drive train laid out on the base plate" loading="lazy">
<img src="/img/robots/robot-6.jpg" alt="Mid-build, in the workshop" title="Mid-build, in the workshop" loading="lazy">
</div>

The way I saw it, a robot was three things stacked together: mechanics, electronics and code. There was no robotics degree available to me, so I assembled an informal one. I learned code through free online courses, mechanics through books and a summer spent fixing cars and bikes with local garage owners, and electronics through the university lab attached to my degree in electronics and communications.

To take that interest further, I moved to the UK.

<h2 class="act-head" id="chisel">Founding Chisel Robotics <span aria-hidden="true">🦿</span></h2>

![With the intelligent bionic leg prototype](/img/mayur-leg.jpg)

I studied **Advanced Robotics & Artificial Intelligence** at the **University of Bristol** and spent several years at the [**Bristol Robotics Laboratory**](https://www.bristolroboticslab.com/), focusing on AI and robot learning.

It started as a dorm-room project: an intelligent bionic leg for people who had lost a limb through war, accidents or other physical trauma. It became my MSc thesis, drew more interest than I expected and eventually became a company.

> **The person should not continually adapt to a static machine. The machine should learn to adapt to the person.**

The leg was fully actuated. Its control stack combined multimodal sensor data, machine learning and real-time feedback to personalise gait and adjust assistance to the surface underfoot. Human bodies do not remain fixed. Weight, strength and gait can change, so the goal was an adaptive system that could keep learning from the person wearing it.

The NHS trials were both evaluation and data collection. They helped us study how the user, machine and environment changed together, and gave the adaptive controller real-world data rather than only laboratory assumptions.

The ambition was to make this capability more accessible than premium powered systems, not simply to build a sophisticated prototype.

I founded **Chisel Robotics** and led its development for five years, backed by **Innovate UK** and grown out of **NHS** research partnerships.

Along the way, the work received a **Young Innovators Award**, one of 23 given across the UK, and a place on [**SETsquared's Breakthrough Bursary**](https://setsquared-bristol.co.uk/news/setsquared-bristol-welcomes-three-breakthrough-bursary-businesses-into-its-world-class-incubation-programme/).

<h2 class="act-head" id="perception">Production perception</h2>

While Chisel continued, my day-to-day engineering work moved from medical robotics into production perception.

At the **Bristol Robotics Laboratory**, I had worked on object recognition and **SLAM**-based navigation for the **TIAGo** robot in the European Robotics League. The next roles put similar ideas under commercial constraints, where errors carried operational cost.

Q-Free hired me while I was still at university to explore a non-intrusive alternative to conventional traffic monitoring. Traditional classification sites often use [**piezoelectric axle sensors and inductive loops**](https://www.fhwa.dot.gov/policyinformation/tmguide/tmg_2022/traffic-data-collection.cfm) cut into the pavement. They are mature and accurate, but installing or maintaining them requires roadworks and lane closures.

The question was whether a camera and roughly **£1,000 of edge hardware** could recover the useful traffic information without digging into the road. I built an offline roadside pipeline for vehicle detection, classification, tracking, lane localisation, speed estimation and traffic-flow analysis, running locally on **NVIDIA Jetson Nano and Xavier** rather than depending on a data centre.

One camera had to cover two, four or eight lanes and continue working through rain, cloud, glare and changing light. The resulting system was deployed in the **UK and US**. For me, it was an early lesson in a core autonomy constraint: perception has to work locally, continuously and affordably in an uncontrolled physical environment.

During COVID, [**BCA moved its vehicle sales online**](https://www.bca.co.uk/news/latest-update-from-bca-ragrding-covid-19-20200408/). Buyers could no longer rely on walking around a car before making a decision, so each vehicle's digital representation had to carry much more of the trust once created in person.

I worked on the production vision behind that experience, processing **millions of vehicle images**. The work included scene understanding and generative image transformation: standardising or replacing backgrounds and ground planes, handling difficult reflections, and producing consistent exterior views. For more immersive inspection, I explored interior **360° capture** and multi-view **3D reconstruction** using photogrammetry, **NeRFs** and **3D Gaussian splatting**.

The same stack also had to understand vehicle condition. Models detected and segmented fine cosmetic damage across exterior bodywork and interior surfaces, including seats and steering wheels, reducing inspection work that had previously taken hours. I also used text-to-image diffusion to generate rare training cases, with the production systems running on **AWS**.

Although the application was vehicle retail, the work developed a capability robotics depends on: turning incomplete, reflective and inconsistent visual observations into a structured, trustworthy representation of a physical asset. Before a machine can plan or act, it has to understand what is actually in front of it.

<h2 class="act-head">Factory-scale perception</h2>

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

My Q-Free and BCA work had largely used task-specific perception models. Almetra had a similar starting point: train a separate **YOLO model for each production station**. That works for one camera and one task. It is not sustainable when a single customer can have hundreds of stations, each with different products, tools, layouts and workflows.

Almetra hired me as a 📷 **Staff Computer Vision Engineer** to explore a different question.

> **Could a foundation model take raw production video and return a structured timeline of the work?**

The output needed to be more than objects detected frame by frame. It had to identify actions such as picking up a red part, inserting a component, pulling a lever, assembling a sub-part or waiting for material, then mark when each action began and ended. Some actions lasted two seconds. Others continued for one, two or five minutes.

This was **spatio-temporal action segmentation** on long, untrimmed video. A person might perform 10, 20 or 50 actions to complete one product, mixed with pauses, occlusion, rework and movements unrelated to the task. The model had to understand both the individual actions and how they formed a complete workflow.

A model does not inherently know a customer's **standard operating procedure**, or whether a step adds value to the product. Those meanings had to be grounded in process documentation, station context, production outcomes and a customer-specific action vocabulary. Human work is not performed like a script: operators pause, reach for tools differently, repeat steps, improvise, correct mistakes and develop personal habits. The difficult part was separating acceptable variation from rework, waiting, activity unrelated to the task and genuine SOP deviation, without forcing every unfamiliar motion into the nearest known action.

Across customer deployments, **10,000 hours of video were captured, processed and stored every day**. I ran **large-scale pre-training** to build cross-customer **vision-language foundation models**, then used them as teachers for models tailored to individual deployments.

I distilled those teachers into compact **student models** small enough to run on-station. Their action timelines made cycle times, waiting, rework and bottlenecks measurable. Instead of relying only on occasional pen-and-paper time studies, production teams could examine work continuously across many lines and use that evidence to improve individual stations.

The same data helped identify which actions were worth automating. Frequency, cycle time and bottleneck cost provided a better starting point than choosing tasks simply because a robot could perform them.

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

> Almetra grew from seed stage to a [**$19M Series A**](https://www.almetra.ai/blog/series-a-announcement-19m) during this period. The perception work helped scale the product and contributed to that growth. It also created the data and operational understanding for a robotics programme.

<h2 class="act-head" id="manipulation">From perception to action</h2>

![Working on the Franka Research 3 Duo cell at Almetra](/img/franka-build.jpg)

Building on that foundation, I moved into the **Robotics Lead role at [Almetra](https://www.almetra.ai/)** in January 2026. I was given the opportunity to build the robotics division from the ground up alongside Almetra's co-founder and CTO, drawing on what I had learned at Chisel Robotics.

I led work on the **perception-to-action stack**, running pilots on production lines with a robot in the loop. We completed one customer pilot; the work remains confidential.

<div class="autonomy-pathway autonomy-pathway--almetra" role="group" aria-labelledby="autonomy-pathway-title">
<div class="autonomy-pathway__header">
<div>
<span class="autonomy-pathway__kicker">Almetra · vision to robotics</span>
<h3 id="autonomy-pathway-title">From perception to physical action</h3>
</div>
<p class="autonomy-pathway__summary">Factory perception showed which work steps mattered operationally. The robotics programme used that evidence to choose where demonstration learning and robot control might create real value.</p>
</div>
<ol class="autonomy-pathway__steps">
<li class="autonomy-pathway__step"><span class="autonomy-pathway__number">01</span><span class="autonomy-pathway__label">Perceive</span><span class="autonomy-pathway__detail">Capture continuous, camera-only video of human work across production stations.</span></li>
<li class="autonomy-pathway__step"><span class="autonomy-pathway__number">02</span><span class="autonomy-pathway__label">Understand</span><span class="autonomy-pathway__detail">Temporally segment messy video into semantic work-step tokens: what happened, when and for how long.</span></li>
<li class="autonomy-pathway__step"><span class="autonomy-pathway__number">03</span><span class="autonomy-pathway__label">Plan</span><span class="autonomy-pathway__detail">Prioritise valuable actions using unit economics, then turn selected demonstrations into robot skill plans.</span></li>
<li class="autonomy-pathway__step"><span class="autonomy-pathway__number">04</span><span class="autonomy-pathway__label">Act</span><span class="autonomy-pathway__detail">Execute on the Franka Research 3 Duo and UR16e, combining learned policies with classical control.</span></li>
</ol>
</div>

General-purpose robotics is still a long way off, so I worked customer by customer: learning from human demonstrations, using diffusion policies for contact-rich tasks and retaining classical control where predictability mattered. The useful systems usually combined learning with structure and safety.

After years of research and prototypes, I am less interested in whether a robot can perform a task once and more interested in what lets it repeat that task across customers, hardware, operators, edge cases and months of production. Manufacturing makes the question concrete: a system either improves the work enough to justify its cost, or it does not.

<p class="pullquote">What does it take for robotics to work at scale?</p>

That gap, from a one-off result to a dependable deployment, is the problem I am most curious about.

<h2 class="act-head">Selected accelerator programmes</h2>

Two accelerator programmes helped us test the work beyond our own lab. As Robotics Lead at Almetra, I led the technical collaboration across both programmes.

Through Google DeepMind's [**Gemini Robotics Accelerator**](https://deepmind.google/accelerators/robotics/), I collaborated with the Google DeepMind robotics team and ran the Gemini Robotics family on our hardware, from **Gemini Robotics-ER** for planning to an **on-device model** for lower-latency control.

![At the Google DeepMind Accelerator, alongside the Head of Robotics at Google DeepMind](/img/deepmind-accelerator.jpg)

Through the 2026 [**MassRobotics Physical AI Fellowship**](https://www.massrobotics.org/massrobotics-aws-and-nvidia-announce-second-cohort-of-physical-ai-fellowship/), I worked with the **AWS** and **NVIDIA** robotics teams. The programme took our work to Boston and the **Robotics Summit & Expo**.

<div class="photo-pair">
<img src="/img/boston-booth.jpg" alt="At our stand during the Physical AI Fellowship, Robotics Summit and Expo, Boston" loading="lazy">
<img src="/img/event-badges.jpg" alt="Event badges from MACHINA, Google DeepMind Startup Night and RAISE Summit" loading="lazy">
</div>

<h2 class="act-head" id="long-game">The long game <span aria-hidden="true">🌕</span></h2>

This is the bit where I tend to nerd out.

Ever since I was a kid, I have been fascinated by whether we will ever become a species that lives beyond one planet. We had already reached the Moon, and it genuinely bothered me that no one had [returned to the surface since Apollo 17](https://www.nasa.gov/mission/apollo-17/). Blame the films and books, but I always hoped we would.

When I first heard about NASA's [**Artemis programme**](https://www.nasa.gov/feature/artemis-/), that old hope came back. The goal of returning astronauts to the Moon and working towards a long-term presence made the whole thing feel possible again. One way or another, I truly believe we will get back out there.

And if we are going back, the question that keeps pulling me towards robotics is: who builds everything before the crews arrive?

<div class="photo-pair space-conference-photos">
<img src="/img/space-conference/ukseds-2024-badge.jpg" alt="UKSEDS National Student Space Conference 2024 programme and Mayur Hulke attendee badge" width="865" height="1080" loading="lazy" decoding="async">
<img src="/img/space-conference/ukseds-2024-auditorium.jpg" alt="Audience inside the University of Bristol auditorium during the UKSEDS National Student Space Conference 2024" width="868" height="1080" loading="lazy" decoding="async">
</div>

At that conference, I had the chance to meet a real-life astronaut, [Dan Tani](https://www.instagram.com/reel/C4Ct7syClsj/?igsi=MWp4N3pubnR6eDh5bg==), and hear him talk about what it takes to become an astronaut and the challenges of working in space. Being an astronaut is hard enough already. I do not expect crews in pressure suits to spend their limited time doing every part of the heavy construction as well.

<div class="instagram-reel-embed" aria-label="Instagram Reel of astronaut Dan Tani speaking at the 2024 UKSEDS National Student Space Conference">
<blockquote class="instagram-media" data-instgrm-permalink="https://www.instagram.com/reel/C4Ct7syClsj/?utm_source=ig_embed&amp;utm_campaign=loading" data-instgrm-version="14">
<a href="https://www.instagram.com/reel/C4Ct7syClsj/">Watch Dan Tani speak at the UKSEDS conference on Instagram</a>
</blockquote>
</div>

Someone, or more likely some machine, will have to prepare landing areas, move regolith, build roads and protective berms, assemble habitats, connect power and communications, and fix things when they break. I suspect a lot of it will be done by excavators, haulers, mobile robots and robotic arms that can keep working when no crew is around.

It sounds a little like science fiction, but these are already serious engineering problems. NASA's [Moon to Mars Architecture](https://www.nasa.gov/moontomarsarchitecture-components/) includes autonomous systems designed to assist crews and operate during uncrewed periods. Its [lunar-technology programme](https://www.nasa.gov/lunar-surface-technology/) includes robotic excavation, regolith transport, structural assembly and autonomous construction. [ESA has also studied lunar construction](https://www.esa.int/Enabling_Support/Preparing_for_the_Future/Discovery_and_Preparation/3D_printing_our_way_to_the_Moon) using 3D printing and material found on the lunar surface.

I wish I could say I was building interplanetary robots today. Unfortunately, we are still a long way from that. For now, the useful problems in front of us are the best testbeds we have. I am working on the practical building blocks those future machines may eventually need: perception, manipulation and autonomy that still work when the environment gets messy.

That is why I am drawn to real-world robotics, whether it is a factory system, an industrial arm or a heavy-duty mobile machine. Production perception asks whether a machine can understand what people and equipment are doing. Industrial manipulation asks whether a robotic arm can grasp, assemble and recover when things do not go perfectly. Heavy-machine autonomy asks whether a vehicle can move, excavate and transport material through a large, unstructured site.

These problems matter now. They come with real customers, measurable economics and immediate consequences when something fails. They are also a pretty good place to learn what dependable autonomy actually takes.

Motorways, vehicle inspection, factory video, industrial robot arms and heavy machinery can look like a slightly random career from the outside. In my head, they have always been versions of the same puzzle: how do you help a machine understand the physical world, make a useful decision and then do something reliably?

I would love to spend my career getting better at that puzzle and, one day, help build the machines that prepare the first bits of infrastructure before people arrive on the Moon. It is a very long game, but honestly, that is part of the fun.

<h2 class="act-head">Outside robotics <span aria-hidden="true">🌊</span></h2>

I've been a student-athlete my whole life, and I really enjoy swimming.

<div class="outside-story">
<figure class="outside-story__swim">
<img src="/img/swimming-lane.jpg" alt="Swimming breaststroke down a competition lane" loading="lazy">
</figure>
<div class="outside-story__side">
<div class="outside-story__notes">
<p>I started competing at <strong>eight</strong> and continued through school, my Bachelor's and Master's, representing my universities and winning multiple championships.</p>
<p>I also completed <strong>10, 15, 20 and 30 km</strong> sea swims in the Indian Ocean and off the English coast.</p>
<p>These days, I mostly swim in open water and scuba dive. Diving has also sparked a real interest in deep-ocean exploration. I am PADI certified to <strong>30 m</strong> and working towards professional diving qualifications.</p>
</div>
<div class="outside-story__dives">
<img src="/img/diving-night.jpg" alt="Night dive with a group, torches lighting the reef" loading="lazy">
<img src="/img/diving-cave.jpg" alt="Surfacing inside a sea cave with fellow divers" loading="lazy">
</div>
</div>
</div>

---
kicker: "Hi, I'm Mayur 👋"
tagline: "Building the physical-intelligence layer for robots. 🤖"
---

<span class="act-head">Beginnings</span>

![Hiro and Tadashi from Big Hero 6](/img/big-hero-six.gif)

My love for robots came from stories, films and books all mixed together. *I, Robot*, *Big Hero 6*, Andy Weir's *Project Hail Mary*, and Isaac Asimov's robot collection, which I worked my way through. Asimov shaped how I think about machines more than any film has.

At some point I stopped just watching robots on screen and started trying to build them. I got into robotics competitions pretty early and ended up winning **30+ of them at national level** 🏆. That was probably the moment I realised I'd spend my life around robots somehow.

<span class="act-head">Founding</span>

![With the intelligent bionic leg prototype](/img/mayur-leg.jpg)

I studied **Advanced Robotics & Artificial Intelligence** at the **University of Bristol** and spent years at the [**Bristol Robotics Laboratory**](https://www.bristolroboticslab.com/), one of the biggest robotics labs in the UK. What I wanted to build was the best intelligent bionic leg I could, for people who had lost a leg to war, to accidents, or to any other physical trauma.

Then it turned into a company. I founded **Chisel Robotics** and ran it for five years, building an **intelligent bionic leg** for people with lower-limb amputation: a socket that understands fit, gait and movement in real time, with feedback under **50 ms**. We validated it across **four NHS trials** and built performance legs for Paralympic athletes, including a **Rio Paralympic gold medallist** 🥇. It was backed by **Innovate UK**, grew out of **NHS** research partnerships, and won a place at **SETsquared**.

That changed how I thought about robotics. The best robots don't always look like sci-fi. Sometimes they just help someone get a piece of their life back.

<span class="act-head">Production</span>

Long before manufacturing, I was training and deploying computer vision at scale in places where a wrong prediction costs real money. Each time it was a different family of models.

At **Q-Free** I built the perception for smart motorways: **detection, classification and multi-object tracking** of vehicles across four, six and eight-lane roads in the UK and the US, optimised to run on **NVIDIA Jetson and Xavier** at the roadside rather than in a data centre. On Xavier that held at **99.7% detection accuracy**, **93.5% mAP** and **65+ FPS**, deployed across ten roadside units.

At **BCA** I led vision for automated vehicle inspection: **damage detection**, interior classification, **segmentation and depth-based post-processing**, and a **text-to-image diffusion** pipeline that synthesised the rare damage cases real data never covered. I designed the **AWS** infrastructure that ran it in production, which cut inspection from roughly four hours to **under 90 minutes** per car and contributed to a **1.3% complaint rate**.

Demos are easy. Systems that run every day, on real hardware, in bad weather, with nobody watching, are not. By the time I reached manufacturing I had shipped detection, tracking, segmentation and generative models into production. What came next was a genuinely different modelling problem, but the discipline of making a model survive contact with a real site was the same, and that part takes the longest to learn.

<span class="act-head">Perception</span>

<figure class="act-video">
<video autoplay loop muted playsinline preload="metadata" poster="/media/series-a-poster.jpg" aria-label="Almetra raises its Series A">
<source src="/media/series-a.webm" type="video/webm">
<source src="/media/series-a.mp4" type="video/mp4">
</video>
</figure>

Perception has been the constant since the **TIAGo** robot at the **Bristol Robotics Laboratory**, where I wrote the object recognition and ran **SLAM**-based navigation for the European Robotics League. Manufacturing asked a harder question of it. Detection tells you what is in a frame; understanding a production line means knowing what a person is *doing*, and for how long.

I joined **Almetra** (previously Deltia) as a **Staff Computer Vision Engineer** and took it to production scale. I trained **action recognition** models and a **7B vision-language model** for **spatio-temporal action segmentation**: show it a video and it breaks the work down action by action, over short and long time horizons.

The harder part was making that hold up at scale. I ran **large-scale pre-training** on real production video to build a cross-customer foundation model, then **distilled** the teacher into compact **student models** small enough to run on-station. Those VLMs went into production across **hundreds of stations** and **60+ factory sites** for **ABB**, **Bosch**, **Continental**, **Thermo Fisher**, **Viessmann Climate Solutions**, **Grundfos** and **Siemens Energy**, helping teams see patterns on the factory floor that were previously invisible.

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

That work helped carry Almetra from **seed stage through to its $19M Series A**, and it became the foundation the robotics programme grew out of.

<span class="act-head">Physical AI</span>

<div class="photo-row photo-row--mixed">
<img src="/img/franka-lab.jpg" alt="Our Franka Research 3 Duo and Universal Robots cell at Almetra" loading="lazy">
<img src="/img/franka-build.jpg" alt="Working on the Franka Research 3 Duo cell" loading="lazy">
</div>

In January 2026 I was promoted to **Robotics Lead at [Almetra](https://www.almetra.ai/)** to build the robotics division from the ground up alongside our Co-founder & CTO. In practice it is a startup inside the startup: setting the research direction, choosing the stack, building the team and owning delivery. It is close to the job a founder does, on the robotics side of the company. I had done a version of it before at Chisel Robotics, which helps more than I expected.

What I architect is the **perception-to-action stack**, turning that understanding of real manufacturing work into policies that can plan and execute physical tasks.

Two programmes took that work further. Google DeepMind selected **15 early-stage companies from 10 European countries** for the inaugural cohort of its [**Gemini Robotics Accelerator**](https://deepmind.google/accelerators/robotics/), running June to September 2026. **MassRobotics** took **9 startups** into the 2026 [**Physical AI Fellowship**](https://www.massrobotics.org/massrobotics-aws-and-nvidia-announce-second-cohort-of-physical-ai-fellowship/) with **AWS** and **NVIDIA**. I lead the technical work on both.

Through the accelerator I have had the chance to run the **Gemini Robotics** family on our own hardware: **Gemini Robotics-ER** for embodied reasoning and planning, the **vision-language-action** model for control, and the **on-device** model for the cases where latency or a dropped network makes a round trip to the cloud unsafe.

![At the Google DeepMind Accelerator, alongside the Head of Robotics at Google DeepMind](/img/deepmind-accelerator.jpg)

Working directly with the robotics teams at **Google DeepMind**, **AWS**, **NVIDIA** and **MassRobotics** was never about the badge. The point was getting pilots onto real production lines, at customers I already knew from the vision side: same sites, same processes, same people on the floor, now with a robot in the loop. One of those pilots has now run through to completion, with a customer I am not able to name.

The MassRobotics side [took me to **Boston**](https://www.linkedin.com/posts/mayurhulke_hosting-the-second-cohort-of-the-physical-activity-7467688506698473472-Uk7T), touring the incubator and representing the company at the **Robotics Summit & Expo**.

<div class="photo-pair">
<img src="/img/boston-booth.jpg" alt="At our stand during the Physical AI Fellowship, Robotics Summit and Expo, Boston" loading="lazy">
<img src="/img/event-badges.jpg" alt="Event badges from MACHINA, Google DeepMind Startup Night and RAISE Summit" loading="lazy">
</div>

The work itself is robot learning, and it is still the part that feels magical: watching a robot acquire a behaviour instead of being told every step.

None of it is settled, though. General-purpose robotics is a long way off, and no single model solves every line, so I work customer by customer and test what survives contact with their process. That means pulling from frontier labs and open source alike: **manipulation policies** trained on **human demonstrations** and interaction data, **diffusion policies** for contact-rich tasks, **vision-language-action models**, **world action models**, and classical control like **high-frequency impedance control** where physics demands a guarantee rather than a learned guess. Every site has a different process and a different tolerance for failure, and most of them need handholding to get there. So far the honest answer is that the best systems sit in the middle. Robots need learning, but they also need structure, safety, feedback, and respect for physics.

I chose manufacturing because the economics are legible. A line has a known cost per hour and a known cycle time, so a robot either pays for itself in the customer's own numbers or it does not. No market forecast required, which is a rare luxury in robotics and the reason I would rather prove this on a production line than in a demo video.

A demo proves a robot can do a thing once, on a good day, with someone watching. Production means it runs for months on a line that does not stop for a dropped frame or a slow policy. That recipe has not been written yet, and closing that gap is the work I care about.

<p class="pullquote">What actually works at scale?</p>

If it does not hold at scale, it does not matter. That is why I do this on real production lines rather than in a lab.

## Fun facts

I've been a student athlete my whole life. If I'm not building robots, I'm in the water.

<div class="beat beat--left beat--photo">
<div class="beat-art"><img src="/img/swimming-lane.jpg" alt="Swimming breaststroke down a competition lane" loading="lazy"></div>
<div class="beat-text">
<ul class="funfacts">
<li>Started competing at <strong>eight</strong>, and somehow won a gold that first year 🥇.</li>
<li>Kept at it until I finished my Masters, picking up a few more along the way, then retired.</li>
<li>Swam for my university at <strong>national level</strong> a handful of times.</li>
<li>Long sea swims of <strong>10, 15, 20 and 30 km</strong> 🏊, in the Indian Ocean and off England.</li>
<li>These days it's open water swimming 🌊 and scuba 🤿, and I'm working toward the professional side of diving.</li>
<li>PADI certified to <strong>30 m</strong>: Open Water, Advanced Open Water, and deep and technical diving.</li>
</ul>
</div>
</div>

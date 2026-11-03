---
kicker: "Mayur Hulke · Staff Autonomy Engineer at HIVE"
tagline: "One brain. Every machine. 🤖"
hero_sub: "Teaching heavy machines to learn from real work, at HIVE."
description: "Mayur Hulke is a robotics and autonomy engineer working across perception, manipulation and heavy-machine autonomy."
---

<figure class="robot-network" data-robot-network aria-label="The machines I work on at HIVE, from a humanoid and robot arms to forklifts and wheel loaders, all linked to one shared intelligence">
<svg viewBox="-10 0 720 396" aria-hidden="true">
<path id="rn-l0" class="rn-link" d="M350 182C350 141 200 141 200 100"/><path id="rn-l1" class="rn-link" d="M350 182C350 141 350 141 350 100"/><path id="rn-l2" class="rn-link" d="M350 182C350 141 500 141 500 100"/><path id="rn-l3" class="rn-link" d="M350 218C350 252 125 252 125 286"/><path id="rn-l4" class="rn-link" d="M350 218C350 252 275 252 275 286"/><path id="rn-l5" class="rn-link" d="M350 218C350 252 425 252 425 286"/><path id="rn-l6" class="rn-link" d="M350 218C350 252 575 252 575 286"/>
<polygon class="rn-hub" points="365.6,209.0 350.0,218.0 334.4,209.0 334.4,191.0 350.0,182.0 365.6,191.0"/><polygon class="rn-hub-core" points="356.9,204.0 350.0,208.0 343.1,204.0 343.1,196.0 350.0,192.0 356.9,196.0"/>
<g class="rn-bot" data-link="rn-l0" transform="translate(160 18)"><circle cx="40" cy="9" r="6"/><rect x="32" y="18" width="16" height="24" rx="3"/><path d="M32 22L24 40M48 22L56 40M36 42L34 72M44 42L46 72M30 74H37M43 74H50"/></g><text class="rn-label" x="200" y="12" text-anchor="middle">Humanoid</text><g class="rn-bot" data-link="rn-l1" transform="translate(310 18)"><rect x="24" y="60" width="32" height="14" rx="2"/><rect x="38" y="40" width="4" height="20"/><path d="M40 42L22 32L12 44L15 54M40 42L58 32L68 44L65 54"/><circle cx="22" cy="32" r="3"/><circle cx="58" cy="32" r="3"/></g><text class="rn-label" x="350" y="12" text-anchor="middle">Franka Duo</text><g class="rn-bot" data-link="rn-l2" transform="translate(460 18)"><rect x="16" y="66" width="28" height="8" rx="1"/><circle cx="30" cy="60" r="5"/><path d="M30 55V36"/><circle cx="30" cy="32" r="4"/><path d="M33 30L55 22"/><circle cx="58" cy="21" r="3"/><path d="M58 24v8M55 32h6"/></g><text class="rn-label" x="500" y="12" text-anchor="middle">UR arm</text><g class="rn-bot" data-link="rn-l3" transform="translate(85 290)"><path d="M14 18L24 56M10 18h8"/><rect x="20" y="56" width="14" height="12" rx="1"/><path d="M34 64H72V69H34"/><circle cx="26" cy="72" r="4"/><circle cx="68" cy="72" r="2.5"/></g><text class="rn-label" x="125" y="386" text-anchor="middle">Pallet jack</text><g class="rn-bot" data-link="rn-l4" transform="translate(235 290)"><rect x="30" y="42" width="30" height="22" rx="2"/><path d="M34 42V20H56V42M24 12V68M24 64H8"/><rect x="6" y="56" width="16" height="5"/><circle cx="38" cy="68" r="6"/><circle cx="56" cy="68" r="6"/></g><text class="rn-label" x="275" y="386" text-anchor="middle">Forklift</text><g class="rn-bot" data-link="rn-l5" transform="translate(385 290)"><rect x="26" y="44" width="42" height="16" rx="3"/><rect x="46" y="24" width="18" height="20" rx="2"/><path d="M50 29h10v8H50Z"/><circle cx="36" cy="66" r="9"/><circle cx="62" cy="66" r="9"/><path d="M27 48L12 52"/><path d="M2 46Q2 62 16 62V48Z"/></g><text class="rn-label" x="425" y="386" text-anchor="middle">Wheel loader</text><g class="rn-bot" data-link="rn-l6" transform="translate(535 290)"><rect x="24" y="40" width="50" height="18" rx="3"/><rect x="48" y="16" width="20" height="24" rx="2"/><path d="M52 21h12v9H52Z"/><path d="M74 46h6v10"/><circle cx="36" cy="64" r="13"/><circle cx="36" cy="64" r="5"/><circle cx="66" cy="64" r="13"/><circle cx="66" cy="64" r="5"/><path d="M26 44L10 50M26 52L12 54"/><path d="M-6 40Q-6 62 12 62V44Z"/></g><text class="rn-label" x="575" y="386" text-anchor="middle">Big loader</text>
<g class="rn-sparks"></g>
</svg>
<figcaption class="rn-caption">What one machine learns, every machine knows.</figcaption>
</figure>
<script>
(() => {
  const fig = document.querySelector("[data-robot-network]");
  if (!fig || matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  const NS = "http://www.w3.org/2000/svg";
  const svg = fig.querySelector("svg"), sparks = fig.querySelector(".rn-sparks"), hub = fig.querySelector(".rn-hub");
  const bots = [...fig.querySelectorAll(".rn-bot")].map((g) => ({ g, path: fig.querySelector("#" + g.dataset.link) }));
  const wait = (ms) => new Promise((r) => setTimeout(r, ms));
  // Moves a spark along a link: from the robot to the hub, or the other way.
  const travel = (path, up, ms) => new Promise((done) => {
    const dot = document.createElementNS(NS, "circle");
    dot.setAttribute("r", "3.4"); dot.setAttribute("class", "rn-spark"); sparks.append(dot);
    const len = path.getTotalLength(), t0 = performance.now();
    const step = (t) => {
      const k = Math.min(1, (t - t0) / ms), e = k < .5 ? 2 * k * k : 1 - (-2 * k + 2) ** 2 / 2;
      const pt = path.getPointAtLength(len * (up ? 1 - e : e));
      dot.setAttribute("cx", pt.x); dot.setAttribute("cy", pt.y);
      k < 1 ? requestAnimationFrame(step) : (dot.remove(), done());
    };
    requestAnimationFrame(step);
  });
  const flash = (el, cls, ms) => { el.classList.add(cls); setTimeout(() => el.classList.remove(cls), ms); };
  let visible = false;
  new IntersectionObserver(([e]) => { visible = e.isIntersecting; }).observe(fig);
  (async () => {
    for (let i = 0; ; i = (i + 1) % bots.length) {
      if (!visible || document.hidden) { await wait(400); i--; continue; }
      const src = bots[i];
      flash(src.g, "is-learning", 1500);
      await wait(500);
      await travel(src.path, true, 900);
      flash(hub, "is-thinking", 900);
      await wait(250);
      await Promise.all(bots.filter((b) => b !== src).map((b) => travel(b.path, false, 900).then(() => flash(b.g, "is-learned", 700))));
      await wait(1300);
    }
  })();
})();
</script>

<h2 class="systems-eyebrow">Now</h2>

<div class="systems-featured">
<div class="system-card">
<h3 class="system-name"><span aria-hidden="true">🚜</span> Learned autonomy for heavy machines</h3>
<span class="system-attr">Staff Autonomy Engineer · <a href="https://hiveautonomy.no/">HIVE</a></span>
<p>HIVE retrofits the machines customers already own, from forklifts to wheel loaders, so they work under human supervision instead of a driver in the cab. I lead the learned-autonomy work: vision-language-action models, the data pipelines behind them, and one shared intelligence that learns from real work across machines and sites.</p>
<span class="system-stat">Operating in the field, not in demo mode · 40+ people across London, Norway and the US</span>
</div>
</div>

<h2 class="systems-eyebrow">So far, I've deployed</h2>

<div class="systems-grid">
<div class="system-card">
<h3 class="system-name"><span aria-hidden="true">🏭</span> Factory perception to robot action</h3>
<span class="system-attr">Robotics Lead · Almetra, seed to scale-up</span>
<p>Pre-trained vision-language models that turn factory video into timelines of the work, distilled to run on-station. Then built the robotics team that used that data to put Franka and UR arms on production lines.</p>
<span class="system-stat">60+ factory sites · 10,000 video-hours/day · Customer pilot with a robot in the loop · Grew to 40 people</span>
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
<span class="system-stat">Inspection time: ~4 hours → under 90 minutes · Millions of vehicle images</span>
</div>
<div class="system-card">
<h3 class="system-name"><span aria-hidden="true">🦿</span> Adaptive powered bionic leg</h3>
<span class="system-attr">Founded & led · Chisel Robotics</span>
<p>A fully actuated lower-limb prosthesis using multimodal sensing and machine learning to personalise gait and adapt to changes in the user and walking surface.</p>
<span class="system-stat">Under 50 ms closed-loop feedback · 4 NHS trials · Performance legs for a Rio Paralympic gold medallist <span aria-hidden="true">🥇</span></span>
</div>
</div>

<h2 class="systems-eyebrow">The longer story</h2>

<ol class="story-teaser">
<li><a href="/story/#origins"><strong>Beginnings</strong><span>Competition robots after school, 30+ wins.</span></a></li>
<li><a href="/story/#chisel"><strong>Chisel Robotics</strong><span>A bionic leg that learns from the person wearing it.</span></a></li>
<li><a href="/story/#perception"><strong>Production perception</strong><span>Roadside cameras and vehicle inspection, deployed.</span></a></li>
<li><a href="/story/#manipulation"><strong>Perception to action</strong><span>Robot arms on factory lines, DeepMind and MassRobotics.</span></a></li>
<li><a href="/story/#long-game"><strong>The long game</strong><span>Machines that build before people arrive. 🌕</span></a></li>
</ol>

<div class="story-cta"><a class="story-cta__link" href="/story/">Read my story →</a></div>

<p class="story-contact">Working on learned autonomy for heavy machines? <a href="https://www.linkedin.com/in/mayurhulke/">Message me on LinkedIn</a>.</p>

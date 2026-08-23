# Orbital Memory — complete world blueprint

## Archive status

- Preserved on 23 August 2026 as a future design direction.
- Live local preview route: `/design-preview/`.
- Entry point: `content/design-preview.md`.
- Page template: `layouts/_default/orbital-memory.html`.
- Visual system: `assets/css/extended/orbital-memory-v0.css`.
- Scroll-world runtime: `static/js/orbital-memory-v0.js`.
- Local Three.js dependency: `static/vendor/three/`.
- Orbital fonts: `static/fonts/orbital-memory/` and `static/fonts/field-journal/`.
- Referenced photographic and planetary assets remain under `static/img/`.
- This concept is intentionally isolated from the production homepage. Restoring it later requires changing the homepage layout explicitly; none of its selectors apply to the original homepage.

## Contract

- Purpose: replace the existing portfolio introduction with one immersive, factual seven-chapter story while keeping `/experience/` as the detailed professional record.
- Audience: robotics and autonomy engineers, founders, technical leaders, collaborators and curious general readers.
- Mode: redesign overhaul, isolated at `/design-preview/`; the production homepage remains untouched until explicit approval.
- World sentence: travel from a lunar horizon back through Mayur's photographic memories on Earth, pass through movement, perception and embodiment, then depart again toward the machines that could build beyond Earth.
- Interaction sentence: native scroll controls one persistent camera and global time; pointer movement adds restrained local parallax without changing the route.

## Design read

```yaml
artifact: cinematic portfolio homepage
visual_language: photographic orbital memory atlas
mode: redesign-overhaul
visual_variance: 9
motion_intensity: 9
information_density: 5
asset_dependence: 10
brand_fidelity: 7
minimum_device: iPhone 12 class / integrated laptop GPU
```

## Style bible

- Mood: cinematic, tactile, hopeful.
- World metaphor: one orbital route through personal artifacts and future worksites.
- Topology: connected photographic sets joined by darkness, terrain, planetary scale and atmosphere.
- Palette: void `#030508`, star `#F4F1E8`, lunar dust `#B9B5AA`, Earth ocean `#2C7DA0`, ember `#FF8A3D`, Mars oxide `#B44C35`.
- Typography: Syne for the display voice; IBM Plex Sans for reading.
- Material language: mineral terrain, luminous photographic memory planes and restrained metal rings.
- Motion grammar: hold, descend, pass through, orbit, enter, surface, depart.
- Exclusions: HUD chrome, neon cyberpunk, rounded-card grids, random starfield wallpaper, false NASA affiliation, captions attached to the conference photographs.

## Seven-beat ledger

| id | scene | headline | evidence/assets | camera verb | weight |
| --- | --- | --- | --- | --- | ---: |
| destination | lunar horizon, Earth rise, distant Mars | Building the physical-intelligence layer for robots. | official NASA planet textures; existing mission copy | hold, then turn homeward | 1.45 |
| spark | photographic workshop constellation | This story began in a workshop. | Big Hero 6; robot photos 1–6; 30+ national wins | descend through memories | 1.45 |
| movement | bionic-leg artifact in a warm human-scale orbit | Restore movement. | Chisel photograph; four NHS trials; Rio Paralympic gold medallist | close human-scale pass | 1.25 |
| perception | dark production corridor with moving image planes | Teach machines to see. | perception poster; Series A image; Q-Free, BCA and Almetra facts | lateral inspection orbit | 1.5 |
| embodiment | industrial manipulation workspace | Give perception a body. | Franka lab/build; DeepMind; Boston; programme imagery | enter the robot workspace | 1.55 |
| earth | Earth fills the frame; water memories drift below | Earth is the proving ground. | swimming, diving and portrait photographs; production principle | surface through atmosphere | 1.25 |
| beyond | lunar construction field, conference memories and Mars horizon | Build where people cannot yet safely live. | NASA IPEx/ARMADAS references; three supplied conference photos; Mars texture | depart toward the next horizon | 1.8 |

## Camera ledger

| chapter | desktop position | desktop target | mobile position | mobile target | FOV |
| --- | --- | --- | --- | --- | ---: |
| destination | `[0, 2.65, 9]` | `[0.6, 1.1, -16]` | `[0.2, 4.2, 14]` | `[0.5, 1.8, -15]` | `42 / 48` |
| spark | `[-0.3, 3.55, -23]` | `[0, 1.9, -38]` | `[-0.3, 4.6, -21]` | `[0, 2.4, -38]` | `43 / 49` |
| movement | `[1.3, 2.4, -52]` | `[0, 1.7, -64]` | `[0.4, 4, -49]` | `[0, 2.3, -64]` | `42 / 49` |
| perception | `[-1.8, 3, -77]` | `[0, 1.8, -90]` | `[0, 4.2, -74]` | `[0, 2.4, -90]` | `44 / 50` |
| embodiment | `[1.4, 2.9, -103]` | `[0, 1.6, -117]` | `[0, 4.6, -100]` | `[0, 2.5, -117]` | `42 / 49` |
| earth | `[-1.6, 3.8, -132]` | `[3, 3, -148]` | `[0, 5.2, -129]` | `[2.2, 3.2, -148]` | `44 / 50` |
| beyond | `[0.2, 4.2, -163]` | `[-3, 3.6, -198]` | `[0, 5.4, -159]` | `[-2.2, 3.8, -198]` | `43 / 50` |

## Layer and scene graph

```text
WebGL canvas
  environment       lunar terrain, stars, orbit line
  landmarks         Earth, Earth return, Mars, memory rings
  chapterSets       workshop, movement, perception, embodiment, water, beyond
  atmosphere        seeded stars and chapter-tinted fog

DOM above canvas
  fixed navigation  name, Journey link, chapter route and progress
  semantic chapters headings, evidence and final action
  static fallback   complete ordered story with every supplied image
```

## Asset and source notes

- Planet textures and lunar construction references: NASA 3D Resources and NASA programme imagery.
- NASA construction images are external references and are never presented as Mayur's work.
- The three supplied UKSEDS conference photographs are used as uncaptioned visual memories.
- Three.js is pinned and served locally; the page has no remote runtime dependency.

## Runtime and performance budget

```yaml
three_version: 0.185.1
dpr_mobile: 1.3
dpr_desktop: 1.65
visible_triangles_mobile: 110000
visible_triangles_desktop: 180000
draw_calls_target: 80
shadowed_lights: 0
fallback: semantic DOM plus static photographs
```

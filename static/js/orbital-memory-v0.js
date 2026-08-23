import * as THREE from "/vendor/three/three.module.min.js";

const root = document.querySelector(".orbital-memory");
const canvas = document.querySelector("#orbital-world");

if (!root || !canvas) {
  throw new Error("Orbital Memory root or canvas is missing.");
}

const chapterElements = [...root.querySelectorAll(".om-chapter[data-chapter]")];
const stickyElements = chapterElements.map((chapter) => chapter.querySelector(".om-chapter__sticky"));
const routeLinks = [...root.querySelectorAll(".om-route a[data-route], .om-route li[data-route] a")];
const routeCurrent = root.querySelector(".om-route__current span");
const loadingTrack = root.querySelector(".om-loading__track i");
const loadingValue = root.querySelector(".om-loading__value");
const loadingLabel = root.querySelector(".om-loading__label");
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
const coarsePointer = window.matchMedia("(pointer: coarse)");
const mobileQuery = window.matchMedia("(max-width: 699px)");
const forceStatic = new URLSearchParams(window.location.search).has("static");

const chapterIds = ["destination", "spark", "movement", "perception", "embodiment", "earth", "beyond"];
const lastChapterIndex = chapterIds.length - 1;
const clamp = (value, min = 0, max = 1) => Math.min(max, Math.max(min, value));
const lerp = (a, b, t) => a + (b - a) * t;
const smoothstep = (min, max, value) => {
  const t = clamp((value - min) / (max - min));
  return t * t * (3 - 2 * t);
};

function setFallback(message) {
  root.dataset.orbitalState = "fallback";
  if (message) loadingLabel.textContent = message;
  stickyElements.forEach((sticky) => {
    if (!sticky) return;
    sticky.style.opacity = "1";
    sticky.style.transform = "none";
  });
}

if (reduceMotion.matches || forceStatic) {
  setFallback(forceStatic ? "Static story" : "Reduced-motion story");
} else {
  boot().catch((error) => {
    console.error("Orbital Memory could not start:", error);
    setFallback("Spatial layer unavailable");
  });
}

async function boot() {
  const scene = new THREE.Scene();
  scene.background = new THREE.Color(0x030508);
  scene.fog = new THREE.FogExp2(0x030508, 0.0076);

  const camera = new THREE.PerspectiveCamera(42, window.innerWidth / window.innerHeight, 0.1, 320);
  const renderer = new THREE.WebGLRenderer({
    canvas,
    antialias: true,
    alpha: false,
    powerPreference: "high-performance"
  });

  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.02;
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, mobileQuery.matches ? 1.3 : 1.65));
  renderer.setSize(window.innerWidth, window.innerHeight, false);

  const world = new THREE.Group();
  world.name = "orbital-memory-world";
  const environment = new THREE.Group();
  environment.name = "environment";
  const landmarks = new THREE.Group();
  landmarks.name = "landmarks";
  const chapterSets = new THREE.Group();
  chapterSets.name = "chapter-sets";
  const atmosphere = new THREE.Group();
  atmosphere.name = "atmosphere";
  world.add(environment, landmarks, chapterSets, atmosphere);
  scene.add(world);

  const manager = new THREE.LoadingManager();
  manager.onProgress = (_url, loaded, total) => {
    const progress = total > 0 ? loaded / total : 0;
    loadingTrack.style.transform = `scaleX(${progress})`;
    loadingValue.textContent = `${Math.round(progress * 100)}%`;
  };

  const textureLoader = new THREE.TextureLoader(manager);
  const maxAnisotropy = Math.min(4, renderer.capabilities.getMaxAnisotropy());

  async function loadColorTexture(url) {
    try {
      const texture = await textureLoader.loadAsync(url);
      texture.colorSpace = THREE.SRGBColorSpace;
      texture.anisotropy = maxAnisotropy;
      texture.userData.sourceUrl = url;
      return texture;
    } catch (error) {
      console.warn(`Orbital Memory asset failed: ${url}`, error);
      return null;
    }
  }

  const assetSpec = [
    ["earth", "/img/space/nasa-earth.jpg"],
    ["mars", "/img/space/nasa-mars.jpg"],
    ["spark", "/img/big-hero-six.gif"],
    ["robot1", "/img/robots/robot-1.jpg"],
    ["robot2", "/img/robots/robot-2.jpg"],
    ["robot3", "/img/robots/robot-3.jpg"],
    ["robot4", "/img/robots/robot-4.jpg"],
    ["robot5", "/img/robots/robot-5.jpg"],
    ["robot6", "/img/robots/robot-6.jpg"],
    ["mayurLeg", "/img/mayur-leg.jpg"],
    ["mayurSquare", "/img/mayur-square.jpg"],
    ["perceptionPoster", "/media/hero-poster.jpg"],
    ["seriesA", "/media/series-a-poster.jpg"],
    ["mayurPortrait", "/img/mayur.png"],
    ["frankaLab", "/img/franka-lab.jpg"],
    ["frankaBuild", "/img/franka-build.jpg"],
    ["deepmind", "/img/deepmind-accelerator.jpg"],
    ["boston", "/img/boston-booth.jpg"],
    ["badges", "/img/event-badges.jpg"],
    ["swimming", "/img/swimming.jpg"],
    ["swimmingLane", "/img/swimming-lane.jpg"],
    ["divingNight", "/img/diving-night.jpg"],
    ["divingCave", "/img/diving-cave.jpg"],
    ["nasaIpex", "/img/research/nasa-ipex-excavator.jpg"],
    ["nasaConstruction", "/img/research/nasa-armadas-lunar-construction.png"],
    ["conferenceBadge", "/img/conference/space-conference-badge.jpg"],
    ["conferenceAuditorium", "/img/conference/space-conference-auditorium.jpg"],
    ["conferenceSpeaker", "/img/conference/space-conference-speaker.jpg"]
  ];

  const loadedTextures = await Promise.all(
    assetSpec.map(async ([id, url]) => [id, await loadColorTexture(url)])
  );
  const textures = Object.fromEntries(loadedTextures);

  await document.fonts?.ready;

  const hemi = new THREE.HemisphereLight(0x9cb4c6, 0x171412, 0.82);
  scene.add(hemi);

  const sun = new THREE.DirectionalLight(0xfff1d4, 3.25);
  sun.position.set(-12, 20, 8);
  scene.add(sun);

  const terrain = createLunarTerrain();
  environment.add(terrain);

  const stars = createStars();
  atmosphere.add(stars);

  const earthOrigin = createPlanet({
    radius: 2.85,
    texture: textures.earth,
    fallbackColor: 0x2c7da0,
    position: [5.2, 5.15, -15.5],
    atmosphereColor: 0x6fc6ff,
    atmosphereOpacity: 0.42
  });
  landmarks.add(earthOrigin.group);

  const earthReturn = createPlanet({
    radius: 8.4,
    texture: textures.earth,
    fallbackColor: 0x2c7da0,
    position: [8.5, 4.2, -149],
    atmosphereColor: 0x58b9e8,
    atmosphereOpacity: 0.34
  });
  landmarks.add(earthReturn.group);

  const mars = createPlanet({
    radius: 7,
    texture: textures.mars,
    fallbackColor: 0xb44c35,
    position: [-8.2, 6.4, -202],
    atmosphereColor: 0xe47c55,
    atmosphereOpacity: 0.24
  });
  landmarks.add(mars.group);

  const route = createOrbitalRoute();
  landmarks.add(route.line);

  const chapterSetSpecs = [
    {
      id: "spark",
      index: 1,
      accent: 0xff8a3d,
      ring: [0, 2.2, -40],
      photos: [
        { id: "spark", aspect: 450 / 253, width: 4.7, position: [-0.3, 4.2, -38], rotation: -0.03 },
        { id: "robot1", aspect: 900 / 675, width: 3.45, position: [-6.4, 1.8, -39.5], rotation: -0.12 },
        { id: "robot2", aspect: 900 / 508, width: 3.7, position: [-3.9, 5.2, -42.5], rotation: 0.08 },
        { id: "robot3", aspect: 900 / 508, width: 3.8, position: [3.2, 5.1, -41], rotation: -0.06 },
        { id: "robot4", aspect: 900 / 508, width: 3.5, position: [6.6, 2.2, -43.5], rotation: 0.11 },
        { id: "robot5", aspect: 900 / 675, width: 3.5, position: [-3.2, -0.9, -45.5], rotation: -0.06 },
        { id: "robot6", aspect: 900 / 675, width: 3.5, position: [2.5, -0.8, -47], rotation: 0.06 }
      ]
    },
    {
      id: "movement",
      index: 2,
      accent: 0xe2b28e,
      ring: [1.8, 2.4, -65],
      photos: [
        { id: "mayurLeg", aspect: 1600 / 1067, width: 8.2, position: [3.6, 2.8, -65], rotation: 0.025 },
        { id: "mayurSquare", aspect: 1, width: 3.1, position: [-5.5, 4.2, -68.5], rotation: -0.08 }
      ]
    },
    {
      id: "perception",
      index: 3,
      accent: 0x5ba9c7,
      ring: [-0.8, 2.1, -91],
      photos: [
        { id: "perceptionPoster", aspect: 16 / 9, width: 7.6, position: [4.1, 4.1, -91], rotation: -0.025 },
        { id: "seriesA", aspect: 1, width: 5.1, position: [-5.3, 3.7, -94], rotation: 0.06 },
        { id: "mayurPortrait", aspect: 16 / 9, width: 5.6, position: [0.1, -0.2, -97], rotation: -0.035 }
      ]
    },
    {
      id: "embodiment",
      index: 4,
      accent: 0xff8a3d,
      ring: [0.5, 2.2, -119],
      photos: [
        { id: "frankaBuild", aspect: 1500 / 844, width: 7.8, position: [-3.7, 3.6, -118], rotation: -0.025 },
        { id: "frankaLab", aspect: 1598 / 2048, width: 3.9, position: [5.2, 3.1, -121], rotation: 0.055 },
        { id: "deepmind", aspect: 2000 / 1499, width: 5.1, position: [-5.8, -0.7, -124], rotation: 0.05 },
        { id: "boston", aspect: 1528 / 2000, width: 3.4, position: [0.2, -1.1, -126], rotation: -0.035 },
        { id: "badges", aspect: 1195 / 1600, width: 3.3, position: [5.2, -0.6, -127], rotation: 0.065 }
      ]
    },
    {
      id: "earth",
      index: 5,
      accent: 0x2c7da0,
      ring: [1.5, 1.8, -151],
      photos: [
        { id: "swimming", aspect: 1, width: 4.8, position: [-5.3, 4.1, -151], rotation: -0.045 },
        { id: "swimmingLane", aspect: 1320 / 1351, width: 4.4, position: [-0.6, -0.2, -153], rotation: 0.04 },
        { id: "divingNight", aspect: 1320 / 997, width: 5.2, position: [5.1, 2.4, -155], rotation: -0.035 },
        { id: "divingCave", aspect: 1320 / 1053, width: 5, position: [-3.6, -1.1, -157], rotation: 0.045 }
      ]
    },
    {
      id: "beyond",
      index: 6,
      accent: 0xb44c35,
      ring: [-1.5, 2.8, -185],
      photos: [
        { id: "nasaIpex", aspect: 2048 / 576, width: 9.8, position: [4.6, 5, -179], rotation: -0.015 },
        { id: "nasaConstruction", aspect: 16 / 9, width: 6.4, position: [-5.2, 1, -184], rotation: 0.045 },
        { id: "conferenceBadge", aspect: 1282 / 1600, width: 3.25, position: [5.1, 3.2, -185], rotation: -0.055 },
        { id: "conferenceAuditorium", aspect: 1286 / 1600, width: 3.2, position: [0.4, -1.2, -188], rotation: 0.04 },
        { id: "conferenceSpeaker", aspect: 806 / 1600, width: 2.35, position: [5.9, -0.6, -190], rotation: -0.025 }
      ]
    }
  ];

  const photoSets = chapterSetSpecs.map((spec) => createPhotoSet(spec));
  photoSets.forEach((set) => chapterSets.add(set.group));

  let exactProgress = 0;
  let smoothProgress = 0;
  let pointerTargetX = 0;
  let pointerTargetY = 0;
  let pointerX = 0;
  let pointerY = 0;
  let running = true;
  let disposed = false;
  let rafId = 0;
  let lastTime = performance.now();
  let lastInfoSecond = -1;
  let chapterAnchors = [];
  let positionCurve;
  let targetCurve;
  let resolvedCameraSpec;

  const cameraPosition = new THREE.Vector3();
  const cameraTarget = new THREE.Vector3();
  const fogColor = new THREE.Color();
  const fogA = new THREE.Color();
  const fogB = new THREE.Color();

  const fogPalette = [
    0x030508,
    0x070707,
    0x090807,
    0x04090d,
    0x070808,
    0x031019,
    0x090706
  ];

  function cameraSpec() {
    if (mobileQuery.matches) {
      return [
        { p: [0.2, 4.2, 14], t: [0.5, 1.8, -15], fov: 48 },
        { p: [-0.3, 4.6, -21], t: [0, 2.4, -38], fov: 49 },
        { p: [0.4, 4, -49], t: [0, 2.3, -64], fov: 49 },
        { p: [0, 4.2, -74], t: [0, 2.4, -90], fov: 50 },
        { p: [0, 4.6, -100], t: [0, 2.5, -117], fov: 49 },
        { p: [0, 5.2, -129], t: [2.2, 3.2, -148], fov: 50 },
        { p: [0, 5.4, -159], t: [-2.2, 3.8, -198], fov: 50 }
      ];
    }

    return [
      { p: [0, 2.65, 9], t: [0.6, 1.1, -16], fov: 42 },
      { p: [-0.3, 3.55, -23], t: [0, 1.9, -38], fov: 43 },
      { p: [1.3, 2.4, -52], t: [0, 1.7, -64], fov: 42 },
      { p: [-1.8, 3, -77], t: [0, 1.8, -90], fov: 44 },
      { p: [1.4, 2.9, -103], t: [0, 1.6, -117], fov: 42 },
      { p: [-1.6, 3.8, -132], t: [3, 3, -148], fov: 44 },
      { p: [0.2, 4.2, -163], t: [-3, 3.6, -198], fov: 43 }
    ];
  }

  function rebuildCameraCurves() {
    resolvedCameraSpec = cameraSpec();
    positionCurve = new THREE.CatmullRomCurve3(
      resolvedCameraSpec.map((entry) => new THREE.Vector3(...entry.p)),
      false,
      "centripetal",
      0.45
    );
    targetCurve = new THREE.CatmullRomCurve3(
      resolvedCameraSpec.map((entry) => new THREE.Vector3(...entry.t)),
      false,
      "centripetal",
      0.45
    );
  }

  function measureChapters() {
    const maxScroll = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
    chapterAnchors = chapterElements.map((chapter, index) => {
      if (index === 0) return 0;
      if (index === lastChapterIndex) return maxScroll;
      return chapter.offsetTop + Math.max(0, chapter.offsetHeight - window.innerHeight) * 0.52;
    });
  }

  function progressFromScroll(scrollY) {
    if (!chapterAnchors.length) return 0;
    if (scrollY <= chapterAnchors[0]) return 0;
    if (scrollY >= chapterAnchors[lastChapterIndex]) return lastChapterIndex;

    for (let index = 0; index < lastChapterIndex; index += 1) {
      const start = chapterAnchors[index];
      const end = chapterAnchors[index + 1];
      if (scrollY >= start && scrollY <= end) {
        return index + clamp((scrollY - start) / Math.max(1, end - start));
      }
    }
    return 0;
  }

  function updateExactProgress() {
    exactProgress = progressFromScroll(window.scrollY);
  }

  function updateCamera(progress) {
    const normalized = clamp(progress / lastChapterIndex);
    positionCurve.getPointAt(normalized, cameraPosition);
    targetCurve.getPointAt(normalized, cameraTarget);

    const segment = Math.min(lastChapterIndex - 1, Math.floor(progress));
    const local = clamp(progress - segment);
    const fov = lerp(resolvedCameraSpec[segment].fov, resolvedCameraSpec[segment + 1].fov, smoothstep(0, 1, local));
    camera.fov = fov;
    camera.position.copy(cameraPosition);
    camera.position.x += pointerX * (mobileQuery.matches ? 0.06 : 0.17);
    camera.position.y += pointerY * (mobileQuery.matches ? 0.04 : 0.1);
    camera.lookAt(cameraTarget);
    camera.updateProjectionMatrix();
  }

  function updatePhotoSet(set, progress, seconds) {
    const distance = Math.abs(progress - set.index);
    const visibility = 1 - smoothstep(0.58, 0.96, distance);
    set.group.visible = visibility > 0.002;
    if (!set.group.visible) return;

    set.cards.forEach((card, index) => {
      const stagger = smoothstep(0.15 + index * 0.035, 0.72 + index * 0.025, visibility);
      const scale = lerp(0.76, 1, stagger);
      card.scale.setScalar(scale);
      card.position.copy(card.userData.basePosition);
      card.position.y += Math.sin(seconds * 0.23 + card.userData.phase) * 0.075;
      card.lookAt(camera.position);
      card.rotateZ(card.userData.baseRotation);
      card.userData.imageMaterial.opacity = stagger;
      card.userData.backingMaterial.opacity = stagger * 0.9;
    });

    set.rings.forEach((ring, index) => {
      ring.material.opacity = visibility * (index === 0 ? 0.18 : 0.08);
      ring.rotation.z = seconds * (index === 0 ? 0.018 : -0.012) + set.index * 0.34;
      ring.rotation.x = 0.14 + Math.sin(seconds * 0.07 + index) * 0.035;
    });
  }

  function updateWorld(progress, seconds) {
    photoSets.forEach((set) => updatePhotoSet(set, progress, seconds));

    earthOrigin.surface.rotation.y = seconds * 0.018 + progress * 0.16;
    earthOrigin.group.position.y = 5.15 + Math.sin(seconds * 0.08) * 0.04;
    earthReturn.surface.rotation.y = seconds * 0.012 - progress * 0.08;
    mars.surface.rotation.y = seconds * 0.009 - progress * 0.045;

    const earthOriginVisibility = 1 - smoothstep(0.72, 1.55, progress);
    setPlanetVisibility(earthOrigin, earthOriginVisibility);

    const earthReturnVisibility = 1 - smoothstep(0.58, 0.96, Math.abs(progress - 5));
    setPlanetVisibility(earthReturn, earthReturnVisibility);

    const marsVisibility = Math.max(0.2, smoothstep(3.9, 5.9, progress));
    setPlanetVisibility(mars, marsVisibility);

    route.geometry.setDrawRange(0, Math.max(2, Math.floor(route.count * clamp((progress + 0.25) / 6.25))));
    route.line.material.opacity = lerp(0.08, 0.28, smoothstep(0, 6, progress));

    const chapterA = Math.min(lastChapterIndex - 1, Math.floor(progress));
    const chapterB = Math.min(lastChapterIndex, chapterA + 1);
    const local = smoothstep(0, 1, progress - chapterA);
    fogA.setHex(fogPalette[chapterA]);
    fogB.setHex(fogPalette[chapterB]);
    fogColor.copy(fogA).lerp(fogB, local);
    scene.fog.color.copy(fogColor);
    scene.background.copy(fogColor);
    scene.fog.density = lerp(0.0072, 0.0094, smoothstep(2.5, 5.2, progress));
    hemi.intensity = lerp(0.82, 0.58, progress / lastChapterIndex);
    sun.intensity = lerp(3.25, 2.55, progress / lastChapterIndex);
    stars.rotation.y = seconds * 0.0012;
  }

  function setPlanetVisibility(planet, opacity) {
    planet.surface.material.transparent = opacity < 0.999;
    planet.surface.material.opacity = opacity;
    planet.glow.material.uniforms.glowOpacity.value = planet.baseGlowOpacity * opacity;
    planet.group.visible = opacity > 0.002;
  }

  function updateDom(progress) {
    root.style.setProperty("--om-world-progress", progress.toFixed(4));
    const activeIndex = Math.round(clamp(progress, 0, lastChapterIndex));
    const activeId = chapterIds[activeIndex];
    root.dataset.orbitalChapter = activeId;
    routeCurrent.textContent = String(activeIndex + 1).padStart(2, "0");

    stickyElements.forEach((sticky, index) => {
      if (!sticky) return;
      const delta = progress - index;
      const visibility = 1 - smoothstep(0.52, 0.91, Math.abs(delta));
      sticky.style.opacity = visibility.toFixed(3);
      sticky.style.transform = `translate3d(0, ${clamp(delta, -1, 1) * -28}px, 0)`;
      sticky.toggleAttribute("inert", visibility < 0.12);
    });

    routeLinks.forEach((link) => {
      const routeId = link.closest("[data-route]")?.dataset.route;
      if (routeId === activeId) link.setAttribute("aria-current", "step");
      else link.removeAttribute("aria-current");
    });
  }

  function frame(now) {
    if (disposed) return;
    rafId = requestAnimationFrame(frame);
    if (!running) return;

    const dt = Math.min((now - lastTime) / 1000, 1 / 30);
    lastTime = now;
    updateExactProgress();
    smoothProgress = THREE.MathUtils.lerp(smoothProgress, exactProgress, 1 - Math.exp(-5.2 * dt));
    pointerX = THREE.MathUtils.lerp(pointerX, pointerTargetX, 1 - Math.exp(-4.5 * dt));
    pointerY = THREE.MathUtils.lerp(pointerY, pointerTargetY, 1 - Math.exp(-4.5 * dt));

    updateCamera(smoothProgress);
    updateWorld(smoothProgress, now / 1000);
    updateDom(exactProgress);
    renderer.render(scene, camera);
    const infoSecond = Math.floor(now / 1000);
    if (infoSecond !== lastInfoSecond) {
      lastInfoSecond = infoSecond;
      root.dataset.orbitalCalls = String(renderer.info.render.calls);
      root.dataset.orbitalTriangles = String(renderer.info.render.triangles);
      root.dataset.orbitalTextures = String(renderer.info.memory.textures);
    }
  }

  function handlePointer(event) {
    if (coarsePointer.matches) return;
    pointerTargetX = clamp((event.clientX / window.innerWidth) * 2 - 1, -1, 1);
    pointerTargetY = clamp(-((event.clientY / window.innerHeight) * 2 - 1), -1, 1);
  }

  let resizeFrame = 0;
  function handleResize() {
    cancelAnimationFrame(resizeFrame);
    resizeFrame = requestAnimationFrame(() => {
      camera.aspect = window.innerWidth / window.innerHeight;
      renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, mobileQuery.matches ? 1.3 : 1.65));
      renderer.setSize(window.innerWidth, window.innerHeight, false);
      rebuildCameraCurves();
      measureChapters();
      updateExactProgress();
    });
  }

  function handleVisibility() {
    running = !document.hidden;
    if (running) lastTime = performance.now();
  }

  function dispose() {
    if (disposed) return;
    disposed = true;
    cancelAnimationFrame(rafId);
    cancelAnimationFrame(resizeFrame);
    window.removeEventListener("pointermove", handlePointer);
    window.removeEventListener("resize", handleResize);
    document.removeEventListener("visibilitychange", handleVisibility);
    scene.traverse((node) => {
      node.geometry?.dispose?.();
      if (Array.isArray(node.material)) node.material.forEach((material) => material.dispose?.());
      else node.material?.dispose?.();
    });
    Object.values(textures).forEach((texture) => texture?.dispose?.());
    renderer.dispose();
  }

  canvas.addEventListener("webglcontextlost", (event) => {
    event.preventDefault();
    running = false;
    setFallback("The 3D world paused");
  });

  window.addEventListener("pointermove", handlePointer, { passive: true });
  window.addEventListener("resize", handleResize, { passive: true });
  window.addEventListener("pagehide", dispose, { once: true });
  document.addEventListener("visibilitychange", handleVisibility);

  rebuildCameraCurves();
  measureChapters();
  updateExactProgress();
  smoothProgress = exactProgress;
  updateCamera(smoothProgress);
  updateWorld(smoothProgress, 0);
  updateDom(exactProgress);
  renderer.render(scene, camera);
  root.dataset.orbitalCalls = String(renderer.info.render.calls);
  root.dataset.orbitalTriangles = String(renderer.info.render.triangles);
  root.dataset.orbitalTextures = String(renderer.info.memory.textures);

  loadingTrack.style.transform = "scaleX(1)";
  loadingValue.textContent = "100%";
  root.dataset.orbitalState = "ready";
  window.__orbitalMemory = {
    version: "complete-seven-chapter",
    chapterIds,
    getState: () => ({ exactProgress, smoothProgress, activeChapter: root.dataset.orbitalChapter }),
    getRendererInfo: () => ({
      calls: renderer.info.render.calls,
      triangles: renderer.info.render.triangles,
      points: renderer.info.render.points,
      textures: renderer.info.memory.textures,
      geometries: renderer.info.memory.geometries
    })
  };
  rafId = requestAnimationFrame(frame);

  function createPhotoSet(spec) {
    const group = new THREE.Group();
    group.name = `${spec.id}-memory-set`;
    const cards = spec.photos.map((item, index) => {
      const card = createPhotoCard(textures[item.id], item.aspect, item.width);
      card.position.fromArray(item.position);
      card.userData.basePosition = new THREE.Vector3(...item.position);
      card.userData.baseRotation = item.rotation;
      card.userData.phase = index * 0.73 + spec.index;
      group.add(card);
      return card;
    });

    const rings = [0, 1].map((ringIndex) => {
      const geometry = new THREE.TorusGeometry(5.8 + ringIndex * 2.4, 0.018, 6, 128);
      const material = new THREE.MeshBasicMaterial({
        color: spec.accent,
        transparent: true,
        opacity: 0,
        depthWrite: false
      });
      const ring = new THREE.Mesh(geometry, material);
      ring.position.fromArray(spec.ring);
      ring.rotation.x = 0.14 + ringIndex * 0.18;
      ring.rotation.y = ringIndex * 0.23;
      group.add(ring);
      return ring;
    });

    group.visible = false;
    return { group, cards, rings, index: spec.index };
  }

  function createLunarTerrain() {
    const geometry = new THREE.PlaneGeometry(240, 420, 110, 150);
    const position = geometry.attributes.position;
    const colors = [];
    const craters = [
      { x: -16, z: 8, radius: 8.5, depth: 1.45 },
      { x: 12, z: -4, radius: 5.8, depth: 0.9 },
      { x: 28, z: -40, radius: 11, depth: 1.7 },
      { x: -31, z: -72, radius: 9, depth: 1.2 },
      { x: 1, z: -104, radius: 6.5, depth: 0.8 },
      { x: 24, z: -142, radius: 13, depth: 1.55 },
      { x: -22, z: -184, radius: 10, depth: 1.25 }
    ];

    for (let index = 0; index < position.count; index += 1) {
      const x = position.getX(index);
      const z = position.getY(index) - 96;
      let height =
        Math.sin(x * 0.17) * 0.18 +
        Math.cos(z * 0.11) * 0.22 +
        Math.sin((x + z) * 0.075) * 0.28 +
        Math.cos((x - z) * 0.043) * 0.34;

      craters.forEach((crater) => {
        const distance = Math.hypot(x - crater.x, z - crater.z);
        const normalized = distance / crater.radius;
        if (normalized < 1) height -= crater.depth * Math.pow(1 - normalized * normalized, 2);
        const rim = Math.exp(-Math.pow((distance - crater.radius) / (crater.radius * 0.16), 2));
        height += rim * crater.depth * 0.24;
      });

      position.setZ(index, height);
      const shade = clamp(0.48 + height * 0.055, 0.34, 0.65);
      colors.push(shade * 0.92, shade * 0.91, shade * 0.86);
    }

    geometry.setAttribute("color", new THREE.Float32BufferAttribute(colors, 3));
    geometry.computeVertexNormals();
    geometry.rotateX(-Math.PI / 2);
    geometry.translate(0, -2.1, -96);

    const material = new THREE.MeshStandardMaterial({
      vertexColors: true,
      roughness: 1,
      metalness: 0,
      flatShading: false
    });
    const mesh = new THREE.Mesh(geometry, material);
    mesh.name = "continuous-lunar-terrain";
    return mesh;
  }

  function createStars() {
    const count = mobileQuery.matches ? 900 : 1600;
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);
    let seed = 19713;
    const random = () => {
      seed = (seed * 16807) % 2147483647;
      return (seed - 1) / 2147483646;
    };

    for (let index = 0; index < count; index += 1) {
      positions[index * 3] = (random() - 0.5) * 190;
      positions[index * 3 + 1] = 8 + random() * 90;
      positions[index * 3 + 2] = 30 - random() * 280;
      const warmth = 0.78 + random() * 0.22;
      colors[index * 3] = warmth;
      colors[index * 3 + 1] = warmth * (0.94 + random() * 0.06);
      colors[index * 3 + 2] = warmth * (0.9 + random() * 0.1);
    }

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));
    const material = new THREE.PointsMaterial({
      size: mobileQuery.matches ? 0.12 : 0.085,
      sizeAttenuation: true,
      vertexColors: true,
      transparent: true,
      opacity: 0.72,
      depthWrite: false
    });
    const points = new THREE.Points(geometry, material);
    points.name = "seeded-star-field";
    return points;
  }

  function createPlanet({ radius, texture, fallbackColor, position, atmosphereColor, atmosphereOpacity }) {
    const group = new THREE.Group();
    group.position.fromArray(position);

    const geometry = new THREE.SphereGeometry(radius, 64, 48);
    const material = new THREE.MeshStandardMaterial({
      map: texture || null,
      color: texture ? 0xffffff : fallbackColor,
      roughness: 0.94,
      metalness: 0
    });
    const surface = new THREE.Mesh(geometry, material);
    group.add(surface);

    const glowGeometry = new THREE.SphereGeometry(radius * 1.045, 48, 32);
    const glowMaterial = new THREE.ShaderMaterial({
      transparent: true,
      side: THREE.BackSide,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
      uniforms: {
        glowColor: { value: new THREE.Color(atmosphereColor) },
        glowOpacity: { value: atmosphereOpacity }
      },
      vertexShader: `
        varying vec3 vNormalWorld;
        varying vec3 vWorldPosition;
        void main() {
          vNormalWorld = normalize(mat3(modelMatrix) * normal);
          vec4 worldPosition = modelMatrix * vec4(position, 1.0);
          vWorldPosition = worldPosition.xyz;
          gl_Position = projectionMatrix * viewMatrix * worldPosition;
        }
      `,
      fragmentShader: `
        uniform vec3 glowColor;
        uniform float glowOpacity;
        varying vec3 vNormalWorld;
        varying vec3 vWorldPosition;
        void main() {
          vec3 viewDirection = normalize(cameraPosition - vWorldPosition);
          float fresnel = pow(1.0 - max(dot(vNormalWorld, viewDirection), 0.0), 2.35);
          gl_FragColor = vec4(glowColor, fresnel * glowOpacity);
        }
      `
    });
    const glow = new THREE.Mesh(glowGeometry, glowMaterial);
    group.add(glow);

    return { group, surface, glow, baseGlowOpacity: atmosphereOpacity };
  }

  function createPhotoCard(texture, aspect, width) {
    const group = new THREE.Group();
    const height = width / aspect;

    const backingGeometry = new THREE.PlaneGeometry(width + 0.12, height + 0.12);
    const backingMaterial = new THREE.MeshBasicMaterial({
      color: 0xf4f1e8,
      transparent: true,
      opacity: 0,
      side: THREE.DoubleSide,
      depthWrite: false
    });
    const backing = new THREE.Mesh(backingGeometry, backingMaterial);
    backing.position.z = -0.025;
    group.add(backing);

    const imageGeometry = new THREE.PlaneGeometry(width, height);
    const imageMaterial = new THREE.MeshBasicMaterial({
      map: texture || null,
      color: texture ? 0xffffff : 0x292c30,
      transparent: true,
      opacity: 0,
      side: THREE.DoubleSide,
      depthWrite: false
    });
    const image = new THREE.Mesh(imageGeometry, imageMaterial);
    group.add(image);
    group.userData.imageMaterial = imageMaterial;
    group.userData.backingMaterial = backingMaterial;
    return group;
  }

  function createOrbitalRoute() {
    const curve = new THREE.CatmullRomCurve3([
      new THREE.Vector3(5.2, 5.15, -15.5),
      new THREE.Vector3(-5, 8.2, -42),
      new THREE.Vector3(4, 7.4, -72),
      new THREE.Vector3(-4, 8.5, -104),
      new THREE.Vector3(8.5, 4.2, -149),
      new THREE.Vector3(1.5, 9.2, -178),
      new THREE.Vector3(-8.2, 6.4, -202)
    ], false, "centripetal", 0.45);
    const points = curve.getPoints(420);
    const geometry = new THREE.BufferGeometry().setFromPoints(points);
    geometry.setDrawRange(0, 2);
    const material = new THREE.LineBasicMaterial({
      color: 0xff8a3d,
      transparent: true,
      opacity: 0.08,
      depthWrite: false
    });
    const line = new THREE.Line(geometry, material);
    line.name = "earth-to-mars-route";
    return { line, geometry, count: points.length };
  }
}

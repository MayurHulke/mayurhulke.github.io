// Scroll-told figures for posts. Each figure's HTML is drawn in its final state;
// this only animates the way there, and does nothing under reduced motion.
(function () {
  if (!window.gsap || !window.ScrollTrigger) return;
  gsap.registerPlugin(ScrollTrigger);

  var mm = gsap.matchMedia();
  mm.add('(prefers-reduced-motion: no-preference)', function () {
    var scrub = function (fig) {
      return { trigger: fig, start: 'top 80%', end: 'bottom 45%', scrub: 0.6 };
    };

    document.querySelectorAll('.post-anim[data-anim="days"]').forEach(function (fig) {
      var days = fig.querySelectorAll('.pa-day:not(.pa-flash)');
      var tl = gsap.timeline({ scrollTrigger: scrub(fig) });
      tl.from(days, { opacity: 0.12, duration: 0.2, stagger: 0.1, ease: 'none' }, 0);
      fig.querySelectorAll('.pa-flash').forEach(function (flash) {
        var at = Array.prototype.indexOf.call(days, flash.previousElementSibling) * 0.1;
        gsap.set(flash, { opacity: 0 });
        tl.to(flash, { opacity: 1, duration: 0.15 }, at + 0.05).to(flash, { opacity: 0, duration: 0.3 }, at + 0.6);
      });
    });

    document.querySelectorAll('.post-anim[data-anim="drift"]').forEach(function (fig) {
      var tl = gsap.timeline({ scrollTrigger: scrub(fig) });
      tl.from(fig.querySelector('.pa-clip-a'), { attr: { width: 40 }, duration: 1, ease: 'none' })
        .from(fig.querySelector('.pa-clip-b'), { attr: { width: 40 }, duration: 1, ease: 'none' })
        .from(fig.querySelector('.pa-label-adapt'), { opacity: 0, duration: 0.2 }, '<0.8');
    });

    document.querySelectorAll('.post-anim[data-anim="road"]').forEach(function (fig) {
      var drive = gsap.timeline({ paused: true });
      fig.querySelectorAll('.pa-vehicle').forEach(function (car, i) {
        // Start each car where it is drawn, then loop it across the road.
        var start = Number(car.dataset.x);
        var speed = 110 + i * 25;
        var lap = gsap.timeline({ repeat: -1 });
        lap.fromTo(car, { x: start }, { x: 640, duration: (640 - start) / speed, ease: 'none' })
          .fromTo(car, { x: -60 }, { x: start, duration: (start + 60) / speed, ease: 'none' });
        drive.add(lap, 0);
      });
      ScrollTrigger.create({ trigger: fig, start: 'top bottom', end: 'bottom top', onToggle: function (self) { self.isActive ? drive.play() : drive.pause(); } });
      var conds = fig.querySelectorAll('.pa-cond');
      var light = function (n) { return function () { conds.forEach(function (c, i) { c.classList.toggle('pa-strong', i === n); }); }; };
      var tl = gsap.timeline({ scrollTrigger: scrub(fig) });
      tl.to(fig.querySelector('.pa-rain'), { opacity: 1, duration: 1, onStart: light(1), onReverseComplete: light(0) })
        .to(fig.querySelector('.pa-night'), { opacity: 0.6, duration: 1, onStart: light(2), onReverseComplete: light(1) });
    });

    document.querySelectorAll('.post-anim[data-anim="waffle"]').forEach(function (fig) {
      var tl = gsap.timeline({ scrollTrigger: scrub(fig) });
      tl.from(fig.querySelectorAll('.pa-cell:not(.is-miss)'), { opacity: 0.12, duration: 0.1, stagger: 0.02 })
        .from(fig.querySelectorAll('.pa-cell.is-miss'), { opacity: 0.12, scale: 0.4, transformOrigin: '50% 50%', duration: 0.3, stagger: 0.08 })
        .from(fig.querySelector('.pa-miss-label'), { opacity: 0, duration: 0.3 });
    });

    document.querySelectorAll('.post-anim[data-anim="bars"]').forEach(function (fig) {
      var tl = gsap.timeline({ scrollTrigger: scrub(fig) });
      tl.from(fig.querySelectorAll('.pa-bar'), { scaleX: 0, transformOrigin: '0% 50%', duration: 0.6, stagger: 0.15 })
        .from(fig.querySelectorAll('.pa-tag'), { opacity: 0, duration: 0.3, stagger: 0.1 })
        .from(fig.querySelector('.pa-bar.is-pick'), { opacity: 0.35, duration: 0.3 }, '<');
    });

    gsap.from('.pa-checklist li', {
      opacity: 0, x: -16, duration: 0.5, stagger: 0.12, ease: 'power2.out',
      scrollTrigger: { trigger: '.pa-checklist', start: 'top 85%', once: true }
    });
  });
})();

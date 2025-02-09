gsap.registerPlugin(ScrollTrigger);

gsap.fromTo(
  ".text2",
  { y: 50, opacity: 0 },
  {
    y: 0,
    opacity: 1,
    duration: 1,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".text2",
      markers: true,
      pin: true,
      start: "-70% center",
      end: "bottom center",
    },
  }
);

gsap.fromTo(
  ".text3",
  { y: 50, opacity: 0 },
  {
    y: 0,
    opacity: 1,
    duration: 1,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".text3",
      markers: true,
      pin: true,
      start: "-70% center",
      end: "bottom center",
    },
  }
);

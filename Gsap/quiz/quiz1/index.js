const textTl = gsap.timeline();

textTl.fromTo(
  ".text1",
  {
    y: 30,
    opacity: 0,
  },
  {
    y: 0,
    opacity: 1,
    duration: 0.7,
    ease: "power1.out",
    delay: 1,
    stagger: 0.2,
  }
);

textTl.fromTo(
  ".text2",
  {
    y: 30,
    opacity: 0,
  },
  {
    y: 0,
    opacity: 1,
    duration: 0.7,
    ease: "power1.out",
    delay: 0.5,
    stagger: 0.3,
    text: "This is the new text",
  },
  "-=1.3"
);

textTl.fromTo(
  ".text3",
  {
    opacity: 0,
  },
  {
    opacity: 1,
    duration: 0.7,
    ease: "power1.out",
    delay: 0.5,
  },
  "-=0.5"
);

textTl.fromTo(
  ".image > img",
  {
    scale: 0.8,
    opacity: 0,
  },
  {
    scale: 1,
    opacity: 1,
    duration: 0.5,
    ease: "power1.out",
  },
  "<"
);

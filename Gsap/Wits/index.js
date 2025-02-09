gsap.registerPlugin(ScrollTrigger);

hover_it = document.querySelector(".hover_it");
hover_car = document.querySelector(".hover_car");
hover_home = document.querySelector(".hover_home");

const p1Duration = 0.7;

gsap_it = () => {
  gsap.to(".image1", { opacity: 1, p1Duration });
  gsap.to(".image2", { opacity: 0, p1Duration });
  gsap.to(".image3", { opacity: 0, p1Duration });
};

hover_it.addEventListener("mouseover", gsap_it);
hover_car.addEventListener("mouseover", () => {
  gsap.to(".image1", { opacity: 0, p1Duration });
  gsap.to(".image2", { opacity: 1, p1Duration });
  gsap.to(".image3", { opacity: 0, p1Duration });
});
hover_home.addEventListener("mouseover", () => {
  gsap.to(".image1", { opacity: 0, p1Duration });
  gsap.to(".image2", { opacity: 0, p1Duration });
  gsap.to(".image3", { opacity: 1, p1Duration });
});

// 2페이지
gsap.fromTo(
  ".vision",
  { x: -400 },
  {
    x: 0,
    duration: 1,
    ease: "power2.out",
    stagger: 0.5,
    scrollTrigger: {
      trigger: ".visionContainer",
      markers: true,
      start: "top 80%",
    },
  }
);
// gsap.to(".visionContainer", {
//   scrollTrigger: {
//     trigger: ".visionContainer",
//     markers: true,
//     pin: true,
//     start: "top center",
//     end: "bottom bottom",
//   },
// });

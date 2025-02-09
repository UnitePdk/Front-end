const boxTween = gsap.to(".box", {
  x: 200,
  y: 200,
  backgroundColor: "blue",
  duration: 3,
  paused: true,
  yoyo: true,
  repeat: 2,
});

// const resume = () => {
//   boxTween.resume();
// };

const resume = document.querySelector(".resume");

resume.addEventListener("click", () => {
  boxTween.resume();
});

const pause = () => {
  boxTween.pause();
};

const restart = () => {
  boxTween.restart();
  boxTween.pause();
};

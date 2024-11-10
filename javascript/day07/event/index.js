// const helloButton = document.querySelector(".hello");
// helloButton.addEventListener("click", () => {
//   alert("오늘은 일요일!");
// });

const hello = () => {
  alert("오늘은 일요일이야!");
};

const breakHeart = () => {
  const heartButton = document.querySelector(".heart");
  heartButton.innerHTML = heartButton.innerHTML == "🧡" ? "💔" : "🧡";
};
//🧡💔

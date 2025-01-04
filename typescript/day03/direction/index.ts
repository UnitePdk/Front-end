const position_ = document.querySelector("#position") as Element;

const pos = { x: 0, y: 0 };

// const arrow_up = document.querySelector("#up");
// const arrow_left = document.querySelector("#left");
// const arrow_down = document.querySelector("#down");
// const arrow_right = document.querySelector("#right");

// arrow_up.addEventListener("click", () => {
//   pos.y += 1;
//   changePosition();
// });
// arrow_left.addEventListener("click", () => {
//   pos.x -= 1;
//   changePosition();
// });
// arrow_down.addEventListener("click", () => {
//   pos.y -= 1;
//   changePosition();
// });
// arrow_right.addEventListener("click", () => {
//   pos.x += 1;
//   changePosition();
// });
//

// switch문 쓸 경우
const arrow = ["right", "left", "up", "down"];
arrow.forEach((v) => {
  const direction = document.querySelector(`#${v}`) as Element;
  direction.addEventListener("click", () => {
    move_(v);
  });
});

const move_ = (direction) => {
  switch (direction) {
    case "up":
      pos.y += 1;
      changePosition();
      break;
    case "left":
      pos.x -= 1;
      changePosition();
      break;
    case "down":
      pos.y -= 1;
      changePosition();
      break;
    case "right":
      pos.x += 1;
      changePosition();
      break;
  }
};

const changePosition = () => {
  position_.innerHTML = String(`<span>x: ${pos.x}</span>
  <span>y: ${pos.y}</span>`);
};

changePosition();

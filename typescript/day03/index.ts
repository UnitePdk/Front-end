type Wrapper<T> = {
  value: T;
};

const test: Wrapper<number> = {
  value: 10,
};

const test1: Wrapper<string> = {
  value: "당근",
};

type Func = "add" | "minus" | "multi" | "divide";

// // 퀴즈1
// const calculate = (func: string, num1: number, num2: number) => {
//   if (func == "add") {
//     return num1 + num2;
//   } else if (func == "subtract") {
//     return num1 - num2;
//   } else if (func == "multiply") {
//     return num1 * num2;
//   } else if (func == "divide") {
//     return num2 == 0 ? "에러-0으로 나눔" : num1 / num2;
//   } else {
//     return "에러-해당되는 연산자 없음";
//   }
// };

// 퀴즈1_1 - switch 변경
const calculate = (oper: Func, num1: number, num2: number) => {
  switch (oper) {
    case "add":
      return num1 + num2;
    case "minus":
      return num1 - num2;
    case "multi":
      return num1 * num2;
    case "divide":
      return num2 == 0 ? "에러-0으로 나눔" : num1 / num2;
    default:
      return "에러-해당 연산자 없음";
  }
};

// 퀴즈2
type Position = { x: number; y: number };
const position: Position = { x: 0, y: 0 };

type Dir = "up" | "down" | "left" | "right";
const move = (dir: Dir) => {
  switch (dir) {
    case "up":
      position.y += 1;
      break;
    case "down":
      position.y -= 1;
      break;
    case "left":
      position.x -= 1;
      break;
    case "right":
      position.x += 1;
      break;
    default:
      return "에러";
  }
};

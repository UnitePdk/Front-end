// 참조타입: Array

const soccer = ["손흥민", "김민재", "황희찬", "이강인"];

console.log(soccer[0]); //손흥민

const score = [
  [1, 2, 3],
  [11, 12, 13],
  [51, 52, 53],
];
console.log(score[2][0]); //51
console.log(score[1][2]); //13

const menu = [
  { name: "아메리카노", price: 1500 },
  { name: "라떼", price: 2500 },
  { name: "민트모카", price: 4500 },
];
console.log(menu[1].name); //라떼
console.log(menu[1].price); //2500

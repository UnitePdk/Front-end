// const num=Number(prompt("정수 입력"));
// if(num>0){
//     console.log("양수")
// }
// else if(num===0){
//     console.log("0")
// }
// else{
//     console.log("음수")
// }
// console.log("프로그램 끝")

// const score = Number(prompt("프로그래밍 점수 입력"));
// let grade;

// if (score >= 90) grade = "A";
// else if (score >= 80) grade = "B";
// else if (score >= 70) grade = "C";
// else if (score >= 60) grade = "D";
// else grade = "F";

// console.log(`당신의 학점: ${grade}`);

// const angle = Number(prompt("각도 입력(0~180)"));
// let result;

// if (angle == 180) result = "평각";
// else if (angle > 90) result = "둔각";
// else if (angle == 90) result = "직각";
// else if (angle > 0) result = "예각";
// else result="평각"

// console.log(`${angle}도는 ${result}입니다`);

const bus = Number(prompt("1. 마을버스 2. 시내버스 3. 광역버스 4. 고속버스"));
let busName;
let busPrice;
if (bus == 1) {
  busName = "마을";
  busPrice = 1000;
} else if (bus == 2) {
  busName = "시내";
  busPrice = 1500;
} else if (bus == 3) {
  busName = "광역";
  busPrice = 2000;
} else if (bus == 4) {
  busName = "고속";
  busPrice = 10000;
}

const age = Number(prompt("나이를 입력하세요"));
let discount;
if (age >= 65) {
  discount = 0.8;
} else if (age >= 20) {
  discount = 1.0;
} else if (age >= 8) {
  discount = 0.7;
} else {
  discount = 0.5;
}

const total = busPrice * discount;
console.log(`${busName}버스의 최종 금액은 ${total}원 입니다.`);

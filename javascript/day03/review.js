// const integer = Number(prompt("정수를 입력하세요"));
// let result1;
// if (integer > 0) {
//   result1 = "양수";
// } else if (integer == 0) {
//   result1 = "0";
// } else {
//   result1 = "음수";
// }
// console.log(`${result1}입니다`);

// let result2;
// const height = Number(prompt("키를 입력하세요"));
// const weight = Number(prompt("몸무게를 입력하세요"));
// const bmi = weight / (height / 100) ** 2;
// if (bmi >= 25) {
//   result2 = "비만";
// } else if (bmi <= 18.5) {
//   result2 = "저체중";
// } else {
//   result2 = "정상";
// }
// console.log(`BMI지수: ${bmi}`);
// console.log(`${result2}입니다`);

const birth_year = Number(prompt("생년을 입력하세요"));
const birth_index = (birth_year - 4) % 12;
const ddis = [
  "쥐",
  "소",
  "호랑이",
  "토끼",
  "용",
  "뱀",
  "말",
  "양",
  "원숭이",
  "닭",
  "개",
  "돼지",
];
console.log(`${ddis[birth_index]}띠입니다.`);
// let ddi;
// if (birth_index == 1) {
//   ddi = "쥐";
// } else if (birth_index == 2) {
//   ddi = "소";
// } else if (birth_index == 3) {
//   ddi = "호랑이";
// } else if (birth_index == 4) {
//   ddi = "토끼";
// } else if (birth_index == 5) {
//   ddi = "용";
// } else if (birth_index == 6) {
//   ddi = "뱀";
// } else if (birth_index == 7) {
//   ddi = "말";
// } else if (birth_index == 8) {
//   ddi = "양";
// } else if (birth_index == 9) {
//   ddi = "원숭이";
// } else if (birth_index == 10) {
//   ddi = "닭";
// } else if (birth_index == 11) {
//   ddi = "개";
// } else {
//   ddi = "돼지";
// }
// console.log(`${ddi}띠입니다`);

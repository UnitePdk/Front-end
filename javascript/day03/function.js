// 기본
// function add(a,b){
//     return a+b;
// }
// function double(a){
//     return a**2;
// }

// const result=add(1,2);
// const result2=double(3);
// console.log(`${result} ${result2}`);

// 퀴즈1
// function Jpn(yen) {
//   result = yen >= 900 ? "팔아야함!" : "사야함!";
//   return result;
// }

// function High(a, b) {
//   result = a >= b ? a : b;
//   return result;
// }

// const coffee = { 1: "아메리카노", 2: "라떼", 3: "바닐라", 4: "모카" };
// function Coffee(index, num) {
//   console.log(`${coffee[index]} ${num}개 주문 완료되었습니다`);
// }

// const jpn = Number(prompt("엔화 환율 입력"));
// console.log(Jpn(jpn));

// const int1 = Number(prompt("정수1 입력"));
// const int2 = Number(prompt("정수2 입력"));
// console.log(High(int1, int2));

// const index = prompt("커피 메뉴를 선택하세요");
// const num = prompt("주문 개수를 입력하세요");
// Coffee(index, num);

// 신 문법 =>함수
const minus = (x, y) => {
  return x - y;
};
const result_minus = (10, 5);

const exMark = (string) => {
  return string + "!!!";
};
console.log(exMark("느낌표"));

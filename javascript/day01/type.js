const a = "10";
const b = "20";
console.log(a + b); //1020

const c = 3;
const d = 4;
console.log(c + d); //7

const e = true;
const f = false;

// 타입 캐스팅

// 문자 -> 숫자
// 1. Number()
const g = Number(a);
const h = Number(b);
console.log(g + h); //30

// 숫자 -> 문자
// 1. String()
const i = String(g);
const j = String(h);
console.log(i + j); //1020

const num1 = prompt("첫번째 숫자 입력");
const num2 = prompt("두번째 숫자 입력");
console.log(`두 수의 합: ${Number(num1) + Number(num2)}`);

const age = prompt("나이를 입력하세요");
console.log(`당신은 ${2025 - age}년생입니다`);

const length_square = prompt("정사각형의 변의 길이를 입력하세요");
console.log(`정사각형의 넓이는 ${Math.pow(Number(length_square),2)}입니다`);

const length_triangle = prompt("정삼각형의 변의 길이를 입력하세요");
console.log(
  `정삼각형의 넓이는 ${
    (Math.sqrt(3) / 4) * Math.pow(Number(length_triangle),2)
  }입니다`
);

const radius = prompt("반지름의 길이를 입력하세요");
console.log(
  `원의 넓이는 ${Math.pow(Number(radius),2) * 3.1415}이고, 원의 둘레는 ${
    2 * Number(radius) * 3.1415
  }입니다`
);

const won = prompt("환전할 원화를 입력하세요");
const jpy = 0.10917;
console.log(`${jpy * Number(won)}엔이 환전되었습니다.`);

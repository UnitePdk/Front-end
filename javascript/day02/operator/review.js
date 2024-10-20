const exercise1 = prompt("1번 운동을 입력하세요");
const exercise2 = prompt("2번 운동을 입력하세요");
const exercise3 = prompt("3번 운동을 입력하세요");
console.log(
  `1번 운동: ${exercise1}, 2번 운동: ${exercise2}, 3번 운동: ${exercise3}`
);

const m = Number(prompt("정수 m을 입력하세요"));
const n = Number(prompt("정수 n을 입력하세요"));
console.log(`m의 n제곱: ${m ** n}`);

const dollar = Number(prompt("달러를 입력하세요"));
const exRate = 1370;
console.log(`${dollar * exRate}원이 환전되었습니다`);

const num = Number(prompt("1000이하의 정수를 입력하세요"));
const min = parseInt(num / 60);
const sec = num % 60;
console.log(`${hour}분 ${min}초입니다.`);

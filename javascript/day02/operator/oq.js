const dNum = Number(prompt("도너츠 구매 개수 입력"));
const dPrice = 1000;
let total = dNum * dPrice;
total = dNum >= 10 ? total * 0.9 : total;
total = dNum >= 20 ? dPrice * 0.8 * dNum : total;
console.log(`${total}원 계산 도와드리겠습니다`);

const intNum = Number(prompt("정수 입력"));
evenOdd = !!(intNum % 2) ? "홀수입니다" : "짝수입니다";
console.log(evenOdd);

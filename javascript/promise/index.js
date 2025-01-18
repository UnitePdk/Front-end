// Promise - 비동기 작업의 미래 완료 또는 실패를 표현하는 객체
const test = new Promise((success, fail) => {
  success("성공");
  fail("실패");
});

// fetch 함수의 반환값은 Promise 이다
// then의 매개변수는 success
// test.then((v) => console.log(v));

const orderPizza = () => {
  console.log("피자 주문");
  return new Promise((success, fail) => {
    setTimeout(() => {
      success("맛있는 페퍼로니 피자 완료");
    }, 3000);
  });
};

console.log(orderPizza());
orderPizza().then((v) => console.log(v));

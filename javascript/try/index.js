const fetch_coffee = () => {
  const coffeeImage = document.querySelector(".coffeeImage");
  const coffeeName = document.querySelector(".coffeeName");

  fetch("https://api.sampleapis.com/coffee/hot")
    .then((response) => {
      if (!response.ok) throw new Error("네트워크 응답 없음");
      return response.json();
    })
    .then((data) => {
      if (data.error != null) {
        console.log(data.message);
        throw new Error(data.error);
      }
    })
    .catch((e) => console.log(e));
};

fetch_coffee();

const fetch_beer = () => {
  const beerImage = document.querySelector(".beerImage");
  const beerName = document.querySelector(".beerName");

  fetch("https://api.sampleapis.com/beers/ale")
    .then((response) => {
      if (!response.ok) throw new Error("네트워크 응답 없음");
      return response.json();
    })
    .then((data) => {
      if (data.error != null) {
        console.log(data.message);
        throw new Error(data.error);
      }
      beerName.innerHTML = data[1].name;
      beerImage.src = data[1].image;
      return;
    })
    .catch((e) => console.log(e));
};

fetch_beer();

// 0 나눔 예외
const divide = (a, b) => {
  if (b == 0) throw new Error("에러 발생: 0으로 나눔");
  return a / b;
};

// try {
//   const first = Number(prompt("정수 입력"));
//   const second = Number(prompt("정수 입력"));
//   console.log(divide(first, second));
// } catch (e) {
//   console.log(e);
// } finally {
//   console.log("코드 끝");
// }

const toUpper = (alphabet) => {
  if (["a", "b", "c"].some((v) => v != alphabet)) {
    throw new Error("에러 발생: a, b, c 한 글자만 입력해주세요");
  }
  return alphabet.toUpperCase();
};

// try {
//   const alphabet = prompt("알파벳 입력");
//   console.log(toUpper(alphabet));
// } catch (e) {
//   console.log(e);
// } finally {
//   console.log("코드 종료");
// }

const sayHello = (name) => {
  if (typeof name != "string") throw new TypeError("문자열 아님");
  console.log(`hello ${name}!`);
};

// try {
//   sayHello(100);
// } catch (e) {
//   console.log(e);
// }

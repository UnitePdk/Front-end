// 다중 콜백 함수
// const makeDough = (next) => {
//   console.log("도우 만들기");
//   next();
// };
// const makeTomato = (next) => {
//   console.log("토마토 바르기");
//   next();
// };
// const makeCheese = (next) => {
//   console.log("치즈 뿌리기");
//   next();
// };
// const makeHot = () => {
//   console.log("화덕에 굽기");
// };

// const makePizza = () =>
//   makeDough(() => makeTomato(() => makeCheese(() => makeHot())));

// makePizza();

const makeDough = (topping) => {
  return new Promise((success, fail) => {
    console.log("도우 만들기");
    success(topping);
  });
};
const makeTomato = (topping) => {
  return new Promise((success, fail) => {
    console.log("토마토 바르기");
    success(topping);
  });
};
const makeCheese = (topping) => {
  return new Promise((success, fail) => {
    console.log("치즈 뿌리기");
    success(topping);
  });
};
const makeHot = (topping) => {
  return new Promise((success, fail) => {
    console.log("화덕에 넣기");
    success(topping);
  });
};

makeDough("새우")
  .then((v) => makeTomato(v))
  .then((v) => makeCheese(v))
  .then((v) => makeHot(v))
  .then((v) => console.log(`${v} 피자 완성`));

//🥚🐣🐥🐓

const chickenDiv = document.querySelector("#chickenDiv");

const egg = (next) => {
  return new Promise((success, fail) => {
    setTimeout(() => {
      console.log("🥚 부화중");
      chickenDiv.innerHTML = "🥚";
      success(next);
    }, 1000);
  });
};
const hatch = (next) => {
  return new Promise((success, fail) => {
    setTimeout(() => {
      console.log("🐣 껍질 깨는 중");
      chickenDiv.innerHTML = "🐣";
      success(next);
    }, 1000);
  });
};
const chick = (next) => {
  return new Promise((success, fail) => {
    setTimeout(() => {
      console.log("🐥 성장 중");
      chickenDiv.innerHTML = "🐥";
      success(next);
    }, 1000);
  });
};
const chicken = (next) => {
  return new Promise((success, fail) => {
    setTimeout(() => {
      console.log("🐓 요리중");
      chickenDiv.innerHTML = "🐓";
      success(next);
    }, 2000);
  });
};
const friedChicken = (next) => {
  return new Promise((success, fail) => {
    setTimeout(() => {
      console.log("🍗 마시쪙");
      chickenDiv.innerHTML = "🍗";
      success(next);
    }, 2000);
  });
};

egg()
  .then(() => hatch())
  .then(() => chick())
  .then(() => chicken())
  .then(() => friedChicken());

const pizza = document.querySelector("#pizza");

tomato = () => {
  const topping = "tomato";
  dough(topping);
};
cheese = () => {
  const topping = "cheese";
  dough(topping);
};
bulgogi = () => {
  const topping = "bulgogi";
  dough(topping);
};

const dough = (topping) => {
  console.log("dough");
  return new Promise((success, fail) => {
    setTimeout(() => {
      success("도우 완료");
    }, 3000);
  });
};

const topping = (topping) => {
  console.log("topping");
  return new Promise((success, fail) => {
    setTimeout(() => {
      success("토핑 완료");
    }, 2000);
  });
};
const bake = () => {
  console.log("bake");
  return new Promise((success, fail) => {
    setTimeout(() => {
      success("화덕에 굽기 완료");
    }, 3000);
  });
};
const pack = () => {
  console.log("pack");
  return new Promise((success, fail) => {
    setTimeout(() => {
      success("포장 완료");
    }, 1000);
  });
};

const makePizza = async () => {
  await dough();
  await topping();
};
makePizza();
// dough()
//   .then(() => topping())
//   .then(() => bake())
//   .then(() => pack());

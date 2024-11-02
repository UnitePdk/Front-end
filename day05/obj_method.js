const car = {
  name: "casper",
  speed: 0,
  color: "white",
  start: function () {
    console.log("vroom vroom");
  },
  end: () => {
    console.log("stop");
  },
};
car.start();
car.end();

const calc = {
  add: function (a, b) {
    return a + b;
  },
  substract: function (a, b) {
    return a - b;
  },
};

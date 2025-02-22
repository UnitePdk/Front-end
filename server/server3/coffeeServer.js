const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

const menu = {
  icecream: [
    { name: "허니 크런치", kcal: 264, price: 3000 },
    { name: "민트 초콜릿 칩", kcal: 256, price: 2500 },
    { name: "요거트", kcal: 198, price: 3500 },
    { name: "그린티", kcal: 245, price: 4000 },
  ],
  cake: [
    { name: "잔망루피", kcal: 1380, price: 30000 },
    { name: "골라먹는 큐브", kcal: 1640, price: 29000 },
    { name: "구름이 퐁당퐁당", kcal: 1260, price: 26000 },
  ],
  coffee: [
    { name: "아메리카노", kcal: 5, price: 3000 },
    { name: "카페라떼", kcal: 120, price: 3500 },
    { name: "카페모카", kcal: 240, price: 4000 },
  ],
};

app.get("/", (request, response) => {
  response.send("익스프레스 맛보기");
});

//request.params - /icecream/:id
//request.query - /icecream?

app.get("/icecream", (request, response) => {
  const { minPrice, maxPrice } = request.query;
  console.log({ minPrice, maxPrice });

  if (minPrice == undefined && maxPrice == undefined) {
    response.json(menu.icecream);
  } else if (!maxPrice) {
    const filtered = menu.icecream.filter((v) => minPrice <= v.price);
    response.json(filtered);
  } else if (!minPrice) {
    const filtered = menu.icecream.filter((v) => v.price <= maxPrice);
    response.json(filtered);
  } else {
    const filtered = menu.icecream.filter(
      (v) => minPrice <= v.price && v.price <= maxPrice
    );
    response.json(filtered);
  }
});
app.get("/cake", (request, response) => {
  const { search } = request.query;
  console.log(search);
  if (search == undefined) {
    response.json(menu.cake);
  } else {
    const filtered = menu.cake.filter((v) => v.name.includes(search));
    response.json(filtered);
  }
});
app.get("/coffee", (request, response) => {
  response.json(menu.coffee);
});

app.listen(3000, () => {
  console.log("서버 실행");
});

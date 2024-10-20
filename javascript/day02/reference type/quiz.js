const bus = Number(prompt("1. 마을버스 2. 시내버스 3. 광역버스 4. 고속버스"));
const age = Number(prompt("나이를 입력하세요"));

const busNameData = {
  1: "마을버스",
  2: "시내버스",
  3: "광역버스",
  4: "고속버스",
};
const busPriceData = {
  1: 1000,
  2: 1500,
  3: 2000,
  4: 10000,
};
const busData = {
  1: {
    name: "마을버스",
    price: 1000,
  },
  2: {
    name: "시내버스",
    price: 1500,
  },
  3: {
    name: "광역버스",
    price: 2000,
  },
  4: {
    name: "고속버스",
    price: 10000,
  },
};

console.log(`${busData[bus].name}의 최종 금액은 ${busData[bus].price}원 입니다.`);

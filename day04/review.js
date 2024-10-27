const movies = [
  "보통의가족",
  "베놈",
  "베테랑2",
  "와일드 로봇",
  "대도시의 사랑법",
]; // 영화 12000원
const snacks = ["팝콘", "캬라멜팝콘", "치즈팝콘", "나쵸", "오징어구이"]; // 팝콘 6000원, 스낵 4000원
const drinks = ["콜라", "제로콜라", "스프라이트", "제로스프라이트"]; // 콜라 3000원, 사이다 2000원

// const SnackPrice = (snack) => {
//   return snack.includes("팝콘")?6000:4000;

// }
// const DrinkPrice = (drink) => {
//   return drink.includes("콜라")? 3000:2000;
// };

const Price = (snack, drink) => {
  return (snack.includes("팝콘")
    ? 6000
    : 4000) + (drink.includes("콜라")
    ? 3000
    : 2000);
};

const Pay = (movie, snack, drink) => {
  console.log(`구매하신 제품: 영화: ${movie}, 스낵: ${snack}, 음료: ${drink}`);
  const total = 12000 + Price(snack, drink);
  console.log(`총 가격은 ${total}원입니다`);
};

const movie = Number(
  prompt(
    "영화를 선택하세요\n1. 보통의 가족, 2. 베놈, 3. 베테랑2, 4. 와일드 로봇, 5. 대도시의 사랑법"
  )
);
const snack = Number(
  prompt(
    "스낵을 선택하세요\n1. 팝콘, 2. 캬라멜 팝콘, 3. 치즈팝콘, 4. 나쵸, 5. 오징어구이"
  )
);
const drink = Number(
  prompt(
    "음료를 선택하세요: 1. 콜라, 2. 제로콜라, 3. 스프라이트, 4. 제로스프라이트"
  )
);

Pay(movies[movie - 1], snacks[snack - 1], drinks[drink - 1]);

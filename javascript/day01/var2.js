const myName = "pdk";
const mbti = "infp";

// 옛날 문법
console.log("저의 이름은 " + myName + "입니다");
// ``, ${}사용
console.log(`저의 이름은 ${myName}입니다`);
console.log(`저의 mbti는 ${mbti}입니다`);

const day = prompt("오늘의 요일을 입력하세요");
const toDo = prompt("오늘 뭐 할 건가요");
const feel = prompt("오늘 기분 어때요");

console.log(
  `당신은 오늘 ${day}(요일)에 ${toDo}할 예정이시군요! 기분은 ${feel}이시군요!`
);

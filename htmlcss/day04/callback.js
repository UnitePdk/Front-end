// const kimchiStew=()=>{
//     console.log("김치 썰기")
//     console.log("물 끓이기")
//     console.log("김치 넣기")
//     console.log("김치찌개 완성")
// }
// const kimchiRice=()=>{
//     console.log("김치 썰기")
//     console.log("프라이팬 달구기")
//     console.log("김치랑 밥 넣기")
//     console.log("볶기")
//     console.log("김치볶음밥 완성")
// }

// const recipe=(food)=>{
//     console.log("요리 시작")
//     food();
//     console.log("요리 종료")
// }

// recipe(kimchiRice);

// 퀴즈
// const Skill_Ice = () => {
//   console.log("얼음 모으기");
//   console.log("얼음 발사");
// };
// const Skill_Thunder = () => {
//   console.log("번개 모으기");
//   console.log("번개 발사");
// };
// const Skill_Fire = () => {
//   console.log("불 모으기");
//   console.log("불 발사");
// };
//const skillList = [Skill_Ice, Skill_Thunder, Skill_Fire];

// const Skill_Element = (element) => {
//   console.log(`${element} 모으기`);
//   console.log(`${element} 발사`);
// };
// const skillList = ["얼음", "번개", "불"];

// const UseSkill = (Skill) => {
//   Skill();
// };

// const choice = Number(
//   prompt("어떤 스킬을 발동시킬까요? (1. 얼음, 2. 번개 ,3. 불)")
// );
// UseSkill(() => Skill_Element(skillList[choice - 1]));

//🦐🥩🍗🧀
const CookTaco = (ingredient) => {
  console.log(`${ingredient}타코 준비`);
  console.log(`${ingredient}타코 넣기`);
  console.log(`굽기`);
  console.log(`${ingredient}타코 완성`);
};
const Cook = (menu) => {
  console.log("요리 시작");
  menu();
  console.log("요리 종료");
};
const tacoList = ["🦐", "🥩", "🍗", "🧀"];

const choice = Number(prompt("타코 메뉴를 선택하세요.\n1.🦐 2.🥩 3.🍗 4.🧀"));
Cook(()=>CookTaco(tacoList[choice-1]))
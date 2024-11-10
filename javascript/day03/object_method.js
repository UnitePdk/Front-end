// 함수 몇가지
// const a = "ice";
// console.log(a.toUpperCase()); // 대문자화
// console.log(a.includes("k")); // 포함하니? - false
// console.log(a.includes("i")); // 포함하니? -true
// console.log(a.repeat(2)); // iceice

// const b = ["돼지고기", "소고기", "닭고기", "양고기"];
// b.push("오리고기");
// b.includes("오리고기"); // true
// b.reverse(); // 배열 순서가 뒤바뀜

// 퀴즈1
// const password = prompt("비밀번호를 지정하세요");
// if (password.length > 12) {
//   alert("비밀번호가 너무 깁니다");
// } else if (password.length < 4) {
//   alert("비밀번호가 너무 짧습니다");
// } else {
//   if (
//     !(
//       password.includes("!") ||
//       password.includes("#") ||
//       password.includes("@")
//     )
//   ) {
//     alert("특수문자가 반드시 들어가야 합니다");
//   } else {
//     if (!password.endsWith("z")) {
//       alert("마지막 글자는 z로 끝나야합니다");
//     } else {
//       alert("올바르게 비밀번호 설정하였습니다");
//     }
//   }
// }

// 퀴즈2
// const Domain = (address) => {
//   if (!address.includes("@") || !address.includes(".")) {
//     return "잘못된 이메일";
//   }
//   result = address.slice(address.indexOf("@") + 1, address.indexOf("."));
//   return result;
// //   const arr = address.split("@");
// //   const arr1 = arr[1].split(".");
// //   return arr1[0];
// };
// const address = prompt("이메일 주소 입력");
// console.log(Domain(address));

// const UpperCase = (string) => {
//   return string.toUpperCase();
// };
// const article = prompt("영어 신문기사 입력");
// console.log(UpperCase(article));

// 퀴즈3
const SortArticle = (article) => {
  words = article.split(" ");
  //return words[0] + " " + words[1] + " " + words[2];
  return [words[0], words[1], words[2]];
};
const article = prompt("영어 기사 입력");
console.log(SortArticle(article));

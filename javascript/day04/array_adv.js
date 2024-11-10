const arr = [1, 2, 3, 4, 5];
arr.map((a) => a + 3);
arr.map((a) => 10);
arr.map((a) => a * 2);
arr.map((a) => a ** 2);
arr.map((a) => (a % 2 ? a + 10 : a - 10));
arr.map((a) => (a >= 3 ? a + 3 : a - 3));
console.log(arr.map((a) => (a % 2 ? a + 10 : a - 10)));

const fruits = ["apple", "orange", "kiwi", "mango", "watermelon", "melon"];
const fruits_1 = fruits.map((string) =>
  string.length <= 5 ? string.toUpperCase() : "🍌"
);
console.log(fruits_1);

const arr1 = [1, 3, 5, 7, 9];
arr1.some((a) => a > 5); // true
arr1.every((a) => a > 1); // false

if (fruits.every((string) => string.includes("a") || string.includes("e"))) {
  console.log("전부 a 또는 e 포함");
}
if (fruits.every((string) => string.length <= 10)) {
  console.log("전부 10글자 이하");
}

const aeiou = "aeiou".split("");
const word = prompt("영단어 입력");
const wordList = word.split("");
if (wordList.some((x) => aeiou.some((y) => y == x))) {
  console.log("모음 포함");
} else {
  console.log("모음 안포함");
}

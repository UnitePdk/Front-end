const arr = [1, 2, 3, 4, 5];

const arr_1 = arr.filter((x) => x == 1 || x == 3);
console.log(arr_1);

const arr_2 = arr.filter((x) => x % 2 == 0);
console.log(arr_2);

//
const arr1 = [10, 20, 30, 40, 50];

const arr1_1 = arr1.filter((x) => x <= 30);
console.log(arr1_1);

//
const fruits = ["apple", "banana", "kiwi", "mango", "watermelon"];

const fruits_1 = fruits.filter((str) => str.length <= 5);
console.log(fruits_1);

const fruits_2 = fruits.filter((str) => str.includes("i") || str.includes("e"));
console.log(fruits_2);

//
const alphabet = ["k", "j", "q", "r"];
const fruits_3 = fruits.filter((str) => alphabet.some((a)=>str.includes(a)));
console.log(fruits_3);


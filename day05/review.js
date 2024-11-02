const arr1 = [5, 13, 25, 31, 49];

console.log(arr1.map((a) => a + 10));
console.log(arr1.map((a) => (a % 2 ? a * 2 : a - 10)));

const arr2 = ["kiwi", "apple", "orange", "pineapple"];

console.log(
  arr2.map((str) => (str.includes("apple") ? str.toUpperCase() : str.length))
);

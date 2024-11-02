// const k=Number("100");
// const j=Number("100");
// // k와 j는 같다

// const a=new student("pdk", 25, 전공여부);
// const b=new student("pdk", 25, 전공여부);
// // a와 b는 다르다

const c1 = new Array(20).fill("김밥");
const c2 = new Array(10).fill(1);
const c3 = new Array(10).fill(0).map((x) => x + 1);

const arr1 = new Array(1000).fill(0).map((x, i) => i);
console.log(arr1);

const arr2 = new Array(1000)
  .fill(0)
  .map((x, i) => i)
  .filter((x) => x % 2 == 1);
console.log(arr2);

const arr3 = new Array(1000)
  .fill(0)
  .map((x, i) => i)
  .filter((x) => x % 3 == 0);
console.log(arr3);

const arr4 = new Array(1000)
  .fill(0)
  .map((x, i) => i)
  .filter((x) => x % 5 == 0)
  .filter((x) => x < 500 || x > 600);
console.log(arr4);

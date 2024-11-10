// reduce((a,c) => {}, init)

// [1,3,5,7,9].reduce((a,c)=>{
//     console.log({a,c});
//     return a+c;
// })

console.log([1, 2, 3, 4, 5].reduce((a, c) => a + c, 100));

const arr = new Array(124).fill(0).map((x, i) => i);
sum = arr.reduce((a, c) => a + c);
console.log(sum);

console.log(
  new Array(124)
    .fill(0)
    .map((x, i) => i)
    .reduce((a, c) => a + c)
);

const input = document.querySelector("#input");
const button = document.querySelector("#button");

// button.addEventListener("click", () => {
//   const { value } = input;
//   fetch(`http://localhost:3000/icecream?minPrice=${value}`).then((response) =>
//     response.json().then((v) => console.log(v))
//   );
// });

button.addEventListener("click", () => {
  const { value } = input;
  fetch(`http://localhost:3000/cake?search=${value}`).then((response) =>
    response.json().then((v) => console.log(v))
  );
});

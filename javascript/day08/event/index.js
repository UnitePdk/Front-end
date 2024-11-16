const button = document.getElementById("button");
button.addEventListener("click", (e) => {
  console.log(e);
});

const spanLength = document.querySelector(".length");

const input = document.getElementById("input");
input.addEventListener("input", (e) => {
  //   spanLength.style.color = isValidLength(e.target.value.length);
  //   spanLength.innerText = e.target.value.length;
  const result = isValidLength2(e.target.value);
  spanLength.innerText = result;
});

const isValidLength = (length) => (length < 10 ? "black" : "red");

const isValidLength2 = (string) => {
  if (4 > string.length || string.length > 12) {
    return "글자 수를 수정해주세요";
  } else if (
    //!(string.includes("!") || string.includes("@") || string.includes("#"))
    !["!", "@", "#"].some((v) => string.includes(v))
  ) {
    return "특수문자를 넣어야 합니다";
  } else if (!string.includes("it")) {
    return "it가 꼭 들어가야합니다";
  } else {
    return "통과!";
  }
};

const under10 = document.getElementById("test");
under10.addEventListener("input", (e) => {
  const string = e.target.value;
  const length = string.length;
  if (length > 10) {
    const result = string.slice(0, 10);
    under10.value = result;
  }
});

const check = document.getElementById("check");
check.addEventListener("input", (e) => {
  console.log(e.target.checked);
});

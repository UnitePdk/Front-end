const checkAll = document.getElementById("checkAll");

const checkboxes = [1, 2, 3, 4, 5, 6].map((v) => document.getElementById(`check${v}`));

const btn_confirm = document.getElementById("confirm");

checkAll.addEventListener("input", (e) => {
  checkboxes.map((b) => (b.checked = true));
  if (
    checkboxes[0].checked &&
    checkboxes[1].checked &&
    checkboxes[2].checked &&
    checkboxes[3].checked
  ) {
    btn_confirm.style.backgroundColor = "yellow";
  } else {
    btn_confirm.style.backgroundColor = "gray";
  }
});

checkboxes.forEach((c) => {
  c.addEventListener("change", (e) => {
    if (
      checkboxes[0].checked &&
      checkboxes[1].checked &&
      checkboxes[2].checked &&
      checkboxes[3].checked
    ) {
      btn_confirm.style.backgroundColor = "yellow";
    } else {
      btn_confirm.style.backgroundColor = "gray";
    }
  });
});

btn_confirm.addEventListener("click", (e) => {
  if (
    checkboxes[0].checked &&
    checkboxes[1].checked &&
    checkboxes[2].checked &&
    checkboxes[3].checked
  ) {
    alert("로그인 성공");
  } else {
    alert("약관에 동의해주세요");
  }
});


const checkList=[
    {id: "check1", isChecked: false, isNecessary:true},
    {id: "check2", isChecked: false, isNecessary:true},
    {id: "check3", isChecked: false, isNecessary:true},
    {id: "check4", isChecked: false, isNecessary:true},
    {id: "check5", isChecked: false, isNecessary:true},
    {id: "check6", isChecked: false, isNecessary:true},
];
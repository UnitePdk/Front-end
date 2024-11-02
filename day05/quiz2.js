// 카페 포스기 프로그램

// 기본메뉴: [아아, 라떼]
// 가격: [2500, 3000]
// 정산 프로그램 - 커피이름, 가격, 갯수 입력받으면 총 가격을 돌려주는 함수

const pos = {
  menu: [
    { name: "americano", price: 2500 },
    { name: "latte", price: 3000 },
  ],
  total: function (name, price, amount) {
    return price * amount;
  },
  info: function () {
    console.log(this.menu);
  },
  addMenu: function () {
    const newName = prompt("메뉴 이름 입력");
    const newPrice = Number(prompt("메뉴 가격 입력"));
    this.menu.push({ name: newName, price: newPrice });
  },
  delMenu: function () {
    const name_ = prompt("삭제할 메뉴 이름 입력");
    this.menu.filter((x) => x.name != name_);
  },
};

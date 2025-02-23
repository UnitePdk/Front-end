const express = require("express");
const cors = require("cors");
const xlsx = require("xlsx");

const app = express();
app.use(cors());
app.use(express.json());

const coffeeXlsx = xlsx.readFile("coffee.xlsx");
const sheet = coffeeXlsx.Sheets["Sheet2"];
const cakeJson = xlsx.utils.sheet_to_json(sheet);
console.log(cakeJson);

app.get("/", (request, response) => {
  response.send("기본 페이지");
});

app.get("/cake", (request, response) => {
  response.json(cakeJson);
});

app.post("/cake", (request, response) => {
  const cake = request.body;

  if (cake == {}) {
    response.json({ message: "데이터 갱신 실패: 데이터 없음" });
    return;
  }
  cakeJson.push(cake);
  const newSheet = xlsx.utils.json_to_sheet(cakeJson);
  coffeeXlsx.Sheets["Sheet2"] = newSheet;
  xlsx.writeFile(coffeeXlsx, "coffee.xlsx");
  response.json({ message: "새로운 데이터 갱신" });
});

app.listen(3000, () => {
  console.log("서버 실행");
});

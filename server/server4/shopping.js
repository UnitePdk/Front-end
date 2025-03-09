const express = require("express");
const app = express();
app.use(express.json());
const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "1234",
  database: "shopping",
});

connection.connect(() => {
  console.log("연결 성공");
});

app.get("/customer", (request, response) => {
  const { familyname } = request.query;

  connection.execute(
    "select * from client where name like ?",
    [`${familyname}%`],
    (error, result) => {
      response.json(result);
    }
  );
});

app.get("/order", (request, response) => {
  connection.query("select * from order_", (error, result) => {
    response.json(result);
  });
});

app.get("/product", (request, response) => {
  connection.query("select * from product", (error, result) => {
    response.json(result);
  });
});

app.get("/all", async (request, response) => {
  const [customer] = await connection.promise().query("select * from client");
  const [order] = await connection.promise().query("select * from order_");
  const [product] = await connection.promise().query("select * from product");
  response.json({ customer, order, product });
});

app.post("/register.do", (request, response) => {
  const data = request.body;
  const { name, email, address, phone } = data;

  //   connection.query(
  //     `insert into client values("${name}","${email}","${address}","${phone}")`,
  //     (error, result) => {
  //       response.json({ success: true });
  //     }
  //   );

  console.log({ name, email, address, phone });
  connection.execute(
    "insert into client (name,email,address,phone) values (?,?,?,?)",
    [name, email, address, phone],
    (error, result) => {
      response.json({ success: true });
    }
  );
});

app.listen(3000, () => {
  console.log("서버 실행");
});

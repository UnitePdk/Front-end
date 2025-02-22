const http = require("http");

const server = http.createServer((request, response) => {
  if (request.url == "/") {
    response.statusCode = 200;
    response.setHeader("Content-Type", "application/json");
    const data = { name: "아메리카노", price: 2500 };
    response.end(JSON.stringify(data));
  } else if (request.url == "/cake") {
    response.statusCode = 200;
    response.setHeader("Content-Type", "application/json");
    const data = { name: "녹차 케이크", price: 6000 };
    response.end(JSON.stringify(data));
  } else {
    response.statusCode = 200;
    response.setHeader("Content-Type", "text/plain; charset=utf-8");
    response.end("존재하지 않는 페이지입니다.");
  }
});

server.listen(3000, "127.0.0.1", () => {
  console.log("커피 서버 시작 ");
});
server.listen(3001, "127.0.0.1", () => {
  console.log("케이크 서버 시작");
});

const express = require("express");
const app = express();
const port = 3000; // 서버 포트번호
//Express에서의 라우트 구조
// app.METHOD(PATH, HANDLER);
// app : Express의 인스턴스, METHOD: HTTP 요청 메서드(ex: GET, POST, PUT, DELETE등), PATH: 서버에서의 경로, HANDLER: 라우트가 일치할때 실행되는 함수
//라우트 메서드 - 클라이언트에서 서버로 요청을 보낼 떄 사용한 HTTP 요청 메서드를 말한다.
// ex) 클라이언트에서 get을 사용해서 HTTP 요청 메서드를 서버로 전송했다면,
// Express 라우트 메서드 역시 get으로 작성된 처리 코드가 있어야 해당 함수가 동작된다.

app.listen(port, console.log("서버 실행할게. http://localhost:${port}"));
//클라이언트에서 HTTP 요청메소드 get 방식으로 'http://localhost3000/customer'를 호출했을때
app.get("/customer", (req, res) => {
  res.send("get에 대한 응답!");
});
//클라이언트에서 HTTP 요청메소드 post 방식으로 'http://localhost3000/customer'를 호출했을때
app.post("/customer", (req, res) => {
  res.send("post에 대한 응답");
});
//클라이언트에서 HTTP 요청메소드 all 방식으로 'http://localhost3000/customer'를 호출했을때
app.all("/customer", (req, res) => {
  res.send("post에 대한 응답");
});
// app.get("/example", (req, res) => {
//   throw new Error("에러발생");
// });
app.use(express.static("public"));
// 라우트 경로(PATH)
// 문자열 패턴 예시
// /a/ -> 클라이언트에서 요청한 라우트 경로에 'a'포함
// /^insert/ '(cd)?'는 문자 'cd'가 0번 혹은 1번 있을 수 있다는 것을 의미

//라우트 HANDLER핸들러 매개변수
//req -> Request로 클라이언트의 요청 정보를 담고 있음
//res -> Response로 클라이언트에게 응답하기 위한 정보를 담고 있음
//next -> 다음 미들웨어 함수를 가리키는 Object

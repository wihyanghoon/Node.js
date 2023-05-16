const express = require("express");
const morgan = require("morgan");

const app = express();
const loggar = morgan("dev");

app.use(loggar);
app.set('port', process.env.PORT || 8080)
app.get("/", (req, res) => {
  res.send("hello world");
});

app.get("/post", (req ,res) => {
  res.send('post')
})

app.listen(app.get('port'), () => {
  console.log("서버실행중");
});

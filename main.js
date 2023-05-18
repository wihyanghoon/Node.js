const express = require("express");
const path = require('path')
const morgan = require("morgan");

const app = express();
const loggar = morgan("dev");

app.use(loggar);
app.set('port', process.env.PORT || 8080)

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, './main.html'))
});

app.get("/post", (req ,res) => {
  res.send('post do it')
})

app.get("/catagory/:name", (req, res) => {
  res.send(`hello ${req.params.name}`)
})

app.listen(app.get('port'), () => {
  console.log("서버실행중");
});

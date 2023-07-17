const { log } = require("console");
const http = require("http");
//const http2 = require('http2'); //https 배포할때

const server = http.createServer((req, res) => {
  console.log("incomming...");
  console.log(req.headers);
  console.log(req.httpVersion);
  console.log(req.method);
  console.log(req.url);
  res.write("Welcome!");
  res.end();
});

server.listen(8080);

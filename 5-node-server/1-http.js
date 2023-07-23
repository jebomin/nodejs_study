const http = require("http");
const fs = require("fs");
//const http2 = require('http2'); //https 배포할때

const server = http.createServer((req, res) => {
  console.log("incomming...");
  console.log(req.headers);
  console.log(req.httpVersion);
  console.log(req.method);
  console.log(req.url);
  res.setHeader("Contetn-Type", "text/html");
  const url = req.url;
  if (url === "/") {
    const read = fs.createReadStream("./html/index.html").pipe(res);
  } else if (url === "/courses") {
    const read = fs.createReadStream("./html/courses.html").pipe(res);
  } else {
    const read = fs.createReadStream("./html/not-found.html").pipe(res);
  }
});

server.listen(8080);

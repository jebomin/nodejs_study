const http = require("http");
const fs = require("fs");
const ejs = require("ejs");
//const http2 = require('http2'); //https 배포할때

const name = "Bomin";
const courses = [
  { name: "HTML" },
  { name: "CSS" },
  { name: "JS" },
  { name: "Node" },
  { name: "Frontend" },
];
const server = http.createServer((req, res) => {
  const url = req.url;
  res.setHeader("Contetn-Type", "text/html");
  if (url === "/") {
    ejs
      .renderFile("./template/index.ejs", { name })
      .then((data) => res.end(data));
  } else if (url === "/courses") {
    ejs
      .renderFile("./template/courses.ejs", { courses })
      .then((data) => res.end(data));
  } else {
    ejs
      .renderFile("./template/not-found.ejs", { name })
      .then((data) => res.end(data));
  }
});

server.listen(8080);

import express from "express";
const app = express();

app.use(express.json());
app.post("/api/*", (req, res, next) => {
  console.log(req.body);
});

app.listen(8080);

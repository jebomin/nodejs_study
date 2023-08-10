import express from "express";
import { body, param, validationResult } from "express-validator";

const app = express();
app.use(express.json());

const validate = (req, res, next) => {
  const errors = validationResult(req);
  if (errors.isEmpty()) {
    return next(); //에러가 없다면 다음 미들웨어
  }
  return res.status(400).json({ message: errors.array()[0].msg }); //에러가 있으면 다음으로 넘어가지 않고 response를 보냄
};

app.post(
  "/users",
  [
    body("name")
      .notEmpty()
      .withMessage("이름을 입력해")
      .trim() //공백이 있다면 공백을 모두 제거
      .isLength({ min: 2 }) //trim을 한 다음에 길이 판단해야함(순서가 중요!)
      .withMessage("이름은 두글자 이상!"),
    body("age").notEmpty().isInt().withMessage("숫자를 입력해"),
    //normalizeEmzail : email을 소문자로
    body("email").isEmail().withMessage("이메일 입력해요").normalizeEmail(),
    body("job.name").notEmpty(),
    validate,
  ],
  (req, res, next) => {
    console.log(req.body);
    res.sendStatus(201);
  }
);

app.get(
  "/:email",
  [param("email").isEmail().withMessage("이메일 입력해요"), validate],
  (req, res, next) => {
    res.send("💌");
  }
);

app.listen(8080);

const fs = require("fs");

//3
//rename(...., callback(error, data)) -> 비동기
//try {renameSync(....)} catch(e){ } -> 동기, 따로 콜백함수 X, 잘못되면 에러 발생 => 끝날 떄까지 안 넘어감, sync는 안쓰는거 추천!
//promises.renamae().then().catch(0)

try {
  fs.renameSync("./text.txt", "./text-new.txt");
} catch (error) {
  console.error(error);
}

fs.rename("./text-new.txt", "./text.txt", (error) => {
  console.log(error);
});
console.log("hello");

fs.promises
  .rename("./text2.txt", "./text-new.txt") //
  .then(() => console.log("Done!"))
  .catch(console.error);

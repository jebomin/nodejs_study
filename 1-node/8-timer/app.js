let num = 1;
const interval = setInterval(() => {
  console.log(num++);
}, 1000); //a1초 = 1000밀리 세컨드

setTimeout(() => {
  console.log("Timeout!");
  clearInterval(interval);
}, 6000);

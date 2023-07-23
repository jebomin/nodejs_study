const { log } = require("console");
const porcess = require("process");

//동기적으로 수행
console.log(process.execPath);
console.log(process.version);
console.log(process.pid);
console.log(process.ppid);
console.log(process.platform);
console.log(process.env);
console.log(process.uptime());
console.log(process.cwd());
console.log(process.cpuUsage());

//비동기적인 과정
setTimeout(() => {
  console.log("setTimeout");
}, 0);

//next tick은 task queue 제일 앞에 넣어줌
process.nextTick(() => {
  console.log("nextTick");
});

//for loop에서 너무 많이 돌리면 안됨
for (let i = 0; i < 100; i++) {
  console.log("for loop");
}

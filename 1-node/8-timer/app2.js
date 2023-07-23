//process.nextThick -> setTimeout -> setImmediate 순으로 동작/이 때 setTimeout과 setImmediate는 거의 동시
console.log("code1");
setTimeout(() => {
  //setTimeout은 0초가 보장되지 않음
  console.log("setTimeout 0");
}, 0);

console.log("code2");
setImmediate(() => {
  console.log("setImmediate");
}, 0);

console.log("code3");
process.nextTick(() => {
  console.log("process.nextThick");
}, 0);

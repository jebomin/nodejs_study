console.log("aaa");
console.clear();

//log level
console.log("log"); //개발
console.info("info"); //중요한 정보
console.warn("warn"); //경보
console.error("error"); //에러, 사용자 에러, 시스템 에러

//assert -> 특정한 조건일 때만 출력하기 원하면 사용
console.assert(2 === 3, "not same!"); //참이 아닌 경우만 출력
console.assert(2 === 2, "same!");

//print object
const student = { name: "bomin", age: 23, company: { name: "dgu" } };
console.log(student);
console.table(student);
console.dir(student, { showHidden: true, colors: false, depth: 0 }); //중첩된 오브젝트를 어디까지 보여주는지 지정

//measuring time
console.time("for loop");
for (let i = 0; i < 10; i++) {
  i++;
}
console.timeEnd("for loop");

//counting
function a() {
  console.count("a function");
}
a();
console.countReset("a function");
a();

//trace
function f1() {
  f2();
}
function f2() {
  f3();
}
function f3() {
  console.log("f3");
  console.trace(); //누가 호출했는지
}
f1();

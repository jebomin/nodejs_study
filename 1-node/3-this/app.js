function hello() {
  console.log(this);
  console.log(this === global); //class 외부에 있는 this는 global임
}

hello();

class A {
  constructor(num) {
    this.num = num;
  }
  memberFunction() {
    console.log("----- class -----");
    console.log(this); // class 안에 있는 this는 class 자체를 가르킴
    console.log(this === global); //global이 아님
  }
}

const a = new A(1);
a.memberFunction();

console.log("---global scope ---");
console.log(this); //clss안도 함수 안에도 있지 않은 this는 global 객체가 아님
console.log(this === module.exports); //module에 있는 exports가 this
//정리 : 브라우저에서는 23번째 줄에 있는 this를 global로 쓰였으나 nodejs에서는 module.exports임
//this는 어디에서 쓰이냐에 따라 문맥이 달리지니 유념하기

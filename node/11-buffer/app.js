//Fixed-size chuck of memory
//array of integers, byte of data

const buf = Buffer.from("Hi"); //unicode로
console.log(buf);
console.log(buf.length);
console.log(buf[0]); //아스키 코드로
console.log(buf[1]); //아스키 코드로
console.log(buf.toString()); //기본 값은 utf-8

//create
const buf2 = Buffer.alloc(2);
const buf3 = Buffer.allocUnsafe(2); //fast -> 그러나 데이터가 들어있을 수 있으니 초기화 하는게 더 좋음
buf2[0] = 72;
buf2[1] = 105;
buf2.copy(buf3);
console.log(buf2.toString());
console.log(buf3.toString());

//concat
const newBuf = Buffer.concat([buf, buf2, buf3]);
console.log(newBuf.toString());

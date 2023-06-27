import { increase, getCount } from "./counter.js";
//전부 다 counter라는 이름으로 가지고 오고 싶다면 아래와 같이(내용적으로는 동일 위에와)
//import * as counter from './counter.js';
//추가로 increase()와 getConut() 앞에 counter 넣기

increase();
increase();
increase();
console.log(getCount());

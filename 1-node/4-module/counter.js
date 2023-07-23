let count = 0;

function increase() {
  count++;
}

function getCount() {
  return count;
}

//exports는 module.exports를 참조하는 참조 값을 가지고 있는 아이
//module.exports.getCount = getCount; exports = {}; exports.increase = increase; 이러면 다른 오브젝트를 할당하고 여기에 인크리즈를 할당했기 때문에 오류
//즉 exports와 module.exports()는 전혀 다른 아이
//그래서 exports = {};이렇게 특정한 아이를 바로 할당하면 위험할 수 있음
module.exports.getCount = getCount;
module.exports.increase = increase; //exports.increase = increase;라고도 가능
console.log(module);

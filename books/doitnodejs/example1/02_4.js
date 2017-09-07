
//객체 안에 함수가 정의된 경우 객체 이름 뒤에 .을 붙이고 함수호출
var calc = {};
calc.add = function(a, b) {
  return a + b;
}
console.log('모듈로 분리전 calc.add: %d', calc.add(10, 10));

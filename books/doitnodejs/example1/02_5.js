 //더하기 함수를 모듈로 분리한 calc.js 모듈 파일을 불러들임 메인파일
 //곱하기 함수를 모률로 분리한 calc2.js 모듈 파일을 불러들이는 메인파일
 
var calc = require('./calc');
console.log('모듈로 분리한 후 calc.add함수 : %d', calc.add(10, 10));

var calc2 = require('./calc2');
console.log('모듈로 분리한 후 calc2.mul함수 : %d', calc2.mul(10,10));

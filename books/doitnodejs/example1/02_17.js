//클로저
function add(a, b, calback) {
  var result = a + b;
  calback(result);

  var count = 0;
  var history = function() {
    count++;
    return count + ' : ' + a + ' + ' + b + ' = ' + result;
  };
  return history;
}

 var history = add (10,10, function(result) {
   console.log('파라미터로 전달된 콜백함수 호출');
   console.log('더하기 (10, 10)의 결과 : %d', result);
 });

 console.log('결과값으로 받은 함수 실행 결과 : ' + history());
 console.log('결과값으로 받은 함수 실행 결과 : ' + history());
 console.log('결과값으로 받은 함수 실행 결과 : ' + history());

//  파라미터로 전달된 콜백함수 호출
//  더하기 (10, 10)의 결과 : 20
//  결과값으로 받은 함수 실행 결과 : 1 : 10 + 10 = 20
//  결과값으로 받은 함수 실행 결과 : 2 : 10 + 10 = 20
//  결과값으로 받은 함수 실행 결과 : 3 : 10 + 10 = 20

function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.walk = function(speed) {
  console.log(speed + 'km 속도로 걸어가');
}

var person01 = new Person('소녀시대', 20);
var person02 = new Person('걸스대이', 21);

console.log(person01.name + '객체의 walk(10)을 호출');
person01.walk(10);
// 소녀시대객체의 walk(10)을 호출
// 10km 속도로 걸어가
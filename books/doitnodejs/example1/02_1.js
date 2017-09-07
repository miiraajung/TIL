var result = 0;
console.time('duration_sum');
for (var i =1; i<= 1000; i++) {
  result += i;
}
console.timeEnd('duration_sum');
console.log('1부터 1000까지 더한 값 : %d', result);

console.log('파일이름: %s',__filename);
console.log('파일패스: %s', __dirname);

var Person = {name: '소녀시대', age:20};
console.dir(Person);

// __fillname 실행한 파일의 이름을 출력, 파일의 전체 패스가 출력
// __dirname 실행한 파일에 들어 있는 폴더를 출력, 파일의 전체 패스가 출력

// dir( ) 매소드를 호출하면 그 객체 안에 모든 속성이 출력

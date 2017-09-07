// p(p소문자)rocess 객체의 주요 속성/메소드이름
// - argv 프로세스를 실행할 때 전달되는 파라미터(매개변수) 정보 ,argv 속성은 배열객체
// - env 환경 변수 정보
// - exit() 프로세스를 끝내는 메소드

console.log('argv 속성의 파라미터 수 : '+ process.argv.length);//p소문자다
console.log(process.argv);
//argv 속성의 파라미터 수 : 2
//[ '/Users/miiraajung/.nvm/versions/node/v8.4.0/bin/node',
//'/Users/miiraajung/Documents/dev/TIL/books/doitnodejs/example1/02_2.js' ]

if (process.argv.length > 2) {
  console.log('세번째 파라미터의 값: %s', process.argv[2]);
}
process.argv.forEach(function(item, index) {
  console.log(index + ' : ', item);
});
//0 :  /Users/miiraajung/.nvm/versions/node/v8.4.0/bin/node
//1 :  /Users/miiraajung/Documents/dev/TIL/books/doitnodejs/example1/02_2.js
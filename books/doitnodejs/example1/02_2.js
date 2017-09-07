// p(p소문자)rocess 객체의 주요 속성/메소드이름
// - argv 프로세스를 실행할 때 전달되는 파라미터(매개변수) 정보 ,argv 속성은 배열객체
// - env 환경 변수 정보
// - exit() 프로세스를 끝내는 메소드
//forEach() 메소드는 배열 안에 들어 있는 각 아이템 값과 인덱스를 함께 전달해서 배열객체에 들어 잇는 값들을 하나씩 확인하기 좋다
//윈도우의 환경변수로 OS 환경변수가 있음

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

console.dir(process.env);
console.log('OS 환경변수의 값 : ' + process.env[OS]);
//  ReferenceError: OS is not defined 
// node의 process.env 속성에 사용자 정의 환경변수만 들어있어서 오류남, process.env속성에 들어있는 속성만으로는 OS같은 시스템 환경변수에 접근 불가
//사용자 정의 환경변수란 현재 사용 중인 윈도우 사용자 계정에만 적용되는 값
//시스템 환경변수란 모든 사용자 계정에 적용되는 값

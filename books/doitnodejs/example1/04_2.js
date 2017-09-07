// EventEmitter의 주요 메소드
// - `on(event, listener)` : 지정한 이벤트 리스너를 추가
// - `once(event, listener)` : 지정한 이벤트의 리스너를 추가하지만 한 번 실행한 후에는 자동으로 리스너가 제거 된다.
// - `removeListener` (event, listener) 지정한 이벤트에 대한 리스너를 제거
// -` emit()` : 이벤트를 다른쪽으로 전달하고 싶을 때 사용

process.on('exit', function() {
  console.log('exit 이벤트 발생');
});

setTimeout(function(){
  console.log('5초 후에 시스템 종료 시도함.');
  process.exit();
},5000);
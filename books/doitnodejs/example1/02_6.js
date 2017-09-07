var nconf = require('nconf')

console.log(nconf.env());
console.log('OS 환경변수의 값 : %s', nconf.get('OS'));
//OS 환경변수의 값 : undefined 멕은 안나오나?

// 시스템 정보를 알려주는 os 모듈 메소드 이름
// - hostname() 운영체제의 호스트 이름을 알려 줌 
// - totalmem() 시스템의 전체 메모리 용량을 알려 줌
// - freemem() 시스템에서 사용가능 한 메모리 용량을 알려줌
// - cpus() cpu 정보를 알려 줌 
// - networkInterfaces() 네트워크 인터페이스 정보를 담은 배열 객체를 반환

var os = require ('os');

console.log('시스템의 hostname : %s', os.hostname());
console.log('시스템 메모리 : %d/ %d', os.freemem(), os.totalmem());
console.log('시스템의 CPU 정보\n');
console.dir(os.cpus());
console.log('시스템의 네트워크 인터페이스 정보\n');
console.dir(os.networkInterfaces());
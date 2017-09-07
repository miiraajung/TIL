var nconf = require('nconf')
console.log(nconf.env());
console.log('OS 환경변수의 값 : %s', nconf.get('OS'));
//OS 환경변수의 값 : undefined 멕은 안나오나?
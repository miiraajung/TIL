// url 내장모듈의 주요 메소드
// - parse() 주요 문자열을 파싱하여 URL 객체를 만들어 줌
// - format() URL 객체를 주소 문자열로 변환  
var url = require('url');
var curURL = url.parse('https://m.search.naver.com/search.naver?query=steve+jobs&where=m&sm=mtp_hty');
var curStr = url.format(curURL);

console.log('주소 문자열 : %s', curStr);
console.dir(curURL);
// 주소 문자열 : https://m.search.naver.com/search.naver?query=steve+jobs&where=m&sm=mtp_hty
// Url {
//   protocol: 'https:',
//   slashes: true,
//   auth: null,
//   host: 'm.search.naver.com',
//   port: null,
//   hostname: 'm.search.naver.com',
//   hash: null,
//   search: '?query=steve+jobs&where=m&sm=mtp_hty',
//   query: 'query=steve+jobs&where=m&sm=mtp_hty',
//   pathname: '/search.naver',
//   path: '/search.naver?query=steve+jobs&where=m&sm=mtp_hty',
//   href: 'https://m.search.naver.com/search.naver?query=steve+jobs&where=m&sm=mtp_hty' }
 
//요청 파라미터 구분
var querystring = require('querystring');
var param = querystring.parse(curURL.query);

console.log('요청 파라미터 중 query의 값 : %s', param.query);
console.log('원본 요청 파라미터 : %s', querystring.stringify(param));
// 요청 파라미터 중 query의 값 : steve jobs
// 원본 요청 파라미터 : query=steve%20jobs&where=m&sm=mtp_hty




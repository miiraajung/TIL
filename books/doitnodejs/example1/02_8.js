// 파일 패스를 다루는 path 모듈
// - join() 여러 개의 이름들을 모두 합쳐 하나의 파일패스로 만들어 줌, 파일 패스을 완성할 때 구분자 등을 알아서 조정 함
// - dirname() 파일 패스에서 디렉터리 이름을 반환 
// - basename() 파일 패스에서 파일의 확장자를 제외한 디렉터리 이름을 반환
// - extname() 파일 패스에서 파일의 확장자를 반환
var path = require('path');

//디렉토리 합치기
var directories = ['users','mike','docs'];
var docsDirectory = directories.join(path.sep);
console.log(path.sep);
console.log('문서 디렉토리 : %s', docsDirectory);
///
//문서 디렉토리 : users/mike/docs

//디렉토리명과 파일명 합치기
var curPath = path.join('/User/mike', 'notepad.exe');
console.log('파일 패스 : %s', curPath);
//파일 패스 : /User/mike/notepad.exe

//패스에서 디렉토리, 파일명, 확장자 구분하기
var filename = 'C::\\Users\\mike\\notepad.exe';
var dirname = path.dirname(filename);
var basename = path.basename(filename);
var extname = path.extname(filename);
console.log('디렉토리 : %s, 파일 이름 : %s, 확장자 : %s', dirname, basename, extname);
//디렉토리 : ., 파일 이름 : C::\Users\mike\notepad.exe, 확장자 : .exe

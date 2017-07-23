# syntax
## 1.셀렉터
```css
h1{color:red; font-size:12px;}
```
` h1` 셀렉터  
`color : red ` 프로터티 값(선언)   
`전체` CSS Rule Set  
- 룰셋의 집합을 스타일 시트라한다.
---

## 2.프로퍼티(property,속성)와 값(value,속성값)
- css를 선언할 때에는 요소를 선택하고 {}안에 프로퍼티와 속성값을 넣는다.
- W3C에서 표준스팩으로 지정한 프로퍼티와 그에 해당되는 값들중에 선택하여 사용한다.
---

## 3.HTML과 CSS의 연동 
- css를 가지고 있지 않은 HTML은 브라우저에서 정해놓은 초기값(디폴트값)이 적용된다.
### 3-1.Link style
- 첫번째 방법은 HTML에서 외부에 있는 CSS 파일을 `<link>`로 연결하는 것이다. 

``` html
<title>hello world</title>
<link rel="stylesheet" href="css/style.css">
``` 

### 3_2.Embedding style
-  두번째는 HTML 내부의 `<head>` 안에 `<style>`를 넣어서 CSS를 포함시키는 방법이다.

``` html
<head>
  <style>
    h1{color:red;}
  </style> 
</head> 
```
### 3_3.Inline style
- 세번째는 HTML내부의 원하는 태그안에 style 프로퍼티를 사용해 스타일을 지정하는 것이다. 
```  html
<body>
  <p style="background:yellow">hellow world<p>
<body>
```



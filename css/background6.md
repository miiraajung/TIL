# Background
## 1.background-image
- `background-image:url("http://poiemaweb.com/img/bg/dot.png");`
### 2개를 넣는 경우
- `background-image:url("http://poiemaweb.com/img/bg/dot.png"),url("http://poiemaweb.com/img/bg/paper.gif");`
- `background-repeat: no-repeat, repeat;`
   - 여러개를 설정한 경우, 먼저 적힌 이미지가 앞에 출력된다.
---

## 2.background-repeat 프로퍼티
- `repeat-x`
- `repeat-y`
- `none`
---

## 3.background-size 프로퍼티
- `background-size:700px 500px;`
  - 하나의 값만 지정하면 width를 의미하고 height는 auto가 된다.(공백으로 구분)
- `%`
- `cover`
  -  배경이미지의 크기 비율을 유지한 상태에서 부모 요소의 width,height 중 큰 값에 이미지를 맞추므로 보이지 않는 부분이 있을 수 있다.
- `contain`
 - 배경이미지의 크기비율을 유지한 상태에서 전체가 들어 간다. 화면에 여백이 생길수 있다.
 ---

 ## 4.background-attachment 프로퍼티  
- `background-attachment:fixed;`
  - 배경이미지 고정
---
## 5.background-position 프로퍼티
- `background-position:top;`
  - top, bottom, center, left, right, %, (10px 20px, center 두개 지정시)
--- 
 ## 6.background Shorthand
- `background :#ffee99 url( ) norepeat fixed center;`
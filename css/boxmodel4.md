# Box Model
##  박스모델
`content`
- 요소의 텍스트나 실제내용, width, heigt 프로퍼티를 갖는다
`padding`
- 컨텐츠영역과  보더의 사이에 위치, 요소에 적용된 배경의 컬러, 이미지는 패딩영역까지 적용된다.
`border`
- 테두리 영역으로 border 프로퍼티 값은 테두리의 두께를 의미
`margin`
- 테두리 바깥에 위치하는 영역이다.
---

### box-sizing
`boxsizing="boder-box"`
- 컨텐츠, 패딩, border가 포함됨 영역까지 width, height 프로퍼티의 대상으로 지정할 수 있다.
---

## block 요소
- width : 부모요소의 100%
- height : 컨텐츠의 높이
- width 와 height 지정가능

## in-line 요소 
- in-line 요소는 블럭요소를 감쌀 수 없다.(다만 HTML의경우 a요소 제외)

### overflow, overflow-x, overflow-y
- height 값이 컨텐츠 영역보다 작으면 흘러넘친다.
- `visible`
  -  초기값
- `auto`
  - 컨텐츠 넘치면 스크롤바 적용
- `scroll`
  - 항상 스크롤바 만듬
- `hidden`
  - 넘치면 잘라냄
--- 

## border style
- border-width, border-style과 함께 사용해야 한다.
### border-radius
`border-radius:20px;`
`borer-top-left-radius:50px 25px;`
`border-radius: ulx urx lrx llx/ uly ury lry lly;`

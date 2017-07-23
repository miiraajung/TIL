# Display
## 1.display 프로퍼티
- `bolck`
  - 계행이 된다.
  - width,height,margin,padding을 지정할 수 있다.

- `inline`
  - 계행되지 않는다.
  - 컨첸츠의 넓이만큼 가로폭을 차지한다.
  - width, height, margin-top,margin-bottom 프로퍼티를 지정할 수 없다. 상,하 여백은 line-height로 지정한다.
- `inline-block`
  - 계행되지 않지만 width, height, margin, padding 프로퍼티를 모두 정의할 수 있다.
 inline-block 뒤에 공백은 4px이 자동으로 띄어지기 때문에 해결을 위한 방법이 있다.
 [공백해결방법](https://css-tricks.com/fighting-the-space-between-inline-block-elements/)
- `none` 
---

## 2.visibility 프로퍼티
- `visible`
  - 해당 요소를 보이게 한다.(기본값)
- `hidden`
  - 해당 요소를 보이지 않게 한다. 그러나 해당 요소의 공간은 사라지지 않고 남아있게 된다.
- `collapse`
  - table 요소에 사용하며 행이나 열을 보이지 않게 한다.
- `none` 
  - table 요소의 row나 column을 보이지 않게 한다.IE,파이어폭스에서만 동작하고 크롬에서는 hidden과 동일하게 동작한다.
  ---

## 3.opacity 프로퍼티
- `div{opacity:0.5;}`
  - 0은 투명 1은 불투명


# selector
- HTML 요소를 선택하여 style을 적용하기 위해서는 HTML안에 요소를 다양하게 선택 할 수 있어야 한다.
## 1.전체 셀렉터 (모든요소를 선택할 수 있다.)
`*{color:red;}`

## 2.태그 셀렉터 (지정된 태그이름을 가지는 요소를 선택한다.)
`div{border:2px solid green;}`

## 3.ID 셀렉터 (id 어트리뷰트 값을 지정하여 일치하는 요소를 선택한다.)
- id속성은 하나뿐인 이름을 사용한다.  
``` html
<div id="box"></div>
```
`#.box{border:1px solid black;`}
## 4.Class 셀렉터 (class  어트리뷰트 값을 지정하여 일치하는 요소를 선택한다.)
- class 속성은 여러개의 요소에 사용가능하며 한꺼번에 여러 선택자를 선택할 수 있게 해준다. 
- HTML 요소에 class 어트리뷰트 값은 공백으로 여러개 지정가능 하다.
``` html
<div class="box"></div>
<p class="box"></p>
<p class="box tex-red">나 클래스 2개다!<p>
```
`.box{color:red;}`

## 5.어트리뷰트 셀렉터 (속성을 사용해 선택한다.)
- a 요소중에 href 어트리뷰트를 갖는 모든요소
`a[hef]{color:red;}`

-  a 요소중에  target 어트리뷰트 값이 "_blank" 인 모든요소
`a[target="_blank"]{color:red;}`

- a 요소 중에 href 어트리뷰트 값이 "https://"로 시작하는 요소
`a[href^="https://]{color:red;}`

- a 요소 중에 href 어트리뷰트 값이 ".html"로 끝나는 요소
`a[href$=".html"]{color:red;}`

----
- *div 요소 중에 class 어트리뷰트 값에 "test"를 `단어` 로 포함하는 요소*
`div[class~="test"]{background-color:yellow;}`
```html
<div class="test">나 class~="test에 속해</div>
```

- *div 요소 중에서 class 어트리뷰트 값에 "test"를 `글자` 로 포함하는 요소*
`div[class*="test"]{color:red}`
```html
<div class="first_test">나 class*="test"에 속해</div>
<div class="test">나 ~,* 둘다 해당되</div>
```
---
## 6.후손,자식,형제셀렉터
- 후속은 한 칸 띄고 자식은 > 로 표시
- p요소의 형제 요소 중에 p 요소 바로 뒤에 위치하는 ul 요소 선택  
`p + ul { } `
- p 요소의 형제 요소 중에 p 요소 뒤에 위치하는 ul 요소를 모두 선택  
`p ~ ul { }`
---
## 7. 가상 클래스 셀렉터
:link ,:visited,:hover,:active,:focus  
:checked, :enabled, :disabled  
:first-child, :last-child
:nth-child(n), :nth-last-child(n)
- `p:first-of-type{ }`
  - p 요소의 부모 요소의 자식 요소 중 첫번째 등장하는 p요소

- `P:last-of-type{ }`
   - p 요소의 부모 요소의 자식 요소 중 마지막 등장하는 p요소

- `p:nth-of-type(2){ }`  
  - P 요소의 부모 요소의 자식 요소 중 앞에서 2번째에 등장하는 p요소

- `p:nth-last-of-type{ }`
  - p 요소의 부모 요소의자식 요소 중 뒤에서 2번째에 등장하는 p요소  

- `p:first-child{ }` 
  - p:요소 중에서 첫번째 자식을 선택

---
### 부정 셀렉터
- `input:not([type=password]){ }`
    - input 요소 중에서 type 어트리뷰트의 값이 password가 아닌 요소를 선택
## 8.가상 요소 셀렉터
::first-letter, :first-line, ::after, ::before, ::selection   


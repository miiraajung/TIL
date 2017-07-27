# Effect
## 1. 벤더 프리픽스
- Prefix Free라이브러리 를 다운로드해 사용하면 좋다.
    -  `<script src="prefixfree.min.js"></script>`  

## 2. 그림자
### 2_1. text-shadow
- `text-shadow: 5px 5px 3px red;`

### 2_2. box-shadow
- `box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);`
---

## 3. 그레이디언트
- `background: -webkit-linear-gradient(-45deg, #b3cae5 12%, #dbdde4 46%, #e4e3e4 70%, #f7ddbb 94%, #efcab2 100%);`

## 4. 트랜지션
- div에 transition을 설정하면 마우스가 올라갈 때와 마우스가 내려올 때 모두 transition이 발동한다. 하지만 div:hover에 transition을 설정하면 마우스가 올라갈 때만 이벤트가 발생한다.
- 가상 클래스 선택자와 같은 이벤트나 액션에 의해 발생하고 자동으로 발생되지는 않는다.

### transition-property, transition-duration,transition-delay

- `transition-property: width, background-color;    transition-duration: 2s, 2s;`

### transition shorthand로 한꺼번에 지정
`transition: property duration function delay`
---

## 5.애니메이션
- 에니메이션 효과는 복수의 키프레임(@keyframs)들로 이루어 진다.
 
-  animation-name
    - `@keyframes move {}`
-  animation-duration
    - `animation-duration: 5s;`
-  animation-delay
    - `animation-delay: 2s;`
-  animation-iteration-count    
    - `animation-iteration-count: 3;`


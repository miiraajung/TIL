# Float
## 1.정렬
- float 프로퍼티는 좌측,우측 정렬만 가능 
- 마진 사용가능  
- 컨텐츠의 사이즈에 맞게 최소화 되고 뜬다.
---
## 2.문제들
### 2_1. float 선언된 요소와 float 프러퍼티가 선언되지 않은 요소간 margin 사라지는 문제
- float이 선언되지 않은 문제이기 때문에 `overflow:hidden`을 하면 제대로 표현되지 못하는 요소를 제대로 출력해준다.

### 2_2. float 프로퍼티를 가진 부모요소가 자식요소를 포함하지 못하고 높이를 가지지 못하는 문제
- overflow: hidden;
- 영역 끝나기 직전 clear:both를 설정
- display:inline-block; 사용
    - [inline-block사용시 문제점](https://css-tricks.com/fighting-the-space-between-inline-block-elements/)
```css
.clearfix:after{
    content:"";
    display:block;
    clear:both;
}
```

 
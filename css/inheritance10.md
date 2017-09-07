# Inheritance & Cascading
## 1. 상속
- 대부분 글씨관련 프로퍼티가 상속  
- 상속되지 않는 프로퍼티라도 상속하고 싶으면 inherit 키워드를 사용하여 상속받게 할 수 있다.
---

## 2.캐스캐이딩
- 중요도: CSS가 선언된 위치에 따라 우선순위가 달라진다.
    - head 요소내의 style 요소`<link>`로 연결된 CSS 파일 > 브라우저 디폴트 스타일시트
    
- 명시도: 대상을 명확하게 특정할 수록 명시도가 높아진다.
    - important > 인라인 스타일 > 아이디 선택자 > 클래스/속성/가상 선택자 > 태그 선택자 > 전체 선택자 > 상위 요소에 의해 상속된 속성
- 선언된 순서에 따라 우선 순위가 적용된다.
 

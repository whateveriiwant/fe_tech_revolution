# FE_Tech_Revolution

> 2023-2 한국외대 웹 프로그래밍 평가 과제 코드 리포지토리입니다.
> 
> https://whateveriiwant.github.io/fe_tech_revolution/

## 기술 스택
HTML, CSS Module, JavaScript, React

## 파일 구조
```
├── node_modules
├── package-lock.json
├── package.json
├── public
└── src
    ├── App.js
    ├── assets
    ├── components
    │   └── Header // 헤더
    │       ├── Header.jsx // 헤더 메인 컴포넌트
    │       ├── Header.module.css // 헤더 css module
    │       ├── HeaderButton.jsx // 헤더 버튼
    │       └── HeaderButton.module.css // 헤더 버튼 css module
    ├── index.js
    ├── pages // 페이지들
    │   ├── FuturePage // 미래 페이지
    │   │   ├── FuturePage.jsx
    │   │   └── FuturePage.module.css
    │   ├── HistoryPage // 역사 페이지
    │   │   ├── HistoryPage.jsx
    │   │   ├── HistoryPage.module.css
    │   │   ├── TimeLine.jsx
    │   │   └── TimeLineItem.jsx
    │   ├── LearnPage // 학습 페이지
    │   │   ├── Item.jsx
    │   │   ├── LearnPage.jsx
    │   │   └── LearnPage.module.css
    │   ├── MainPage // 메인 페이지
    │   │   ├── MainPage.jsx // MainPage에 Page1/2/3 컴포넌트를 넣어 분할 작업
    │   │   ├── MainPage.module.css
    │   │   ├── Page1 // 메인 페이지를 세 파트로 나누어 작업 -> Page1/2/3
    │   │   │   ├── Page1.jsx
    │   │   │   └── Page1.module.css
    │   │   ├── Page2
    │   │   │   ├── Page2.jsx
    │   │   │   ├── Page2.module.css
    │   │   │   └── components // 페이지 내 컴포넌트들 분할 작업
    │   │   │       ├── Future.jsx
    │   │   │       ├── History.jsx
    │   │   │       ├── Learn.jsx
    │   │   │       └── Trend.jsx
    │   │   └── Page3
    │   │       ├── Page3.jsx
    │   │       ├── Page3.module.css
    │   │       └── ShowModal.jsx // 버튼 누를 시 모달 출력
    │   └── TrendPage // 트렌드 페이지
    │       ├── Cols // 세 열로 나누어 컴포넌트 분할 작업
    │       │   ├── Col1
    │       │   │   ├── Col1.jsx
    │       │   │   └── Col1.module.css
    │       │   ├── Col2
    │       │   │   ├── Col2.jsx
    │       │   │   └── Col2.module.css
    │       │   └── Col3
    │       │       ├── Col3.jsx
    │       │       └── Col3.module.css
    │       ├── ShowModal.jsx
    │       ├── TrendPage.jsx
    │       └── TrendPage.module.css
    ├── styles
    │   └── index.css // 전체적인 스타일링
    └── utils
        ├── ModalPortal.js // React Portal을 사용해 모달 구현
        └── ScrollToTop.js // SPA 특성상 라우팅된 페이지 이동 시 스크롤이 그대로 유지 -> 스크롤을 항상 맨 위로 올려줌
```

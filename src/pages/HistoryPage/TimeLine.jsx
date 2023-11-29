import { TimelineItem } from "./TimeLineItem";
import styles from "./HistoryPage.module.css";

const timelineData = [
  {
    text: "HTML의 등장",
    date: "1990년",
    link: {
      url: "https://hyoje420.tistory.com/22",
      text: "자세히 알아보기",
    },
    brief: "웹의 탄생과 함께 가장 기본적인 마크업 언어인 HTML의 등장",
  },
  {
    text: "JavaScript의 탄생",
    date: "1995년 12월 4일",
    link: {
      url: "https://velog.io/@jmkacc99/JavaScript-%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8%EC%9D%98-%EC%97%AD%EC%82%AC",
      text: "자세히 알아보기",
    },
    brief: "웹 페이지에 동적인 요소를 추가할 수 있게 해주는 JavaScript의 개발",
  },
  {
    text: "CSS가 발표되다",
    date: "1996년 12월 17일",
    link: {
      url: "http://wiki.hash.kr/index.php/CSS",
      text: "자세히 알아보기",
    },
    brief:
      "웹 페이지의 디자인과 레이아웃을 제어하는 스타일시트 언어인 CSS의 표준화",
  },
  {
    text: "AJAX 기술 등장",
    date: "2005년 2월 18일",
    link: {
      url: "https://velog.io/@olzlel2000/Ajax-%EC%9D%98-%EA%B0%9C%EB%85%90",
      text: "자세히 알아보기",
    },
    brief:
      "JavaScript를 이용해 비동기적으로 서버와 데이터를 교환할 수 있는 AJAX 기술 등장",
  },
  {
    text: "jQuery 라이브러리 출시",
    date: "2006년 8월 26일",
    link: {
      url: "https://ko.khanacademy.org/computing/computer-programming/html-js-jquery/jquery-dom-access/a/history-of-jquery",
      text: "자세히 알아보기",
    },
    brief:
      "JavaScript를 단순화하여 더 쉽게 사용할 수 있도록 해주는 jQuery 출시",
  },
  {
    text: "반응형 웹 디자인 개념 도입",
    date: "2010년",
    link: {
      url: "http://wiki.hash.kr/index.php/%EB%B0%98%EC%9D%91%ED%98%95%EC%9B%B9",
      text: "자세히 알아보기",
    },
    brief: "다양한 화면 크기에 대응하는 웹 디자인 개념인 반응형 웹 디자인 도입",
  },
  {
    text: "JavaScript 프레임워크의 등장",
    date: "2010년대",
    link: {
      url: "https://blog.rhostem.com/posts/2022-05-27-Four-Eras-of-JavaScript-Frameworks",
      text: "자세히 알아보기",
    },
    brief:
      "React, Vue, Angular 등의 웹 앱 개발을 더 효율적으로 만들 JavaScript 프레임워크들의 등장",
  },
  {
    text: "TypeScript의 등장",
    date: "2012년 10월 1일",
    link: {
      url: "https://velog.io/@kungsboy/%ED%83%80%EC%9E%85%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8Typescript-%EC%86%8C%EA%B0%9C",
      text: "자세히 알아보기",
    },
    brief:
      "JavaScript의 단점을 보완하고, 더 강력한 기능을 제공하는 TypeScript의 등장",
  },
  {
    text: "ECMAScript 6 표준화",
    date: "2015년 6월",
    link: {
      url: "https://erokuma.tistory.com/entry/%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8%EC%9D%98-%EC%97%AD%EC%82%AC%EC%99%80-ECMAScript-%EB%8C%80%ED%95%B4",
      text: "자세히 알아보기",
    },
    brief:
      "여러 문법의 추가로 프론트엔드 개발에 많은 변화를 가져온 ECMAScript 6 표준화",
  },
];
export const TimeLine = () => {
  return (
    <>
      <div className={styles.timeline_container}>
        {timelineData.map((data, idx) => (
          <>
            <TimelineItem data={data} key={idx} />
          </>
        ))}
      </div>
      <p className={styles.end}>이후로 계속 현재까지 이어집니다.</p>
    </>
  );
};

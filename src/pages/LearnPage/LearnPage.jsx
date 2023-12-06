import { Fade } from "react-reveal";
import { Item } from "./Item";
import styles from "./LearnPage.module.css";

const text = [
  {
    number: "01",
    title: "JavaScript 기초 다지기",
    description:
      "프론트엔드에서 가장 많이 사용하는 언어, JavaScript로 프로그래밍의 기본기를 다집니다.",
    link: "https://www.codeit.kr/topics/getting-started-with-javascript",
  },
  {
    number: "02",
    title: "HTML/CSS 개념 다지기",
    description:
      "프론트엔드 개발의 기본인 웹 페이지의 구조를 만들고 디자인을 입히는 방법을 배웁니다.",
    link: "https://www.codeit.kr/topics/intro-to-web-publishing",
  },
  {
    number: "03",
    title: "JavaScript 중급",
    description:
      "웹 개발에 꼭 필요한 JavaScript 중급기와 문법에 대해 배웁니다.",
    link: "https://www.codeit.kr/topics/modern-javascript",
  },
  {
    number: "04",
    title: "React 기초",
    description:
      "가장 핫한 프론트엔드 라이브러리인 React로 간편하게 퀄리티 높은 웹 페이지를 만들어 봅시다.",
    link: "https://www.codeit.kr/topics/getting-started-with-react",
  },
  {
    number: "05",
    title: "React 심화",
    description:
      "심화적인 상태관리와 라우팅, 그리고 React로 데이터를 다루는 방법에 대해 알아봅니다.",
    link: "https://www.codeit.kr/topics/handling-data-with-react",
  },
  {
    number: "06",
    title: "Next.js 웹 개발",
    description:
      "Next.js를 통해 클라이언트 뿐만 아니라 서버 쪽에서도 React를 사용하는 방법을 배웁니다.",
    link: "https://www.codeit.kr/topics/building-a-website-with-nextjs",
  },
  {
    number: "07",
    title: "라이브러리/프레임워크 활용",
    description:
      "styles-components, Tailwind CSS 등 React를 더 효과적으로 사용할 수 있는 방법을 배웁니다.",
    link: "https://www.codeit.kr/topics/styled-components",
  },
  {
    number: "08",
    title: "TypeScript",
    description:
      "JavaScript의 단점을 완벽히 보완한 TypeScript로 웹 개발 실무 역량을 키울 수 있습니다.",
    link: "https://www.codeit.kr/topics/typescript-basic",
  },
];

export const LearnPage = () => {
  return (
    <Fade>
      <div className={styles.LearnPage}>
        <h1 className={styles.h1}>프론트엔드 로드맵</h1>
        {text.map((item, idx) => (
          <Item
            key={idx}
            number={item.number}
            title={item.title}
            description={item.description}
            link={item.link}
          />
        ))}
      </div>
    </Fade>
  );
};

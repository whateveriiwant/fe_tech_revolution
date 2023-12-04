import { useState } from "react";
import { ShowModal } from "../../ShowModal";
import styles from "./Col3.module.css";
import ts from "../../../../assets/ts.svg";
import dark from "../../../../assets/dark.webp";
import responsive from "../../../../assets/responsive.png";

const text = {
  text1: (
    <p>
      TypeScript는 Microsoft에서 개발한 오픈 소스 프로그래밍 언어입니다. <br />
      JavaScript의 상위 집합으로, 정적 타입을 지원하여 개발자가 코드를 더욱
      안정적으로 작성할 수 있게 해줍니다. <br />
      <br />
      TypeScript의 주요 특징은 다음과 같습니다: <br />
      <br />
      1. 정적 타입 시스템: TypeScript는 변수, 함수, 객체 등에 타입을 명시하여
      컴파일 시간에 오류를 검출할 수 있습니다. <br />
      이를 통해 개발자는 타입 관련 버그를 사전에 방지하고 코드의 안정성을 높일
      수 있습니다. <br />
      <br />
      2. ES6+ 지원: TypeScript는 최신 JavaScript의 기능을 지원합니다. <br />
      따라서 JavaScript로 작성된 코드를 TypeScript로 마이그레이션하는 것이
      비교적 쉽습니다. <br />
      <br />
      3. 강력한 개발 도구: TypeScript는 코드 완성 기능, 정적 분석, 리팩토링 등을
      지원하는 강력한 개발 도구를 제공합니다. <br />
      이를 통해 개발자는 생산성을 향상시키고 유지 보수를 용이하게 할 수
      있습니다. <br />
      <br />
      TypeScript는 JavaScript의 단점을 보완하고 개발자의 생산성과 코드의
      안정성을 높이는 강력한 언어입니다. <br />
      JavaScript와 함께 사용되며, JavaScript 생태계와의 호환성을 유지하면서 더욱
      안정적인 개발을 할 수 있습니다.
    </p>
  ),
  text2: (
    <p>
      다크 모드는 사용자들에게 선택의 자유를 주고, 시각적인 편의성과 에너지
      효율성을 제공하는 중요한 기능입니다.
      <br />
      <br /> 프론트엔드 개발에서 다크 모드를 고려하는 것은 사용자 경험을
      향상시키고, 사용자들의 다양한 요구에 대응하는 데 도움이 됩니다.
      <br />
      <br />
      다크 모드는 사용자 인터페이스(UI)를 어두운 색상으로 표시하는 모드입니다.
      <br />
      기본적으로 밝은 테마를 사용하는 대신, 어두운 배경과 밝은 텍스트를 조합하여
      시각적인 경험을 제공합니다. <br />
      이는 사용자에게 선택적인 시각적 환경을 제공하고, 눈의 피로를 줄이고,
      에너지 소비를 절약하는 등의 장점을 가지고 있습니다. <br />
      <br />
      프론트엔드 개발에서 다크 모드를 적용하는 것은 중요한 이유가 있습니다.
      <br />
      <br />
      여기에는 다음과 같은 이점들이 있습니다: <br />
      사용자 선호도: 다크 모드는 사용자들 사이에서 인기가 있는 선택지입니다.
      <br />
      일부 사용자는 밝은 테마보다 어두운 테마를 선호하며, 이는 개인적인 취향이나
      시각적인 편의성에 기인할 수 있습니다.
      <br /> 다크 모드를 제공함으로써 사용자들에게 선택의 폭을 넓혀주고, 사용자
      경험을 개선할 수 있습니다. <br />
      <br />
      시각적 편의성: 다크 모드는 밝은 환경에서 작업하는 동안 발생할 수 있는 눈의
      피로를 줄여줍니다. <br />
      특히, 저조한 조명 환경이나 야간 사용 시에는 더욱 효과적입니다.
      <br /> 어두운 배경과 밝은 텍스트는 눈의 스트레인을 줄여 시각적인 편안함을
      제공합니다. <br />
      <br />
      에너지 효율성: 다크 모드는 화면의 밝기를 낮추어 에너지 소비를 줄일 수
      있습니다. <br />
      모바일 기기나 노트북과 같은 배터리 작동 장치에서는 배터리 수명을 연장하는
      데 도움이 됩니다. <br />
      이는 사용자들에게 에너지 효율적인 옵션을 제공하고, 환경에 대한 지속 가능한
      선택을 장려합니다. <br />
      <br />
      프론트엔드 개발에서 다크 모드를 구현하는 방법은 다양합니다.
      <br />
      <br /> CSS를 사용하여 스타일을 변경하거나, JavaScript를 사용하여 사용자의
      환경 설정에 따라 테마를 동적으로 변경하는 등의 방법이 있습니다. <br />
      <br />
      React와 같은 프레임워크를 사용하면 컴포넌트 기반 접근 방식을 통해 다크
      모드를 쉽게 구현할 수 있습니다.
      <br />
      <br /> 다크 모드는 사용자들에게 선택의 자유를 주고, 시각적인 편의성과
      에너지 효율성을 제공하는 중요한 기능입니다. <br />
      <br />
      프론트엔드 개발에서 다크 모드를 고려하는 것은 사용자 경험을 향상시키고,
      사용자들의 다양한 요구에 대응하는 데 도움이 됩니다.
    </p>
  ),

  text3: (
    <p>
      반응형 디자인은 웹 애플리케이션이나 웹사이트가 다양한 디바이스와 화면
      크기에 대해 자동으로 조정되는 디자인 접근 방식입니다.
      <br />
      <br /> 이를 통해 사용자는 모바일 기기, 태블릿, 데스크톱 등 다양한 환경에서
      일관된 사용자 경험을 얻을 수 있습니다. <br />
      <br />
      반응형 디자인은 CSS 미디어 쿼리를 사용하여 화면 크기에 따라 스타일과
      레이아웃을 동적으로 조정합니다. <br />
      <br />
      예를 들어, 모바일 화면에서는 네비게이션 메뉴가 햄버거 아이콘으로
      축소되거나, 레이아웃이 단순화되어 사용자가 콘텐츠를 쉽게 읽을 수 있도록
      합니다. <br />
      반면, 데스크톱 화면에서는 넓은 공간을 활용하여 다양한 콘텐츠를 표시할 수
      있습니다. <br />
      <br />
      반응형 디자인은 사용자 경험을 향상시키는데 도움이 됩니다. <br />
      모바일 사용자는 화면이 작고 터치 인터페이스를 사용하기 때문에 콘텐츠에
      쉽게 접근하고 조작할 수 있어야 합니다. <br />
      데스크톱 사용자는 더 많은 콘텐츠를 한 번에 볼 수 있으므로, 레이아웃이 넓고
      다양한 기능을 제공해야 합니다.
      <br />
      <br /> 반응형 디자인을 구현하기 위해 React와 같은 프론트엔드 프레임워크를
      사용할 수 있습니다.
    </p>
  ),
};

export const Col3 = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [paragraph, setParagraph] = useState("");

  const modalOpenHandler = (name) => {
    if (name === "c1") {
      setParagraph(text.text1);
    } else if (name === "c2") {
      setParagraph(text.text2);
    } else if (name === "c3") {
      setParagraph(text.text3);
    }

    setModalOpen(!modalOpen);
  };

  return (
    <div className={styles.col3}>
      {modalOpen && (
        <ShowModal onOpenModal={modalOpenHandler} text={paragraph} />
      )}
      <div className={styles.col3_c1} onClick={() => modalOpenHandler("c1")}>
        <img src={ts} alt="ts" style={{ width: "4.5rem", height: "auto" }} />
        <p>
          단점은 없다,
          <br /> TypeScript
        </p>
      </div>
      <div className={styles.col3_c2} onClick={() => modalOpenHandler("c2")}>
        <img
          src={dark}
          alt="dark mode"
          style={{ width: "7rem", height: "auto" }}
        />
        <p>
          소중한 내 눈 지키기, <br /> 다크 모드
        </p>
      </div>
      <div className={styles.col3_c3} onClick={() => modalOpenHandler("c3")}>
        <img
          src={responsive}
          alt="responsive"
          style={{ width: "10rem", height: "auto" }}
        />
        <p>
          모든 기기에서 <br /> 완벽한 내 웹 앱
        </p>
      </div>
    </div>
  );
};

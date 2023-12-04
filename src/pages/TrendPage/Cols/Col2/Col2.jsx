import { useState } from "react";
import { ShowModal } from "../../ShowModal";
import styles from "./Col2.module.css";
import react from "../../../../assets/react-light.svg";
import vue from "../../../../assets/vue.svg";
import angular from "../../../../assets/angular.svg";
import svelte from "../../../../assets/svelte.svg";
import server from "../../../../assets/server.png";
import tailwind from "../../../../assets/tailwindcss-light.svg";

const text = {
  text1: (
    <p>
      React, Vue, Angular, Svelte와 같은 JS 프레임워크는 현대 웹 개발에서 매우
      인기가 높습니다.
      <br />
      <br />
      이들 프레임워크는 각각의 특징과 장점을 가지고 있으며, 개발자들에게 다양한
      선택지를 제공합니다.
      <br />
      <br />
      React는 Facebook에서 개발된 UI 라이브러리로, 가상 DOM을 활용하여 성능을
      최적화하고 컴포넌트 기반의 개발 방식을 지원합니다.
      <br />
      React는 커뮤니티의 활발한 지원과 다양한 생태계를 가지고 있어 많은
      개발자들이 선택하는 프레임워크입니다.
      <br />
      <br /> Vue는 Evan You가 개발한 프로그레시브 프레임워크로, 가볍고 직관적인
      문법을 가지고 있습니다.
      <br />
      Vue는 컴포넌트 기반의 개발 방식을 지원하며, 가상 DOM을 사용하여 성능을
      향상시킵니다. <br />
      Vue는 쉬운 학습 곡선과 유연한 구조로 인해 많은 개발자들이 선호하는
      프레임워크입니다.
      <br />
      <br /> Angular는 Google에서 개발된 프레임워크로, 대규모 애플리케이션
      개발에 적합합니다. <br />
      Angular는 타입스크립트를 기반으로 하며, 강력한 기능과 다양한 도구를
      제공합니다. <br />
      Angular는 강력한 데이터 바인딩과 테스트 기능을 가지고 있어, 엔터프라이즈
      애플리케이션에 많이 사용되는 프레임워크입니다. <br />
      <br />
      Svelte는 Rich Harris가 개발한 컴파일러 기반의 프레임워크로, 가볍고 빠른
      성능을 가지고 있습니다. <br />
      Svelte는 컴파일 시에 가상 DOM을 생성하지 않고, 컴포넌트를 직접 변환하여
      최적화된 코드를 생성합니다. <br />
      이를 통해 런타임 성능을 향상시키고 번들 크기를 줄일 수 있습니다. <br />
      <br />
      이들 프레임워크는 각각의 특징과 장점을 가지고 있으며, 개발자들은
      프로젝트의 요구사항과 선호도에 따라 적합한 프레임워크를 선택할 수
      있습니다.
      <br /> 또한, 이들 프레임워크는 지속적으로 발전하고 있으며, 커뮤니티와
      생태계의 지원을 받으며 더욱 강력해지고 있습니다.
    </p>
  ),

  text2: (
    <p>
      서버 사이드 렌더링(Server Side Rendering, SSR)은 웹 애플리케이션의 초기
      렌더링을 서버에서 처리하는 방식입니다.
      <br /> 기존의 클라이언트 사이드 렌더링(Client Side Rendering, CSR)과는
      다르게, 서버 사이드 렌더링은 서버에서 HTML을 생성하여 클라이언트에게
      전달합니다.
      <br />
      <br /> 서버 사이드 렌더링의 주요 이점은 다음과 같습니다. <br />
      <br />
      첫째, 초기 로딩 속도가 향상됩니다. <br />
      CSR은 클라이언트에서 JavaScript를 다운로드하고 실행한 후에야 화면이
      렌더링되기 때문에 초기 로딩 속도가 느릴 수 있습니다.
      <br /> 반면, SSR은 서버에서 미리 렌더링된 HTML을 전달하기 때문에 초기 로딩
      속도가 빠릅니다. <br />
      <br />
      둘째, 검색 엔진 최적화(SEO)가 용이합니다. <br />
      CSR은 검색 엔진이 JavaScript를 실행하지 못하고, 페이지의 내용을 인식하지
      못하는 경우가 있습니다.
      <br /> 하지만 SSR은 서버에서 미리 렌더링된 HTML을 제공하기 때문에 검색
      엔진이 페이지의 내용을 쉽게 인식할 수 있습니다. <br />
      <br />
      셋째, 사용자 경험이 향상됩니다.
      <br /> CSR은 초기 로딩 이후에는 빠른 페이지 전환과 동적인 사용자 경험을
      제공할 수 있지만, 초기 로딩 속도가 느릴 수 있습니다. <br />
      SSR은 초기 로딩 속도가 빠르기 때문에 사용자는 빠른 페이지 전환과 즉각적인
      콘텐츠 확인을 경험할 수 있습니다. <br />
      <br />
      하지만 SSR에는 몇 가지 고려해야 할 사항이 있습니다. <br />
      첫째, 서버 부하가 증가할 수 있습니다. <br />
      SSR은 서버에서 렌더링을 처리하기 때문에 서버의 부하가 증가할 수 있습니다.
      <br />
      따라서 적절한 서버 환경과 성능 최적화가 필요합니다. <br />
      <br />
      둘째, 클라이언트 사이드 렌더링과의 조화가 필요합니다. <br />
      일부 페이지는 CSR을 사용하여 동적인 기능을 제공해야 할 수도 있습니다.
      <br /> 이 경우에는 서버 사이드 렌더링과 클라이언트 사이드 렌더링을
      조합하여 최적의 사용자 경험을 제공할 수 있습니다.
      <br />
      <br /> 서버 사이드 렌더링은 웹 애플리케이션의 성능과 검색 엔진 최적화를
      개선하는 강력한 도구입니다. <br />
      그러나 프로젝트의 요구사항과 특성에 따라 SSR을 적용할지 여부를 결정해야
      합니다.
      <br />
      <br /> 적절한 상황에서 SSR을 사용하면 사용자 경험과 성능을 향상시킬 수
      있습니다.
    </p>
  ),
  text3: (
    <p>
      Utility-First CSS는 CSS 작성 방법 중 하나로, 작은 단위의 유틸리티 클래스를
      조합하여 스타일을 적용하는 방식입니다. <br />
      <br />이 방법은 전통적인 CSS 작성 방식과는 다르게, 클래스 단위로 스타일을
      정의하고 HTML 요소에 적용하는 방식을 취합니다.
      <br />
      <br /> Utility-First CSS의 주요 특징은 다음과 같습니다: <br />
      <br />
      단순하고 직관적인 스타일 적용: 유틸리티 클래스는 간단하고 직관적인 이름을
      가지며, 스타일을 적용하기 위해 필요한 최소한의 코드만을 포함합니다. <br />
      예를 들어, .text-center 클래스는 텍스트를 가운데 정렬하는 스타일을
      적용합니다. <br />
      <br />
      재사용 가능한 스타일: 유틸리티 클래스는 작은 단위로 스타일을 정의하므로,
      다양한 요소에 재사용할 수 있습니다.
      <br /> 예를 들어, .bg-red 클래스는 배경색을 빨간색으로 설정하는 스타일을
      적용하며, 여러 요소에 적용할 수 있습니다.
      <br />
      <br /> 빠른 개발 속도: 유틸리티 클래스를 사용하면 스타일을 빠르게 적용할
      수 있습니다. <br />
      클래스를 HTML 요소에 추가하기만 하면 되므로, 스타일을 일일이 정의하고
      선택자를 작성하는 번거로움을 줄일 수 있습니다. <br />
      <br />
      유지 보수 용이성: 유틸리티 클래스는 작은 단위로 스타일을 정의하므로,
      스타일 변경이 필요한 경우 해당 클래스만 수정하면 됩니다. <br />
      이는 코드의 재사용성과 유지 보수성을 높여줍니다.
      <br />
      <br /> Utility-First CSS는 프로젝트의 규모와 요구사항에 따라 적합한 경우가
      있습니다. <br />
      <br />
      작은 규모의 프로젝트에서는 빠른 개발 속도와 유지 보수 용이성을 제공하며,
      대규모 프로젝트에서는 일관된 스타일 적용과 재사용성을 통해 효율적인 개발을
      도와줍니다. <br />
      <br />
      하지만 Utility-First CSS는 클래스의 조합으로 스타일을 적용하기 때문에,
      클래스 이름의 충돌이 발생할 수 있습니다.
      <br />
      <br /> 이를 방지하기 위해 네이밍 규칙을 잘 정의하고, 스타일 가이드라인을
      따르는 것이 중요합니다. <br />
      <br />
      Utility-First CSS는 Tailwind CSS와 같은 CSS 프레임워크에서 주로 사용되며,
      이러한 프레임워크를 사용하면 더욱 편리하게 Utility-First CSS를 적용할 수
      있습니다.
    </p>
  ),
};

export const Col2 = () => {
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
    <div className={styles.col2}>
      {modalOpen && (
        <ShowModal onOpenModal={modalOpenHandler} text={paragraph} />
      )}
      <div className={styles.col2_c1} onClick={() => modalOpenHandler("c1")}>
        <div>
          <img
            src={react}
            alt="react"
            style={{ width: "4rem", height: "auto", marginRight: "0.5rem" }}
          />
          <img
            src={vue}
            alt="vue"
            style={{ width: "4rem", height: "auto", marginRight: "0.5rem" }}
          />
          <img
            src={angular}
            alt="angular"
            style={{ width: "4rem", height: "auto", marginRight: "0.5rem" }}
          />
          <img
            src={svelte}
            alt="svelte"
            style={{ width: "4rem", height: "auto" }}
          />
        </div>
        <p>다양한 JS 프레임워크들</p>
      </div>
      <div className={styles.col2_c2} onClick={() => modalOpenHandler("c2")}>
        <img
          src={server}
          alt="server"
          style={{ width: "13rem", height: "auto" }}
        />
        <p>모든 렌더링은 서버로</p>
      </div>
      <div className={styles.col2_c3} onClick={() => modalOpenHandler("c3")}>
        <img
          src={tailwind}
          alt="tailwind"
          style={{ width: "4.5rem", height: "auto" }}
        />
        <p>Utility-First CSS</p>
      </div>
    </div>
  );
};

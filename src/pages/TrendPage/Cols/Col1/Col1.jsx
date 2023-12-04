import { useState } from "react";
import { ShowModal } from "../../ShowModal";
import component from "../../../../assets/component.svg";
import styles from "./Col1.module.css";
import pwa from "../../../../assets/pwa.png";
import vite from "../../../../assets/vite.png";

const text = {
  text1: (
    <p>
      컴포넌트 기반 개발은 현대의 웹 개발에서 널리 사용되는 소프트웨어 개발
      패러다임입니다. <br />
      이 패러다임은 소프트웨어를 작은 독립적인 부분으로 나누고, 이러한 부분들을
      조합하여 복잡한 애플리케이션을 구축하는 방식입니다.
      <br />
      <br /> 컴포넌트는 재사용 가능한 독립적인 단위로, 애플리케이션의 다양한
      부분을 구성하는 데 사용됩니다.
      <br /> 각 컴포넌트는 자체적으로 동작하며, 필요한 데이터와 기능을 내장하고
      있습니다. <br />
      이러한 컴포넌트들은 계층 구조로 구성되어 있으며, 부모 컴포넌트와 자식
      컴포넌트 사이의 상호작용을 통해 애플리케이션을 구성합니다.
      <br />
      <br /> 컴포넌트 기반 개발은 다음과 같은 이점을 제공합니다:
      <br />
      <br /> 재사용성: 컴포넌트는 독립적으로 작동하므로, 다른 프로젝트나 다른
      부분에서 쉽게 재사용할 수 있습니다. 이는 개발 생산성을 향상시키고 코드의
      중복을 줄여줍니다. <br />
      <br />
      유지 보수 용이성: 각 컴포넌트는 독립적으로 관리되므로, 수정이나 업데이트가
      필요한 경우 해당 컴포넌트만 수정하면 됩니다. 이는 코드의 유지 보수를
      간편하게 만들어줍니다. <br />
      <br />
      가독성: 컴포넌트 기반 개발은 애플리케이션의 구조를 명확하게 표현할 수
      있습니다. 각 컴포넌트는 특정 기능을 수행하므로, 코드를 이해하기 쉽고
      가독성이 높아집니다. <br />
      <br />
      테스트 용이성: 각 컴포넌트는 독립적으로 테스트할 수 있으므로, 테스트
      작성이 간편해집니다. 이는 애플리케이션의 품질을 향상시키고 버그를 더 쉽게
      찾을 수 있게 해줍니다.
      <br />
      <br /> 컴포넌트 기반 개발은 React, Vue.js, Angular 등의 프레임워크에서
      널리 사용되는 개발 방법론입니다.
      <br />
      <br />
      이러한 프레임워크는 컴포넌트 기반 개발을 지원하며, 컴포넌트의 생성, 조작,
      상태 관리 등을 간편하게 처리할 수 있는 기능을 제공합니다. <br />
      컴포넌트 기반 개발은 현대의 웹 개발에서 필수적인 개념이며, 애플리케이션의
      확장성, 유지 보수성, 재사용성을 향상시키는 데 큰 도움이 됩니다.
    </p>
  ),

  text2: (
    <p>
      PWA(Progressive Web App)는 웹 애플리케이션과 네이티브 앱의 장점을 결합한
      형태의 애플리케이션입니다. PWA는 웹 기술을 사용하여 개발되며, 사용자가 웹
      브라우저를 통해 접근할 수 있습니다. 하지만 PWA는 네이티브 앱과 유사한
      사용자 경험을 제공합니다.
      <br />
      <br />
      PWA는 다음과 같은 특징을 가지고 있습니다:
      <br />
      <br />
      1. 오프라인 작동: PWA는 오프라인에서도 작동할 수 있습니다. 이는 사용자가
      인터넷에 연결되어 있지 않은 상황에서도 애플리케이션을 사용할 수 있다는
      의미입니다. PWA는 브라우저의 캐싱 기능을 사용하여 필요한 리소스를
      저장하고, 오프라인 상태에서도 이를 활용하여 애플리케이션을 실행합니다.
      <br />
      <br />
      2. 설치 가능: PWA는 사용자의 디바이스에 설치할 수 있습니다. 사용자는 웹
      브라우저를 통해 PWA에 접근하고, 앱을 설치할 수 있는 옵션을 제공받을 수
      있습니다. 이를 통해 사용자는 앱 아이콘을 홈 화면에 추가하고, 웹 브라우저를
      통해 애플리케이션을 실행할 수 있습니다.
      <br />
      <br />
      3. 푸시 알림: PWA는 푸시 알림 기능을 지원합니다. 이는 서버에서
      애플리케이션 사용자에게 메시지를 보낼 수 있는 기능을 의미합니다. 사용자는
      애플리케이션을 실행하지 않은 상태에서도 서버로부터의 알림을 받을 수
      있습니다.
      <br />
      <br />
      4. 반응형 디자인: PWA는 다양한 디바이스에서 동일한 사용자 경험을 제공할 수
      있습니다. PWA는 반응형 디자인을 적용하여, 사용자의 디바이스 크기에 맞게
      애플리케이션의 레이아웃과 디자인을 조정합니다.
      <br />
      <br />
      PWA는 웹 개발자들에게 다음과 같은 이점을 제공합니다:
      <br />
      <br />
      - 앱 스토어에 등록하지 않고도 애플리케이션을 배포할 수 있습니다.
      <br />
      - 다양한 플랫폼에서 동일한 애플리케이션을 실행할 수 있습니다.
      <br />
      - 개발 및 유지 보수 비용을 절감할 수 있습니다.
      <br />
      - 사용자 경험을 향상시킬 수 있습니다.
      <br />
      <br />
      PWA는 현대적인 웹 개발의 핵심 기술 중 하나로, 웹 애플리케이션의 성능과
      사용자 경험을 향상시키는 데 큰 역할을 합니다.
    </p>
  ),
  text3: (
    <p>
      Vite는 CRA(Create React App)를 대체할 수 있는 빠르고 경량화된 개발
      도구입니다. Vite는 ES 모듈을 사용하여 개발 서버를 실행하고, 빌드 시에는
      Rollup을 사용하여 최적화된 번들을 생성합니다. 이를 통해 개발 환경에서의
      빠른 속도와 프로덕션 환경에서의 효율적인 번들링을 제공합니다.
      <br />
      <br />
      Vite는 기본적으로 HMR(Hot Module Replacement)을 지원하여 수정된 모듈만
      다시 빌드하고 새로고침할 수 있습니다. 또한, Vite는 브라우저에서 모듈을
      직접 로딩하여 빠른 초기 로딩 속도를 제공합니다.
      <br />
      <br />
      Vite는 React, Vue.js, TypeScript 등 다양한 프레임워크와 언어를 지원하며,
      간단한 설정과 빠른 개발 속도를 제공합니다. CRA와 비교하여 Vite는 더
      가벼우며, 개발자들에게 더 나은 개발 경험을 제공합니다.
    </p>
  ),
};

export const Col1 = () => {
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
    <div className={styles.col1}>
      {modalOpen && (
        <ShowModal onOpenModal={modalOpenHandler} text={paragraph} />
      )}
      <div className={styles.col1_c1} onClick={() => modalOpenHandler("c1")}>
        <img
          src={component}
          alt="component"
          style={{ width: "6rem", height: "auto" }}
        />
        <p>
          컴포넌트
          <br /> 기반 개발
        </p>
      </div>
      <div className={styles.col1_c2} onClick={() => modalOpenHandler("c2")}>
        <img src={pwa} alt="pwa" style={{ width: "13rem", height: "auto" }} />
        <p>웹 + 네이티브 앱</p>
      </div>
      <div className={styles.col1_c3} onClick={() => modalOpenHandler("c3")}>
        <img
          src={vite}
          alt="vite"
          style={{ width: "5.5rem", height: "auto" }}
        />
        <p>
          CRA는 안녕, <br /> 이젠 Vite의 시대
        </p>
      </div>
    </div>
  );
};

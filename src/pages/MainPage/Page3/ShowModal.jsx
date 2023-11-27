import { useEffect, useRef } from "react";
import ModalPortal from "../../../utils/ModalPortal";
import styles from "./Page3.module.css";

export const ShowModal = ({ onOpenModal, text }) => {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    document.addEventListener("mousedown", outsideClickHandler);
    return () => {
      document.body.style.overflow = "auto";
      document.removeEventListener("mousedown", outsideClickHandler);
    };
  }, []);

  const outsideClickHandler = (e) => {
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      onOpenModal();
    }
  };

  const modalRef = useRef(null);

  return (
    <ModalPortal>
      <div className={styles.modal}>
        <div className={styles.modal_item} ref={modalRef}>
          <p>
            현재 시대에서 웹 기술은 빠르게 변화하고 발전하고 있다. <br /> 특히
            프론트엔드 개발 분야는 다른 분야에 비해 두드러지게 새로운 기술이
            많이 나오는 편이고, UX를 직접적으로 결정하는 중요한 역할을 한다.
            <br />
            <br />
            이러한 변화 속에서 프론트엔드 개발자들은 항상 최신 기술 트렌드를
            파악하고, 이를 활용하는 능력이 요구된다. <br /> 그러나, 기술의 빠른
            변화와 정보의 바다 속에서 내가 필요한 정보를 찾고 이해하는 것은 쉽지
            않다. <br />
            <br /> 이러한 문제를 해결하기 위해 ‘프론트엔드 기술의 변화’를 주제로
            한 웹 페이지를 제안한다. <br /> 이 웹 페이지는 프론트엔드 기술의
            역사, 트렌드, 미래의 기술 등을 중심으로 개발자들이 필요한 정보를
            쉽게 찾을 수 있도록 돕는다. <br /> 또한 학습 자원 페이지를 통해
            개발자들이 새로운 기술을 익히는 데 도움을 줄 수 있다. <br />
            <br /> 이 웹 페이지를 통해 프론트엔드 개발자들이 기술의 변화를 쉽게
            이해하고, 빠르게 적응할 수 있도록 돕는 것이 나의 최종 목표이다.
            <br />
            <br /> 이 웹 페이지의 개발을 통해 기술의 변화를 함께 이해하고, 더
            나은 프론트엔드 개발 문화를 만드는 데 기여하고자 한다.
          </p>
        </div>
      </div>
    </ModalPortal>
  );
};

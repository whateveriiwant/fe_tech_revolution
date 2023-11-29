import styles from "./Page3.module.css";
import html from "../../../assets/html.svg";
import css from "../../../assets/css.svg";
import javascript from "../../../assets/javascript.svg";
import react from "../../../assets/react.svg";
import { ShowModal } from "./ShowModal";
import { useState } from "react";
import Fade from "react-reveal/Fade";

export const Page3 = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const modalOpenHandler = () => {
    setModalOpen(!modalOpen);
  };

  return (
    <div className={styles.page3} id="page3">
      {modalOpen && <ShowModal onOpenModal={modalOpenHandler} />}
      <Fade bottom duration={1800} delay={50}>
        <div>
          <h1 className={styles.h1}>
            이 웹 페이지에 사용된 <br /> 프론트엔드 기술
          </h1>
          <div className={styles.container1}>
            <a
              href="https://developer.mozilla.org/ko/docs/Learn/HTML/Introduction_to_HTML/Getting_started"
              target="_blank"
              rel="noreferrer"
            >
              <img className={styles.img} src={html} alt="html" />
            </a>
            <a
              href="https://developer.mozilla.org/ko/docs/Learn/Getting_started_with_the_web/CSS_basics"
              target="_blank"
              rel="noreferrer"
            >
              <img className={styles.img} src={css} alt="css" />
            </a>
            <a
              href="https://developer.mozilla.org/ko/docs/Web/JavaScript"
              target="_blank"
              rel="noreferrer"
            >
              <img className={styles.img} src={javascript} alt="javascript" />
            </a>
            <a href="https://react.dev/" target="_blank" rel="noreferrer">
              <img className={styles.img} src={react} alt="react" />
            </a>
          </div>
        </div>
        <div style={{ marginLeft: "10rem" }}>
          <h1 className={styles.h1}>
            이 페이지에 대하여 <br /> 자세히 알아보기
          </h1>
          <button onClick={modalOpenHandler} className={styles.button}>
            알아보기
          </button>
        </div>
      </Fade>
    </div>
  );
};

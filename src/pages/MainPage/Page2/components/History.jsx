import styles from "../Page2.module.css";
import history from "../../../../assets/history.svg";
import { Link } from "react-router-dom";

export const History = () => {
  return (
    <>
      <Link to="/history" style={{ textDecoration: "none" }}>
        <div className={styles.history}>
          <img src={history} alt="history" />
          <div className={styles.history_text}>
            <p className={styles.p1}>기술의 역사</p>
            <p className={styles.p2}>
              현대 웹 개발의 진화를 보여주는 웹 프론트엔드 기술의 변천사를
              알아봅니다.
            </p>
          </div>
        </div>
      </Link>
    </>
  );
};

import styles from "../Page2.module.css";
import future from "../../../../assets/future.svg";
import { Link } from "react-router-dom";

export const Future = () => {
  return (
    <>
      <Link to="/future" style={{ textDecoration: "none" }}>
        <div className={styles.history}>
          <img src={future} alt="future" />
          <div className={styles.history_text}>
            <p className={styles.p1}>미래의 기술</p>
            <p className={styles.p2}>
              웹 표준의 변화 등 새로운 기술에 관한 예측과 설명을 제공합니다.
            </p>
          </div>
        </div>
      </Link>
    </>
  );
};

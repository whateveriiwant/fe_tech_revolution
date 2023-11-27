import styles from "../Page2.module.css";
import trend from "../../../../assets/trend.svg";
import { Link } from "react-router-dom";

export const Trend = () => {
  return (
    <>
      <Link to="/trend" style={{ textDecoration: "none" }}>
        <div className={styles.history}>
          <img className={styles.img} src={trend} alt="trend" />
          <div className={styles.history_text}>
            <p className={styles.p1}>현재 트렌드</p>
            <p className={styles.p2}>
              날마다 새로운 기술이 등장하는 웹 프론트엔드! 이에 대한 현재 기술
              트렌드를 알아봅니다.
            </p>
          </div>
        </div>
      </Link>
    </>
  );
};

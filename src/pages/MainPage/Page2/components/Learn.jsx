import styles from "../Page2.module.css";
import learn from "../../../../assets/learn.svg";
import { Link } from "react-router-dom";

export const Learn = () => {
  return (
    <>
      <Link to="learn" style={{ textDecoration: "none" }}>
        <div className={styles.history}>
          <img className={styles.img} src={learn} alt="learn" />
          <div className={styles.history_text}>
            <p className={styles.p1}>학습 자원</p>
            <p className={styles.p2}>
              어떻게 공부해야할지 막막하다면, 프론트엔드 개발 학습에 동무이 될
              수 있는 자료를 여기서 알아보세요.
            </p>
          </div>
        </div>
      </Link>
    </>
  );
};

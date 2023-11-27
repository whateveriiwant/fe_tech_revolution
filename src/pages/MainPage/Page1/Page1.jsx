import styles from "./Page1.module.css";
import main from "../../../assets/main.png";
import video from "../../../assets/bg.mp4";

export const Page1 = () => {
  return (
    <>
      <video src={video} muted autoPlay loop />
      <div className={styles.page1}>
        <img src={main} alt="Main" className={styles.image} />
        <div id="main">
          <p className={styles.h2}>
            날마다 변하는 <span>프론트엔드</span>, <br /> 어떻게 따라잡을까?
          </p>
          <div className={styles.p1}>
            <p className={styles.paragraph}>FE Tech Evolution으로</p>
            <p className={styles.paragraph}>
              변화에 강한 프론트엔드 개발자가 될 수 있어요.
            </p>
          </div>
          <a href="#page2">
            <button className={styles.button}>자세히 알아보기</button>
          </a>
        </div>
      </div>
    </>
  );
};

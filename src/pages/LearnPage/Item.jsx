import styles from "./LearnPage.module.css";
import arrow from "../../assets/arrow.svg";

export const Item = (props) => {
  const openNewTabHandler = (url) => {
    window.open(url, "_blank", "noopener, noreferrer");
  };

  return (
    <div
      className={styles.wrap_roadmap}
      onClick={() => openNewTabHandler(props.link)}
    >
      <div className={styles.roadmap_item}>
        <div className={styles.step}>
          <span>STEP</span>
          {props.number}
        </div>
        <div className={styles.container}>
          <p className={styles.title}>{props.title}</p>
          <p className={styles.p}>{props.description}</p>
        </div>
        <img
          src={arrow}
          alt="arrow"
          style={{ width: "2rem", height: "auto" }}
        />
      </div>
    </div>
  );
};

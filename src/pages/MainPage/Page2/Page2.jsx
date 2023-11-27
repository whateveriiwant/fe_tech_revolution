import styles from "./Page2.module.css";
import { Future } from "./components/Future";
import { History } from "./components/History";
import { Learn } from "./components/Learn";
import { Trend } from "./components/Trend";

export const Page2 = () => {
  return (
    <div className={styles.page2} id="page2">
      <div className={styles.container}>
        <History />
        <Trend />
      </div>
      <div style={{ height: "1.3rem" }} />
      <div className={styles.container}>
        <Future />
        <Learn />
      </div>
      <div style={{ height: "3rem" }} />
      <a href="#page3">
        <span></span>
        <div style={{ height: "2.8rem" }} />
        Scroll
      </a>
    </div>
  );
};

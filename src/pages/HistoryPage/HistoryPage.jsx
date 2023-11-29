import { TimeLine } from "./TimeLine";

import styles from "./HistoryPage.module.css";

export const HistoryPage = () => {
  return (
    <div className={styles.HistoryPage}>
      <TimeLine />
    </div>
  );
};

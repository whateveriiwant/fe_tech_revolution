import styles from "./MainPage.module.css";
import { Page1 } from "./Page1/Page1";
import { Page2 } from "./Page2/Page2";
import { Page3 } from "./Page3/Page3";

export const MainPage = () => {
  return (
    <div className={styles.MainPage}>
      <Page1 />
      <Page2 />
      <Page3 />
    </div>
  );
};

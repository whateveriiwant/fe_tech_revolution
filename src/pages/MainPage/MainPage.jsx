import styles from "./MainPage.module.css";
import { Header } from "../../components/Header/Header";
import { Page1 } from "./Page1";
import { Page2 } from "./Page2";

export const MainPage = () => {
  return (
    <div className={styles.MainPage}>
      <Header />
      <Page1 />
      <Page2 />
    </div>
  );
};

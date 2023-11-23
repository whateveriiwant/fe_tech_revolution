import styles from "./MainPage.module.css";
import { Header } from "../../components/Header/Header";

export const MainPage = () => {
  return (
    <div className={styles.MainPage}>
      <Header />
    </div>
  );
};

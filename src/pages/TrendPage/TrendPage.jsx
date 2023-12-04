import styles from "./TrendPage.module.css";
import { Col1 } from "./Cols/Col1/Col1";
import { Col2 } from "./Cols/Col2/Col2";
import { Col3 } from "./Cols/Col3/Col3";
import { Fade } from "react-reveal";

export const TrendPage = () => {
  return (
    <div className={styles.TrendPage}>
      <Fade duration={1200} delay={50}>
        <Col1 />
        <Col2 />
        <Col3 />
      </Fade>
    </div>
  );
};

import styles from "./Page2.module.css";
import { useRef } from "react";

export const Page2 = (props) => {
  const page2Ref = useRef();

  const scrollHandler = () => {
    page2Ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return <div className={styles.page2} ref={page2Ref}></div>;
};

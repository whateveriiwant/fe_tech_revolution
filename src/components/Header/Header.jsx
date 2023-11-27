import { useEffect, useState } from "react";
import styles from "./Header.module.css";
import { HeaderButton } from "./HeaderButton";
import { useLocation } from "react-router-dom";

export const Header = () => {
  const location = useLocation(); // 현재 URL 정보를 가져옴
  const [scrollPosition, setScrollPosition] = useState(false); // 스크롤 시 헤더 색상 변화를 위한 state
  const scrollUpdateHandler = () => {
    setScrollPosition(window.scrollY || document.documentElement.scrollTop);
  };
  useEffect(() => {
    window.addEventListener("scroll", scrollUpdateHandler);
    return () => {
      window.removeEventListener("scroll", scrollUpdateHandler);
    };
  }, []);

  return (
    <div className={scrollPosition ? styles.fillheader : styles.header}>
      <p className={styles.title}>FE Tech Evolution</p>
      <div className={styles.nav}>
        <HeaderButton text="메인" onPath={location.pathname === "/"} path="/" />
        <HeaderButton
          text="역사"
          onPath={location.pathname === "/history"}
          path="/history"
        />
        <HeaderButton
          text="트렌드"
          onPath={location.pathname === "/trend"}
          path="/trend"
        />
        <HeaderButton
          text="미래"
          onPath={location.pathname === "/future"}
          path="/future"
        />
        <HeaderButton
          text="학습"
          onPath={location.pathname === "/learn"}
          path="/learn"
        />
      </div>
    </div>
  );
};

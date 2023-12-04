import { useEffect, useRef } from "react";
import ModalPortal from "../../utils/ModalPortal";
import styles from "./TrendPage.module.css";

export const ShowModal = ({ onOpenModal, text }) => {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    document.addEventListener("mousedown", outsideClickHandler);
    return () => {
      document.body.style.overflow = "auto";
      document.removeEventListener("mousedown", outsideClickHandler);
    };
  }, []);

  const outsideClickHandler = (e) => {
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      onOpenModal();
    }
  };

  const modalRef = useRef(null);

  return (
    <ModalPortal>
      <div className={styles.modal}>
        <div className={styles.modal_item} ref={modalRef}>
          {text}
        </div>
      </div>
    </ModalPortal>
  );
};

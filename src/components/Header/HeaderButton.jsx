import { useNavigate } from "react-router-dom";
import styles from "./HeaderButton.module.css";

export const HeaderButton = (props) => {
  const navigate = useNavigate();
  const onClickHandler = () => {
    navigate(props.path);
  };

  return (
    <>
      <div
        onClick={onClickHandler}
        className={props.onPath ? styles.pathButton : styles.button}
      >
        {props.text}
      </div>
    </>
  );
};

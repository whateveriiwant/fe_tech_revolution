import styles from "./HistoryPage.module.css";
import Fade from "react-reveal/Fade";

export const TimelineItem = ({ data }) => {
  return (
    <Fade duration={2000} delay={50}>
      <div className={styles.timeline_item}>
        <div className={styles.timeline_item_content}>
          <time>{data.date}</time>
          <p>{data.text}</p>
          {data.brief && <span className={styles.brief}>{data.brief}</span>}
          {data.link && (
            <a href={data.link.url} target="_blank" rel="noopener noreferrer">
              {data.link.text}
            </a>
          )}
          <span className={styles.circle} />
        </div>
      </div>
    </Fade>
  );
};

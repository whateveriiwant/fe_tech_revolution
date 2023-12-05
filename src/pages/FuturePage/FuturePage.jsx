import styles from "./FuturePage.module.css";
import serverless from "../../assets/functions-1.avif";
import webapp from "../../assets/webapp.png";
import realtime from "../../assets/realtime.png";
import { Fade } from "react-reveal";

export const FuturePage = () => {
  return (
    <Fade>
      <div className={styles.FuturePage}>
        <div className={styles.wrap_serverless}>
          <img
            src={serverless}
            className={styles.serverless}
            alt="serverless"
            style={{ width: "100%", height: "auto" }}
          />
          <p className={styles.serverless_p1}>
            보다 <span>Serverless</span> 하게
          </p>
          <p className={styles.serverless_p2}>
            백엔드의 로직 영역은 점점 프론트엔드로 내려오고 있고 <br />
            백엔드는 데이터를 교환하고 저장하고 관리하는 인프라의 영역으로
            확대되고 있습니다. <br />
            데이터를 다루는 로직은 점점 더 프론트엔드가 담담하게 되면서
            클라우드를 통해 <br />
            서버 없이 작업을 하는 형태로 발전하고 있습니다. <br />
            대표적인 Serverless 플랫폼으로 Azure Functions가 있습니다.
          </p>
        </div>
        <div className={styles.wrap_webapp}>
          <div>
            <img
              src={webapp}
              alt="webapp"
              style={{ width: "30rem", height: "auto" }}
            />
            <div
              style={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              <p className={styles.webapp_p1}>
                보다 <span>애플리케이션</span>처럼
              </p>
              <p className={styles.webapp_p2}>
                초창기 문서 단위로 데이터를 보내고 새로고침이 되는 방식에서{" "}
                <br />
                새로고침이 아니라 일부 영역만 업데이트되는 방식으로, 또다시
                데이터만 <br />
                업데이트되는 방식으로 발전해 나가면서, 데이터를 수정하고
                조작하고 저장하는 <br />
                방식이 훨씬 더 정교해지고 있습니다. <br />
                앱이 보편화되면서 인터랙션에 대한 눈높이가 올라가면서 자연스럽게
                페이지 단위가 아니라 <br />
                요소별로 처리할 수 있는 UI의 고도화가 이루어지고 있습니다.
              </p>
            </div>
          </div>
        </div>
        <div className={styles.wrap_realtime}>
          <img
            src={realtime}
            alt="realtime"
            style={{ width: "100%", height: "auto", opacity: "0.25" }}
          />

          <p className={styles.realtime_p1}>
            보다 <span>실시간</span>으로
          </p>
          <p className={styles.realtime_p2}>
            게시판에서, SNS, 메신저, 방송으로 점점 데이터의 교환 속도가 <br />
            빨라지는 방향으로 발전을 하고 있습니다. <br />
            메타버스에서는 완전히 실시간으로 연결될 상황을 상상하고 있죠. <br />
            조금 더 데이터를 실시간으로 다루는 형식의 서비스들로 발전을 하고
            있습니다. <br />
            슬랙, 노션, 피그마, 게더타운 등의 서비스가 있죠.
          </p>
        </div>
      </div>
    </Fade>
  );
};

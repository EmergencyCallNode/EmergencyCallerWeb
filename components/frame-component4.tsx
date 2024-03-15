import type { NextPage } from "next";
import styles from "./frame-component4.module.css";

const FrameComponent4: NextPage = () => {
  return (
    <header className={styles.logo21Parent}>
      <img
        className={styles.logo21}
        loading="lazy"
        alt=""
        src="/logo-2-11@2x.png"
      />
      <div className={styles.lOGORECTWrapper}>
        <nav className={styles.lOGORECT}>
          <div className={styles.ubuildingurssinterfaceWrapper}>
            <div className={styles.ubuildingurssinterface}>
              <img
                className={styles.ubuildingIcon}
                loading="lazy"
                alt=""
                src="/ubuilding.svg"
              />
              <div className={styles.schoolsWrapper}>
                <div className={styles.schools}>Schools</div>
              </div>
            </div>
          </div>
          <div className={styles.lOGORECTInner}>
            <div className={styles.urssInterfaceParent}>
              <img
                className={styles.urssInterfaceIcon}
                loading="lazy"
                alt=""
                src="/urssinterface@2x.png"
              />
              <div className={styles.deviceWrapper}>
                <div className={styles.device}>Device</div>
              </div>
            </div>
          </div>
          <div className={styles.ellipseParent}>
            <img
              className={styles.frameChild}
              alt=""
              src="/ellipse-1980@2x.png"
            />
            <div className={styles.jerryLouisWrapper}>
              <div className={styles.jerryLouis}>Jerry Louis</div>
            </div>
            <div className={styles.fichevronDownWrapper}>
              <img
                className={styles.fichevronDownIcon}
                alt=""
                src="/fichevrondown.svg"
              />
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default FrameComponent4;

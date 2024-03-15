import type { NextPage } from "next";
import styles from "./frame-component2.module.css";

const FrameComponent2: NextPage = () => {
  return (
    <header className={styles.logo21Parent}>
      <img
        className={styles.logo21}
        loading="lazy"
        alt=""
        src="/logo-2-11@2x.png"
      />
      <div className={styles.frameWrapper}>
        <div className={styles.frameParent}>
          <div className={styles.frameContainer}>
            <div className={styles.ubuildingParent}>
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
          <div className={styles.frameDiv}>
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
        </div>
      </div>
    </header>
  );
};

export default FrameComponent2;

import type { NextPage } from "next";
import styles from "./frame-component.module.css";

const FrameComponent: NextPage = () => {
  return (
    <div className={styles.buttonBaseInner}>
      <div className={styles.emailFieldParent}>
        <div className={styles.emailField}>
          <h1 className={styles.h1}>“</h1>
          <img
            className={styles.emailFieldChild}
            loading="lazy"
            alt=""
            src="/group-18551.svg"
          />
        </div>
        <div className={styles.inputLabel}>
          <div className={styles.loremIpsumDolorContainer}>
            <p className={styles.loremIpsumDolor}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna
            </p>
            <p className={styles.blankLine}>&nbsp;</p>
            <p className={styles.aliquaUtEnim}>
              aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
              laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
              dolor in reprehenderit in voluptate velit esse cillum dolore eu
              fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
              proident, sunt in culpa qui officia deserunt mollit anim id est
              laborum.
            </p>
          </div>
          <h3 className={styles.alexHales}>Alex Hales</h3>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent;

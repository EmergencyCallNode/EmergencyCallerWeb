import type { NextPage } from "next";
import styles from "./quote-mark-right.module.css";

const QuoteMarkRight: NextPage = () => {
  return (
    <section className={styles.quoteMarkRight}>
      <div className={styles.reviewsContainer}>
        <div className={styles.subtitleArea}>
          <h2
            className={styles.loremIpsumDolor}
          >{`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt `}</h2>
          <div className={styles.backgroundGradient}>
            <div className={styles.loremIpsumDolor1}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna
            </div>
          </div>
        </div>
      </div>
      <div className={styles.logoContainerWrapper}>
        <div className={styles.logoContainer}>
          <img
            className={styles.logoContainerChild}
            alt=""
            src="/rectangle-17435@2x.png"
          />
          <button className={styles.baseButtonWrapper}>
            <div className={styles.baseButton}>
              <div className={styles.labelField} />
              <img className={styles.uplayIcon} alt="" src="/uplay@2x.png" />
            </div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default QuoteMarkRight;

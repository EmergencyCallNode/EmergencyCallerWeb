import type { NextPage } from "next";
import styles from "./review-stars-rating.module.css";

const ReviewStarsRating: NextPage = () => {
  return (
    <section className={styles.reviewStarsRating}>
      <div className={styles.reviewQuoteMark}>
        <div className={styles.wrapperGroup1000008433}>
          <img
            className={styles.wrapperGroup1000008433Child}
            alt=""
            src="/group-1000008433.svg"
          />
        </div>
        <div className={styles.rectangleParent}>
          <img
            className={styles.frameChild}
            alt=""
            src="/rectangle-17440@2x.png"
          />
          <div className={styles.imageBackground}>
            <img
              className={styles.imageBackgroundChild}
              loading="lazy"
              alt=""
              src="/rectangle-3@2x.png"
            />
            <div className={styles.loremIpsumDolorSitParent}>
              <h1
                className={styles.loremIpsumDolor}
              >{`Lorem ipsum dolor sit `}</h1>
              <div className={styles.loremIpsumDolorContainer}>
                <p className={styles.loremIpsumDolor1}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna
                </p>
                <p className={styles.blankLine}>&nbsp;</p>
                <p className={styles.aliquaUtEnim}>
                  aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                  ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
                  aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla pariatur. Excepteur sint
                  occaecat cupidatat non proident, sunt in culpa qui officia
                  deserunt mollit anim id est laborum.
                </p>
                <p className={styles.blankLine1}>&nbsp;</p>
                <p
                  className={styles.loremIpsumDolor2}
                >{`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. `}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReviewStarsRating;

import type { NextPage } from "next";
import FrameComponent1 from "../components/frame-component1";
import ReviewStarsRating from "../components/review-stars-rating";
import QuoteMarkRight from "../components/quote-mark-right";
import CustomerReviews from "../components/customer-reviews";
import LogoAndLinks from "../components/logo-and-links";
import styles from "./index.module.css";

const LandingPage: NextPage = () => {
  return (
    <div className={styles.landingPage}>
      <div className={styles.wrapperGroup1000008436}>
        <img
          className={styles.wrapperGroup1000008436Child}
          alt=""
          src="/group-1000008436.svg"
        />
      </div>
      <div className={styles.wrapperGroup1000008432}>
        <img
          className={styles.wrapperGroup1000008432Child}
          loading="lazy"
          alt=""
          src="/group-1000008432.svg"
        />
      </div>
      <div className={styles.wrapperGroup1000008437}>
        <img
          className={styles.wrapperGroup1000008437Child}
          loading="lazy"
          alt=""
          src="/group-1000008437@2x.png"
        />
      </div>
      <FrameComponent1 />
      <img
        className={styles.landingPageChild}
        alt=""
        src="/rectangle-17438@2x.png"
      />
      <section className={styles.subscribeInputFieldLabel}>
        <div className={styles.inputSubscribeBase}>
          <h2
            className={styles.loremIpsumDolor}
          >{`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt `}</h2>
        </div>
        <div className={styles.backgroundDivider}>
          <div className={styles.reviewsListContainer}>
            <div className={styles.reviewSingleContainer}>
              <div className={styles.wrapperGroup1000008434}>
                <img
                  className={styles.wrapperGroup1000008434Child}
                  loading="lazy"
                  alt=""
                  src="/group-1000008434.svg"
                />
              </div>
            </div>
            <div className={styles.loremIpsumDolorContainer}>
              <p className={styles.loremIpsumDolor1}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna
              </p>
              <p className={styles.blankLine}>&nbsp;</p>
              <p className={styles.loremIpsumDolor1}>
                aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
                aute irure dolor in reprehenderit in voluptate velit esse cillum
                dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt
                mollit anim id est laborum.
              </p>
              <p className={styles.blankLine1}>&nbsp;</p>
              <p className={styles.loremIpsumDolor1}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
          </div>
        </div>
        <div className={styles.wrapperGroup1000008435}>
          <img
            className={styles.wrapperGroup1000008435Child}
            loading="lazy"
            alt=""
            src="/group-1000008435.svg"
          />
        </div>
      </section>
      <ReviewStarsRating />
      <QuoteMarkRight />
      <CustomerReviews />
      <LogoAndLinks />
    </div>
  );
};

export default LandingPage;

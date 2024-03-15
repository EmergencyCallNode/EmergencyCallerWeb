import type { NextPage } from "next";
import FrameComponent from "./frame-component";
import styles from "./customer-reviews.module.css";

const CustomerReviews: NextPage = () => {
  return (
    <section className={styles.customerReviews}>
      <div className={styles.customerReviewsInner}>
        <div className={styles.seeWhatOurHappyCustomersHParent}>
          <h2 className={styles.seeWhatOur}>
            See what our happy customers have to say about us!
          </h2>
          <div className={styles.loremIpsumDolorSitAmetCoWrapper}>
            <div className={styles.loremIpsumDolor}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna
            </div>
          </div>
        </div>
      </div>
      <div className={styles.buttonBase}>
        <FrameComponent />
        <FrameComponent />
      </div>
      <div className={styles.footerLink}>
        <img
          className={styles.footerLinkChild}
          loading="lazy"
          alt=""
          src="/group-1000005147.svg"
        />
        <img
          className={styles.footerLinkItem}
          loading="lazy"
          alt=""
          src="/group-1000005165@2x.png"
        />
      </div>
    </section>
  );
};

export default CustomerReviews;

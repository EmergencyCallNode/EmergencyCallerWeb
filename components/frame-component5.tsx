import type { NextPage } from "next";
import styles from "./frame-component5.module.css";

const FrameComponent5: NextPage = () => {
  return (
    <footer className={styles.topLogoInner}>
      <div className={styles.dividerParent}>
        <div className={styles.divider} />
        <div className={styles.footerTextParent}>
          <div className={styles.footerText}>
            © 2024 Company Name. All rights reserved.
          </div>
          <div className={styles.footerLinkParent}>
            <div className={styles.footerLink}>Terms</div>
            <div className={styles.footerLink1}>Privacy</div>
            <div className={styles.footerLink2}>Cookies</div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FrameComponent5;

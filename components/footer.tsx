import type { NextPage } from "next";
import styles from "./footer.module.css";

const Footer: NextPage = () => {
  return (
    <footer className={styles.topLogoInner}>
      <div className={styles.dividerParent}>
        <div className={styles.divider} />
        <div className={styles.footerTextParent}>
          <div className={styles.footerText}>
            © 2024 Company Name. All rights reserved.
          </div>
          <div className={styles.footerLinkParent}>
            <div className={styles.footerLink} style={{ cursor: "pointer" }}>
              Terms
            </div>
            <div className={styles.footerLink1} style={{ cursor: "pointer" }}>
              Privacy
            </div>
            <div className={styles.footerLink2} style={{ cursor: "pointer" }}>
              Cookies
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

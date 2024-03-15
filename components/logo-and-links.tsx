import type { NextPage } from "next";
import styles from "./logo-and-links.module.css";

const LogoAndLinks: NextPage = () => {
  return (
    <section className={styles.logoAndLinks}>
      <img
        className={styles.logoAndLinksChild}
        alt=""
        src="/group-1000008441@2x.png"
      />
      <footer className={styles.footer}>
        <div className={styles.container}>
          <div className={styles.content}>
            <div className={styles.logoAndLinks1}>
              <img
                className={styles.logo21}
                loading="lazy"
                alt=""
                src="/logo-2-1@2x.png"
              />
              <div className={styles.footerLinks}>
                <div className={styles.footerLink}>
                  <div className={styles.button}>
                    <div className={styles.buttonBase}>
                      <div className={styles.text}>Option</div>
                    </div>
                  </div>
                </div>
                <div className={styles.footerLinkContainer}>Option</div>
                <div className={styles.footerLinkContainer1}>Option</div>
                <div className={styles.footerLinkContainer2}>Option</div>
                <div className={styles.footerLink1}>
                  <div className={styles.button1}>
                    <div className={styles.buttonBase1}>
                      <div className={styles.text1}>Help</div>
                    </div>
                  </div>
                </div>
                <div className={styles.footerLink2}>
                  <div className={styles.button2}>
                    <div className={styles.buttonBase2}>
                      <div className={styles.text2}>Privacy</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.newsletter}>
              <div className={styles.heading}>Stay up to date</div>
              <div className={styles.emailCapture}>
                <div className={styles.inputField}>
                  <div className={styles.inputFieldBase}>
                    <div className={styles.inputWithLabel}>
                      <div className={styles.label}>Email</div>
                      <div className={styles.input}>
                        <div className={styles.content1}>
                          <img
                            className={styles.mailIcon}
                            alt=""
                            src="/mail.svg"
                          />
                          <div className={styles.text3}>Enter your email</div>
                        </div>
                        <img
                          className={styles.helpIcon}
                          alt=""
                          src="/help-icon.svg"
                        />
                      </div>
                    </div>
                    <div className={styles.hintText}>
                      This is a hint text to help user.
                    </div>
                  </div>
                </div>
                <button className={styles.button3}>
                  <div className={styles.base}>
                    <img
                      className={styles.maskedIcon}
                      alt=""
                      src="/masked-icon.svg"
                    />
                    <div className={styles.subscribe}>Subscribe</div>
                    <img
                      className={styles.maskedIcon1}
                      alt=""
                      src="/masked-icon.svg"
                    />
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.footerDividerWrapper}>
          <div className={styles.footerDivider}>
            <div className={styles.divider} />
            <div className={styles.footerTextParent}>
              <div className={styles.footerText}>
                © 2024 Company Name. All rights reserved.
              </div>
              <div className={styles.footerLinkParent}>
                <div className={styles.footerLink3}>Terms</div>
                <div className={styles.footerLink4}>Privacy</div>
                <div className={styles.footerLink5}>Cookies</div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
};

export default LogoAndLinks;

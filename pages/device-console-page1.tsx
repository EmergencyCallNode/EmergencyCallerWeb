import type { NextPage } from "next";
import Header from "../components/header";
import LinkLabel from "../components/link-label";
import styles from "./device-console-page1.module.css";

const DeviceConsolePage1: NextPage = () => {
  return (
    <div className={styles.deviceConsolePage}>
      <main className={styles.frameParent}>
        <Header />
        <section className={styles.frameWrapper}>
          <div className={styles.frameGroup}>
            <div className={styles.frameContainer}>
              <div className={styles.deviceConsoleParent}>
                <h3 className={styles.deviceConsole}>Device Console</h3>
                <form className={styles.frameForm}>
                  <LinkLabel
                    fichevronDown="/fichevrondown.svg"
                    propDisplay="inline-block"
                    propDisplay1="inline-block"
                    propDisplay2="inline-block"
                    propDisplay3="inline-block"
                    propDisplay4="inline-block"
                    propColor="#e6e6e6"
                    propDisplay5="inline-block"
                  />
                  <div className={styles.frameDiv}>
                    <div className={styles.rectangleParent}>
                      <div className={styles.frameChild} />
                      <div className={styles.frameParent1}>
                        <div className={styles.option1Wrapper}>
                          <div className={styles.option1}>Option 1</div>
                        </div>
                        <div className={styles.vectorParent}>
                          <img
                            className={styles.frameItem}
                            loading="lazy"
                            alt=""
                            src="/vector-1.svg"
                          />
                          <div className={styles.frameParent2}>
                            <div className={styles.option2Wrapper}>
                              <div className={styles.option2}>Option 2</div>
                            </div>
                            <img
                              className={styles.frameInner}
                              alt=""
                              src="/vector-1.svg"
                            />
                          </div>
                        </div>
                      </div>
                      <div className={styles.frameParent3}>
                        <div className={styles.option3Wrapper}>
                          <div className={styles.option3}>Option 3</div>
                        </div>
                        <img
                          className={styles.vectorIcon}
                          alt=""
                          src="/vector-1.svg"
                        />
                      </div>
                      <div className={styles.frameParent4}>
                        <div className={styles.option4Wrapper}>
                          <div className={styles.option4}>Option 4</div>
                        </div>
                        <img
                          className={styles.frameChild1}
                          alt=""
                          src="/vector-1.svg"
                        />
                      </div>
                      <div className={styles.option5Wrapper}>
                        <div className={styles.option5}>Option 5</div>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <footer className={styles.inputField}>
              <div className={styles.divider} />
              <div className={styles.footerTextParent}>
                <div className={styles.footerText}>
                  © 2024 Company Name. All rights reserved.
                </div>
                <div className={styles.footerLinkParent}>
                  <div
                    className={styles.footerLink}
                    style={{ cursor: "pointer" }}
                  >
                    Terms
                  </div>
                  <div
                    className={styles.footerLink1}
                    style={{ cursor: "pointer" }}
                  >
                    Privacy
                  </div>
                  <div
                    className={styles.footerLink2}
                    style={{ cursor: "pointer" }}
                  >
                    Cookies
                  </div>
                </div>
              </div>
            </footer>
          </div>
        </section>
      </main>
      <div className={styles.readMoreWrapper}>
        <div className={styles.readMore}>Read More</div>
      </div>
    </div>
  );
};

export default DeviceConsolePage1;

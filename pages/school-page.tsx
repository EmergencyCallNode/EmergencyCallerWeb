import type { NextPage } from "next";
import FrameComponent2 from "../components/frame-component2";
import styles from "./school-page.module.css";

const SchoolPage: NextPage = () => {
  return (
    <div className={styles.schoolPage}>
      <main className={styles.frameParent}>
        <FrameComponent2 />
        <section className={styles.frameWrapper}>
          <div className={styles.nodesParent}>
            <h3 className={styles.nodes}>Nodes</h3>
            <div className={styles.frameGroup}>
              <div className={styles.rectangleParent}>
                <img
                  className={styles.frameChild}
                  alt=""
                  src="/rectangle-17434@2x.png"
                />
                <img
                  className={styles.frameItem}
                  loading="lazy"
                  alt=""
                  src="/group-1000008452.svg"
                />
                <div className={styles.frameContainer}>
                  <div className={styles.frameDiv}>
                    <div className={styles.polygonParent}>
                      <img
                        className={styles.frameInner}
                        loading="lazy"
                        alt=""
                        src="/polygon-2.svg"
                      />
                      <button
                        className={styles.washingtonInternationalSchooWrapper}
                      >
                        <div
                          className={styles.washingtonInternationalSchoo}
                        >{`Washington International School `}</div>
                      </button>
                    </div>
                    <div className={styles.frameWrapper1}>
                      <div className={styles.ellipseParent}>
                        <div className={styles.ellipseDiv} />
                        <div className={styles.div}>9</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.frameParent1}>
                  <div className={styles.frameWrapper2}>
                    <div className={styles.frameParent2}>
                      <div className={styles.frameWrapper3}>
                        <div className={styles.ellipseGroup}>
                          <div className={styles.frameChild1} />
                          <div className={styles.div1}>5</div>
                        </div>
                      </div>
                      <div className={styles.polygonGroup}>
                        <img
                          className={styles.polygonIcon}
                          loading="lazy"
                          alt=""
                          src="/polygon-2-1.svg"
                        />
                        <div className={styles.janneyElementarySchoolWrapper}>
                          <div className={styles.janneyElementarySchool}>
                            Janney Elementary School
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.frameParent3}>
                    <div className={styles.polygonContainer}>
                      <img
                        className={styles.frameChild2}
                        loading="lazy"
                        alt=""
                        src="/polygon-2.svg"
                      />
                      <button
                        className={styles.capitalHillClusterSchoolWrapper}
                      >
                        <div className={styles.capitalHillCluster}>
                          Capital Hill Cluster School
                        </div>
                      </button>
                    </div>
                    <div className={styles.schoollocationWrapper}>
                      <div className={styles.schoollocation}>
                        <div className={styles.schoollocationChild} />
                        <div className={styles.frameParent4}>
                          <img
                            className={styles.groupIcon}
                            loading="lazy"
                            alt=""
                            src="/group-1000008452.svg"
                          />
                          <div className={styles.div2}>12</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <img
                  className={styles.frameChild3}
                  loading="lazy"
                  alt=""
                  src="/group-1000008452.svg"
                />
              </div>
              <footer className={styles.readmorebuttonWrapper}>
                <div className={styles.readmorebutton}>
                  <div className={styles.ulocationPointParent}>
                    <img
                      className={styles.ulocationPointIcon}
                      loading="lazy"
                      alt=""
                      src="/ulocationpoint.svg"
                    />
                    <div className={styles.schoolsWrapper}>
                      <div className={styles.schools}>Schools</div>
                    </div>
                  </div>
                  <div className={styles.readmorebuttonInner}>
                    <div className={styles.ellipseContainer}>
                      <div className={styles.frameChild4} />
                      <div className={styles.numberOfNodesWrapper}>
                        <div className={styles.numberOfNodes}>
                          Number of nodes
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </footer>
            </div>
          </div>
        </section>
        <div className={styles.frameWrapper4}>
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
        </div>
      </main>
      <div className={styles.readMoreWrapper}>
        <div className={styles.readMore}>Read More</div>
      </div>
    </div>
  );
};

export default SchoolPage;

import type { NextPage } from "next";
import FrameComponent4 from "../components/frame-component4";
import FrameComponent3 from "../components/frame-component3";
import styles from "./nodes-page.module.css";

const NodesPage: NextPage = () => {
  return (
    <div className={styles.nodesPage}>
      <main className={styles.frameParent}>
        <FrameComponent4 />
        <section className={styles.frameWrapper}>
          <div className={styles.nodesParent}>
            <h3 className={styles.nodes}>Nodes</h3>
            <div className={styles.frameGroup}>
              <div className={styles.frameContainer}>
                <img
                  className={styles.frameChild}
                  loading="lazy"
                  alt=""
                  src="/group-1000008395.svg"
                />
                <div className={styles.frameDiv}>
                  <div className={styles.frameParent1}>
                    <div className={styles.frameParent2}>
                      <img
                        className={styles.frameItem}
                        loading="lazy"
                        alt=""
                        src="/frame-6.svg"
                      />
                      <div className={styles.ibeconWrapper}>
                        <div className={styles.ibecon}>iBecon</div>
                      </div>
                    </div>
                    <div className={styles.ellipseParent}>
                      <div className={styles.frameInner} />
                      <div className={styles.callNodeWrapper}>
                        <div className={styles.callNode}>Call Node</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.nodeStatusParent}>
                <div className={styles.nodeStatus}>Node Status</div>
                <img
                  className={styles.vectorIcon}
                  loading="lazy"
                  alt=""
                  src="/vector-11.svg"
                />
                <div className={styles.idParent}>
                  <div className={styles.id}>ID</div>
                  <div className={styles.div}>123</div>
                </div>
                <div className={styles.frameWrapper1}>
                  <div className={styles.nameParent}>
                    <div className={styles.name}>Name</div>
                    <div className={styles.node}>Node</div>
                  </div>
                </div>
                <div className={styles.statusParent}>
                  <div className={styles.status}>Status</div>
                  <div className={styles.active}>Active</div>
                </div>
                <div className={styles.frameWrapper2}>
                  <div className={styles.frameParent3}>
                    <div className={styles.colorWrapper}>
                      <div className={styles.color}>Color</div>
                    </div>
                    <div className={styles.rectangleDiv} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <FrameComponent3 />
      </main>
      <div className={styles.colorPicker}>
        <div className={styles.readMore}>Read More</div>
      </div>
    </div>
  );
};

export default NodesPage;

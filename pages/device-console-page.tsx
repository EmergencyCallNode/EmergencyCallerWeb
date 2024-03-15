import type { NextPage } from "next";
import FrameComponent2 from "../components/frame-component2";
import LinkLabel from "../components/link-label";
import FrameComponent5 from "../components/frame-component5";
import styles from "./device-console-page.module.css";

const DeviceConsolePage: NextPage = () => {
  return (
    <div className={styles.deviceConsolePage}>
      <main className={styles.topLogo}>
        <FrameComponent2 />
        <section className={styles.topLogoInner}>
          <div className={styles.deviceConsoleParent}>
            <h3 className={styles.deviceConsole}>Device Console</h3>
            <LinkLabel fichevronDown="/fichevrondown-1.svg" />
          </div>
        </section>
        <FrameComponent5 />
      </main>
      <div className={styles.readMoreWrapper}>
        <div className={styles.readMore}>Read More</div>
      </div>
    </div>
  );
};

export default DeviceConsolePage;

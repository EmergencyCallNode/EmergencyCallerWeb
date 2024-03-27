import type { NextPage } from "next";
import Header from "../components/header";
import Footer from "../components/footer";
import styles from "./school-page.module.css";
import { useSession, getSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { GetServerSideProps } from "next";
import GoogleMap from "../components/GoogleMap";

const SchoolPage: NextPage = () => {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/");
    }
  }, [session, status, router]);

  return (
    <div className={styles.schoolPage} style={{ maxWidth: "1440px" }}>
      <main className={styles.frameParent}>
        <Header />
        <section className={styles.frameWrapper}>
          <div className={styles.nodesParent}>
            <h3 className={styles.nodes}>Schools</h3>
            <div className={styles.frameGroup}>
              <GoogleMap />
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
        <Footer />
      </main>
      <div className={styles.readMoreWrapper}>
        <div className={styles.readMore}>Read More</div>
      </div>
    </div>
  );
};

// export const getServerSideProps: GetServerSideProps = async (context) => {
//   const session = await getSession(context);

//   if (!session) {
//     return {
//       redirect: {
//         destination: "/",
//         permanent: false,
//       },
//     };
//   }

//   return {
//     props: { session },
//   };
// };

export default SchoolPage;

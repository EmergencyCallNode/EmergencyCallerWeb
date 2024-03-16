import type { NextPage } from "next";
import styles from "./header.module.css";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { signOut } from "next-auth/react";

const Header: NextPage = () => {
  const router = useRouter();
  const path = router.asPath;

  const handleSignOutClick = async () => {
    await signOut({ callbackUrl: "/" }); // Redirect to the home page after sign out
  };

  // If you want to get the segment 'school-page', you can use the following:
  const pageName = path.split("/").pop();
  console.log(pageName);
  // State for dropdown menu visibility
  const [showDropdown, setShowDropdown] = useState(false);

  const firstClick = () => {
    const targetPage =
      pageName !== "school-page" ? "/school-page" : "/nodes-page";
    router.push(targetPage);
  };

  // Function to toggle dropdown menu
  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <header className={styles.logo21Parent}>
      <img
        className={styles.logo21}
        loading="lazy"
        alt=""
        src="/logo-2-11@2x.png"
      />
      <div className={styles.frameWrapper}>
        <div className={styles.frameParent}>
          <div
            className={styles.frameContainer}
            style={{ cursor: "pointer" }}
            onClick={() => firstClick()}
          >
            <div className={styles.ubuildingParent}>
              <img
                className={styles.ubuildingIcon}
                loading="lazy"
                alt=""
                src="/ubuilding.svg"
              />
              <div className={styles.schoolsWrapper}>
                <div className={styles.schools}>
                  {pageName !== "school-page" ? "School" : "Nodes"}
                </div>
              </div>
            </div>
          </div>
          <div
            className={styles.frameDiv}
            style={{ cursor: "pointer" }}
            onClick={() => router.push("/device-console-page")}
          >
            <div className={styles.urssInterfaceParent}>
              <img
                className={styles.urssInterfaceIcon}
                loading="lazy"
                alt=""
                src="/urssinterface@2x.png"
              />
              <div className={styles.deviceWrapper}>
                <div className={styles.device}>Device</div>
              </div>
            </div>
          </div>
          <div
            className={styles.ellipseParent}
            style={{ position: "relative" }}
          >
            <img
              className={styles.frameChild}
              alt=""
              src="/ellipse-1980@2x.png"
            />
            <div className={styles.jerryLouisWrapper}>
              <div className={styles.jerryLouis}>Jerry Louis</div>
            </div>
            <div
              className={styles.fichevronDownWrapper}
              onClick={toggleDropdown}
              style={{ cursor: "pointer" }}
            >
              <img
                className={styles.fichevronDownIcon}
                alt=""
                src="/fichevrondown.svg"
              />
            </div>
            {showDropdown && (
              <div className={styles.dropdown}>
                <ul>
                  <li>Settings</li>
                  <li onClick={handleSignOutClick}>Logout</li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Header.module.css";

const Header = () => {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.header_left}>
          <div>
            <Link href="/">
              <img
                className={styles.logo}
                src="https://links.papareact.com/yvf"
                alt="medium_logo"
              />
            </Link>
          </div>

          <di className={styles.header_links}>
            <h3>About</h3>
            <h3>Contact</h3>
            <h3 className={styles.follow_btn}>Follow</h3>
          </di>
        </div>

        <div className={styles.header_right}>
          <h3>Sign In</h3>
          <h3 className={styles.getStarted_btn}>Get Started</h3>
        </div>
      </header>
    </>
  );
};

export default Header;

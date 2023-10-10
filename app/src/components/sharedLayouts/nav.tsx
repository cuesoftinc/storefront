import React from "react";
import Link from "next/link";
import styles from "../../styles/sharedLayoutStyles/nav.module.css";

const Nav = () => {
  return (
    <nav className={styles.nav}>
      <Link href="/">Storefront</Link>
     
    </nav>
  );
};

export default Nav;

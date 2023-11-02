import React from "react";
import Link from "next/link";
import styles from "../../styles/sharedLayoutStyles/nav.module.css";

const Nav = () => {
  return (
    <nav className={styles.nav}>
      <Link href="/">Home</Link>
      <Link href="cart">Cart</Link>
      <Link href="about">About Us</Link>
    </nav>
  );
};

export default Nav;

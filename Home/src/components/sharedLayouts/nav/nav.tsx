import React from "react";
import Link from "next/link";
import styles from "./nav.module.css";
import Logo from "@/components/general/logo/logorafce";
import Button from "@/components/general/button/buttonrafce";

const Nav = () => {
  return (
    <nav className={styles.nav}>
      <Logo />
      <ul className={styles.links__ul}>
        <Link href="">Home</Link>
        <Link href="">Discover</Link>
        <Link href="">Sell with us</Link>
        <Link href="">Docs</Link>
      </ul>
      <ul className={styles.btns__ul}>
        <Button btnContent="Sign in" btnStyle={styles.sign__in} />
        <Button btnContent="Get Started" btnStyle={styles.get__started} />
      </ul>
    </nav>
  );
};

export default Nav;

"use client";

import React from "react";
import Link from "next/link";
import Logo from "@/components/general/logo/logorafce";
import Button from "@/components/general/button/buttonrafce";
import { usePathname } from "next/navigation";
import styles from "./nav.module.css";

const Nav = () => {
  const pathname: string = usePathname();

  return (
    <nav className={styles.nav}>
      <Logo />
      <ul className={styles.links__ul}>
        <Link
          href="/"
          className={`${pathname === "/" ? styles.add__active__path : ""}`}
        >
          Home
        </Link>
        <Link
          href="discover"
          className={`${
            pathname === "/discover" ? styles.add__active__path : ""
          }`}
        >
          Discover
        </Link>
        <Link
          href="sell-with-us"
          className={`${
            pathname === "/sell-with-us" ? styles.add__active__path : ""
          }`}
        >
          Sell with us
        </Link>
        <Link
          href="docs"
          className={`${pathname === "/docs" ? styles.add__active__path : ""}`}
        >
          Docs
        </Link>
      </ul>
      <ul className={styles.btns__ul}>
        <Button btnContent="Sign in" btnStyle={styles.sign__in} />
        <Button btnContent="Get Started" btnStyle={styles.get__started} />
      </ul>
    </nav>
  );
};

export default Nav;

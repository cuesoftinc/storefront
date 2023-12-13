"use client";

import React, { useState } from "react";
import Link from "next/link";
import Logo from "@/components/general/logo/logorafce";
import Button from "@/components/general/button/buttonrafce";
import { usePathname } from "next/navigation";
import styles from "./nav.module.css";
import { OpenNav, CloseNav } from "@/assets/icons/navBarrafce";

const Nav = () => {
  const [isNavOpen, setIsNavOpen] = useState<boolean>(false);
  const pathname: string = usePathname();

  const handleOpenNav = () => {
    setIsNavOpen(true);
  };

  const handleCloseNav = () => {
    setIsNavOpen(false);
  };

  return (
    <header>
      <div className={styles.open__nav} onClick={handleOpenNav}>
        <OpenNav />
      </div>
      <nav
        className={`${styles.nav} ${isNavOpen ? styles.add__show__nav : ""}`}
      >
        <Logo uniqueStyle={styles.nav__log} />
        <div className={styles.close__nav} onClick={handleCloseNav}>
          <CloseNav />
        </div>
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
            className={`${
              pathname === "/docs" ? styles.add__active__path : ""
            }`}
          >
            Docs
          </Link>
        </ul>
        <ul className={styles.btns__ul}>
          <Button btnContent="Sign in" btnStyle={styles.sign__in} />
          <Button btnContent="Get Started" btnStyle={styles.get__started} />
        </ul>
      </nav>
    </header>
  );
};

export default Nav;

"use client";

import React, { useState } from "react";
import Link from "next/link";
import styles from "./nav.module.css";
import Logo from "../../general/logo/logo";
import InputBox from "@/components/general/input/input";
import { cartIcon, favIcon, profileIcon, searchIcon } from "@/assets/icons";
import { FaHeart, FaCartPlus, FaUser, FaSearch } from "react-icons/fa";
import { usePathname } from "next/navigation";
import { CloseNav, OpenNav } from "@/assets/icons/navBarIcons";

const Nav = () => {
  const pathname: string = usePathname();

  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleProductSearch = () => {
    //
  };

  const handleOpenNavClick = () => {
    setIsOpen(true);
  };

  const handleCloseNavClick = () => {
    setIsOpen(false);
  };

  return (
    <header className={styles.header}>
      <Logo uniqueStyle={styles.nav__logo} />
      <div className={styles.open__nav} onClick={handleOpenNavClick}>
        <OpenNav />
      </div>

      <nav
        className={`${styles.nav} ${isOpen ? styles.open__nav__control : ""}`}
      >
        <div className={styles.close__nav} onClick={handleCloseNavClick}>
          <CloseNav />
        </div>
        <ul className={styles.first__nav__item}>
          <li
            onClick={handleCloseNavClick}
            className={`${
              pathname === "/electronics"
                ? styles.add__active__page__border
                : ""
            }`}
          >
            <Link href="electronics">Electronics</Link>
          </li>
          <li
            onClick={handleCloseNavClick}
            className={`${
              pathname === "/fashion" ? styles.add__active__page__border : ""
            }`}
          >
            <Link href="fashion">Fashion</Link>
          </li>
        </ul>

        <ul className={styles.second__nav__item}>
          <li>
            <InputBox
              type="text"
              name="search"
              icons={<FaSearch />}
              holder="Search"
              value=""
              handleChange={handleProductSearch}
            />
          </li>
          <li onClick={handleCloseNavClick}>
            <Link href="">
              <FaHeart />
              <p>Favourite</p>
            </Link>
          </li>
          <li onClick={handleCloseNavClick}>
            <Link href="">
              <FaCartPlus />
              <p>Cart</p>
            </Link>
          </li>
          <li onClick={handleCloseNavClick}>
            <Link href="">
              <FaUser />
              <p>Profile</p>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Nav;

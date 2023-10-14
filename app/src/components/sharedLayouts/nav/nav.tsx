import React from "react";
import Link from "next/link";
import styles from "./nav.module.css";
import Logo from "../../general/logo/logo";
import { FaSearch, FaHeart, FaShoppingCart, FaUser } from "react-icons/fa";

const Nav = () => {
  return (
    <header className={styles.header}>
      <Logo />
      <nav className={styles.nav}>
        <ul className={styles.first__nav__item}>
          <li>
            <Link href="">Men</Link>
          </li>
          <li>
            <Link href="">Women</Link>
          </li>
          <li>
            <Link href="">Kids</Link>
          </li>
          <li>
            <Link href="">On sale</Link>
          </li>
        </ul>

        <ul className={styles.second__nav__item}>
          <li>
            <button>
              <FaSearch /> <span>Search</span>
            </button>
          </li>
          <li>
            <Link href="">
              <FaHeart />
            </Link>
          </li>
          <li>
            <Link href="">
              <FaShoppingCart />
            </Link>
          </li>
          <li>
            <Link href="">
              <FaUser />
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Nav;

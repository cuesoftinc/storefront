"use client";

import React from "react";
import styles from "./sideBar.module.css";
import InputBox from "../general/input/input";
import { searchIcon } from "@/assets/icons";
import Link from "next/link";

const SideBar = () => {
  const handleElectronicsSearch = () => {
    //
  };

  return (
    <section className={styles.side__bar}>
      <h3>Electronics</h3>
      <InputBox
        type="text"
        name="search"
        icons={searchIcon.src}
        holder="Search"
        value=""
        handleChange={handleElectronicsSearch}
        inputStyle={styles.side__bar__input}
      />
      <nav className={styles.side__bar__nav__items}>
        <ul>
          <li>
            <Link href="">Laptops</Link>
          </li>
          <li>
            <Link href="">Phones</Link>
          </li>
          <li>
            <Link href="">Accessories</Link>
          </li>
          <li>
            <Link href="">Smart</Link>
          </li>
        </ul>
      </nav>
    </section>
  );
};

export default SideBar;

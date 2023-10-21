"use client";

import React from "react";
import styles from "./sideBar.module.css";
import InputBox from "../general/input/input";
import { searchIcon } from "@/assets/icons";
import Link from "next/link";
import { usePathname } from "next/navigation";

const SideBar = () => {
  const pathname = usePathname();

  const handleElectronicsSearch = () => {
    //
  };

  return (
    <section className={styles.side__bar}>
      <h3>{`${pathname === "/electronics" ? "Electronics" : "Fashion"}`}</h3>
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
            <Link href="">{`${
              pathname === "/electronics" ? "Laptops" : "Shoes"
            }`}</Link>
          </li>
          <li>
            <Link href="">{`${
              pathname === "/electronics" ? "Phones" : "Men"
            }`}</Link>
          </li>
          <li>
            <Link href="">{`${
              pathname === "/electronics" ? "Accessories" : "Women"
            }`}</Link>
          </li>
          <li>
            <Link href="">{`${
              pathname === "/electronics" ? "Smart TV" : "Accessories"
            }`}</Link>
          </li>
        </ul>
      </nav>
    </section>
  );
};

export default SideBar;

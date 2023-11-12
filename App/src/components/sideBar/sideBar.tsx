"use client";

import React from "react";
import styles from "./sideBar.module.css";
import InputBox from "../general/input/input";
import Link from "next/link";
import { FaSearch } from "react-icons/fa";
import { usePathname } from "next/navigation";
import { useGeneralContext } from "@/context";
import { FaTimesCircle } from "react-icons/fa";

const SideBar = () => {
  const { isOpenSidebar, setIsOpenSidebar } = useGeneralContext();

  const pathname = usePathname();

  const handleElectronicsSearch = () => {
    //
  };

  return (
    <section
      className={`${styles.side__bar} ${
        isOpenSidebar ? styles.add__sidebar : styles.remove__sidebar
      }`}
    >
      <h3>
        {`${pathname === "/electronics" ? "Electronics" : "Fashion"}`}{" "}
        <FaTimesCircle
          className={styles.close__sidebar}
          onClick={() => setIsOpenSidebar(false)}
        />
      </h3>
      <InputBox
        type="text"
        name="search"
        icons={<FaSearch />}
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

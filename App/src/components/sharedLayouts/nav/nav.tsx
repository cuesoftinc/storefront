"use client";

import React, { useState } from "react";
import Link from "next/link";
import styles from "./nav.module.css";
import Logo from "../../general/logo/logo";
import InputBox from "@/components/general/input/input";
import { FaHeart, FaCartPlus, FaUser, FaSearch } from "react-icons/fa";
import { usePathname } from "next/navigation";
import { Favourite } from "@/components/favourite";
import { CloseNav, OpenNav } from "@/assets/icons/navBarIcons";
import Cart from "@/components/cart/cart";
import { useCartContext, useGeneralContext } from "@/context";

const Nav = () => {
  const pathname: string = usePathname();

  const { isCartOverlay, setIsCartOverlay } = useCartContext();
  const { setIsOpenSidebar, isOpen, setIsOpen } = useGeneralContext();

  const handleProductSearch = () => {
    //
  };

  const handleOpenNavClick = () => {
    setIsOpen(true);
    setIsOpenSidebar(false); // Close the side bar every time nav bar is opened
  };

  const handleCloseNavClick = () => {
    setIsOpen(false);
  };

  // favourite overlay
  const [isOverlayOpen, setIsOverlayOpen] = useState(false);
  const handleOpenOverlay = () => {
    setIsOverlayOpen(true);
  };

  const handleCloseOverlay = () => {
    setIsOverlayOpen(false);
  };

  // CART OVERLAY
  const handleCartOpenOverlay = () => {
    setIsCartOverlay(true);
  };

  return (
    <>
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
              <button onClick={handleOpenOverlay}>
                <FaHeart />
                <p>
                  <strong>Favourite</strong>
                </p>
              </button>
            </li>
            <li onClick={handleCloseNavClick}>
              <button onClick={handleCartOpenOverlay}>
                <FaCartPlus />
                <p>
                  <strong>Cart</strong>
                </p>
              </button>
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
      {isOverlayOpen && <Favourite onClose={handleCloseOverlay} />}
      {isCartOverlay && <Cart />}
    </>
  );
};

export default Nav;

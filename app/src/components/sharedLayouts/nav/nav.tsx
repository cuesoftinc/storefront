import React from "react";
import Link from "next/link";
import styles from "./nav.module.css";
import stylesTwo from "./navTwo.module.css";
import Logo from "../../general/logo/logo";
import InputBox from "@/components/general/input/input";
import { cartIcon, favIcon, profileIcon, searchIcon } from "@/assets/icons";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { CloseNav, OpenNav } from "@/assets/icons/navBarIcons";

const Nav = () => {
  const pathname = usePathname();

  const handleProductSearch = () => {
    //
  };

  return (
    <header className={styles.header}>
      <Logo />
      <div className={styles.open__nav}>
        <OpenNav />
      </div>
      <nav className={styles.nav}>
        <div className={styles.close__nav}>
          <CloseNav />
        </div>
        <ul className={styles.first__nav__item}>
          <li
            className={`${
              pathname === "/electronics"
                ? styles.add__active__page__border
                : ""
            }`}
          >
            <Link href="electronics">Electronics</Link>
          </li>
          <li
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
              icons={searchIcon.src}
              holder="Search"
              value=""
              handleChange={handleProductSearch}
            />
          </li>
          <li>
            <Link href="">
              <Image src={favIcon} alt="Fav" />
              <p>Favourite</p>
            </Link>
          </li>
          <li>
            <Link href="">
              <Image src={cartIcon} alt="Cart" />
              <p>Cart</p>
            </Link>
          </li>
          <li>
            <Link href="">
              <Image src={profileIcon} alt="profile" />
              <p>Profile</p>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Nav;

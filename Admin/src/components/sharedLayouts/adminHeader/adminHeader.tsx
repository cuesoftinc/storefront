"use client";

import React from "react";
import InputBox from "@/components/general/input/inputrafce";
import styles from "./adminHeader.module.css";
import { searchIcon } from "@/assets/iconsrafce";
import Image from "next/image";
import { headerNotification } from "@/assets/iconsrafce";
import { headerProfileImg } from "@/assets/imagesrafce";
import Logo from "@/components/general/logo/logorafce";

// console.log(searchIcon);

const AdminHeader = () => {
  const handleChange = () => {
    //
  };

  // console.log(searchIcon);

  return (
    <div className={styles.header__elements}>
      <Logo uniqueStyle={styles.admin__logo} />
      <InputBox
        type="text"
        name="search"
        holder="Search here"
        value=""
        handleChange={handleChange}
        icons={searchIcon.src}
        inputStyle={styles.admin__nav__input}
      />
      <div className={styles.notification}>
        <Image src={headerNotification} alt="Notification" />
        <Image src={headerProfileImg} alt="Profile" />
      </div>
    </div>
  );
};

export default AdminHeader;

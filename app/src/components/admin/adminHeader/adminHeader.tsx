"use client";

import React from "react";
import InputBox from "@/components/general/input/input";
import Logo from "@/components/general/logo/logo";
import styles from "./adminHeader.module.css";
import { searchIcon } from "@/assets/icons";
import Image from "next/image";
import { headerNotification } from "@/assets/icons/adminIcons";
import { headerProfileImg } from "@/assets/images/adminImages";

const AdminHeader = () => {
  const handleChange = () => {
    //
  };

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

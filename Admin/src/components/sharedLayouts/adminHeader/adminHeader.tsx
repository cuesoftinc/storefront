"use client";

import React from "react";
import InputBox from "@/components/general/input/inputrafce";
import styles from "./adminHeader.module.css";
import { searchIcon } from "@/assets/iconsrafce";
import Image from "next/image";
import { headerNotification } from "@/assets/iconsrafce";
import { headerProfileImg } from "@/assets/imagesrafce";
import Logo from "@/components/general/logo/logorafce";

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
        <Image
          src={headerNotification}
          alt="Notification"
          width={20}
          height={20}
        />
        <Image src={headerProfileImg} alt="Profile" width={20} height={20} />
      </div>
    </div>
  );
};

export default AdminHeader;

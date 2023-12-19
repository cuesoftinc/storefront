"use client";

import React from "react";
import InputBox from "@/components/general/input/inputrafce";
import styles from "./adminHeader.module.css";
import Image from "next/image";
import { headerProfileImg } from "@/assets/imagesrafce";
import Logo from "@/components/general/logo/logorafce";
import { IoIosNotificationsOutline } from "react-icons/io";
import { IoSearchOutline } from "react-icons/io5";

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
        icons={<IoSearchOutline />}
        inputStyle={styles.admin__nav__input}
      />
      <div className={styles.notification}>
        <span>
          <IoIosNotificationsOutline />
        </span>
        <Image src={headerProfileImg} alt="Profile" width={20} height={20} />
      </div>
    </div>
  );
};

export default AdminHeader;

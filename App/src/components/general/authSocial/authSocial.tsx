import React from "react";
import Image from "next/image";
import styles from "./authSocial.module.css";
import { facebook, twitter } from "@/assets/icons";

const AuthSocial = () => {
  return (
    <div className={styles.auth__social__icon}>
      <Image src={facebook} alt="Facebook" />
      <Image src={twitter} alt="Twitter" />
    </div>
  );
};

export default AuthSocial;

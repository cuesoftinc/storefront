import React from "react";
import { InputProps } from "@/types";
import Image from "next/image";
import styles from "./input.module.css";

const InputBox = ({ type, holder, icons }: InputProps) => {
  return (
    <div className={styles.input__box}>
      <input type={type} placeholder={holder} />
      <Image src={icons} alt="profile" width="40" height="20" />
    </div>
  );
};

export default InputBox;

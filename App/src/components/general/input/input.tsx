import React from "react";
import { InputProps } from "@/types";
import styles from "./input.module.css";

const InputBox = ({
  type,
  name,
  holder,
  icons,
  value,
  handleChange,
  inputStyle,
}: InputProps) => {
  return (
    <div className={`${styles.input__box} ${inputStyle}`}>
      <input
        type={type}
        name={name}
        placeholder={holder}
        value={value}
        onChange={handleChange}
      />
      <span>{icons}</span>
    </div>
  );
};

export default InputBox;

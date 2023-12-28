import React, { ChangeEvent } from "react";
import styles from "./input.module.css";

interface InputProps {
  type: string;
  name: string;
  holder: string;
  icons?: any;
  value: string;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
  inputStyle?: string;
  id?: string;
  autoComplete?: string;
}

const InputBox = ({
  type,
  name,
  holder,
  icons,
  value,
  handleChange,
  inputStyle,
  id,
  autoComplete,
}: InputProps) => {
  return (
    <div className={`${styles.input__box} ${inputStyle}`}>
      <input
        type={type}
        name={name}
        placeholder={holder}
        value={value}
        onChange={handleChange}
        id={id}
        autoComplete={autoComplete}
      />
      <span>{icons}</span>
    </div>
  );
};

export default InputBox;

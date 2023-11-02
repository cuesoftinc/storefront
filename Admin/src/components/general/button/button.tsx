import React from "react";
import styles from "./button.module.css";

interface BtnProps {
  btnStyles?: string;
  btnContent?: string;
}

const Button = ({ btnStyles, btnContent }: BtnProps) => {
  return (
    <div className={`${styles.btn__styles} ${btnStyles}`}>
      <button>{btnContent}</button>
    </div>
  );
};

export default Button;

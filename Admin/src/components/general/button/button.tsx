import React from "react";
import styles from "./button.module.css";


interface BtnProps {
  btnStyles?: string;
  btnContent?: string;
  onSubmit: () => Promise<void>; // Change this line
}

export const Button = ({ btnStyles, btnContent, onSubmit }: BtnProps) => {
  return (
    <div className={`${styles.btn__styles} ${btnStyles}`}>
      <button type="submit" onClick={onSubmit}>{btnContent}</button>
    </div>
  );
};
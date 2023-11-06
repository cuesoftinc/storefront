import React from "react";
import styles from "./button.module.css";

interface BtnProps {
  btnContent: string;
  btnStyle?: string;
  icon?: any;
  handleClick?: () => void;
}

const Button = ({ btnContent, btnStyle, icon, handleClick }: BtnProps) => {
  return (
    <div className={`${styles.__btn} ${btnStyle}`}>
      <button onClick={handleClick}>
        <span className={styles.cart__icon}>{icon}</span>{" "}
        <span>{btnContent}</span>
      </button>
    </div>
  );
};

export default Button;

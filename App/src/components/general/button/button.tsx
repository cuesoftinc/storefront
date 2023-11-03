import React from "react";
import { FaCartPlus } from "react-icons/fa";
import styles from "./button.module.css";

interface BtnProps {
  btnContent: string;
  btnStyle: string;
  handleClick: (e: React.FormEvent) => void;
}

const Button = () => {
  return (
    <div className={styles.__btn}>
      <button>
        <FaCartPlus className={styles.cart__icon} /> <span>Add to Cart</span>
      </button>
    </div>
  );
};

export default Button;

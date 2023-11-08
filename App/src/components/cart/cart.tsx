import React from "react";
import styles from "./cart.module.css";
import { FaTimes } from "react-icons/fa";

interface CartProps {
  closeOverlay: () => void;
}

const Cart = ({ closeOverlay }: CartProps) => {
  return (
    <section className={styles.cart__con}>
      <div className={styles.cart__modal}>
        <FaTimes onClick={closeOverlay} />
        <h1>Cart</h1>
      </div>
    </section>
  );
};

export default Cart;

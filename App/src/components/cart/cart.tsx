import React from "react";
import styles from "./cart.module.css";
import { FaTimes } from "react-icons/fa";
import CartCard from "./cartCard";
import { electronics } from "@/utils/data";

interface CartProps {
  closeOverlay: () => void;
}

const Cart = ({ closeOverlay }: CartProps) => {
  return (
    <section className={styles.cart__con}>
      <div className={styles.cart__modal}>
        <header className={styles.main__cart__header}>
          <h1>Cart</h1>
          <div>3</div>
          <FaTimes onClick={closeOverlay} className={styles.close__icon} />
        </header>

        <div className={styles.cart___items}>
          {electronics.map((each) => (
            <CartCard key={each.id} {...each} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Cart;

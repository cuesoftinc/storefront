"use client";

import React from "react";
import styles from "./cart.module.css";
import { FaTimes } from "react-icons/fa";
import CartCard from "./cartCard";
import { electronics } from "@/utils/data";
import RaisedElement from "../general/raisedElement/raisedElement";
import Button from "../general/button/button";
import { useRouter } from "next/navigation";
import { useCartContext } from "@/context";

const Cart = () => {
  const { setIsCartOverlay } = useCartContext();

  const router = useRouter();

  const handleCartClick = () => {
    router.push("/checkout");
    setIsCartOverlay(false);
  };

  return (
    <section className={styles.cart__con}>
      <div className={styles.cart__modal}>
        <header className={styles.main__cart__header}>
          <h1>Cart</h1>
          <div>3</div>
          <FaTimes
            onClick={() => setIsCartOverlay(false)}
            className={styles.close__icon}
          />
        </header>

        {/* Populate all items added to cart */}
        <div className={styles.cart___items}>
          {electronics.map((each) => (
            <CartCard key={each.id} {...each} />
          ))}
        </div>

        <hr style={{ marginTop: "3vh" }} />

        <footer>
          <div className={styles.subtotal__con}>
            <p>Subtotal:</p>
            <h3>
              <RaisedElement content="$" />
              570
              <RaisedElement content=".00" />
            </h3>
          </div>

          <hr style={{ marginBlock: "1.5vh" }} />

          <Button
            btnContent="Checkout"
            btnStyle={styles.cart__btn}
            handleClick={handleCartClick}
          />
        </footer>
      </div>
    </section>
  );
};

export default Cart;

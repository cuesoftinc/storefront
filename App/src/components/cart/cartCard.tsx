import React from "react";
import Image from "next/image";
import styles from "./cartCard.module.css";
import RaisedElement from "../general/raisedElement/raisedElement";
import { Delete } from "@/assets/icons";
import { ProductIncreaser } from "../helpers";

interface CartItemsProps {
  image: string;
}

const CartCard = ({ image }: CartItemsProps) => {
  return (
    <div className={styles.single__cart__card}>
      <div className={styles.img__con}>
        <Image src={image} alt="Image" width={200} height={200} />
      </div>

      <summary>
        <header className={styles.each__cart__header}>
          <h4>Smart Sense Pro 4k Ultra HD smart TV</h4>
          <h3>
            <RaisedElement content="$" />
            190
          </h3>
        </header>
        <p>Color: White</p>
        <p>Size: 41 inches</p>

        <footer>
          <ProductIncreaser content="1" />
          <Delete />
        </footer>
      </summary>
    </div>
  );
};

export default CartCard;

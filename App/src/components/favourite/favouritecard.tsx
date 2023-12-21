import React from "react";
import styles from "./favourit.module.css";
import Image from "next/image";
import { Tv } from "@/assets/images";
import { Cartsvg, Delete } from "@/assets/icons";
import { FaHeart } from "react-icons/fa";
import Button from "../general/button/button";

function Favouritecard() {
  return (
    <div>
      <div className={styles.favourite__card}>
        <div className={styles.favourite__img__container}>
          <Image src={Tv} alt="tv" className={styles.favourite__img} />
          <FaHeart
            title="Add to favourite"
            className={styles.favourite__icon}
          />
        </div>
        <div className={styles.favourite__description}>
          <div className={styles.favourite__details}>
            <p>Smart Sense Pro 4k Ultra HD smart TV</p>
            <span>
              {" "}
              <strong>$190</strong>{" "}
            </span>
          </div>
          <div className={styles.favourite__size__color}>
            <p>Color : white</p>
            <p>size: 41 inches</p>
          </div>
          <div className={styles.favourite__details}>
            <Button
              btnContent="Add to cart"
              icon={<Cartsvg cartColor={styles.cart__color} />}
              btnStyle={styles.fav__cart__btn}
            />
            <button className={styles.favourite__del__button}>
              <Delete />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Favouritecard;

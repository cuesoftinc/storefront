import React from "react";
import Link from "next/link";
import { Tv } from "@/assets/images";
import { Cartsvg, Ratesvg } from "@/assets/icons";
import { FaHeart } from "react-icons/fa";
import styles from "./popular.module.css";
import Image from "next/image";
import Button from "@/components/general/button/button";

const SinglePopular = () => {
  return (
    <div className={styles.productcol}>
      <Link href="/electronics/electronicsId">
        <Image src={Tv} alt="popular  Image" className={styles.popularimg} />
      </Link>

      <div className={styles.imgtextcontainer}>
        <div className={styles.imgtext}>
          <p className={styles.imgp}>Acer 5822Q bi 21.5 Inches Full HD</p>
          <p className={styles.imgp2}>$95.00</p>
        </div>
        <div className={styles.ratecontainer}>
          <div className={styles.rate}>
            <Ratesvg />
            <Ratesvg />
            <Ratesvg />
            <Ratesvg />
            <Ratesvg />
          </div>
          <p className={styles.ratenumber}>(91)</p>
        </div>
        {/* <button className={styles.btncontainer}>
          <span>
            <Cartsvg cartColor={styles.cart__color} />
          </span>

          <p className={styles.btn}> add to cart</p>
        </button> */}
        <Button
          btnContent="Add to cart"
          icon={<Cartsvg cartColor={styles.cart__color} />}
          btnStyle={styles.cart__btn}
        />
      </div>
      <FaHeart title="Add to favourite" className={styles.favourite__icon} />
    </div>
  );
};

export default SinglePopular;

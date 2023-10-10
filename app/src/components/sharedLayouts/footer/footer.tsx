import React from "react";
import styles from "./footer.module.css";
import Logo from "@/components/general/logo/logo";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className={styles.footer__con}>
      <div className={styles.col__one}>
        <Logo />
        <p>
          Welcome to StoreFront, your destination for quality products. We
          create a unique selection of items from around the world.
        </p>
      </div>

      <div className={styles.two}>
        <h3>Contact Us</h3>
        <li>
          <Link href="">contact@storefront.com</Link>
        </li>
        <li>
          <Link href="">(123) 456-7890</Link>
        </li>
      </div>

      <div className={styles.three}>
        <h3>Shop</h3>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="">Products</Link>
        </li>
        <li>
          <Link href="">About Us</Link>
        </li>
        <li>
          <Link href="">Contact Us</Link>
        </li>
        <li>
          <Link href="">FAQ</Link>
        </li>
      </div>

      <div className={styles.col__four}>
        <h3>Customer Support</h3>
        <li>
          <Link href="">FAQ</Link>
        </li>
        <li>
          <Link href="">Help Center</Link>
        </li>
        <li>
          <Link href="">Contact Support</Link>
        </li>
      </div>
      
      <div className={styles.col__five}>
        <h3>Privacy and Legal</h3>
        <li>
          <Link href="">Terms of Service</Link>
        </li>
        <li>
          <Link href="">Privacy Policy</Link>
        </li>
        <li>
          <Link href="">Return Policy</Link>
        </li>
      </div>
    </footer>
  );
};

export default Footer;

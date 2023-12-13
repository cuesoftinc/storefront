import React from "react";
import styles from "./service.module.css";
import { FaLock } from "react-icons/fa";
import { MdOutlineSell } from "react-icons/md";
import Button from "@/components/general/button/buttonrafce";

const OurService = () => {
  return (
    <section className={styles.service__section}>
      <h3>Our Services</h3>
      <h2>What Users Can Do</h2>

      <div className={styles.all__services}>
        <div className={styles.service__con}>
          <FaLock className={styles.service__icon} />
          <h4>Buyers</h4>
          <p>As a Buyer on Storefront, you can:</p>
          <ul>
            <li>Explore a vast range of products</li>
            <li>Personalize your shopping experience</li>
            <li>Securely complete transactions</li>
            <li>Access customer support for any assistance</li>
          </ul>
        </div>
        <div className={styles.service__con}>
          <MdOutlineSell className={styles.service__icon} />
          <h4>Sellers</h4>
          <p>As a Seller on Storefront, you can:</p>
          <ul>
            <li>Showcase your products to a global audience</li>
            <li>Customize your store for consistency</li>
            <li>Manage your inventory efficiently</li>
            <li>Process and fulfill orders seamlessly</li>
          </ul>
        </div>
      </div>

      <div className={styles.service__extended}>
        <h3>Equip Your Teams for Effortless Commerce</h3>
        <p>
          Provide your teams with they tools they need to accelerate commerce.
          Storefront simplifies online retail, streamlining operations,
          automating processes, and seamlessly integrating various apps and data
        </p>
        <div className={styles.btns__con}>
          <Button btnContent="Try Cloud" btnStyle={styles.try__cloud} />
          <Button btnContent="Self Host" btnStyle={styles.self__host} />
        </div>
      </div>
    </section>
  );
};

export default OurService;

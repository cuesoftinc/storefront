import { Metadata } from "next";
import React from "react";
import styles from "./checkout.module.css";

import Logo from "@/components/general/logo/logo";
import { Checkoutpayment ,CheckoutItems} from "@/components/checkout";

export const metadata: Metadata = {
  title: "Checkout",
};

const Checkout = () => {
  return (
    <main className={styles.checkout__main}>
    <section className={styles.checkout__section}>
    <CheckoutItems/>
     <Checkoutpayment/>
    </section>
    </main>
  );
};

export default Checkout;

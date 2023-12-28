import { Metadata } from "next";
import React from "react";
import styles from "./signup.module.css";
import SignIntro from "@/components/signup/intro/intro";
import CreateAccount from "@/components/signup/create/create";
import Logo from "@/components/general/logo/logo";

export const metadata: Metadata = {
  title: "Sign Up",
};

const Signup = () => {
  return (
    <main className={styles.registration}>
      <Logo uniqueStyle={styles.reg__logo} />
      <section className={styles.reg__section}>
        <SignIntro
          heading="Hello, Friend!"
          intro="Enter your details and start your journey with us"
        />
        <CreateAccount />
      </section>
    </main>
  );
};

export default Signup;

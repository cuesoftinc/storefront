import styles from "./signin.module.css";
import { Metadata } from "next";
import React from "react";
import Signinpage from "@/components/signin/page";


export const metadata: Metadata = {
  title: "signin",
};

const Signin = () => {
  return (
    <main className={styles.main} >
      <Signinpage/>
    </main>
  );
};

export default Signin;




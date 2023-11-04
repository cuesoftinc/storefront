import styles from "./signin.module.css";
import { Metadata } from "next";
import React from "react";
import Signinpage from "../../components/signin/signin";
import { AuthProvider } from "../../context/loginContect";


export const metadata: Metadata = {
  title: "signin",
};

const Signin = () => {
  return (
    <AuthProvider>
    <main className={styles.main} >
      <Signinpage/>
    </main>
    </AuthProvider>
  );
};

export default Signin;




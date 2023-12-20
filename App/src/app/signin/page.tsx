import styles from "./signin.module.css";
import { Metadata } from "next";
import React from "react";
import Signinpage from "@/components/signin/signin";
import { AuthProvider } from "@/context/loginContect";
import Logo from "@/components/general/logo/logo";



export const metadata: Metadata = {
  title: "signin",
};

const Signin = () => {
  return (
    <AuthProvider>
    <main className={styles.main} >
      <Logo/>
      <Signinpage/>
    </main>
    </AuthProvider>
  );
};

export default Signin;



// 532c6f9e-37ea-49fb-bcd6-de008b97edb4
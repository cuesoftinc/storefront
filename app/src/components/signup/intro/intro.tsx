import React from "react";
import styles from "./intro.module.css";
import { regImage } from "@/assets/images";
import Image from "next/image";

const SignIntro = () => {
  return (
    <summary className={styles.intro__side}>
      <h2>Hello, Friend!</h2>
      <p>Enter your details and start your journey with us.</p>
      <Image src={regImage} alt="Register Image" />
    </summary>
  );
};

export default SignIntro;

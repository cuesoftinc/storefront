import React from "react";
import styles from "./intro.module.css";
import { regImage } from "@/assets/images";
import Image from "next/image";

interface SignIntroProp {
  heading: string;
  intro: string;
}

const SignIntro = ({ heading, intro }: SignIntroProp) => {
  return (
    <summary className={styles.intro__side}>
      <h1>{heading}</h1>
      <p>{intro}</p>
      <Image src={regImage} alt="Register Image" />
    </summary>
  );
};

export default SignIntro;

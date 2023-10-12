import React from "react";
import styles from "./create.module.css";
import Image from "next/image";
import {
  facebook,
  lockIcon,
  mailIcon,
  profileIcon,
  twitter,
} from "@/assets/icons";
import InputBox from "@/components/general/input/input";
import Button from "@/components/general/button/button";
import Link from "next/link";

const CreateAccount = () => {
  return (
    <form className={styles.signup__inputs__side}>
      <h2>Create Account</h2>
      <div>
        <Image src={facebook} alt="Facebook" />
        <Image src={twitter} alt="Twitter" />
      </div>
      <p>or use your email for registration</p>

      <InputBox type="text" holder="Name" icons={profileIcon.src} />
      <InputBox type="email" holder="Email" icons={mailIcon.src} />
      <InputBox type="password" holder="Password" icons={lockIcon.src} />
      <Button btnContent="Sign Up" btnStyle={styles.signUpBtn} />

      <p>
        Already have an account? <Link href="signin">Sign In</Link>
      </p>
    </form>
  );
};

export default CreateAccount;

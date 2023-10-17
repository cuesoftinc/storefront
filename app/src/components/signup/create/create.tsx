"use client";

import React, { ChangeEvent, useState } from "react";
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
import { fetchSignUpUser } from "../../../api/users";

interface UserData {
  isLoading: boolean;
  isError: boolean;
  user: {
    name: string;
    email: string;
    password: string;
  };
}

const CreateAccount = () => {
  const userData: UserData = {
    isLoading: false,
    isError: false,
    user: {
      name: "",
      email: "",
      password: "",
    },
  };

  const [userDetails, setUserDetails] = useState(userData);

  const { user } = userDetails;
  const { name, email, password } = userDetails.user;

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    let name = e.target.name;
    let value = e.target.value;
    // setUserDetails({
    //   ...user,
    //   [name]: value,
    // });
  };

  const handleRegClick = async (e: React.FormEvent<Element>) => {
    e.preventDefault();

    if (!name || !email || !password) {
      console.log("I canoot be empty");
    } else {
      // fetchSignUpUser(user);
      console.log(await fetchSignUpUser(userDetails.user));
    }
  };

  return (
    <form className={styles.signup__inputs__side}>
      <h1>Create Account</h1>
      <div>
        <Image src={facebook} alt="Facebook" />
        <Image src={twitter} alt="Twitter" />
      </div>
      <p>or use your email for registration</p>

      <InputBox
        type="text"
        name="name"
        holder="Name"
        icons={profileIcon.src}
        value={name}
        handleChange={handleChange}
      />
      <InputBox
        type="email"
        name="email"
        holder="Email"
        icons={mailIcon.src}
        value={email}
        handleChange={handleChange}
      />
      <InputBox
        type="password"
        name="password"
        holder="Password"
        icons={lockIcon.src}
        value={password}
        handleChange={handleChange}
      />
      <Button
        btnContent="Sign Up"
        btnStyle={styles.signUpBtn}
        handleRegClick={handleRegClick}
      />

      <p>
        Already have an account? <Link href="signin">Sign In</Link>
      </p>
    </form>
  );
};

export default CreateAccount;

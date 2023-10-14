"use client";

import React, { ChangeEvent, useState, useEffect } from "react";
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

const CreateAccount = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });

  const { name, email, password } = user;

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    let name = e.target.name;
    let value = e.target.value;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const handleRegClick = async (e: React.FormEvent<Element>) => {
    e.preventDefault();

    if (!name || !email || !password) {
      console.log("I canoot be empty");
    } else {
      // fetchSignUpUser(user);
      console.log(await fetchSignUpUser(user));
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

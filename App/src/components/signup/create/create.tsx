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
import AuthButton from "@/components/general/button/authButton";
import Link from "next/link";
import { fetchSignUpUser } from "../../../api/users";
import { useAuthContext } from "@/context/userContext";
import { handleIsLoading } from "@/utils/btnHandler";
import { handleResponseMsg } from "@/utils/response";
import { FaUser, FaLock } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

const CreateAccount = () => {
  const {
    signupUser,
    setSignupUser,
    isSuccess,
    setIsSuccess,
    isSuccessBg,
    setIsSuccessBg,
  } = useAuthContext();

  const { isLoading, isError, user } = signupUser;

  const { name, email, password } = user;

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    // Remove response message when a user starts typing
    setIsSuccess(false);
    setIsSuccessBg("");

    let name = e.target.name;
    let value = e.target.value;
    setSignupUser({
      ...signupUser,
      user: {
        ...signupUser.user,
        [name]: value,
      },
    });
  };

  const handleRegClick = async (e: React.FormEvent<Element>) => {
    e.preventDefault();
    // Remove response message when a user clicks the sign up btn
    setIsSuccess(false);
    setIsSuccessBg("");

    if (!name || !email || !password) {
      setIsSuccess(true); // Display response
      // Display response error if any input field is empty
      handleResponseMsg(
        setSignupUser,
        signupUser,
        "Field cannot be empty",
        setIsSuccessBg,
        styles.error__sign__response
      );
    } else {
      setIsSuccess(true); // Display response
      handleIsLoading(setSignupUser, signupUser, true); // Display loading state

      if (password.length < 6) {
        // Display response error if password is less than 6 characters
        handleResponseMsg(
          setSignupUser,
          signupUser,
          "Password cannot be less than 6 characters",
          setIsSuccessBg,
          styles.error__sign__response
        );
        return;
      }
      // post request should be carried out
      const data = await fetchSignUpUser(
        signupUser.user,
        setSignupUser,
        signupUser
      );
      console.log(data);
      const serverResult = data.data.message;

      if (data?.status === 201) {
        // Display response success if registration is successful
        handleResponseMsg(
          setSignupUser,
          signupUser,
          serverResult,
          setIsSuccessBg,
          styles.success__sign__response
        );
        return;
      }
      // Display response error if registration fails
      handleResponseMsg(
        setSignupUser,
        signupUser,
        serverResult,
        setIsSuccessBg,
        styles.error__sign__response
      );
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
        icons={<FaUser />}
        value={name}
        handleChange={handleChange}
        inputStyle={styles.input__style}
      />
      <InputBox
        type="email"
        name="email"
        holder="Email"
        icons={<MdEmail />}
        value={email}
        handleChange={handleChange}
        inputStyle={styles.input__style}
      />
      <InputBox
        type="password"
        name="password"
        holder="Password"
        icons={<FaLock />}
        value={password}
        handleChange={handleChange}
        inputStyle={styles.input__style}
      />

      <p
        className={`${styles.hide__sign__response} ${isSuccessBg} ${
          isSuccess ? styles.show__sign__response : styles.hide__sign__response
        }`}
      >
        {isError}
      </p>

      <AuthButton
        btnContent="Sign Up"
        btnStyle={styles.signUpBtn}
        disable={isLoading}
        handleRegClick={handleRegClick}
      />

      <p>
        Already have an account? <Link href="signin">Sign In</Link>
      </p>
    </form>
  );
};

export default CreateAccount;

/* eslint-disable react/no-unescaped-entities */
"use client";
import Facebooksvg from "@/assets/icons/facebook";
import styles from "./signin.module.css";
import Twittersvg from "@/assets/icons/twitter";
import Link from "next/link";
// import { useState } from 'react';
import React, { ChangeEvent, useState } from "react";
import { fetchSigninUser } from "../../api/login";
import { useRouter } from "next/navigation";
import { useAuthContext } from "@/context/loginContect";
// import { handleIsLoadingsignin } from "@/utils/btnHandler";/
import { FaLock } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

import { handleResponsesigninMsg } from "@/utils/response";
import SignIntro from "../signup/intro/intro";
import InputBox from "../general/input/input";
import AuthSocial from "../general/authSocial/authSocial";

export default function Signinadmin() {
  const {
    signinUser,
    setSigninUser,
    isSuccess,
    setIsSuccess,
    isSuccessBg,
    setIsSuccessBg,
    // Error,
  } = useAuthContext();
  const { error } = signinUser;

  const router = useRouter();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  // handle onchange in inpute field
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    // Remove response message when a user starts typing
    setIsSuccess(false);
    setIsSuccessBg("");
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<Element>) => {
    e.preventDefault();
    // Remove response message when a user starts typing
    setIsSuccess(false);
    setIsSuccessBg("");

    if (!formData.email || !formData.password) {
      setIsSuccess(true); // Display response

      // Display response error if any input field is empty
      handleResponsesigninMsg(
        setSigninUser,
        signinUser,
        "Field cannot be empty",
        setIsSuccessBg,
        styles.error__sign__response
      );
    } else {
      setIsSuccess(true); // Display response
      //  handleIsLoadingsignin(setSigninUser, signinUser, true); // Display loading state

      await fetchSigninUser(
        formData,
        router,
        setSigninUser,
        setIsSuccess,
        setIsSuccessBg
      );

      //  console.log(data);
    }
  };

  return (
    <section className={styles.signinsection}>
      <div className={styles.formContainer}>
        <SignIntro
          heading="Welcome Back!"
          intro="Enter your details to continue your journey with us"
        />
        <div className={styles.signindiv}>
          <h1 className={styles.signinHeaders}>Sign in to Storefront</h1>
          <AuthSocial />

          <div>
            <p className={styles.signintext}>Or use your email</p>
          </div>
          <form onSubmit={handleSubmit} className={styles.signinformcontainer}>
            <InputBox
              autoComplete="off"
              id="logemail"
              holder="Email"
              name="email"
              inputStyle={styles.inputfield}
              value={formData.email}
              handleChange={handleInputChange}
              type="email"
              icons={<MdEmail />}
            />
            <InputBox
              autoComplete="off"
              id="logpass"
              holder="Password"
              name="password"
              inputStyle={styles.inputfield}
              value={formData.password}
              handleChange={handleInputChange}
              type="password"
              icons={<FaLock />}
            />

            <p className={styles.forgot__password}>Forgot your password ?</p>

            <div className={styles.btndiv}>
              <button
                type="submit"
                onClick={handleSubmit}
                className={styles.button}
              >
                Sign in
              </button>
            </div>
            <div
              style={{
                width: "100%",
                padding: "5px",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <p
                className={` ${
                  error || isSuccess
                    ? styles.show__sign__response
                    : styles.hide__sign__response
                }`}
              >
                {error}
              </p>
            </div>
          </form>
          <p className={styles.signintext}>
            Don't have an account ?{" "}
            <Link href="/signup" className={styles.signuplink}>
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}

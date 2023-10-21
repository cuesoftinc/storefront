/* eslint-disable react/no-unescaped-entities */
"use client";
import Facebooksvg from "@/assets/icons/facebook";
import styles from "./signin.module.css";
import Twittersvg from "@/assets/icons/twitter";
import Link from "next/link";
import { useState } from "react";
import { fetchSigninUser } from "../../api/login";
// import { useRouter } from 'next/router';
import { useRouter } from "next/navigation";

export default function Signinpage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e: React.FormEvent<Element>) => {
    e.preventDefault();

    if (!email || !password) {
      console.log("Please fill all fields ");
    } else {
      await fetchSigninUser(email, password, router);

      // Redirect to the homepage
      // router.push('/');

      // console.log(await fetchSigninUser(email,password,router));
    }
  };

  return (
    <section className={styles.signinsection}>
      <div className={styles.formContainer}>
        <div className={styles.leftWelcomediv}>
          <h1 className={styles.signinHeaders}>Welcome Back !</h1>
          <p className={styles.welcometext}>
            Enter your details to continue your journey with us
          </p>
          <img className={styles.leftsvg} src="/welcomesvg.svg" alt="" />
        </div>
        <div className={styles.rightWelcomediv}>
          <div className={styles.signindiv}>
            <h1 className={styles.signinHeaders}>Sign in to Storefront</h1>
            <div className={styles.signinsocials}>
              <a href="" className={styles.svg}>
                <Facebooksvg />
              </a>
              <a href="" className={styles.svg}>
                <Twittersvg />
              </a>
            </div>
          </div>
          <div>
            <p className={styles.signintext}>Or use your email</p>
          </div>
          <form onSubmit={handleSubmit} className={styles.signinformcontainer}>
            <div className={styles.inputdiv}>
              <img src="/mail.png" className={styles.inputicon} alt="" />
              <input
                autoComplete="off"
                id="logemail"
                placeholder="Email"
                className={styles.inputfield}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
              />
            </div>

            <div className={styles.inputdiv}>
              <img src="/lock.png" className={styles.inputicon} alt="" />

              <input
                autoComplete="off"
                id="logpass"
                placeholder="Password"
                className={styles.inputfield}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
              />
            </div>

            <p className={styles.signintext}>Forgot your password ?</p>
            <div className={styles.btndiv}>
              <button
                type="submit"
                onClick={handleSubmit}
                className={styles.button}
              >
                Sign in
              </button>
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

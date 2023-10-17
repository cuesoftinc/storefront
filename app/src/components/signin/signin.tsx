"use client";
import Facebooksvg from "@/assets/icons/facebook";
import styles from "./signin.module.css";
import Twittersvg from "@/assets/icons/twitter";




export default function Signinpage() {

  return (
    <section className={styles.signinsection}>
        <div className={styles.formContainer}>
            <div className={styles.leftWelcomediv}>
                <h3 className={styles.signinHeaders}>Welcome Back !</h3>
                <p className={styles.welcometext}>Enter your details to continue your journey with us</p>
                <img className={styles.leftsvg} src="/welcomesvg.svg" alt="" />
            </div>
            <div className={styles.rightWelcomediv}>
                <div className={styles.signindiv}>
                    <h3 className={styles.signinHeaders}>Sign in to Storefront</h3>
                    <div className={styles.signinsocials}>
                   <a href="" className={styles.svg}>
                    <Facebooksvg/>
                   </a>
                    <a href="" className={styles.svg}>
                     <Twittersvg/>
                     </a>
                   </div>
                </div>
                <div>
                   
                   <p className={styles.signintext}>Or use your email</p>
                </div>
                <form action="" className={styles.signinformcontainer}>
                <div className={styles.inputdiv}>
                    <img src="/mail.png" className={styles.inputicon} alt="" />
                  <input autoComplete="off" id="logemail" placeholder="Email" className={styles.inputfield} name="logemail" type="email"/>
                </div>


                <div className={styles.inputdiv} >
                    <img src="/lock.png" className={styles.inputicon} alt="" />
                           
                      <input autoComplete="off" id="logpass" placeholder="Password" className={styles.inputfield} name="logpass" type="password"/>
                    
                </div>


                    <p className={styles.signintext}>Forgot your password ?</p>
                    <div className={styles.btndiv}>
                        <button className={styles.button}>Sign in</button>
                    </div>
                </form>
                <p className={styles.signintext}>Don't have an account ? <a href="" className={styles.signuplink}>Sign up</a></p>
            </div>
           
        </div>
        
      
    </section>
  );
}

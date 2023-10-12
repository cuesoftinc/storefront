"use client";
import styles from "../../styles/signinstyles/signin.module.css";



export default function Signin() {

  return (
    <section className={styles.signinsection}>
        <div className={styles.formContainer}>
            <div className={styles.leftWelcomediv}>
                <h1 className={styles.signinHeaders}>Welcome Back !</h1>
                <p className={styles.welcometext}>Enter your details to continue your journey with us</p>
                <img className={styles.leftsvg} src="/welcomesvg.svg" alt="" />
            </div>
            <div className={styles.rightWelcomediv}>
                <div className={styles.signindiv}>
                    <h1 className={styles.signinHeaders}>Sign in to Storefront</h1>
                    <div className={styles.signinsocials}>
                   <a href="" className={styles.svg}>
                                    <svg className={styles.svgimg} xmlns="http://www.w3.org/2000/svg" width="33" height="33" viewBox="0 0 33 33" fill="none">
                    <g clipPath="url(#clip0_89_1617)">
                        <path d="M16.1201 32.7658C24.9567 32.7658 32.1201 25.6023 32.1201 16.7658C32.1201 7.92922 24.9567 0.765778 16.1201 0.765778C7.28356 0.765778 0.120117 7.92922 0.120117 16.7658C0.120117 25.6023 7.28356 32.7658 16.1201 32.7658Z" fill="#3C5A9A"/>
                        <path d="M21.3227 5.67691H17.7783C15.6749 5.67691 13.3354 6.56156 13.3354 9.61047C13.3457 10.6728 13.3354 11.6902 13.3354 12.8353H10.9021V16.7074H13.4107V27.8545H18.0204V16.6338H21.0629L21.3382 12.8244H17.941C17.941 12.8244 17.9486 11.1298 17.941 10.6377C17.941 9.43286 19.1947 9.50186 19.2701 9.50186C19.8667 9.50186 21.0267 9.5036 21.3244 9.50186V5.67691H21.3227Z" fill="white"/>
                    </g>
                    <defs>
                        <clipPath id="clip0_89_1617">
                        <rect width="32" height="32" fill="white" transform="translate(0.120117 0.765747)"/>
                        </clipPath>
                    </defs>
                    </svg>
                   </a>
                    <a href="" className={styles.svg}>
                    <svg className={styles.svgimg} xmlns="http://www.w3.org/2000/svg" width="33" height="32" viewBox="0 0 33 32" fill="none">
                    <g clipPath="url(#clip0_89_1623)">
                        <path d="M16.5001 31.9997C25.3366 31.9997 32.5 24.8363 32.5 15.9999C32.5 7.16338 25.3366 0 16.5001 0C7.66362 0 0.500244 7.16338 0.500244 15.9999C0.500244 24.8363 7.66362 31.9997 16.5001 31.9997Z" fill="#55ACEE"/>
                        <path d="M26.3006 11.4986C25.6149 11.8027 24.8774 12.0083 24.1039 12.1001C24.8936 11.627 25.4997 10.8783 25.7858 9.98471C25.0468 10.4231 24.228 10.7411 23.3572 10.9125C22.6596 10.1695 21.6656 9.7052 20.565 9.7052C18.4533 9.7052 16.7406 11.4179 16.7406 13.5296C16.7406 13.8294 16.7745 14.1211 16.8401 14.4012C13.6617 14.2418 10.8435 12.7193 8.9571 10.4048C8.62796 10.9695 8.43915 11.627 8.43915 12.3277C8.43915 13.6543 9.11482 14.8253 10.1404 15.511C9.51383 15.4913 8.92373 15.3193 8.40835 15.0321C8.40807 15.0484 8.40807 15.0646 8.40807 15.0806C8.40807 16.9336 9.72689 18.4792 11.4761 18.8303C11.1555 18.9181 10.817 18.9646 10.4687 18.9646C10.2217 18.9646 9.98244 18.941 9.74914 18.8965C10.2357 20.4155 11.6478 21.5213 13.3217 21.5524C12.0126 22.5783 10.3638 23.1895 8.57149 23.1895C8.26346 23.1895 7.95829 23.1715 7.65967 23.1359C9.35126 24.2214 11.362 24.8543 13.5216 24.8543C20.5561 24.8543 24.4031 19.0268 24.4031 13.9726C24.4031 13.8068 24.3994 13.6417 24.392 13.478C25.1398 12.9389 25.7881 12.2656 26.3006 11.4986Z" fill="#F1F2F2"/>
                    </g>
                    <defs>
                        <clipPath id="clip0_89_1623">
                        <rect width="32" height="32" fill="white" transform="translate(0.5)"/>
                        </clipPath>
                    </defs>
                    </svg>
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

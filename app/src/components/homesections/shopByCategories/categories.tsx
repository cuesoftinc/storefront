import React from 'react'
import styles from './categories.module.css'
import { shirt,bag } from "@/assets/images";
import Image from "next/image";

export default function Categories() {
  return (
    <section>
        <div className={styles.categoriescontainer}>
            <div className={styles.categoriesheadercontainer}>
                <h1 className={styles.categoriesheader}>
                    Shop by caterories
                </h1>

                <a href="#" className={styles.link}> view all <span>+</span></a>
            </div>
          
            <div className={styles.categoriesimgcontainer}>
                <div >
                <Image src={shirt} alt="Register Image"className={styles.categoriesimg} />


                </div>
                <div className={styles.categoriesimgcontainer2}>
                <Image src={shirt} alt="Register Image"className={styles.categoriesimgleft}/>
                <Image src={bag} alt="Register Image"className={styles.categoriesimgleft} />


                </div>
                
            </div>
        </div>
    </section>
  )
}

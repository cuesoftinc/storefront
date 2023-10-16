import React from 'react'
import styles from './categories.module.css'
import { shirt,bag, gardget } from "@/assets/images";
import Image from "next/image";
import { Shopnow } from '..';

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
                <div className={styles.containerimg}>
                <Image src={gardget} alt="Register Image"className={styles.categoriesimg} />
                <div className={styles.buttomtext}>
                    <div className={styles.buttomheader}>
                    <h2>Free Delivery on all devices ordered until November 30</h2>
                    <sub>All the sleekest devices for your tech activites</sub>
                    </div>
                    <a href="#"> Shop now  <Shopnow/></a>
                </div>
                <div className={styles.toptext}>30% discount</div>
                

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

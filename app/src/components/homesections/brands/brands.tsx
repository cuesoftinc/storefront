import React from 'react'
import styles from './brands.module.css'
import { adiddas,nike,thenorth,zara } from "@/assets/images";
import Image from "next/image";

export default function Brands() {
  return (
    <section>
        <div className={styles.brandcontainer}>
            <h1> Brands</h1>
            <div className={styles.brandimgcontainer}>
                <Image src={nike} alt="Register Image" className={styles.brandimg}/>
                <Image src={thenorth} alt="Register Image"className={styles.brandimg} />
                <Image src={adiddas} alt="Register Image" className={styles.brandimg} />
                <Image src={zara} alt="Register Image" className={styles.brandimg}/>
                <Image src={nike} alt="Register Image" className={styles.brandimg}/>
                <Image src={thenorth} alt="Register Image" className={styles.brandimg}/>
                <Image src={adiddas} alt="Register Image" className={styles.brandimg}/>


            </div>
        </div>
    </section>
  )
}

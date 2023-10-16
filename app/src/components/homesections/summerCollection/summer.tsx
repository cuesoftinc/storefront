import React from 'react'
import styles from './summer.module.css'
import { shoe,sweat,swim } from "@/assets/images";
import Image from "next/image";
import { Shopnow } from '..';
import { Summerarrow } from '@/assets/icons';

export default function Summer() {
  return (
    <section>
        <div className={styles.summercontainer}>
            {/* <div className={styles.summerheadercontainer}>
                <h1 className={styles.summerheader}>
                    Shop by caterories
                </h1>

                <a href="#" className={styles.link}> view all <span>+</span></a>
            </div> */}
          
            <div className={styles.summerimgcontainer}>
                <div className={styles.summerimg1}>
                    <Image src={sweat} alt="Register Image"className={styles.summerimg} />
                    <div className={styles.buttomtext}>
                        <div className={styles.buttomheader}>
                        <h2>Kiddies Korean Summer Collection</h2>
                        </div>
                        <a href="#"> Shop now  <Shopnow/></a>
                    </div>
                    <div className={styles.toptext}> UP TO 80% OFF</div>
                    <a href='#' className={styles.toprighttext}><Summerarrow/></a>

                </div>
                <div className={styles.summerimgcontainer2}>
                    <div className={styles.summerimg1}>
                    <Image src={swim} alt="Register Image"className={styles.summerimgleft}/>
                    <div className={styles.centered}>
                    <div className={styles.text}> UP TO 80% OFF</div>

                        <h2>Children Summer Play set</h2>

                    </div>
                    </div>
                <Image src={shoe} alt="Register Image"className={styles.summerimgleft} />


                </div>
                
            </div>
        </div>
    </section>
  )
}

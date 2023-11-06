import React,{useState} from 'react'
import styles from './checkout.module.css'
import Image from 'next/image'
import { Tv } from '@/assets/images'
import Deliveryform from './(checkout delivery)/deliveryform'

function CheckoutItems() {


  return (
    <div className={styles.checkout__card}>
       <div className={styles.checkout__card__items__div}>
       <div className={styles.checkout__card__body} >
            <div className={styles.checkout__img__container}>
                <Image src={Tv} alt='tv' className={styles.checkout__img} />

            </div>
            <div className={styles.checkout__description}>
                <div className={styles.checkout__details}>
                    <p>Smart Sense Pro 4k Ultra HD smart TV</p>
                    <span> $190 </span>
                </div>
                <div className={styles.checkout__size__color}>
                    <p>Color : white</p>
                    <p>size: 41 inches</p>
                </div>
                
            </div>
        </div>
       </div>
        <div className={styles.checkout__card__delivery} >
        <Deliveryform/>

        </div>

        {/* <div> */}
        {/* </div> */}
    </div>
  )
}

export default CheckoutItems
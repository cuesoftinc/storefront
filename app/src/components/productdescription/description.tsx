import Image from "next/image";
import React, { Suspense } from "react";
import { bag } from '@/assets/images';
import styles from './description.module.css'
export default function Description() {
  return (
    <section className={styles.section}>

    <div className={styles.descriptioncontainer}>
      <Suspense fallback={<p>Loading...</p>}>
      <div className={styles.descriptionimg} >
      <Image className={styles.description_img} src={bag} alt="bag" width={450} height={535} />
      <div className={styles.descriptionimg_other}>
      <Image className={styles.description_img1} src={bag} alt="bag" width={105} height={100} />
      <Image className={styles.description_img1} src={bag} alt="bag" width={105} height={100} />
      <Image className={styles.description_img1} src={bag} alt="bag" width={105} height={100} />
      <Image className={styles.description_img1} src={bag} alt="bag" width={105} height={100} />
      

      </div>

      </div>
      <div className={styles.description}>
        <div className={styles.descriptiontitle}>
          <h1>SmartSernse Pro 4K Ultra Hd smart TV</h1>
          <p>The SmartSense Pro 4K Ultra HD Smart TV is a cutting edge addition to any luxury 
              space. With its expansive 55 inch display, you’ll be immersed in stunning visuals</p>
          <sub style={{display:"flex", width:"170px",alignItems:"flex-start",gap:"16px"}}> <div>rste</div><p>(17)</p> </sub>
        </div>
        <div className={styles.descriptionprize}>
          <p><strong>$ 190.20 or $129.99/month</strong></p>
          <sub>Suggested payments with 6 months special financing</sub>
        </div>
        <div className={styles.descriptioncolor}>
          <p>Choose a Color</p>
          <div style={{display:"flex",alignItems:"flex-start",gap:"16px"}}>
          <span className={styles.span} ></span> <span className={styles.span}></span>
          </div>
        </div>
        <div className={styles.descriptionsize}>
          <p>Select Size in inches</p>
          <div style={{display:"flex",alignItems:"flex-start",gap:"16px"}}>
            <span className={styles.spansize}>30</span>
            <span className={styles.spansize}>40</span>
            <span className={styles.spansize}>65</span>
            <span className={styles.spansize}>85</span>
          </div>
        </div>
        <div className={styles.descriptionamountdiv}>
          <p><strong>quality</strong></p>
          <div style={{display:"flex",alignItems:"flex-start",gap:"16px"}}>
            <div className={styles.descriptionbuttondiv}>
              <button>-</button>
              <span>1</span>
              <button>+</button>
            </div>
            <p style={{width:"150px",display:"flex",alignItems:"center",fontSize: "14px"}} >Only 12 Items Left! Don’t miss it</p>
          </div>
        </div>
        <div >
          <div style={{display:"flex",justifyContent:"space-between",width:"404px"}} className={styles.buy_addtocart_btn}>
            <button>Buy now</button>
            <button>Add to cart</button>
          </div>
        </div>
        <div className={styles.Deliverycontainer} style={{display:"flex",gap:"40px"}}>
          <div>img</div>
          <div style={{width:"404px"}}>
            <p><strong>Free Delivery</strong></p>
            <p className={styles.Deliverytext}>Enter your Postal Code for Delivery Availability</p>
          </div>
        </div>
      </div>
      </Suspense>

    </div>
    </section>

  )
}

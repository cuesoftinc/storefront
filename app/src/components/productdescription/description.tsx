import Image from "next/image";
import React, { Suspense } from "react";
import { bag } from '@/assets/images';
import styles from './description.module.css'
export default function Description() {
  return (
    <div className={styles.descriptioncontainer}>
      <Suspense fallback={<p>Loading...</p>}>
      <div className={styles.descriptionimg} >
      <Image className={styles.description_img} src={bag} alt="bag"  />
      <div className={styles.descriptionimg_other}>
      <Image className={styles.description_img1} src={bag} alt="bag" width={100} height={100} />
      <Image className={styles.description_img1} src={bag} alt="bag" width={100} height={100} />
      <Image className={styles.description_img1} src={bag} alt="bag" width={100} height={100} />
      <Image className={styles.description_img1} src={bag} alt="bag" width={100} height={100} />
      

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
          <p>quality</p>
          <div style={{display:"flex",alignItems:"flex-start",gap:"16px"}}>
            <div className={styles.descriptionbuttondiv}>
              <button>+</button>
              <span>1</span>
              <button>-</button>
            </div>
            <p >Only 12 Items Left! Don’t miss it</p>
          </div>
        </div>
        <div>
          <div>
            <button>Buy now</button>
            <button>Add to cart</button>
          </div>
        </div>
        <div>
          <div>img</div>
          <div>
            <p><strong>Free Delivery</strong></p>
            <p>Enter your Postal Code for Delivery Availability</p>
          </div>
        </div>
      </div>
      </Suspense>

    </div>
  )
}

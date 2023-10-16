import React from 'react'
import styles from './popular.module.css'
import { Tv } from "@/assets/images";
import Image from "next/image";
import { Cartsvg, Ratesvg } from '@/assets/icons';

export default function Popular() {
  return (
    <section>
        <div className={styles.popularcontainer}>
        <div className={styles.popularheadercontainer}>
                <h1 className={styles.popularheader}>
                    Popular
                </h1>

                <a href="#" className={styles.popularlink}> sort by <span>v</span></a>
         </div>
         <div className={styles.popularimgcontainer}>
                <div >
                <Image src={Tv} alt="popular  Image"className={styles.popularimg} />
                    <div className={styles.imgtextcontainer}>
                        <div className={styles.imgtext}>
                            <p className={styles.imgp}>Acer 5822Q bi 21.5 Inches Full HD</p>
                            <p className={styles.imgp2}>$95.00</p>

                        </div>
                        <div className={styles.ratecontainer}>
                        <div className={styles.rate}>
                            <Ratesvg/>
                            <Ratesvg/>
                            <Ratesvg/>
                            <Ratesvg/>
                            <Ratesvg/>
                        </div>
                        <p className={styles.ratenumber}>(91)</p>
                        
                        </div>
                        <button className={styles.btncontainer}>
                        <span><Cartsvg/></span>

                            <p className={styles.btn}> add to cart</p>
                        </button>

                    </div>

                </div>
                <div >
                <Image src={Tv} alt="popular  Image"className={styles.popularimg} />
                    <div className={styles.imgtextcontainer}>
                        <div className={styles.imgtext}>
                            <p className={styles.imgp}>Acer 5822Q bi 21.5 Inches Full HD</p>
                            <p className={styles.imgp2}>$95.00</p>

                        </div>
                        <div className={styles.ratecontainer}>
                        <div className={styles.rate}>
                            <Ratesvg/>
                            <Ratesvg/>
                            <Ratesvg/>
                            <Ratesvg/>
                            <Ratesvg/>
                        </div>
                        <p className={styles.ratenumber}>(91)</p>
                        
                        </div>
                        <button className={styles.btncontainer}>
                        <span><Cartsvg/></span>

                            <p className={styles.btn}> add to cart</p>
                        </button>

                    </div>

                </div>
                <div >
                <Image src={Tv} alt="popular  Image"className={styles.popularimg} />
                    <div className={styles.imgtextcontainer}>
                        <div className={styles.imgtext}>
                            <p className={styles.imgp}>Acer 5822Q bi 21.5 Inches Full HD</p>
                            <p className={styles.imgp2}>$95.00</p>

                        </div>
                        <div className={styles.ratecontainer}>
                        <div className={styles.rate}>
                            <Ratesvg/>
                            <Ratesvg/>
                            <Ratesvg/>
                            <Ratesvg/>
                            <Ratesvg/>
                        </div>
                        <p className={styles.ratenumber}>(91)</p>
                        
                        </div>
                        <button className={styles.btncontainer}>
                        <span><Cartsvg/></span>

                            <p className={styles.btn}> add to cart</p>
                        </button>

                    </div>

                </div>
                <div >
                <Image src={Tv} alt="popular  Image"className={styles.popularimg} />
                    <div className={styles.imgtextcontainer}>
                        <div className={styles.imgtext}>
                            <p className={styles.imgp}>Acer 5822Q bi 21.5 Inches Full HD</p>
                            <p className={styles.imgp2}>$95.00</p>

                        </div>
                        <div className={styles.ratecontainer}>
                        <div className={styles.rate}>
                            <Ratesvg/>
                            <Ratesvg/>
                            <Ratesvg/>
                            <Ratesvg/>
                            <Ratesvg/>
                        </div>
                        <p className={styles.ratenumber}>(91)</p>
                        
                        </div>
                        <button className={styles.btncontainer}>
                        <span><Cartsvg/></span>

                            <p className={styles.btn}> add to cart</p>
                        </button>

                    </div>

                </div>
              
                
                
            </div>
        </div>
    </section>
  )
}

import React from 'react'
import styles from './hero.module.css'
import { Shopnow } from '..';
import Link from 'next/link';

function Hero() {
  return (
    <section className={styles.sectioncontainer}>
        <div className={styles.heroContainer}>
            <div className={styles.heroContent}>
              <div className={styles.heroheader}>
                <p>ENDLESS SUMMER SALE</p>
              </div>
              <div className={styles.herolargesubtext}>
                <p>
                Up to 60% off on all items till September 11
                </p>
              </div>
              <div>
                <Link href="/products" className={styles.herobtn}>
                  Shop now <span><Shopnow/></span>
                </Link>
              </div>

            </div>
        </div>

    </section>
  )
}

export default Hero;
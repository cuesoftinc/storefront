import React from 'react'
import styles from './service.module.css'
import { Servicefour, Serviceone, Servicethree, Servicetwo } from '@/assets/icons'


export default function Services() {
  return (
    <section>
        <div className={styles.servicecontainer}>
                <div className={styles.serviceheadercontainer}>
                    <h1 className={styles.serviceheader}>
                        We provide the best customer experiences
                    </h1>
                </div>
                <div className={styles.servicesprovidedcontainer}>
                    <div>
                        <div className={styles.content}>
                            <div className={styles.iconcontainer}>
                            <Serviceone/>

                            </div>
                            <div>
                                <div><h5 className={styles.servicetitle}>Original Products</h5></div>
                                <div><p className={styles.servicetext}>We ensure money-back guarantee if the product is counterfeit</p></div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className={styles.content}>
                        <div className={styles.iconcontainer}>
                        <Servicetwo/>

                        </div>
                            <div>
                                <div><h5 className={styles.servicetitle}>Satisfaction Guarantee</h5></div>
                                <div><p className={styles.servicetext}>We ensure money-back guarantee if the product is counterfeit</p></div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className={styles.content}>
                        <div className={styles.iconcontainer}>
                        <Servicethree/>

                        </div>                            <div>
                                <div><h5 className={styles.servicetitle}>New Arrival Everyday</h5></div>
                                <div><p className={styles.servicetext}>We ensure money-back guarantee if the product is counterfeit</p></div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className={styles.content}>
                        <div className={styles.iconcontainer}>
                        <Servicefour/>

                        </div>
                            <div>
                                <div><h5 className={styles.servicetitle}>Fast & Free Shipping</h5></div>
                                <div><p className={styles.servicetext}>We ensure money-back guarantee if the product is counterfeit</p></div>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    </section>
  )
}

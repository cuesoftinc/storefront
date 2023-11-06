import React from 'react'
import styles from "./checkout.module.css"

function Checkoutpayment() {
  return (
    <div className={styles.checkout__payment__container}>
      <form className={styles.checkout__payment__content}>

        <div className={styles.Payment__div}>
          <h3>Payment Information</h3>
          <div >
          <p><strong>Apply Discount</strong></p>

          <div className={styles.checkout__discount}>
            <input placeholder='Enter Coupon Code'/>
            <button className={styles.checkout__button}>Apply</button>
          </div>

          </div>

        </div>

        <div className={styles.payment__options}>
          <p><strong>pay with</strong></p>
          <div>
          <label className={`${styles.control} ${styles.label__control__radio}`}> Debit or Credit Card

          <input type='radio' name='radio' value='1' />
          <span className={styles.control__indicator}></span>


          </label>
          </div>

          <div>

          <label className={`${styles.control} ${styles.label__control__radio}`} > Pay on or Delivery 
          <input type='radio' name='radio' value='1'  />
          <span className={styles.control__indicator}></span>
          </label>
          
          </div>
        </div>

        <div className={styles.checkout__card__information}>
          <p><strong>Enter Card Information</strong></p>
          <div>
          <small>Cardholder Name</small>
          <input type="text" placeholder='Richard john' />
          </div>

          <div>
          <small>Card Number</small>
          <input type="text" placeholder='2323 1232 6543 2345' />
          </div>

          <div className={styles.checkout__expiry__cvv__div}>
            <div>
            <small>Expiry Date</small>
            <input
            type="text" 
            id="cardExpiration"
            placeholder="09 / 2025"
            pattern="(0[1-9]|1[0-2]) / [0-9]{4}"
            maxLength={7}
            required/>
            <span id="expirationError" className="error-message"></span>



            </div>

            <div>
            <small>CVV</small>
            <input
            type="text" 
            id="cardExpiration"
              placeholder="MM / YYYY"
              pattern=" [0-9]{3}" 
              maxLength={3}
            required/>
            <span id="expirationError" className="error-message"></span>          </div>
            </div>
        </div>

        <div className={styles.checkout__total__cost__div}>
          <p>
            <small>
              sub Total 
            </small>
            <sub>
              $549.00
            </sub>
          </p>
          <p>
            <small>
              Tax(10%)
            </small>
            <sub>
              $54.00
            </sub>
          </p>
          <p>
            <small>
              Shipping
            </small>
            <sub>
              $0.00
            </sub>
          </p>
        </div>

        <div className={styles.checkout__total}>
          <p>
            <small>Total</small>
            <sub><strong>$603.00</strong></sub>
          </p>
        </div>

        <button className={styles.checkout__button}>Pay $603.00</button>
      </form>
    </div>
  )
}

export default Checkoutpayment
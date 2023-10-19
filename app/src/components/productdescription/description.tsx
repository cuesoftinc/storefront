import Image from "next/image";
import React, { Suspense } from "react";
import { bag } from '@/assets/images';
export default function Description() {
  return (
    <div>
      <Suspense fallback={<p>Loading...</p>}>
      <div>
      <Image src={bag} alt="bag" width={200} height={100} />

      </div>
      <div>
        <div>
          <h1>SmartSernse Pro 4K Ultra Hd smart TV</h1>
          <p>The SmartSense Pro 4K Ultra HD Smart TV is a cutting edge addition to any luxury 
              space. With its expansive 55 inch display, you’ll be immersed in stunning visuals</p>
          <sub> <div>rste</div><p>(17)</p> </sub>
        </div>
        <div>
          <p><strong>$ 190.20 or $129.99/month</strong></p>
          <p>Suggested payments with 6 months special financing</p>
        </div>
        <div>
          <p>Choose a Color</p>
          <span>white</span><span>black</span>
        </div>
        <div>
          <p>Select Size in inches</p>
          <span>30</span><span>40</span><span>65</span><span>85</span>

        </div>
        <div>
          <p>quality</p>
          <div>
            <div>
              <button>+</button>
              <span>1</span>
              <button>-</button>
            </div>
            <p>Only 12 Items Left! Don’t miss it</p>
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

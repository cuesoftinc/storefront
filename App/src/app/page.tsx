

import React, { Suspense } from "react";
import { Adsection, Brands, Categories, Hero, Popular, Services, Summer } from "../components/homesections";
import  Styles  from "./home.module.css";



export default function Home() {
  return (
    <main className={Styles.main} >
    <Suspense fallback={<p>Loading...</p>} >
    <Hero/>
      <Brands/>
      <Categories/>
      <Popular/>
      <Summer/>
      <Services/>
      <Adsection/>
    </Suspense>

     
    </main>
  );
};


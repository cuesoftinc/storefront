

import React from "react";
import { Adsection, Brands, Categories, Hero, Popular, Services, Summer } from "../components/homesections";
import  Styles  from "./home.module.css";



export default function Home() {
  return (
    <main className={Styles.main} >
      <Hero/>
      <Brands/>
      <Categories/>
      <Popular/>
      <Summer/>
      <Services/>
      <Adsection/>
    </main>
  );
};


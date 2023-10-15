import { Metadata } from "next";
import React from "react";
import { Adsection, Brands, Categories, Hero, Popular, Services, Summer } from "../../components/homesections";
import  Styles  from "./home.module.css";


export const metadata: Metadata = {
  title: "Home page",
};

const Homepage = () => {
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

export default Homepage;

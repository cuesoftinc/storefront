import { Metadata } from "next";
import React from "react";
import { Brands, Categories, Hero, Popular } from "../../components/homesections";
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
    </main>
  );
};

export default Homepage;

import { Metadata } from "next";
import React from "react";
import { Hero } from "../../components/homesections";
import  Styles  from "./home.module.css";


export const metadata: Metadata = {
  title: "Home page",
};

const Homepage = () => {
  return (
    <main className={Styles.main} >
      <Hero/>
    </main>
  );
};

export default Homepage;

import { Metadata } from "next";
import Styles from "./home.module.css";
import {
  Adsection,
  Brands,
  Categories,
  Hero,
  Popular,
  Services,
  Summer,
} from "@/components/homesections";

export const metadata: Metadata = {
  title: "Home",
};

export default function Home() {
  return (
    <main className={Styles.main}>
      <Hero />
      <Brands />
      <Categories />
      <Popular />
      <Summer />
      <Services />
      <Adsection />
    </main>
  );
}

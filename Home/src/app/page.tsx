import {
  ForDev,
  Hero,
  OurOffering,
  OurService,
  StoreHome,
} from "@/components/homerafce";
import styles from "./home.module.css";

export default function Home() {
  return (
    <main className={styles.home__page}>
      <Hero />
      <StoreHome />
      <OurOffering />
      <OurService />
      <ForDev />
    </main>
  );
}

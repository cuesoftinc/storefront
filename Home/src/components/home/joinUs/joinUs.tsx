import React from "react";
import styles from "./joinUs.module.css";
import Link from "next/link";
import { FaDiscord, FaGithub } from "react-icons/fa";

const JoinUs = () => {
  return (
    <section className={styles.join__us__section}>
      <h3>Join Us</h3>
      <h2>Join Our Developer Community</h2>

      <p>
        Explore the possibilities of open- source development. Join Storefront’s
        GitHub community and be part of something bigger
      </p>

      <div className={styles.join__us__socials}>
        <Link href="">
          <FaGithub className={styles.icon} />
        </Link>
        <Link href="">
          <FaDiscord className={styles.icon} />
        </Link>
      </div>
    </section>
  );
};

export default JoinUs;

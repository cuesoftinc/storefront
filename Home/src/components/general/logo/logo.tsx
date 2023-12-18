"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./logo.module.css";
import { storeFrontLogo } from "@/assets/logosrafce";
import { usePathname } from "next/navigation";

const Logo = ({ uniqueStyle }: { uniqueStyle?: string }) => {
  const pathname = usePathname();
  return (
    <div className={`${styles.div} ${uniqueStyle}`}>
      <Link href="/">
        <Image src={storeFrontLogo} alt="StoreFront" />
      </Link>
    </div>
  );
};

export default Logo;

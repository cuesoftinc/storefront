"use client";

import React from "react";
import styles from "./sideBar.module.css";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { adminSideBar } from "@/data/datarafce";

const SharedAdminSideBar = () => {
  const pathname: string = usePathname();

  return (
    <section className={styles.admin__side__bar}>
      <nav>
        <ul>
          {adminSideBar.top.map((each) => {
            // console.log(each.icon.src);

            return (
              <li key={each.id}>
                <Link
                  href={`${each.path}`}
                  className={
                    pathname === `${each.path}` ? `${styles.active__page}` : ""
                  }
                >
                  <Image
                    src={each.icon.src}
                    alt={`${each.navItem}`}
                    width={20}
                    height={20}
                  />
                  <span>{each.navItem}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
      <nav>
        <ul>
          {adminSideBar.bottom.map((each) => {
            return (
              <li key={each.id}>
                <Link
                  href={`${each.path}`}
                  className={
                    pathname === `${each.path}` ? `${styles.active__page}` : ""
                  }
                >
                  <Image src={each.icon} alt={`${each.navItem}`} />
                  <span>{each.navItem}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </section>
  );
};

export default SharedAdminSideBar;

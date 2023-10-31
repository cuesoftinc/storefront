"use client";

import React from "react";
import styles from "./shared.module.css";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import { useSearchParams } from "next/navigation";
import { adminSideBar } from "@/utils/data";

const SharedAdminSideBar = () => {
  const pathname = usePathname();
  const router = useRouter();

  const searchParam = useSearchParams();

  // console.log(router.push);

  return (
    <section className={styles.admin__side__bar}>
      <nav>
        <ul>
          {adminSideBar.top.map((each) => {
            return (
              <li key={each.id}>
                <Link
                  href={`/admin/${each.path}`}
                  className={
                    pathname === `/admin/${each.path}`
                      ? `${styles.active__page}`
                      : ""
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
      <nav>
        <ul>
          {adminSideBar.bottom.map((each) => {
            return (
              <li key={each.id}>
                <Link
                  href={`/admin/${each.path}`}
                  className={
                    pathname === `/admin/${each.path}`
                      ? `${styles.active__page}`
                      : ""
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

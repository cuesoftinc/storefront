"use client";

import React from "react";
import styles from "./productPath.module.css";
import { usePathname } from "next/navigation";
import Link from "next/link";

const ProductPath = () => {
  const pathname = usePathname();

  // Split the pathname into an array using "/" as the separator
  const pathnameSegments = pathname.split("/");

  // Get the last array element
  const productTypePath = pathnameSegments[pathnameSegments.length - 1];

  // Capitalize the pathname
  const getFirstLetter = productTypePath.charAt(0);
  const capFirstLetter = getFirstLetter.toUpperCase();
  const concatUpperWithOthers =
    capFirstLetter + productTypePath.slice(1, productTypePath.length);

  return (
    <div className={styles.product__path}>
      <p>
        <Link href="/">Home</Link>/ <Link href="/products">Products</Link> /
        <Link href="">{concatUpperWithOthers}</Link>
      </p>
    </div>
  );
};

export default ProductPath;

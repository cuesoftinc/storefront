"use client";

import React from "react";
import { usePathname } from "next/navigation";
import { Footer } from ".";

const ShowFooter = () => {
  const pathname = usePathname();

  return (
    <>
      {/* Conditionally render Footer */}
      {!pathname.includes("admin") && <Footer />}
    </>
  );
};

export default ShowFooter;

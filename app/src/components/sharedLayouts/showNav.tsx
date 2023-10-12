"use client";

import React from "react";
import Nav from "./nav/nav";
import { usePathname } from "next/navigation";

const ShowNav = () => {
  const pathname = usePathname();

  return (
    <>
      {pathname !== "/signup" && <Nav />} {/* Conditionally render Nav */}
    </>
  );
  ``;
};

export default ShowNav;

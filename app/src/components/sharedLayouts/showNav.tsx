"use client";

import React from "react";
import Nav from "./nav/nav";
import { usePathname } from "next/navigation";

const ShowNav = () => {
  const pathname = usePathname();

  return (
    <>
      {/* Conditionally render Nav */}
      {pathname !== "/signup" && pathname !== "/signin" && <Nav />}{" "}
    </>
  );
  ``;
};

export default ShowNav;

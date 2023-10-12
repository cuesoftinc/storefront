"use client";

import { useHomeContext } from "@/context";
import Signin from "./signin/page";

export default function Home() {
  // const { homeState, setHomeState } = useHomeContext();

  return (
    <main>
      {/* <h1>This is Home Page</h1> */}
      <Signin/>
    </main>
  );
}

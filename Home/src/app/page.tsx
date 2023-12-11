"use client";

import { useHomeContext } from "@/contextrafce";

export default function Home() {
  const { homeState, setHomeState } = useHomeContext();

  return (
    <main>
      <p>This is the home page</p>
    </main>
  );
}

"use client";

import { useHomeContext } from "@/contextrafce";

export default function Home() {
  const { homeState, setHomeState } = useHomeContext();

  return (
    <main>
      <h1>This is Home Page</h1>
      <p>This is the first page to be seen by users {homeState}</p>
      <button onClick={() => setHomeState(homeState + 1)}>Increase</button>
    </main>
  );
}

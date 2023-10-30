"use client";

import { createContext, ReactNode, useState, useContext } from "react";
import { HomeContextProps } from "@/typesrafce";

const HomeContext = createContext<HomeContextProps | undefined>(undefined);

export const HomeProvider = ({ children }: { children: ReactNode }) => {
  const [homeState, setHomeState] = useState<number>(1);

  return (
    <HomeContext.Provider value={{ homeState, setHomeState }}>
      {children}
    </HomeContext.Provider>
  );
};

export const useHomeContext = () => {
  const context = useContext(HomeContext);
  if (!context) {
    throw new Error("useHomeContext must be used within a AppProvider");
  }
  return context;
};

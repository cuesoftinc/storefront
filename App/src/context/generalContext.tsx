"use client";

import { createContext, useState, useContext, ReactNode } from "react";
import { generalContextProps } from "@/types";

const generalContext = createContext<generalContextProps | undefined>(
  undefined
);

export const GeneralProvider = ({ children }: { children: ReactNode }) => {
  const [isOpenSidebar, setIsOpenSidebar] = useState<boolean>(false);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <generalContext.Provider
      value={{
        isOpenSidebar,
        setIsOpenSidebar,
        isOpen,
        setIsOpen,
      }}
    >
      {children}
    </generalContext.Provider>
  );
};

export const useGeneralContext = () => {
  const context = useContext(generalContext);
  if (!context) {
    throw new Error("useGeneralContext must be used within a AppProvider");
  }
  return context;
};

"use client";

import { createContext, ReactNode, useState, useContext } from "react";
import { AdminContextProps } from "@/typesrafce";

const AdminContext = createContext<AdminContextProps | undefined>(undefined);

export const AdminProvider = ({ children }: { children: ReactNode }) => {
  const [homeState, setHomeState] = useState<number>(1);

  return (
    <AdminContext.Provider value={{ homeState, setHomeState }}>
      {children}
    </AdminContext.Provider>
  );
};

export const useAdminContext = () => {
  const context = useContext(AdminContext);
  if (!context) {
    throw new Error("useAdminContext must be used within a AppProvider");
  }
  return context;
};

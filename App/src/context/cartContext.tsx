"use client";

import { createContext, useState, useContext, ReactNode } from "react";
import { CartContextProps } from "@/types";

const CartContext = createContext<CartContextProps | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [isCartOverlay, setIsCartOverlay] = useState<boolean>(false);

  return (
    <CartContext.Provider
      value={{
        isCartOverlay,
        setIsCartOverlay,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCartContext = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useAuthContext must be used within a AppProvider");
  }
  return context;
};

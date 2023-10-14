"use client";

import { createContext, useState, useContext, ReactNode } from "react";
import { CartContextProps, UserProps } from "@/types";

const CartContext = createContext<CartContextProps | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cartState, setCartState] = useState<UserProps[]>([]);

  return (
    <CartContext.Provider value={{ cartState, setCartState }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCartContext = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useHomeContext must be used within a AppProvider");
  }
  return context;
};

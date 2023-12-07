"use client";

import { createContext, ReactNode, useState, useContext } from "react";
import { CatObjType, addItemContextProps } from "@/typesrafce";

const addItemContext = createContext<addItemContextProps | undefined>(
  undefined
);

const catObj: CatObjType = {
  name: "",
  description: "",
  price: "",
  quantity: "",
  category_id: "",
  sub_category: "",
  shipping: "",
  color: "",
  size: "",
};

export const AddItemProvider = ({ children }: { children: ReactNode }) => {
  const [addProduct, setAddProduct] = useState<CatObjType>(catObj);

  const [image, setImage] = useState<string>("Add Image");
  const [showMsg, setShowMsg] = useState<boolean>(false);

  return (
    <addItemContext.Provider
      value={{
        addProduct,
        setAddProduct,
        image,
        setImage,
        showMsg,
        setShowMsg,
      }}
    >
      {children}
    </addItemContext.Provider>
  );
};

export const useAddItemContext = () => {
  const context = useContext(addItemContext);
  if (!context) {
    throw new Error("useaddItemContext must be used within a AppProvider");
  }
  return context;
};

"use client";

import { createContext, useState, useContext, ReactNode } from "react";
import { SigninContextProps, SigninUserProp } from "../types/index";

const AuthContext = createContext<SigninContextProps | undefined>(undefined);

const formData: SigninUserProp = {
  isLoading: false,
  error: "",
    // email: "",
    // password: "",
    formData: {
      email: "",
      password: "",
    },
};

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [signinUser, setSigninUser] = useState<SigninUserProp>(formData);
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const [isSuccessBg, setIsSuccessBg] = useState<string>("");

  return (
    <AuthContext.Provider
      value={{
        signinUser,
        setSigninUser,
        isSuccess,
        setIsSuccess,
        isSuccessBg,
        setIsSuccessBg,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuthContext must be used within a AppProvider");
  }
  return context;
};

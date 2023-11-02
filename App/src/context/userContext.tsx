"use client";

import { createContext, useState, useContext, ReactNode } from "react";
import { SignupContextProps, SignupUserProp } from "@/types";

const AuthContext = createContext<SignupContextProps | undefined>(undefined);

const userData: SignupUserProp = {
  isLoading: false,
  isError: "",
  user: {
    name: "",
    email: "",
    password: "",
  },
};

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [signupUser, setSignupUser] = useState<SignupUserProp>(userData);
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const [isSuccessBg, setIsSuccessBg] = useState<string>("");

  return (
    <AuthContext.Provider
      value={{
        signupUser,
        setSignupUser,
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

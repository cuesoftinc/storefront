import { SignupUserProp } from "@/types";
import { Dispatch, SetStateAction } from "react";

export const handleResponseMsg = (
  setSignupUser: Dispatch<SetStateAction<SignupUserProp>>,
  signupUser: SignupUserProp,
  isError: string,
  setIsSuccessBg: Dispatch<SetStateAction<string>>,
  styles: string
) => {
  setSignupUser({
    ...signupUser,
    isError: isError,
  });
  setIsSuccessBg(styles);
};

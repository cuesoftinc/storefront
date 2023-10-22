import { SignupUserProp } from "@/types";
import { SigninUserProp } from "@/types";
import { Dispatch, SetStateAction } from "react";

// This handles the dynamic change in loading state and disable state
export const handleIsLoading = (
  setState: Dispatch<SetStateAction<SignupUserProp>>,
  signin: SignupUserProp,
  booleanValue: boolean
) => {
  setState({
    ...signin,
    isLoading: booleanValue,
  });
};
export const handleIsLoadingsignin = (
  setState: Dispatch<SetStateAction<SigninUserProp>>,
  signin: SigninUserProp,
  booleanValue: boolean
) => {
  setState({
    ...signin,
    isLoading: booleanValue,
  });
};

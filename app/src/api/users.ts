import { SignupUserProp } from "@/types";
import { handleIsLoading } from "@/utils/btnHandler";
import axios from "axios";
import { Dispatch, SetStateAction } from "react";

export const fetchSignUpUser = async (
  user: Object,
  setState: Dispatch<SetStateAction<SignupUserProp>>,
  signin: SignupUserProp
) => {
  try {
    console.log(user);
    const data = await axios.post(
      "http://localhost:5005/api/user/register",
      user
    );
    console.log(data);
    // Set the button loading state back to false when request is successful
    handleIsLoading(setState, signin, false);

    return data;
  } catch (error: any) {
    console.log(error);
    // Set the button loading state back to false when request fails
    handleIsLoading(setState, signin, false);
  }
};

import axios from "axios";
import { Dispatch, SetStateAction } from "react";
import { SigninUserProp } from "../types/index";
import styles from "../components/signin/signin.module.css";

export const fetchSigninUser = async (
  formData: object,
  router: any,
  setSigninUser: Dispatch<SetStateAction<SigninUserProp>>,
  setIsSuccess: Dispatch<SetStateAction<boolean>>,
  setIsSuccessBg: Dispatch<SetStateAction<string>>
) => {
  console.log("button");

  try {
    console.log(formData);

    const response = await axios.post(
      "http://localhost:5005/api/user/login",
      formData
    );

    console.log(response);

    if (response.status === 200) {
      const { success, message, token, data } = response.data;
      console.log(data);
      if (success) {
        localStorage.setItem("authToken", token);
        console.log("Authentication successful");
        setSigninUser((prevState) => ({
          ...prevState,
          success: message || "admin access sucessfull", // Set the error message
        }));

        // Route to dashboard
        router.push("/dashboard");
      } else {
        console.log("Authentication failed");
        setSigninUser((prevState) => ({
          ...prevState,
          error: "Access denied", // Set the error message
        }));
      }
    } else {
      console.log("Authentication failed");
      setSigninUser((prevState) => ({
        ...prevState,
        error: "Invalid email or password", // Set the error message
      }));
    }
  } catch (error: any) {
    console.error("Error in fetchSigninUser:", error);
    setSigninUser((prevState) => ({
      ...prevState,
      error: "An error occurred while signing in", // Set a generic error message
    }));
    // Handle other error cases or set additional error states if needed
  }
};

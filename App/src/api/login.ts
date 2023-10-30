import axios from "axios";
import { Dispatch, SetStateAction } from "react";
import {  SigninUserProp ,SigninModule} from "@/types";
import styles from '../components/signin/signin.module.css';








export const fetchSigninUser = async (
  formData:object,
  router:any,
  setSigninUser:Dispatch<SetStateAction<SigninUserProp>>,
  setIsSuccess: Dispatch<SetStateAction<boolean>>,
  setIsSuccessBg: Dispatch<SetStateAction<string>>,
  // styles.error__sign__response:string
  ) => {
    console.log ('button')
//     const cssModule: SigninModule = styles;
// const errorClassName = cssModule.error__sign__response;
  try {
    console.log(formData);
    const response = await axios.post(
        "http://localhost:5005/api/user/login",
        formData
      );
     
    console.log(response);

    //get response from post request
    const resResult = response.data.message;

    // if auth is sucessfull
   
    if (response.status === 200) {
localStorage.setItem('authToken', response.data.token);
  
console.log("hallo")
// route to homepage 

router.push('/');

      } 
      // if unsusessfull
      else {
        // alert('authentification failed')
        console.log("Authentication failed");
      setSigninUser((prevState ) => ({
        ...prevState,
        error: "Invalid email or password", // Set the error message
        // error: resResult, // Set the error message
      }));
      // setIsSuccess(true); // Update isSuccess when an error occurs
      // setIsSuccessBg(styles.error__sign__response);

        
        }
      // }
    }


   catch (error: any) {
    console.error('Error in fetchSigninUser:', error);
    setSigninUser((prevState) => ({
      ...prevState,
      error: "Invalid email or password", // Set the error message

      // error: "An error occurred while signing in", // Set a generic error message
    }));
    // setIsSuccess(true); // Update isSuccess when an error occurs
    //   setIsSuccessBg(styles.error__sign__response);
    
  
  }
};

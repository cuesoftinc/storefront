import { ChangeEvent, Dispatch, SetStateAction } from "react";

export interface SignupContextProps {
  signupUser: SignupUserProp;
  setSignupUser: Dispatch<SetStateAction<SignupUserProp>>;
  isSuccess: boolean;
  setIsSuccess: Dispatch<SetStateAction<boolean>>;
  isSuccessBg: string;
  setIsSuccessBg: Dispatch<SetStateAction<string>>;
}
export interface SigninContextProps {
  signinUser: SigninUserProp;
  setSigninUser: Dispatch<SetStateAction<SigninUserProp>>;
  isSuccess: boolean;
  setIsSuccess: Dispatch<SetStateAction<boolean>>;
  isSuccessBg: string;
  setIsSuccessBg: Dispatch<SetStateAction<string>>;
}

/* ==================== */
// Other Types
export interface SignupUserProp {
  isLoading: boolean;
  isError: string;
  user: {
    name: string;
    email: string;
    password: string;
  };
}
export interface SigninUserProp {
  isLoading: boolean;
  error: string;
  // email: string;
  // password: string;
  formData: {
    email: string;
    password: string;
  };
}

export interface SigninModule {
  error__sign__response: string;
  styles: string;
}

export interface OverlayProps {
  onClose: () => void;
  // setClose: Dispatch<SetStateAction<boolean>>;
  // isClose: boolean;

}
// delivery form

export interface FormData {
  firstName: string;
  lastName: string;
  address: string;
  city: string;
  zipCode: string;
  tell: string;
  email: string;
  // Add more fields as needed
}
export interface formdetails {
  formData: FormData;
  setFormSubmitted:Dispatch<SetStateAction<boolean>>;

  // handleFormSubmit:  void;
  
}
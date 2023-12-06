import { StaticImport } from "next/dist/shared/lib/get-img-props";
import { ChangeEvent, Dispatch, SetStateAction } from "react";

// Context Types
export interface AdminContextProps {
  homeState: number;
  setHomeState: Dispatch<SetStateAction<number>>;
}

// Other Types
// export interface UserProps {
//   id: number;
//   username: string;
// }
export interface SigninContextProps {
  signinUser: SigninUserProp;
  setSigninUser: Dispatch<SetStateAction<SigninUserProp>>;
  isSuccess: boolean;
  setIsSuccess: Dispatch<SetStateAction<boolean>>;
  isSuccessBg: string;
  setIsSuccessBg: Dispatch<SetStateAction<string>>;
}
export interface InputProps {
  type: string;
  name: string;
  holder: string;
  icons?: any;
  value: string;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
  inputStyle?: string;
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
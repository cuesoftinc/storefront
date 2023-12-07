import { StaticImport } from "next/dist/shared/lib/get-img-props";
import { ChangeEvent, Dispatch, SetStateAction } from "react";

export interface CatObjType {
  name: string;
  description: string;
  price: string;
  quantity: string;
  category_id: string;
  sub_category: string;
  shipping: string;
  color: string;
  size: string;
}

// Context Types
export interface addItemContextProps {
  addProduct: CatObjType;
  setAddProduct: Dispatch<SetStateAction<CatObjType>>;
  image: string;
  setImage: Dispatch<SetStateAction<string>>;
  showMsg: boolean;
  setShowMsg: Dispatch<SetStateAction<boolean>>;
}

// Other Types

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
  id?: string;
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

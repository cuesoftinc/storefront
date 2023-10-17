import { ChangeEvent, Dispatch, SetStateAction } from "react";

// Context Types
// export interface HomeContextProps {
//   homeState: number;
//   setHomeState: Dispatch<SetStateAction<number>>;
// }

// export interface CartContextProps {
//   cartState: UserProps[];
//   setCartState: Dispatch<SetStateAction<UserProps[]>>;
// }
export interface SignupContextProps {
  signupUser: SignupUserProp;
  setSignupUser: Dispatch<SetStateAction<SignupUserProp>>;
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

export interface InputProps {
  type: string;
  name: string;
  holder: string;
  icons: string;
  value: string;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export interface BtnProps {
  btnContent: string;
  btnStyle: string;
  disable: boolean;
  handleRegClick: (e: React.FormEvent) => void;
}

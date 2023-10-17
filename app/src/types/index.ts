import { ChangeEvent, Dispatch, SetStateAction } from "react";

// Context Types
export interface HomeContextProps {
  homeState: number;
  setHomeState: Dispatch<SetStateAction<number>>;
}

export interface CartContextProps {
  cartState: UserProps[];
  setCartState: Dispatch<SetStateAction<UserProps[]>>;
}

// Other Types
export interface UserProps {
  id: number;
  username: string;
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
  handleRegClick: (e: React.FormEvent) => void;
}

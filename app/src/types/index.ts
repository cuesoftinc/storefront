import { Dispatch, SetStateAction } from "react";

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

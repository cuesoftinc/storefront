import { Dispatch, SetStateAction } from "react";

// Context Types
export interface HomeContextProps {
  homeState: number;
  setHomeState: Dispatch<SetStateAction<number>>;
}

// Other Types
export interface UserProps {
  id: number;
  username: string;
}

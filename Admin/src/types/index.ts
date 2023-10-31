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

export interface InputProps {
  type: string;
  name: string;
  holder: string;
  icons?: string | StaticImport;
  value: string;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
  inputStyle?: string;
}

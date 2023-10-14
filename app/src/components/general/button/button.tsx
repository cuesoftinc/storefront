import React from "react";
import { BtnProps } from "@/types";

const Button = ({ btnContent, btnStyle }: BtnProps) => {
  return (
    <div>
      <button className={btnStyle}>{btnContent}</button>
    </div>
  );
};

export default Button;

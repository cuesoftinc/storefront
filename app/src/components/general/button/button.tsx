import React from "react";
import { BtnProps } from "@/types";

const Button = ({ btnContent, btnStyle, handleRegClick }: BtnProps) => {
  return (
    <div>
      <button className={btnStyle} onClick={handleRegClick}>{btnContent}</button>
    </div>
  );
};

export default Button;

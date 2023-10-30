import React from "react";
import { BtnProps } from "@/types";
import { useAuthContext } from "@/context/userContext";

const Button = ({
  btnContent,
  btnStyle,
  disable,
  handleRegClick,
}: BtnProps) => {
  const { signupUser, setSignupUser } = useAuthContext();

  return (
    <div>
      <button className={btnStyle} onClick={handleRegClick} disabled={disable}>
        {signupUser.isLoading ? "Loading..." : btnContent}
      </button>
    </div>
  );
};

export default Button;

import React from "react";
import { useAuthContext } from "@/context/userContext";

interface BtnProps {
  btnContent: string;
  btnStyle: string;
  disable: boolean;
  handleRegClick: (e: React.FormEvent) => void;
}

const AuthButton = ({
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

export default AuthButton;

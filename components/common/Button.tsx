import { ButtonProps } from "@/interfaces";
import React from "react";

const Button: React.FC<ButtonProps> = ({ label, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="px-4 py-2 rounded-xl bg-green-600 text-white hover:bg-green-700 transition"
    >
      {label}
    </button>
  );
};

export default Button;

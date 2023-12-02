"use client";
import { CustomButton } from "@/Types";
import React from "react";

export default function CustomButton({
  customStyles,
  title,
  btnType,
  handleClick,
}: CustomButton) {
  return (
    <button
      disabled={false}
      onClick={handleClick}
      type={btnType ?? "button"}
      className={`custom-button ${customStyles}`}
    >
      <span>{title}</span>
    </button>
  );
}

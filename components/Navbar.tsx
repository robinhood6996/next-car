"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { CustomButton } from ".";

type Props = {};

export default function Navbar({}: Props) {
  const handleLogin = () => {};
  return (
    <div className="w-full absolute z-100">
      <nav className="max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-4">
        <Link href={"/"} className="flex justify-center items-center">
          <Image
            src="/logo.svg"
            alt="car-hub-logo"
            width={118}
            height={18}
            className="object-contain"
          />
        </Link>
        <CustomButton
          title={"Login"}
          btnType="button"
          customStyles="bg-blue-500 rounded-full p-2 text-white px-4"
          handleClick={handleLogin}
        />
      </nav>
    </div>
  );
}

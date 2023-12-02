"use client";
import React from "react";
import CustomButton from "./CustomButton";
import Image from "next/image";

type Props = {};

export default function Hero({}: Props) {
  const handler = () => {};
  return (
    <div className="hero">
      <div className="flex-1 pt-36 padding-x">
        <h1 className="hero__title">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.
        </h1>
      </div>

      <p className="hero__subtitle">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed omnis
        molestias dolorem distinctio. Natus expedita similique in nam aliquid
        architecto.
      </p>
      <CustomButton
        title={"Explore cars"}
        customStyles="bg-blue-500 p-2 text-white rounded-full mt-10"
        btnType="button"
        handleClick={handler}
      />
      <div className="hero__image-container">
        <div className="hero__image">
          <Image
            src={"/hero.png"}
            alt="hero image"
            width={550}
            height={100}
            className="object-contain"
          />
        </div>
        <div className="hero__image-overlay"></div>
      </div>
    </div>
  );
}

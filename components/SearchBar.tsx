"use client";
import React, { useState } from "react";
import { SearchManufacturer } from ".";

type Props = {};

export default function SearchBar({}: Props) {
  const [manufacturer, setManufacturer] = useState("");
  const handleSubmit = () => {};
  return (
    <>
      <form className="search-bar" onSubmit={(e) => handleSubmit()}>
        <div className="div search-item">
          <SearchManufacturer
            manufacturer={manufacturer}
            setManufacturer={setManufacturer}
          />
        </div>
      </form>
    </>
  );
}

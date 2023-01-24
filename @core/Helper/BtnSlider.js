import Image from "next/image";
import React from "react";
import leftArrow from "./icons/left-arrow.svg";
import rightArrow from "./icons/right-arrow.svg";
import "./Slider.css";

export default function BtnSlider({ direction, moveSlide }) {
  return (
    <button
      onClick={moveSlide}
      className={direction === "next" ? "btn-slide next" : "btn-slide prev"}
    >
      <div className="relative">
        {" "}
        <Image
          quality={50}
          loading="lazy"
          layout="fill"
          src={direction === "next" ? rightArrow : leftArrow}
        />
      </div>
    </button>
  );
}

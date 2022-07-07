import React from "react";
import { CustomArrowProps } from "react-slick";
import { MdOutlineNavigateBefore } from "react-icons/md";

// type Props = {}

const PrevArrow = ({
  onClick,
  currentSlide,
  slideCount,
  className,
  style,
}: CustomArrowProps) => {
  return (
    <div className="absolute top-[40%] -left-3 cursor-pointer z-10" onClick={onClick}>
      <MdOutlineNavigateBefore size={50} className="font-bold" color="white"/>
    </div>
  );
};

export default PrevArrow;

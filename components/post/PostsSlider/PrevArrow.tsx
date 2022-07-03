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
    <div className="absolute top-1/3 -left-5 lg:-left-8 cursor-pointer" onClick={onClick}>
      <MdOutlineNavigateBefore size={35} className="font-bold" />
    </div>
  );
};

export default PrevArrow;

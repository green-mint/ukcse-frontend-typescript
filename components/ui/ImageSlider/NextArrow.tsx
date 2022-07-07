import React from "react";
import { CustomArrowProps } from "react-slick";
import { MdOutlineNavigateNext } from "react-icons/md";

// type Props = {}

const NextArrow = ({
  onClick,
  currentSlide,
  slideCount,
  className,
  style,
}: CustomArrowProps) => {
  return (
    <div className="absolute top-[40%] -right-3 cursor-pointer" onClick={onClick}>
      <MdOutlineNavigateNext size={50} color="white"  className="font-bold" />
    </div>
  );
};

export default NextArrow;

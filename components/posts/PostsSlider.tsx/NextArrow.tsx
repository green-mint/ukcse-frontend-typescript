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
    <div className="absolute top-1/3 -right-8 cursor-pointer" onClick={onClick}>
      <MdOutlineNavigateNext size={35} className="font-bold" />
    </div>
  );
};

export default NextArrow;

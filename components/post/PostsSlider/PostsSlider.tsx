import React, { ReactNode } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import PostCard, { PostCardProps } from "../PostCard/PostCard";
import Slider, { Settings } from "react-slick";
import NextArrow from "./NextArrow";
import PrevArrow from "./PrevArrow";
import { PostLoader } from "../../loaders";
// import { Settings } from "react-slick"

type Props = {
  data: PostCardProps[] | undefined;
};

const sliderProps: Settings = {
  appendDots: (dots: ReactNode) => <></>,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
  responsive: [
    {
      breakpoint: 5000,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 475,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

const PostsSlider = (props: Props) => {
  return (
    <div className="px-6 xl:max-w-5xl xl:mx-auto">
      <Slider {...sliderProps}>
        {props.data
          ? props.data.map((post, index) => (
              <div key={index} className="px-3">
                <PostCard {...post} />
              </div>
            ))
          : [...Array(3)].map((_ ,index) => <PostLoader key={index} />)}
      </Slider>
    </div>
  );
};

export default PostsSlider;

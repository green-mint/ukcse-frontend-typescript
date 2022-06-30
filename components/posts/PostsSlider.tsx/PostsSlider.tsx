import React, { ReactNode } from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import PostCard, { PostCardProps } from '../PostCard/PostCard';
import Slider, { Settings } from 'react-slick';
import NextArrow from './NextArrow';
import PrevArrow from './PrevArrow';
// import { Settings } from "react-slick"

type Props = {
  data: PostCardProps[];
}

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
        dots: true
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2
      }
    },
    {
      breakpoint: 475,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
}

const PostsSlider = (props: Props) => {
  return (
    <div className='xl:max-w-5xl xl:mx-auto'>
      <Slider {...sliderProps} >
        {props.data.map((post, index) => (
          <div className='px-3' key={index}>
            <PostCard {...post} />
          </div>
        ))}
      </Slider>
    </div>
  )
}

export default PostsSlider
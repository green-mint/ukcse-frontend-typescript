import Image from "next/image";
import React from "react";
import Slider from "react-slick";
import NextArrow from "./NextArrow";
import PrevArrow from "./PrevArrow";

type Props = {
  images: (string | null)[];
};

const ImageSlider = ({ images }: Props) => {
  console.log(images);
  return (
    <>
      {images.length > 0 ? (
        <Slider
          nextArrow={<NextArrow />}
          prevArrow={<PrevArrow />}
          slidesToScroll={1}
          slidesToShow={1}
          infinite={true}
          dots={undefined}
          arrows={true}>
          {images &&
            images.map((image, index) => (
              <div
                key={index}
                className="relative rounded-md overflow-hidden w-full aspect-square">
                <Image
                  src={image || "/images/placeholder.png"}
                  layout="fill"
                  alt="A carousel Image"
                />
              </div>
            ))}
        </Slider>
      ) : (
        <div className="relative flex justify-center bg-slate-300 rounded-md overflow-hidden w-full aspect-square">
          <span className="self-center font-bold">No Images found :(</span>
        </div>
      )}
    </>
  );
};

export default ImageSlider;

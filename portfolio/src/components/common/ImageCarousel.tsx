import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface ImageCarouselProps {
  imagesUrl: string[];
}

const ImageCarousel: React.FC<ImageCarouselProps> = ({ imagesUrl }) => {

  const settings = {
    dots: true,
    infinite: true,
    speed: 750, // delay 
    slidesToShow: 1,
    slidesToScroll: 1,
    // Autoplay
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,

  };

  return (
    <Slider {...settings}>
      {imagesUrl.map((url, index) => (
        <div key={index} className="p-3">
          <img
            src={url}
            alt={`Carousel image ${index + 1}`}
            className="w-full h-full object-contain aspect-video"
          />
        </div>
      ))}
    </Slider>

  );
};

export default ImageCarousel;

import React from "react";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

import { BiArrowBack } from "react-icons/bi";

const HeroBanner = () => {
  return <div className="relative text-white text-[20px] w-full max-w-[1380px] mx-auto">
    <Carousel autoPlay={true} infiniteLoop={true} showThumbs={false} showIndicators={false} showStatus={false} renderArrowPrev={(clickHandler, hasPrev)=> (
      <div onClick={clickHandler} className="absolute right-[31px] md:right-[51px] bottom-0 w-[30px] md:w-[50px] h-[30px] md:h-[50px] bg-black
      z-10 flex items-center justify-center hover:opacity-90">
        <BiArrowBack className="text-sm md:text-lg" />
      </div>
    )}

     renderArrowNext={(clickHandler, hasNext)=> (
      <div onClick={clickHandler} className="absolute right-0  bottom-0 w-[30px] md:w-[50px] h-[30px] md:h-[50px] bg-black
      z-10 flex items-center justify-center hover:opacity-90">
        <BiArrowBack className="rotate-180 text-sm md:text-lg" />
      </div>
    )}
   >
      
       <div>
            <img src="/20230521_115522.JPG" className="aspect-[16/10] md:aspect-auto object-cover" />
        </div>
        <div>
            <img src="/20230521_115634.JPG" className="aspect-[16/10] md:aspect-auto object-cover" />
        </div>
        <div>
            <img src="/20230603_100435.JPG" className="aspect-[16/10] md:aspect-auto object-cover" />
        </div>
    </Carousel>
  </div>;
  
};

export default HeroBanner

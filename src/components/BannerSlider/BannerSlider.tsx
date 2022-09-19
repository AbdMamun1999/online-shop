import React from "react";
import SideMenu from "../SideMenu/SideMenu";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import { Navigation, Pagination, Autoplay } from "swiper";

import sliderOne from "../../images/slider/slider-one.jpg";
import sliderTwo from "../../images/slider/slider-two.jpg";
import sliderThree from "../../images/slider/slider-three.jpg";
import sliderFour from "../../images/slider/slider-four.jpg";
import sliderFive from "../../images/slider/slider-five.jpg";
import sliderSix from "../../images/slider/slider-six.jpg";

// type Props = {}

const BannerSlider = () => {
  return (
    <div className="md:w-11/12 lg:w-4/5 mx-auto grid grid-cols-4 gap-5 mt-4">
      <div className="col-span-1 hidden lg:block"><SideMenu></SideMenu></div>
      <div className="col-span-4 lg:col-span-3">
        <Swiper
          loop={true}
          pagination={{
            dynamicBullets: true,
          }}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          navigation={true}
          modules={[Navigation, Pagination, Autoplay]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img src={sliderOne} alt=""/>
          </SwiperSlide>
          <SwiperSlide>
            <img src={sliderTwo} alt=""/>
          </SwiperSlide>
          <SwiperSlide>
            <img src={sliderThree} alt=""/>
          </SwiperSlide>
          <SwiperSlide>
            <img src={sliderFour} alt=""/>
          </SwiperSlide>
          <SwiperSlide>
            <img src={sliderFive} alt=""/>
          </SwiperSlide>
          <SwiperSlide>
            <img src={sliderSix} alt=""/>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default BannerSlider;

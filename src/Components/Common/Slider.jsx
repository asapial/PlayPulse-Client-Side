import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import img1 from "/sliderImage/image1.png";
import img2 from "/sliderImage/image2.png";
import img3 from "/sliderImage/image3.png";
import img4 from "/sliderImage/image4.png";
import img5 from "/sliderImage/image5.png";
import img6 from "/sliderImage/image6.png";
import img7 from "/sliderImage/image7.png";
import img8 from "/sliderImage/image8.png";
import img9 from "/sliderImage/image9.png";
import img10 from "/sliderImage/image10.png";

const Slider = () => {
  return (
    <div className="w-full">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={img1} className="w-full h-[60vh] object-cover object-center " />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img2} className="w-full h-[60vh] object-cover object-center" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img3} className="w-full h-[60vh] object-cover object-center" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img4} className="w-full h-[60vh] object-cover object-center" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img5} className="w-full h-[60vh] object-cover object-center" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img6} className="w-full h-[60vh] object-cover object-center" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img7} className="w-full h-[60vh] object-cover object-center" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img8} className="w-full h-[60vh] object-cover object-center" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img9} className="w-full h-[60vh] object-cover object-center" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img10} className="w-full h-[60vh] object-cover object-center" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;

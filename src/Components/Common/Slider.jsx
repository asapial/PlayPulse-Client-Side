import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import img1 from "/sliderImage/slider_1.png";
import img2 from "/sliderImage/slider_2.png";
import img3 from "/sliderImage/slider_3.png";
import img4 from "/sliderImage/slider_4.jpg";
import img5 from "/sliderImage/slider_5.jpg";
import img6 from "/sliderImage/slider_6.jpg";
import img7 from "/sliderImage/slider_7.jpg";
import img8 from "/sliderImage/slider_8.jpg";
import img9 from "/sliderImage/slider_9.jpg";
import img10 from "/sliderImage/slider_10.jpg";
import img11 from "/sliderImage/slider_11.jpg";


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
          <img src={img1} className="w-full h-[70vh] object-cover object-start " />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img2} className="w-full h-[70vh] object-cover object-end" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img3} className="w-full h-[70vh] object-cover object-start" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img4} className="w-full h-[70vh] object-cover object-start" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img5} className="w-full h-[70vh] object-cover object-start" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img6} className="w-full h-[70vh] object-cover object-start" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img7} className="w-full h-[70vh] object-cover object-end" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img8} className="w-full h-[70vh] object-cover object-start" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img9} className="w-full h-[70vh] object-cover object-start" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img10} className="w-full h-[70vh] object-cover object-start" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img11} className="w-full h-[70vh] object-cover object-start" />
        </SwiperSlide>
        
      </Swiper>
    </div>
  );
};

export default Slider;

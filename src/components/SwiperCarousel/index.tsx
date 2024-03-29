// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade } from "swiper";

import "./styles.css";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const SwiperCarousel = () => {
  return (
    <>
      <Swiper
        // install Swiper modules
        effect="fade"
        className="!py-12 swiper-photos"
        modules={[Navigation, Pagination, Scrollbar, A11y, EffectFade]}
        spaceBetween={0}
        slidesPerView={1}
        draggable
        loop
        navigation
        freeMode
        autoplay={{
          delay: 2500,
          waitForTransition: true,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        <SwiperSlide>
          <div className="w-full h-full">
            <div className="swiper-box h-full absolute bottom-0 w-full text-center flex items-center justify-center bg-opacity-20">
              <div className="w-auto pt-10">
                <h2 className="font-semibold text-3xl text-white px-8">
                  El secreto de la elaboración
                </h2>
                <p className="text-xs md:text-sm text-white mt-2 px-8">
                  Nuestra masa, con harinas ecológicas y procesos de larga
                  fermentación, consigue que el producto sea digestivo...
                </p>
              </div>
            </div>
            <video
              className="w-full h-full object-cover flex justify-center items-center"
              playsInline
              autoPlay
              muted
              loop
              id="myVideo"
            >
              <source
                src="https://assets.mixkit.co/videos/preview/mixkit-cook-mixing-flour-for-a-dough-42464-large.mp4"
                type="video/mp4"
              />
            </video>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="w-full h-full object-cover "
            alt="Pizza margarita de Pizzeria Junkal"
            src="/images/swiper/swiper1.jpg"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="w-full h-full object-cover"
            alt="Pizza margarita de Pizzeria Junkal"
            src="/images/swiper/swiper2.jpg"
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default SwiperCarousel;

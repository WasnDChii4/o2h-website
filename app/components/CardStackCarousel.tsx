"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-cards";

const CardStackCarousel = () => {
  return (
    <div className="w-full flex justify-center py-3">
      <Swiper
        effect="cards"
        grabCursor={true}
        modules={[EffectCards]}
        className="w-[85%] max-w-4xl aspect-video"
      >
        <SwiperSlide>
          <div className="h-full rounded-xl bg-white text-black p-6">
            <h1 className="text-4xl font-bold">Image 1</h1>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="h-full rounded-xl bg-white text-black p-6">
            <h1 className="text-4xl font-bold">Image 2</h1>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="h-full rounded-xl bg-white text-black p-6">
            <h1 className="text-4xl font-bold">Image 3</h1>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default CardStackCarousel;

"use client";

import Image from "next/image";
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
            <Image
              src="/img/albums/O2H_1.jpg"
              alt="O2H Album 1"
              fill
              className="rounded-xl"
              priority
            />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="h-full rounded-xl bg-white text-black p-6">
            <Image
              src="/img/albums/O2H_2.jpg"
              alt="O2H Album 1"
              fill
              className="rounded-xl"
              priority
            />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="h-full rounded-xl bg-white text-black p-6">
            <Image
              src="/img/albums/O2H_4.jpg"
              alt="O2H Album 1"
              fill
              className="rounded-xl"
              priority
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default CardStackCarousel;

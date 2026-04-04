"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/css/pagination";

const CardStackCarousel = () => {
  return (
    <div className="w-full flex flex-col items-center py-3">
      <Swiper
        effect="cards"
        grabCursor={true}
        modules={[EffectCards, Pagination]}
        pagination={{
          el: ".custom-pagination",
          clickable: true,
        }}
        className="w-[85%] max-w-4xl aspect-square md:aspect-video"
      >
        <SwiperSlide className="relative rounded-xl overflow-hidden group">
          <Image
            src="/img/albums/O2H_1.jpg"
            alt="O2H Album 1"
            fill
            className="object-cover transition duration-300 group-hover:opacity-50"
            priority
          />
        </SwiperSlide>

        <SwiperSlide className="relative rounded-xl overflow-hidden group">
          <Image
            src="/img/albums/O2H_2.jpg"
            alt="O2H Album 2"
            fill
            className="object-cover transition duration-300 group-hover:opacity-50"
            priority
          />
        </SwiperSlide>

        <SwiperSlide className="relative rounded-xl overflow-hidden group">
          <Image
            src="/img/albums/O2H_4.jpg"
            alt="O2H Album 3"
            fill
            className="object-cover transition duration-300 group-hover:opacity-50"
            priority
          />
        </SwiperSlide>
      </Swiper>

      <div className="custom-pagination mt-7"></div>
    </div>
  );
};

export default CardStackCarousel;
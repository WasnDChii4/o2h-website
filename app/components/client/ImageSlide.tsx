"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

export default function ImageSlide() {
  return (
    <div className="w-full flex flex-col items-center py-3">
      <Swiper
        effect="coverflow"
        grabCursor={true}
        modules={[EffectCoverflow, Pagination, Autoplay]}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          el: ".custom-pagination",
          clickable: true,
        }}
        loop={true}
        className="w-[85%] max-w-4xl aspect-square md:aspect-video"
      >
        <SwiperSlide className="relative rounded-xl overflow-hidden group">
          <Image
            src="/img/albums/O2H_1.jpg"
            alt="O2H Album 1"
            fill
            className="object-cover transition duration-300 group-hover:opacity-75"
            priority
          />
        </SwiperSlide>

        <SwiperSlide className="relative rounded-xl overflow-hidden group">
          <Image
            src="/img/albums/O2H_2.jpg"
            alt="O2H Album 2"
            fill
            className="object-cover transition duration-300 group-hover:opacity-75"
            priority
          />
        </SwiperSlide>

        <SwiperSlide className="relative rounded-xl overflow-hidden group">
          <Image
            src="/img/albums/O2H_4.jpg"
            alt="O2H Album 3"
            fill
            className="object-cover transition duration-300 group-hover:opacity-75"
            priority
          />
        </SwiperSlide>
      </Swiper>

      <div className="custom-pagination mt-7"></div>
    </div>
  );
};

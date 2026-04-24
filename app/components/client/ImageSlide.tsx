"use client";

// Import Image dari Next.js 
import Image from "next/image";

// Import Swiper dan slide
import { Swiper, SwiperSlide } from "swiper/react";

// Import module tambahan Swiper
import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules";

// Import style Swiper
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// Komponen ImageSlide untuk menampilkan slider gambar dengan efek coverflow, pagination, dan autoplay
export default function ImageSlide() {
  return (
    // Container utama untuk slider gambar dengan lebar penuh, tata letak kolom, dan padding vertikal
    <div className="w-full flex flex-col items-center py-3">
      {/* Swiper (slider utama) */}
      <Swiper
        effect="coverflow"
        grabCursor={true}
        modules={[EffectCoverflow, Pagination, Autoplay]}
        // Autoplay dengan delay 3000ms dan tidak berhenti saat pengguna berinteraksi dengan slider
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        // Pagination dengan elemen khusus dan dapat diklik
        pagination={{
          el: ".custom-pagination", // Elemen khusus untuk pagination
          clickable: true, // Bisa di klik
        }}
        loop={true} // Slider looping

        // Ukuran dan aspek rasio slider
        className="w-[85%] max-w-4xl aspect-square md:aspect-video"
      >
        {/* Slide 1 */}
        <SwiperSlide className="relative rounded-xl overflow-hidden group">
          <Image
            src="/img/albums/O2H_1.jpg"
            alt="O2H Album 1"
            fill
            className="object-cover transition duration-300 group-hover:opacity-75"
            priority
          />
        </SwiperSlide>

        {/* Slide 2 */}
        <SwiperSlide className="relative rounded-xl overflow-hidden group">
          <Image
            src="/img/albums/O2H_2.jpg"
            alt="O2H Album 2"
            fill
            className="object-cover transition duration-300 group-hover:opacity-75"
            priority
          />
        </SwiperSlide>

        {/* Slide 3 */}
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

      {/* Pagination custom (dot dibawah slider) */}
      <div className="custom-pagination mt-7"></div>
    </div>
  );
};

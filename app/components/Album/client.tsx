"use client";

import Link from "next/link"; // Import Link dari Next.js untuk navigasi antar halaman
import { useState, useRef, useEffect } from "react"; // Import hook useState, useRef, dan useEffect dari React untuk mengelola state dan efek samping
import { FaArrowAltCircleRight } from "react-icons/fa"; // Import ikon panah dari react-icons untuk digunakan dalam tampilan
import { Playfair_Display } from "next/font/google"; // Import font Playfair Display dari Google Fonts untuk digunakan dalam tampilan teks
import ImageSlide from "./imageClient"; // Import komponen ImageSlide yang akan menampilkan carousel gambar untuk bagian Albums

// Konfigurasi font Playfair Display untuk gaya teks yang berbeda (bold dan regular)
const playfairDisplayBold = Playfair_Display({
  weight: "700",
  subsets: ["latin"],
});
const playfairDisplayRegular = Playfair_Display({
  weight: "400",
  subsets: ["latin"],
});

// Komponen AlbumCarouselClient untuk menampilkan bagian Albums dengan judul, tombol "View More", dan carousel gambar yang muncul dengan efek animasi saat masuk ke dalam viewport
export default function AlbumCarouselClient() {
  const [showContent, setShowContent] = useState(false); // State untuk mengontrol apakah konten Albums sudah muncul di viewport atau belum
  const sectionRef = useRef<HTMLElement | null>(null); // Ref untuk mengakses elemen section yang akan diamati oleh Intersection Observer

  // useEffect untuk membuat Intersection Observer yang akan memantau apakah elemen section sudah masuk ke dalam viewport
  useEffect(() => {
    const observer = new IntersectionObserver( // Membuat instance Intersection Observer
      ([entry]) => {
        // Callback yang akan dipanggil saat terjadi perubahan pada elemen yang diamati
        if (entry.isIntersecting) {
          // Jika elemen sudah masuk ke dalam viewport (isIntersecting true), maka setShowContent akan diubah menjadi true untuk menampilkan konten Albums
          setShowContent(true); // Set showContent menjadi true saat elemen masuk ke dalam viewport
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -90px 0px" } // Konfigurasi threshold dan rootMargin untuk menentukan kapan callback akan dipanggil (threshold 0.1 berarti 10% dari elemen harus terlihat, rootMargin untuk memberikan margin pada viewport)
    );

    // Mulai mengamati elemen section menggunakan ref
    if (sectionRef.current) {
      observer.observe(sectionRef.current); // Amati elemen section yang direferensikan oleh sectionRef
    }

    return () => observer.disconnect(); // Bersihkan observer saat komponen unmount untuk mencegah memory leak
  }, []);

  return (
    <section ref={sectionRef} className="py-10 bg-yellow-400">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between mb-10 text-black">
          <h1
            className={`text-3xl md:text-4xl text-center md:text-left transform-gpu transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
              showContent // Jika showContent true, tampilkan dengan opacity 100 dan posisi normal (translate-y-0), jika false, sembunyikan dengan opacity 0 dan geser ke bawah (translate-y-5) untuk efek animasi saat muncul di viewport
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-5"
            } ${playfairDisplayBold.className}`}
          >
            Albums
          </h1>
          <Link
            href="/photobooks"
            className={`flex items-center gap-2 text-sm md:text-base leading-none transform-gpu transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
              showContent // Jika showContent true, tampilkan dengan opacity 50 dan hover/active dengan opacity 100 serta posisi normal (translate-y-0), jika false, sembunyikan dengan opacity 0 dan geser ke bawah (translate-y-5) untuk efek animasi saat muncul di viewport
                ? "opacity-50 hover:opacity-100 active:opacity-100 translate-y-0"
                : "opacity-0 translate-y-5"
            } ${playfairDisplayRegular.className}`}
          >
            View More
            <FaArrowAltCircleRight size={20} className="translate-y-px" />
          </Link>
        </div>
        <div
          className={`transform-gpu transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
            showContent // Jika showContent true, tampilkan dengan opacity 100 dan posisi normal (translate-y-0), jika false, sembunyikan dengan opacity 0 dan geser ke bawah (translate-y-5) untuk efek animasi saat muncul di viewport
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-5"
          }`}
          style={{ transitionDelay: showContent ? "300ms" : "0ms" }} // Tambahkan delay pada transisi untuk memberikan efek animasi yang lebih halus saat konten muncul di viewport, dengan delay 300ms setelah judul dan tombol "View More" muncul
        >
          <ImageSlide />
        </div>
      </div>
    </section>
  );
}

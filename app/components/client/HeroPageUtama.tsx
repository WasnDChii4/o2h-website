"use client";

// Import hooks React
import { useState, useEffect, use } from "react";

// Import Image dari Next.js
import Image from "next/image";

//Import font dari Google Fonts
import { Bungee, Playfair_Display } from "next/font/google";

// Konfigurasi font Bungee dan Playfair Display
const bungee = Bungee({
  weight: "400",
  subsets: ["latin"],
});
const playfairDisplayRegular = Playfair_Display({
  weight: "400",
  subsets: ["latin"],
});

// Komponen utama Hero Section
export default function Hero() {
  // State untuk mengontrol efek blur dan scale pada gambar latar belakang
  const [isMounted, setIsMounted] = useState(false);

  const [displayText, setDisplayText] = useState("");
  const fullText = "Together in Every Step";

  useEffect(() => {
    setIsMounted(true);

    const startTyping = setTimeout(() => {
      let index = 0;

      const typingInterval = setInterval(() => {
        setDisplayText(fullText.slice(0, index + 1));
        index++;

        if (index === fullText.length) {
          clearInterval(typingInterval);
        }
      }, 150);
    }, 1500);

    return () => clearTimeout(startTyping);
  }, []);

  useEffect(() => {
    // Setelah komponen ter-mount, atur isMounted ke true untuk memicu efek transisi pada gambar latar belakang
    setIsMounted(true);
  }, []);

  return (
    // Container utama untuk hero section dengan gambar latar belakang, overlay, dan konten teks
    <div className="hero min-h-screen relative overflow-hidden">
      {/* Background Image */}
      <Image
        src="/img/backgrounds/O2H_ImagesHero_2.jpg"
        alt="Hero background"
        fill
        priority
        className={`object-cover transition-all duration-1500 ease-in-out ${
          isMounted ? "blur-0 scale-100" : "blur-lg scale-105"
        }`}
      />

      {/* Overlay gelap di atas background */}
      <div className="hero-overlay bg-opacity-60 z-0" />

      {/* Koneten utama */}
      <div className="hero-content text-neutral-content text-center z-10">
        <div className="max-w-2xl">
          {/* Judul utama */}
          <h1
            className={`mb-5 text-4xl md:text-5xl font-bold ${bungee.className}`}
          >
            {displayText}
            <span className="animate-pulse">|</span>
          </h1>
          {/* Deskripsi */}
          <p className={`mb-5 md:text-xl ${playfairDisplayRegular.className}`}>
            O2H Website Center yang berisi informasi para member streamer dalam
            komunitas, merch yang sedang di jual dan pre-order, maupun info
            terbaru seputar kegiatan O2H.
          </p>
          {/* Button CTA */}
          <button
            className={`btn bg-yellow-400 hover:bg-yellow-500 active:bg-yellow-600 text-black font-bold rounded-xl ${bungee.className}`}
          >
            Let's Eksplore
          </button>
        </div>
      </div>
    </div>
  );
}

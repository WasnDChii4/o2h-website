"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Bungee, Playfair_Display } from "next/font/google";

const bungee = Bungee({
  weight: "400",
  subsets: ["latin"],
});

const playfairDisplayRegular = Playfair_Display({
  weight: "400",
  subsets: ["latin"],
});

export default function Hero() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <div className="hero min-h-screen relative overflow-hidden">
      <Image
        src="/img/backgrounds/O2H_ImagesHero_2.jpg"
        alt="Hero background"
        fill
        priority
        className={`object-cover transition-all duration-1500 ease-in-out ${
          isMounted ? "blur-0 scale-100" : "blur-lg scale-105"
        }`}
      />

      <div className="hero-overlay bg-opacity-60 z-0" />

      <div className="hero-content text-neutral-content text-center z-10">
        <div className="max-w-2xl">
          <h1 className={`mb-5 text-4xl md:text-5xl font-bold ${bungee.className}`}>
            Together in Every Step
          </h1>
          <p className={`mb-5 md:text-xl ${playfairDisplayRegular.className}`}>
            O2H Website Center yang berisi informasi para member streamer
            dalam komunitas, merch yang sedang di jual dan pre-order, maupun
            info terbaru seputar kegiatan O2H.
          </p>
          <button className={`btn bg-yellow-400 hover:bg-yellow-500 active:bg-yellow-600 text-black font-bold rounded-xl ${bungee.className}`}>
            Let's Eksplore
          </button>
        </div>
      </div>
    </div>
  );
}
import Image from "next/image";
import Link from "next/link";
import { Bungee, Playfair_Display } from "next/font/google";
import { FaArrowAltCircleRight } from "react-icons/fa";
import Navbar from "./components/navbar";
import O2HImageHero from "../public/img/backgrounds/O2H_ImagesHero_2.jpg";

const bungee = Bungee({
  weight: "400",
  subsets: ["latin"],
});

const playfairDisplayBold = Playfair_Display({
  weight: "700",
  subsets: ["latin"],
});

const playfairDisplayRegular = Playfair_Display({
  weight: "400",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <>
      <title>O2H Website Center</title>
      <Navbar />
      <div className="hero min-h-screen relative overflow-hidden">
        <Image
          src={O2HImageHero}
          alt="Hero background"
          fill
          priority
          className="object-cover"
        />
        <div className="hero-overlay bg-opacity-60 z-0" />
        <div className="hero-content text-neutral-content text-center z-10">
          <div className="max-w-2xl">
            <h1
              className={`mb-5 text-4xl md:text-5xl font-bold ${bungee.className}`}
            >
              Together in Every Step
            </h1>
            <p
              className={`mb-5 md:text-xl ${playfairDisplayRegular.className}`}
            >
              O2H Website Center yang berisi informasi para member streamer
              dalam komunitas, merch yang sedang di jual dan pre-order, maupun
              info terbaru seputar kegiatan O2H.
            </p>
            <button
              className={`btn bg-yellow-400 text-black font-bold rounded-xl ${bungee.className}`}
            >
              Let's Eksplore
            </button>
          </div>
        </div>
      </div>

      <section className="py-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between mb-10">
            <h1
              className={`text-3xl md:text-4xl text-center md:text-left ${playfairDisplayBold.className}`}
            >
              Latest News
            </h1>
            <Link
              href="/news"
              className={`flex items-center gap-2 text-sm md:text-base opacity-50 hover:opacity-100 transition leading-none ${playfairDisplayRegular.className}`}
            >
              View More
              <FaArrowAltCircleRight size={20} className="translate-y-px" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

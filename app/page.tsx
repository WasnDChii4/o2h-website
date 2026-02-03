import Image from "next/image";
import { headers } from "next/headers";
import { Bungee, Playfair_Display } from "next/font/google";
import Navbar from "./components/navbar";
import LatestNews from "./components/LastestNews";
import O2HImageHero from "../public/img/backgrounds/O2H_ImagesHero_2.jpg";

type News = {
  id: number;
  date: string;
  title: string;
  slug: string;
};

const bungee = Bungee({
  weight: "400",
  subsets: ["latin"],
});

const playfairDisplayRegular = Playfair_Display({
  weight: "400",
  subsets: ["latin"],
});

export default async function Home() {
  const headersList = await headers();
  const host = headersList.get("host");

  const res = await fetch(`http://${host}/api/news`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch news");
  }

  const newsData: News[] = await res.json();
  const latestNews = newsData.slice(0, 3);

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

      <LatestNews news={latestNews} />
    </>
  );
}

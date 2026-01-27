import Image from "next/image";
import Link from "next/link";
import { headers } from "next/headers";
import { Bungee, Playfair_Display } from "next/font/google";
import { FaArrowAltCircleRight } from "react-icons/fa";
import Navbar from "./components/navbar";
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

const playfairDisplayBold = Playfair_Display({
  weight: "700",
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
          <div className="divide-y divide-white/20">
            {latestNews.map((news) => (
              <Link
                key={news.id}
                href={news.slug}
                className="group flex flex-col md:flex-row md:items-center gap-2 md:gap-6 py-6 md:py-8 transition hover:no-underline"
              >
                <span
                  className={`text-sm md:text-base group-hover:opacity-50 md:w-28 md:shrink-0
                  ${playfairDisplayRegular.className}
                `}
                >
                  {news.date}
                </span>
                <p
                  className={`flex-1 text-base md:text-lg group-hover:opacity-50 leading-relaxed
                    ${playfairDisplayRegular.className}
                  `}
                >
                  {news.title}
                </p>
                <div className="self-end md:self-auto mt-2 md:mt-0">
                  <FaArrowAltCircleRight
                    size={24}
                    className="group-hover:opacity-50 transition"
                  />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

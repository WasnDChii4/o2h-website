"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { FaArrowAltCircleRight } from "react-icons/fa";
import { Playfair_Display } from "next/font/google";

type News = {
  id: number;
  date: string;
  title: string;
  slug: string;
};

const playfairDisplayBold = Playfair_Display({
  weight: "700",
  subsets: ["latin"],
});
const playfairDisplayRegular = Playfair_Display({
  weight: "400",
  subsets: ["latin"],
});

export default function LatestNewsClient({
  latestNews,
}: {
  latestNews: News[];
}) {
  const [showContent, setShowContent] = useState(false);
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShowContent(true);
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -90px 0px" }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-10 scroll-mt-12 md:scroll-mt-16"
      id="latest-news"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between mb-10">
          <h1
            className={`text-3xl md:text-4xl text-center md:text-left transform-gpu transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
              showContent
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-5"
            } ${playfairDisplayBold.className}`}
          >
            Latest News
          </h1>

          <Link
            href="/news"
            className={`flex items-center gap-2 text-sm md:text-base leading-none transform-gpu transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
              showContent
                ? "opacity-50 hover:opacity-100 active:opacity-100 translate-y-0"
                : "opacity-0 translate-y-5"
            } ${playfairDisplayRegular.className}`}
          >
            View More
            <FaArrowAltCircleRight size={20} className="translate-y-px" />
          </Link>
        </div>

        <div className="divide-y divide-white/30">
          {latestNews.map((news, index) => (
            <Link
              key={news.id}
              href={news.slug}
              className={`group flex flex-col md:flex-row md:items-center gap-2 md:gap-6 py-6 md:py-8 hover:no-underline transform-gpu transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                showContent
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-5"
              }`}
              style={{ transitionDelay: `${250 + index * 150}ms` }}
            >
              <span
                className={`text-sm md:text-base md:w-28 md:shrink-0 group-hover:opacity-50 group-active:opacity-50 ${playfairDisplayRegular.className}`}
              >
                {news.date}
              </span>

              <p
                className={`flex-1 text-base md:text-lg leading-relaxed group-hover:opacity-50 ${playfairDisplayRegular.className}`}
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
  );
}

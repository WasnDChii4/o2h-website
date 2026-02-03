import Link from "next/link";
import { headers } from "next/headers";
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

const LatestNews = async () => {
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
                className={`text-sm md:text-base md:w-28 md:shrink-0 group-hover:opacity-50 ${playfairDisplayRegular.className}`}
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
};

export default LatestNews;

import Link from "next/link";
import { FaArrowAltCircleRight } from "react-icons/fa";
import { Playfair_Display } from "next/font/google";
import ImageSlide from "./ImageSlide";

const playfairDisplayBold = Playfair_Display({
  weight: "700",
  subsets: ["latin"],
});

const playfairDisplayRegular = Playfair_Display({
  weight: "400",
  subsets: ["latin"],
});

const AlbumsCarousel = () => {
  return (
    <section className="py-7">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between mb-10">
          <h1
            className={`text-3xl md:text-4xl text-center md:text-left ${playfairDisplayBold.className}`}
          >
            Albums
          </h1>
          <Link
            href="/photobooks"
            className={`flex items-center gap-2 text-sm md:text-base opacity-50 hover:opacity-100 transition leading-none ${playfairDisplayRegular.className}`}
          >
            View More
            <FaArrowAltCircleRight size={20} className="translate-y-px" />
          </Link>
        </div>
        <ImageSlide />
      </div>
    </section>
  );
};

export default AlbumsCarousel;

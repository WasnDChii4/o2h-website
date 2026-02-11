import { Playfair_Display } from "next/font/google";
import CardStackCarousel from "./CardStackCarousel";

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
        </div>
        <CardStackCarousel />
      </div>
    </section>
  );
};

export default AlbumsCarousel;

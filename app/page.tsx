import Navbar from "./components/navbar";
import LatestNews from "./components/LastestNews";
import AlbumsCarousel from "./components/AlbumsCarousel";
import Hero from "./components/HeroPageUtama";

export default function Home() {
  return (
    <>
      <title>O2H Website Center</title>
      <Navbar />
      <Hero />
      <LatestNews />
      <AlbumsCarousel />
    </>
  );
}
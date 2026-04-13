import Navbar from "./components/client/navbar";
import LatestNews from "./components/LastestNews";
import AlbumsCarousel from "./components/AlbumsCarousel";
import Hero from "./components/client/HeroPageUtama";
import StorePageCard from "./components/StorePageCard";

export default function Home() {
  return (
    <>
      <title>O2H Website Center</title>
      <Navbar />
      <Hero />
      <LatestNews />
      <AlbumsCarousel />
      <StorePageCard />
    </>
  );
}
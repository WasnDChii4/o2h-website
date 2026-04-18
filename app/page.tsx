import NavbarClient from "./components/client/NavbarClient";
import LatestNews from "./components/LastestNews";
import AlbumsCarousel from "./components/AlbumsCarousel";
import Hero from "./components/client/HeroPageUtama";
import StorePageCard from "./components/StorePageCard";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <title>O2H Website Center</title>
      <NavbarClient />
      <Hero />
      <LatestNews />
      <AlbumsCarousel />
      <StorePageCard />
      <Footer variant="yellow" />
    </>
  );
}
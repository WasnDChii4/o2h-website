import NavbarClient from "./components/client/NavbarClient";
import LatestNews from "./components/LastestNews";
import AlbumsCarousel from "./components/Album";
import Hero from "./components/client/HeroPageUtama";
import HomeStorePageCard from "./components/StoreHome";
import Footer from "./components/Footer";
import FloatingLogo from "./components/client/FloatingLogo";

export default function Home() {
  return (
    <>
      <title>O2H Website Center</title>
      <NavbarClient />
      <Hero />
      <LatestNews />
      <AlbumsCarousel />
      <HomeStorePageCard />
      <Footer variant="yellow" />
      <FloatingLogo />
    </>
  );
}
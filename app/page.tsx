import Image from "next/image";
import NavbarLayout from "./layouts/NavbarLayout";
import O2HImageHero from "../public/img/backgrounds/O2H_ImagesHero_2.jpg";

export default function Home() {
  return (
    <>
      <title>O2H Website Center</title>
      <NavbarLayout />
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
          <div className="max-w-lg">
            <h1 className="mb-5 text-5xl font-bold">Together in Every Step</h1>

            <p className="mb-5">
              O2H Website Center yang berisi informasi para member streamer
              dalam komunitas, merch yang sedang di jual dan pre-order, maupun
              info terbaru seputar kegiatan O2H.
            </p>

            <button className="btn bg-yellow-400 text-black font-bold rounded-xl">
              Let's Eksplore
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

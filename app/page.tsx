import Image from "next/image";
import NavbarLayout from "./layouts/NavbarLayout";
import O2HImageHero from "../public/img/backgrounds/O2H_ImagesHero_2.jpg";

export default function Home() {
  return (
    <>
    <title>O2H Website Center</title>
      <NavbarLayout />
      <div className="hero min-h-screen relative overflow-hidden">
        <Image src={O2HImageHero} alt="Hero background" fill priority className="object-cover" />

        <div className="hero-overlay bg-opacity-60 z-0" />

        <div className="hero-content text-neutral-content text-center z-10">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Hello there</h1>

            <p className="mb-5">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>

            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </>
  );
}

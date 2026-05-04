import Link from "next/link"; // Import Link dari Next.js untuk navigasi antar halaman
import { FaArrowAltCircleRight } from "react-icons/fa"; // Import ikon panah dari react-icons untuk digunakan dalam tampilan tombol "View More"
import { Playfair_Display } from "next/font/google"; // Import font Playfair Display dari Google Fonts untuk digunakan dalam tampilan teks pada judul dan tombol
import ImageSlide from "./client/ImageSlide"; // Import komponen ImageSlide yang akan menampilkan slider gambar untuk album-album yang ditampilkan di carousel ini

// Import font Playfair Display dengan varian bold dan regular untuk digunakan pada judul "Albums" dan tombol "View More"
const playfairDisplayBold = Playfair_Display({
  weight: "700",
  subsets: ["latin"],
});
const playfairDisplayRegular = Playfair_Display({
  weight: "400",
  subsets: ["latin"],
});

// Komponen AlbumsCarousel untuk menampilkan carousel album dengan judul, tombol "View More", dan slider gambar yang diimpor dari komponen ImageSlide
export default function  AlbumsCarousel() {
  return (
    // Section utama untuk carousel album dengan padding vertikal dan latar belakang kuning
    <section className="py-10 bg-yellow-400">
      {/* Container (center + max width) */}
      <div className="max-w-7xl mx-auto px-6">
        {/* Header (Judl + Link) */}
        <div className="flex items-center justify-between mb-10 text-black">
          {/* Judul Section */}
          <h1
            className={`text-3xl md:text-4xl text-center md:text-left ${playfairDisplayBold.className}`}
          >
            Albums
          </h1>
          {/* Link ke halaman Photobooks */}
          <Link
            href="/photobooks"
            className={`flex items-center gap-2 text-sm md:text-base opacity-50 hover:opacity-100 transition leading-none ${playfairDisplayRegular.className}`}
          >
            View More
            {/* Icon panah */}
            <FaArrowAltCircleRight size={20} className="translate-y-px" />
          </Link>
        </div>
        {/* Component SLider */}
        <ImageSlide />
      </div>
    </section>
  );
};

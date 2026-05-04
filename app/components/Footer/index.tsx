import FooterClient from "./client"; // Import komponen FooterClient yang akan menampilkan bagian klien pada footer, serta Image dan Link dari Next.js untuk optimasi gambar dan navigasi antar halaman
import Image from "next/image"; // Import Image dari Next.js untuk optimasi gambar pada logo yang akan ditampilkan di bagian kiri footer
import Link from "next/link"; // Import Link dari Next.js untuk navigasi antar halaman ketika logo di klik pada bagian kiri footer
import O2HLogo from "./../../../public/img/logos/O2H_Logos_1.png"; // Import gambar logo O2H untuk ditampilkan di bagian kiri footer

// Tipe untuk properti Footer yang menerima varian tema (dark, yellow, light) dengan nilai default "dark"
type FooterProps = {
  variant?: "dark" | "yellow" | "light"; // Properti variant untuk menentukan tema warna footer, dengan opsi "dark", "yellow", atau "light"
};

// Komponen Footer untuk menampilkan bagian bawah halaman dengan berbagai varian tema yang dapat dipilih melalui properti variant, serta menampilkan logo, link, dan informasi hak cipta
export default function Footer({ variant = "yellow" }: FooterProps) {
  const variants = {
    dark: {
      bg: "bg-[#070b1a]",
      text: "text-white",
      divider: "border-gray-600",
      subText: "text-gray-300",
      copyright: "text-gray-400",
    },
    yellow: {
      bg: "bg-yellow-400",
      text: "text-black",
      divider: "border-black/30",
      subText: "text-black/70",
      copyright: "text-black/60",
    },
    light: {
      bg: "bg-gray-100",
      text: "text-black",
      divider: "border-gray-300",
      subText: "text-gray-600",
      copyright: "text-gray-500",
    },
  };

  const current = variants[variant]; // Mendapatkan kelas CSS yang sesuai dengan varian tema yang dipilih dari objek variants

  return (
    // Footer utama dengan kelas CSS yang dinamis berdasarkan varian tema yang dipilih, serta padding dan tata letak grid untuk mengatur konten di dalamnya
    <footer className={`${current.bg} ${current.text} px-6 md:px-10 py-12`}>
      {/* Wrapper (grid layout) */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-[0.8fr_1.6fr] gap-8 items-start">
        
        {/* LEFT (Logo + Social) */}
        <div className="flex flex-col gap-6">
          {/* Logo */}
          <Link href="/">
            <div className="w-27.5 md:w-35">
              <Image
                src={O2HLogo}
                alt="O2H Logo"
                className="w-full h-auto object-contain"
                priority
              />
            </div>
          </Link>

          {/* Social Media */}
          <FooterClient />
        </div>

        {/* RIGHT (Links + Info) */}
        <div className="flex flex-col gap-5 text-sm">
          {/* List Link Informasi */}
          <div className="flex flex-wrap gap-x-5 gap-y-2 leading-relaxed">
            <p className="hover:underline cursor-pointer">About this site</p>
            <p className="hover:underline cursor-pointer">About accounts</p>
            <p className="hover:underline cursor-pointer">About payment</p>
            <p className="hover:underline cursor-pointer">Acceptable use policy</p>
            <p className="hover:underline cursor-pointer">Privacy policy</p>
            <p className="hover:underline cursor-pointer">Request to customers</p>
            <p className="hover:underline cursor-pointer">About the operating company</p>
            <p className="hover:underline cursor-pointer">System requirements</p>
            <p className="hover:underline cursor-pointer">FAQ</p>
          </div>

          {/* Divider */}
          <hr className={`${current.divider} my-2`} />

          {/* Disclaimer */}
          <p className={`${current.subText} leading-relaxed`}>
            Unauthorized reproduction of all published content (articles,
            images, audio data, video data, etc.) is prohibited.
          </p>

          {/* Copyright */}
          <p className={current.copyright}>
            © 2026 O2H ALL RIGHTS RESERVED. powered by WASENIME.inc
          </p>
        </div>
      </div>
    </footer>
  );
}
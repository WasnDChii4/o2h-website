import FooterClient from "./client/FooterClient";
import Image from "next/image";
import Link from "next/link";

import O2HLogo from "./../../public/img/logos/O2H_Logos_1.png";

type FooterProps = {
  variant?: "dark" | "yellow" | "light";
};

export default function Footer({ variant = "dark" }: FooterProps) {
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

  const current = variants[variant];

  return (
    <footer className={`${current.bg} ${current.text} px-6 md:px-10 py-12`}>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-[0.8fr_1.6fr] gap-8 items-start">
        
        {/* LEFT */}
        <div className="flex flex-col gap-6">
          <Link href="/">
            <div className="w-27.5 md:w-35">
              <Image
                src={O2HLogo}
                alt="tuki logo"
                className="w-full h-auto object-contain"
                priority
              />
            </div>
          </Link>

          <FooterClient />
        </div>

        {/* RIGHT */}
        <div className="flex flex-col gap-5 text-sm">
          {/* Links */}
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

          {/* Text */}
          <p className={`${current.subText} leading-relaxed`}>
            Unauthorized reproduction of all published content (articles,
            images, audio data, video data, etc.) is prohibited.
          </p>

          {/* Copyright */}
          <p className={current.copyright}>
            © 2026 tuki. ALL RIGHTS RESERVED. powered by SKIYAKI.inc
          </p>
        </div>
      </div>
    </footer>
  );
}
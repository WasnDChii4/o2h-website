"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import O2HLogo from "../../../public/img/logos/O2H_Logos_2.png";

export default function FloatingLogo() {
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setRotation(window.scrollY * 0.3);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className="fixed bottom-6 right-7 w-16 h-16 rounded-full overflow-hidden shadow-2xl z-50"
      style={{
        transform: `rotate(${rotation}deg)`,
        transition: "transform 0.1s linear",
      }}
    >
      <Link href="/">
        <Image
          src={O2HLogo}
          alt="O2H Logo"
          fill
          className="object-cover"
        />
      </Link>
    </div>
  );
}
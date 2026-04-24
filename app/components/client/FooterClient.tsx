"use client";

// Import icon sosial media dari react-icon
import { FaTiktok, FaXTwitter, FaYoutube, FaInstagram } from "react-icons/fa6";

// Import Link dari Next.js untuk navigasi
import Link from "next/link";

// Komponen FooterClient untuk menampilkan ikon sosial media dengan tautan
export default function FooterClient() {
  return (
    // Container utama untuk ikon sosial media dengan jarak antar ikon dan ukuran teks yang lebih besar
    <div className="flex gap-4 text-lg">
      <Link href="#" target="_blank" rel="noopener noreferrer">      
        <FaTiktok className="cursor-pointer hover:text-gray-400" />
      </Link>
      <Link href="#" target="_blank" rel="noopener noreferrer">
        <FaXTwitter className="cursor-pointer hover:text-gray-400" />
      </Link>
      <Link href="https://www.youtube.com/@o2halimawan" target="_blank" rel="noopener noreferrer">
        <FaYoutube className="cursor-pointer hover:text-gray-400" />
      </Link>
      <Link href="https://www.instagram.com/orangoranganhalimawan" target="_blank" rel="noopener noreferrer">
        <FaInstagram className="cursor-pointer hover:text-gray-400" />
      </Link>
    </div>
  );
}
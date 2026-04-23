"use client";

import { FaTiktok, FaXTwitter, FaYoutube, FaInstagram } from "react-icons/fa6";
import Link from "next/link";

export default function FooterClient() {
  return (
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
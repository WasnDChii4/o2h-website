"use client";

import { FaTiktok, FaXTwitter, FaYoutube, FaInstagram } from "react-icons/fa6";
import Link from "next/link";

export default function FooterClient() {
  return (
    <div className="flex gap-4 text-lg">
      <FaTiktok className="cursor-pointer hover:text-gray-400" />
      <FaXTwitter className="cursor-pointer hover:text-gray-400" />
      <FaYoutube className="cursor-pointer hover:text-gray-400" />
      <FaInstagram className="cursor-pointer hover:text-gray-400" />
    </div>
  );
}
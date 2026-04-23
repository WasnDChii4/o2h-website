"use client";

import Image from "next/image";
import { Playfair_Display } from "next/font/google";

const playfairDisplayBold = Playfair_Display({
  weight: "700",
  subsets: ["latin"],
});

export default function ProductCard({ product }: any) {
  return (
    <div className="bg-white rounded-md shadow-white hover:shadow-md transition p-2 cursor-pointer">
      <Image
        src={product.image}
        alt={product.title}
        width={300}
        height={300}
        className="w-full h-40 object-cover rounded"
      />
      <div className="border-t border-yellow-400 my-3">
        <p
          className={`text-sm mt-2 line-clamp-2 text-black ${playfairDisplayBold.className}`}
        >
          {product.title}
        </p>
        <p className="text-yellow-500 mt-1 font-semibold">{product.price}</p>
        <p className="text-xs text-gray-500">{product.sold}</p>
      </div>
    </div>
  );
}

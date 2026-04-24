import Link from "next/link";
import { headers } from "next/headers";
import { Playfair_Display } from "next/font/google";
import { FaArrowAltCircleRight } from "react-icons/fa";
import HomeProductCard from "./client/HomeProductCard";

type Product = {
  id: number;
  title: string;
  price: string;
  image: string;
  sold: string;
}

const playfairDisplayBold = Playfair_Display({
  weight: "700",
  subsets: ["latin"],
});

const playfairDisplayRegular = Playfair_Display({
  weight: "400",
  subsets: ["latin"],
});

export default async function HomeStorePageCard() {
  const headersList = await headers();
  const host = headersList.get("host");

  const res = await fetch(`http://${host}/api/products`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch products");
  }

  const productsData: Product[] = await res.json();

  return (
    <section className="py-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between mb-10">
          <h1
            className={`text-3xl md:text-4xl text-center md:text-left font-bold ${playfairDisplayBold.className}`}
          >
            Store
          </h1>

          <Link
            href="/stores"
            className={`flex items-center gap-2 text-sm md:text-base opacity-50 hover:opacity-100 transition leading-none ${playfairDisplayRegular.className}`}
          >
            View More
            <FaArrowAltCircleRight size={20} className="translate-y-px" />
          </Link>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
          {productsData.map((product) => (
            <HomeProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}

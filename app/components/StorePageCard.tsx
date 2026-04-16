import Link from "next/link";
import { Playfair_Display } from "next/font/google";
import { FaArrowAltCircleRight } from "react-icons/fa";
import ProductCard from "./client/ProductCard";

async function getProduct() {
  return [
    {
      id: 1,
      title: "O2H Hostle Navy Half-Zip Jacket",
      price: "Rp. 550.000",
      image: "/img/products/O2H_Hostel_Navy_Half-Zip_Jacket.jpg",
      sold: "10RB+ Terjual",
    },
    {
      id: 2,
      title: "O2H Hostle Navy Half-Zip Jacket",
      price: "Rp. 550.000",
      image: "/img/products/O2H_Hostel_Navy_Half-Zip_Jacket.jpg",
      sold: "10RB+ Terjual",
    },
    {
      id: 3,
      title: "O2H Hostle Navy Half-Zip Jacket",
      price: "Rp. 550.000",
      image: "/img/products/O2H_Hostel_Navy_Half-Zip_Jacket.jpg",
      sold: "10RB+ Terjual",
    },
    {
      id: 4,
      title: "O2H Hostle Navy Half-Zip Jacket",
      price: "Rp. 550.000",
      image: "/img/products/O2H_Hostel_Navy_Half-Zip_Jacket.jpg",
      sold: "10RB+ Terjual",
    },
    {
      id: 5,
      title: "O2H Hostle Navy Half-Zip Jacket",
      price: "Rp. 550.000",
      image: "/img/products/O2H_Hostel_Navy_Half-Zip_Jacket.jpg",
      sold: "10RB+ Terjual",
    },
    {
      id: 6,
      title: "O2H Hostle Navy Half-Zip Jacket",
      price: "Rp. 550.000",
      image: "/img/products/O2H_Hostel_Navy_Half-Zip_Jacket.jpg",
      sold: "10RB+ Terjual",
    },
    {
      id: 7,
      title: "O2H NFL Black Jersey",
      price: "Rp. 465.000",
      image: "/img/products/O2H_NFL_Black_Jersey.png",
      sold: "10RB+ Terjual",
    },
    {
      id: 8,
      title: "O2H NFL Black Jersey",
      price: "Rp. 465.000",
      image: "/img/products/O2H_NFL_Black_Jersey.png",
      sold: "10RB+ Terjual",
    },
    {
      id: 9,
      title: "O2H NFL Black Jersey",
      price: "Rp. 465.000",
      image: "/img/products/O2H_NFL_Black_Jersey.png",
      sold: "10RB+ Terjual",
    },
    {
      id: 10,
      title: "O2H NFL Black Jersey",
      price: "Rp. 465.000",
      image: "/img/products/O2H_NFL_Black_Jersey.png",
      sold: "10RB+ Terjual",
    },
    {
      id: 11,
      title: "O2H NFL Black Jersey",
      price: "Rp. 465.000",
      image: "/img/products/O2H_NFL_Black_Jersey.png",
      sold: "10RB+ Terjual",
    },
    {
      id: 12,
      title: "O2H NFL Black Jersey",
      price: "Rp. 465.000",
      image: "/img/products/O2H_NFL_Black_Jersey.png",
      sold: "10RB+ Terjual",
    },
    {
      id: 13,
      title: "O2H Hostel Embroidery Baseball Jersey Black",
      price: "Rp. 550.000",
      image: "/img/products/O2H_Hostel_Embroidery_Baseball_Jersey_Black.png",
      sold: "10RB+ Terjual",
    },
    {
      id: 14,
      title: "O2H Hostel Embroidery Baseball Jersey Black",
      price: "Rp. 550.000",
      image: "/img/products/O2H_Hostel_Embroidery_Baseball_Jersey_Black.png",
      sold: "10RB+ Terjual",
    },
    {
      id: 15,
      title: "O2H Hostel Embroidery Baseball Jersey Black",
      price: "Rp. 550.000",
      image: "/img/products/O2H_Hostel_Embroidery_Baseball_Jersey_Black.png",
      sold: "10RB+ Terjual",
    },
    {
      id: 16,
      title: "O2H Hostel Embroidery Baseball Jersey Black",
      price: "Rp. 550.000",
      image: "/img/products/O2H_Hostel_Embroidery_Baseball_Jersey_Black.png",
      sold: "10RB+ Terjual",
    },
    {
      id: 17,
      title: "O2H Hostel Embroidery Baseball Jersey Black",
      price: "Rp. 550.000",
      image: "/img/products/O2H_Hostel_Embroidery_Baseball_Jersey_Black.png",
      sold: "10RB+ Terjual",
    },
    {
      id: 18,
      title: "O2H Hostel Embroidery Baseball Jersey Black",
      price: "Rp. 550.000",
      image: "/img/products/O2H_Hostel_Embroidery_Baseball_Jersey_Black.png",
      sold: "10RB+ Terjual",
    },
  ];
}

const playfairDisplayBold = Playfair_Display({
  weight: "700",
  subsets: ["latin"],
});

const playfairDisplayRegular = Playfair_Display({
  weight: "400",
  subsets: ["latin"],
});

export default async function StorePageCard() {
  const products = await getProduct();

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
            href="/store"
            className={`flex items-center gap-2 text-sm md:text-base opacity-50 hover:opacity-100 transition leading-none ${playfairDisplayRegular.className}`}
          >
            View More
            <FaArrowAltCircleRight size={20} className="translate-y-px" />
          </Link>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}

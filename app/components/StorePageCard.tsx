import Link from "next/link";
import { Playfair_Display } from "next/font/google";
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
  ]
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
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

import NavbarClient from "../components/client/NavbarClient";
import Image from "next/image";
import { Playfair_Display } from "next/font/google";

const playfairDisplayBold = Playfair_Display({
  weight: "700",
  subsets: ["latin"],
});

interface Product {
  id: number;
  title: string;
  price: string;
  image: string;
  sold: string;
}

async function getProducts(): Promise<Product[]> {
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
  ];
}

export default async function SearchPage({
  searchParams,
}: {
  searchParams: Promise<{ keyword?: string }>;
}) {
  const params = await searchParams;
  const keyword = params.keyword?.toLowerCase() || "";

  const products = await getProducts();

  const filtered = products.filter((p) =>
    p.title.toLowerCase().includes(keyword)
  );

  return (
    <section>
      <NavbarClient />
      <div className="my-20 m-5 md:m-20">
        <h1 className="text-lg font-semibold mb-4">
          Hasil pencarian: "{keyword}"
        </h1>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
          {filtered.length > 0 ? (
            filtered.map((p) => (
              <div
                key={p.id}
                className="bg-white rounded-md shadow-white hover:shadow-lg transition p-2 cursor-pointer"
              >
                <Image
                  src={p.image}
                  alt={p.title}
                  width={300}
                  height={300}
                  className="w-full h-40 object-cover rounded"
                />
                <p className={`text-sm mt-2 line-clamp-2 text-black ${playfairDisplayBold.className}`}>
                  {p.title}
                </p>
                <p className="text-yellow-500 mt-1 font-semibold">{p.price}</p>
                <p className="text-xs text-gray-500">{p.sold}</p>
              </div>
            ))
          ) : (
            <p className="col-span-full text-center">
              Produk tidak ditemukan
            </p>
          )}
        </div>
      </div>
    </section>
  );
}

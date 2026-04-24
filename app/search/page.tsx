import { headers } from "next/headers";
import NavbarClient from "../components/client/NavbarClient";
import Image from "next/image";
import { Playfair_Display } from "next/font/google";

const playfairDisplayBold = Playfair_Display({
  weight: "700",
  subsets: ["latin"],
});

const playfairDisplayRegular = Playfair_Display({
  weight: "400",
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
  const headersList = await headers();
  const host = headersList.get("host") || "localhost:3000";

  const protocol = process.env.NODE_ENV === "development" ? "http" : "https";

  const res = await fetch(`http://${host}/api/products`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch products");
  }

  return res.json();
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
      <title>Search | O2H Website Center</title>

      <NavbarClient defaultSearch={keyword} />
      <div className="my-20 m-5 md:m-20">
        <h1 className={`text-lg my-7 ${playfairDisplayRegular.className}`}>
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
                <div className="border-t border-yellow-400 my-3">
                  <p
                    className={`text-sm mt-2 line-clamp-2 text-black ${playfairDisplayBold.className}`}
                  >
                    {p.title}
                  </p>
                  <p className="text-yellow-500 mt-1 font-semibold">{p.price}</p>
                  <p className="text-xs text-gray-500">{p.sold}</p>
                </div>
              </div>
            ))
          ) : (
            <p className={`col-span-full flex justify-center items-center min-h-[60vh] text-2xl ${playfairDisplayBold.className}`}>Produk tidak ditemukan</p>
          )}
        </div>
      </div>
    </section>
  );
}

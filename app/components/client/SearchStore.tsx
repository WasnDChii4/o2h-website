"use client"

import { FaSearch } from "react-icons/fa";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function SearchStore({ defaultSearch = "" }: any) {
  const router = useRouter(); // Hook untuk navigasi programatik ke halaman lain
  const [inputValue, setinputValue] = useState(defaultSearch);

  // Fungsi untuk menangani pencarian, membersihkan input, dan mengarahkan ke halaman hasil pencarian
  const handleSearch = () => {
    const clean = inputValue.trim().toLowerCase();

    if (!clean) return;

    // Redirect ke halaman search dengan query parameter keyword yang sudah di-encode untuk menghindari masalah karakter khusus
    router.push(`/stores/search?keyword=${encodeURIComponent(clean)}`);
  };

  // Fungsi untuk menangani event keydown pada input pencarian, jika tombol Enter ditekan maka akan memanggil fungsi handleSearch
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  // useEffect untuk memperbarui nilai input pencarian setiap kali defaultSearch berubah, sehingga input akan selalu sinkron dengan nilai default yang diberikan
  useEffect(() => {
    setinputValue(defaultSearch);
  }, [defaultSearch]);

  return (
    <div className="flex w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl">
      {/* Input Search */}
      <input
        type="text"
        placeholder="Telusuri..."
        value={inputValue}
        onChange={(e) => setinputValue(e.target.value)}
        onKeyDown={handleKeyDown}
        className=" input w-full rounded-l-full text-black bg-yellow-100 border border-yellow-500/30 focus:border-yellow-600 focus:outline-none"
      />
      {/* Button Search */}
      <button
        onClick={handleSearch}
        className=" px-5 rounded-r-full bg-yellow-500 hover:bg-yellow-600 active:bg-yellow-700 border border-yellow-500/30 transition"
      >
        <FaSearch size={20} />
      </button>
    </div>
  );
}

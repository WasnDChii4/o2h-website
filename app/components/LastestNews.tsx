import Link from "next/link"; // Import Link dari Next.js untuk navigasi antar halaman

import { headers } from "next/headers"; // Import headers dari Next.js untuk mendapatkan informasi header dari permintaan HTTP, yang akan digunakan untuk menentukan host saat melakukan fetch data berita dari API 

// Import Icon dari React Icons untuk ikon panah kanan pada tombol "View More" dan setiap item berita, serta font Playfair Display dengan varian bold dan regular untuk digunakan pada judul "Latest News", tanggal, judul berita, dan tombol "View More"
import { FaArrowAltCircleRight } from "react-icons/fa";
import { Playfair_Display } from "next/font/google";

// Tipe untuk News yang akan diambil dari API, dengan properti id, date, title, dan slug yang sesuai dengan data yang diharapkan dari API
type News = {
  id: number;
  date: string;
  title: string;
  slug: string;
};

// Import font Playfair Display dengan varian bold dan regular untuk digunakan pada judul "Latest News", tanggal, judul berita, dan tombol "View More"
const playfairDisplayBold = Playfair_Display({
  weight: "700",
  subsets: ["latin"],
});
const playfairDisplayRegular = Playfair_Display({
  weight: "400",
  subsets: ["latin"],
});

// Komponen LatestNews untuk menampilkan bagian berita terbaru di halaman utama, dengan judul "Latest News", tombol "View More" yang mengarah ke halaman berita, dan daftar berita yang diambil dari API dan ditampilkan dengan tanggal, judul, dan ikon panah kanan untuk setiap item berita
export default async function LatestNews() {
  const headersList = await headers(); // Mendapatkan header dari permintaan HTTP untuk menentukan host saat melakukan fetch data berita dari API

  const host = headersList.get("host"); // Mendapatkan nilai host dari header yang diperoleh, yang akan digunakan untuk membangun URL saat melakukan fetch data berita dari API

  // Melakukan fetch data berita dari API menggunakan URL yang dibangun dengan host yang diperoleh dari header, serta mengatur cache menjadi "no-store" untuk memastikan data yang diambil selalu terbaru
  const res = await fetch(`http://${host}/api/news`, {
    cache: "no-store", // Mengatur cache menjadi "no-store" untuk memastikan data yang diambil selalu terbaru setiap kali halaman dimuat, sehingga daftar berita yang ditampilkan di bagian berita terbaru akan selalu mencerminkan data berita terbaru yang tersedia di API
  });

  // Jika respons dari API tidak berhasil (res.ok adalah false), maka akan melempar error dengan pesan "Failed to fetch news" untuk menangani kasus ketika data berita tidak dapat diambil dari API
  if (!res.ok) {
    throw new Error("Failed to fetch news"); // Melempar error dengan pesan "Failed to fetch news" jika respons dari API tidak berhasil, yang akan membantu dalam proses debugging dan memberikan informasi yang jelas tentang masalah yang terjadi saat mengambil data berita dari API untuk ditampilkan di bagian berita terbaru
  }
  
  const newsData: News[] = await res.json(); // Mengambil data berita dari respons API dalam format JSON dan menyimpannya dalam variabel newsData, yang akan digunakan untuk menampilkan daftar berita di bagian berita terbaru

  const latestNews = newsData.slice(0, 6); // Mengambil 5 berita terbaru dari data berita yang diambil dari API dengan menggunakan metode slice untuk mengambil elemen pertama hingga kelima dari array newsData, dan menyimpannya dalam variabel latestNews yang akan digunakan untuk menampilkan daftar berita terbaru di bagian berita terbaru

  return (
    // Section utama untuk bagian berita terbaru dengan padding vertikal
    <section className="py-10 scroll-mt-12 md:scroll-mt-16" id="latest-news">
      {/* Container utama untuk bagian berita terbaru dengan lebar maksimum, margin otomatis untuk pusat, dan padding horizontal */}
      <div className="max-w-7xl mx-auto px-6">
        {/* Header untuk bagian berita terbaru dengan judul "Latest News" dan tombol "View More" yang mengarah ke halaman berita, serta tata letak flex untuk mengatur posisi judul dan tombol */}
        <div className="flex items-center justify-between mb-10">
          {/* Judul Section dengan kelas CSS untuk ukuran teks, perataan, dan font yang digunakan */}
          <h1
            className={`text-3xl md:text-4xl text-center md:text-left ${playfairDisplayBold.className}`}
          >
            Latest News
          </h1>

          {/* Link ke halaman berita dengan kelas CSS untuk styling tombol, termasuk ukuran teks, perataan, opacity, transisi, dan font yang digunakan, serta ikon panah kanan untuk menunjukkan bahwa ini adalah tautan yang dapat diklik */}
          <Link
            href="/news"
            className={`flex items-center gap-2 text-sm md:text-base opacity-50 hover:opacity-100 transition leading-none ${playfairDisplayRegular.className}`}
          >
            View More
            <FaArrowAltCircleRight size={20} className="translate-y-px" />
          </Link>
        </div>

        {/* Daftar berita terbaru dengan menggunakan metode map untuk iterasi melalui array latestNews dan menampilkan setiap item berita dengan tanggal, judul, dan ikon panah kanan, serta kelas CSS untuk styling dan transisi saat hover */}
        <div className="divide-y divide-white/30">
          {/* Menggunakan metode map untuk iterasi melalui array latestNews dan menampilkan setiap item berita dengan tanggal, judul, dan ikon panah kanan, serta kelas CSS untuk styling dan transisi saat hover */}
          {latestNews.map((news) => (
            <Link
              key={news.id}
              href={news.slug}
              className="group flex flex-col md:flex-row md:items-center gap-2 md:gap-6 py-6 md:py-8 transition hover:no-underline"
            >
              {/* Menampilkan tanggal berita dengan kelas CSS untuk ukuran teks, lebar, shrink, opacity saat hover, dan font yang digunakan */}
              <span
                className={`text-sm md:text-base md:w-28 md:shrink-0 group-hover:opacity-50 ${playfairDisplayRegular.className}`}
              >
                {news.date}
              </span>

              {/* Menampilkan judul berita dengan kelas CSS untuk ukuran teks, leading, opacity saat hover, dan font yang digunakan, serta menggunakan flex-1 untuk membuat judul mengambil ruang yang tersedia di antara tanggal dan ikon panah kanan */}
              <p
                className={`flex-1 text-base md:text-lg leading-relaxed group-hover:opacity-50 ${playfairDisplayRegular.className}`}
              >
                {news.title}
              </p>

              {/* Menampilkan ikon panah kanan dengan kelas CSS untuk ukuran, opacity saat hover, dan transisi, serta menggunakan self-end untuk menempatkan ikon di bagian bawah item berita saat tampilan dalam mode kolom pada layar kecil, dan self-auto untuk menempatkan ikon di posisi normal saat tampilan dalam mode baris pada layar besar */}
              <div className="self-end md:self-auto mt-2 md:mt-0">
                <FaArrowAltCircleRight
                  size={24}
                  className="group-hover:opacity-50 transition"
                />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

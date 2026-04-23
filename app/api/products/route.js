import { NextResponse } from "next/server";

const productData = [
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
]

export function GET() {
  return NextResponse.json(productData);
}
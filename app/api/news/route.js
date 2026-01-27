import { NextResponse } from "next/server";

const newsData = [
  {
    id: 1,
    date: "2026.01.22",
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    slug: "/news/lorem-1",
  },
  {
    id: 2,
    date: "2026.01.18",
    title: "Lorem ipsum dolor sit amet, sed do eiusmod tempor",
    slug: "/news/lorem-2",
  },
  {
    id: 3,
    date: "2026.01.10",
    title: "Lorem ipsum dolor sit amet, ut labore et dolore",
    slug: "/news/lorem-3",
  },
  {
    id: 4,
    date: "2025.12.28",
    title: "Lorem ipsum dolor sit amet, quis nostrud exercitation",
    slug: "/news/lorem-4",
  },
  {
    id: 5,
    date: "2025.12.20",
    title: "Lorem ipsum dolor sit amet, duis aute irure dolor",
    slug: "/news/lorem-5",
  },
  {
    id: 6,
    date: "2025.12.12",
    title: "Lorem ipsum dolor sit amet, ex ea commodo consequat",
    slug: "/news/lorem-6",
  },
];

export async function GET() {
  return NextResponse.json(newsData);
}
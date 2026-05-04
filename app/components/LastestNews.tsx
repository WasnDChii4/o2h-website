import { headers } from "next/headers";
import LatestNewsClient from "./client/LatestNewsClient";

type News = {
  id: number;
  date: string;
  title: string;
  slug: string;
}

export default async function LatestNews() {
  const headersList = await headers();
  const host = headersList.get("host");

  const res = await fetch(`http://${host}/api/news`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch news");
  }

  const newsData: News[] = await res.json();
  const latestNews = newsData.slice(0, 6);

  return <LatestNewsClient latestNews={latestNews} />;
}
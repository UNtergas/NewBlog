import { notFound } from "next/navigation";
import newsRepository from "@/mock/news.repository";
import type { NewsItem } from "@/types";
import Image from "next/image";
interface Params {
    newSlug: string

}

export default function NewsImagePage({ params }: { params: Params }) {
    const newsSlug = params.newSlug
    const newsItem = newsRepository.getNewsBySlug(newsSlug) as NewsItem
    if (!newsItem) {
        notFound()
    }
    return (
        <div className="fullscreen-image">
            <img src={`/image/${newsItem?.image}`} alt={newsItem ? newsItem.title : "new item"} />
        </div>
    )

}
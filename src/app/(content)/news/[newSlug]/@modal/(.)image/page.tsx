'use client'

import { notFound, useRouter } from "next/navigation";
import newsRepository from "@/mock/news.repository";
import type { NewsItem } from "@/types";
import Image from "next/image";
interface Params {
    newSlug: string

}

export default function InterceptedNewsImagePage({ params }: { params: Params }) {
    const router = useRouter()
    const newsSlug = params.newSlug
    const newsItem = newsRepository.getNewsBySlug(newsSlug) as NewsItem
    if (!newsItem) {
        notFound()
    }

    return (
        <div className="modal-backdrop" onClick={router.back}>
            <dialog className="modal" open>
                <div className="fullscreen-image">
                    <img src={`/image/${newsItem?.image}`} alt={newsItem ? newsItem.title : "new item"} />
                </div>
            </dialog>
        </div>
    )

}
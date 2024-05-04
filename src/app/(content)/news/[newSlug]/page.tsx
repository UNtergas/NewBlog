import newsRepository from "@/mock/news.repository";
import Image from "next/image";
import { notFound } from "next/navigation";
import type { NewsItem } from "@/types";
import Link from "next/link";
interface Params {
    newSlug: string

}

export default function SingleNewPage({ params }: { params: Params }) {
    const newsSlug = params.newSlug;
    const newsItem = newsRepository.getNewsBySlug(newsSlug) as NewsItem;
    if (!newsItem) {
        notFound();
    }
    return (
        <article className="news-article">
            <header>
                <div className="next-image-container">
                    <Link href={`/news/${newsItem.slug}/image`}>
                        <Image src={`/image/${newsItem?.image}`} alt={newsItem ? newsItem.title : "new item"} fill quality={90} />
                    </Link>
                </div>
                <h1>{newsItem?.title}</h1>
                <time dateTime={newsItem?.date}>{newsItem?.date}</time>
            </header>
            <p>{newsItem?.content}</p>
        </article>
    );
}
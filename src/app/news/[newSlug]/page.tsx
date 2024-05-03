import { DUMMY_NEWS } from "@/mock/news";
import Image from "next/image";
import { notFound } from "next/navigation";

interface Params {
    newSlug: string

}

export default function SingleNewPage({ params }: { params: Params }) {
    const newsSlug = params.newSlug;
    const newsItem = DUMMY_NEWS.find(news => news.slug === newsSlug);
    if (!newsItem) {
        notFound();
    }
    return (
        <article>
            <header>
                <div className="next-image-container">
                    <Image src={`/image/${newsItem?.image}`} alt={newsItem ? newsItem.title : "new item"} fill quality={90} />
                </div>
                <h1>{newsItem?.title}</h1>
                <time dateTime={newsItem?.date}>{newsItem?.date}</time>
            </header>
            <p>{newsItem?.content}</p>
        </article>
    );
}
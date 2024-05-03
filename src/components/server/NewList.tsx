import Link from "next/link";
import Image from "next/image";
import type { NewsItem } from "@/types";

export default function NewList({ news }: { news: NewsItem[] }) {
    return (
        <ul className="news-list">
            {news.map((news: NewsItem) => (
                <li key={news.id}>

                    <Link href={`/news/${news.slug}`}>
                        <div className="next-image-container">
                            <Image src={`/image/${news.image}`} alt={`${news.title}`} fill quality={90} />
                        </div>
                        <span>{news.title}</span>
                    </Link>
                </li>
            ))}
        </ul>
    )
}
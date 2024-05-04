import newsRepository from "@/mock/news.repository"
import NewList from "@components/server/NewList"

export default function LatestNewPage() {
    const latestNews = newsRepository.getLatestNews();
    return (
        <div>
            <h2> Latest New</h2>
            <NewList news={latestNews} />
        </div>
    )
}
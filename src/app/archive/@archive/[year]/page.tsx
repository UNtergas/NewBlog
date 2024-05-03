import NewList from "@components/server/NewList"
import newsRepository from "@/mock/news.repository";

interface Params {
    year: string

}

export default function FilteredNewPage({ params }: { params: Params }) {
    const year = params.year;
    const news = newsRepository.getNewsForYear(year);
    return (
        <NewList news={news} />
    )
}
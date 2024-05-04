import NewList from "@components/server/NewList"
import newsRepository from "@/mock/news.repository";
import ArchiveNav from "@/components/server/ArchiveNav";
import type { NewsItem } from "@/types";
import { link } from "fs";
interface Params {
    filter: string[]

}

export default function FilteredNewPage({ params }: { params: Params }) {
    const filter = params.filter;
    const selectedYear = filter?.[0]
    const selectedMonth = filter?.[1]
    let links = newsRepository.getAvailableNewsYears()
    let news = undefined
    if (selectedYear && !selectedMonth) {
        news = newsRepository.getNewsForYear(selectedYear) as NewsItem[];
        links = newsRepository.getAvailableNewsMonths(selectedYear) as number[]
    }
    if (selectedYear && selectedMonth) {
        news = newsRepository.getNewsForYearAndMonth(selectedYear, selectedMonth) as NewsItem[];
        links = []
    }


    let newsContent = <p> No news found for the selected period</p>
    if (news && news.length > 0) {
        newsContent = <NewList news={news} />
    }

    if (selectedYear && !newsRepository.getAvailableNewsYears().includes(parseInt(selectedYear)) ||
        selectedMonth && !newsRepository.getAvailableNewsMonths(selectedYear).includes(parseInt(selectedMonth))) {
        throw new Error('Invalid filter')
    }
    return (
        <div>
            <ArchiveNav links={links} selectedYear={selectedYear} />
            {newsContent}
        </div>
    )
}
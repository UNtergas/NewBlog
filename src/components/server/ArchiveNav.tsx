import Link from "next/link"
import newsRepository from "@/mock/news.repository"

interface ArchiveNavProps {
    links: number[]
    selectedYear: string
}
export default function ArchiveNav({ links, selectedYear }: ArchiveNavProps) {
    // const links = newsRepository.getAvailableNewsYears()
    return (
        <header id="archive-header">
            <nav>
                <ul>
                    {links.map((link) => {
                        const href = selectedYear ? `${selectedYear}/${link}` : `${link}`
                        return (
                            <li key={link}>
                                <Link href={`/archive/${href}`} >{link}</Link>
                            </li>
                        )
                    })}
                </ul>
            </nav>
        </header>
    )
}
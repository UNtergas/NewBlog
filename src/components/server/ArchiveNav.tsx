import Link from "next/link"
import newsRepository from "@/mock/news.repository"


export default function ArchiveNav() {
    const links = newsRepository.getAvailableNewsYears()
    return (
        <header id="archive-header">
            <nav>
                <ul>
                    {links.map((link) => (
                        <li key={link}>
                            <Link href={`/archive/${link}`} >{link}</Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    )
}
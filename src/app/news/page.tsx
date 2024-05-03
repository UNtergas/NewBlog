import Link from "next/link";
import { DUMMY_NEWS } from "@/mock/news"
import Image from "next/image";
import type { NewsItem } from "@/types";
import NewList from "@components/server/NewList";



export default function NewsPage() {
    return (
        <div>
            <h1 className="text-4xl mb-5">News Page</h1>
            <div>
                <NewList news={DUMMY_NEWS} />
            </div>
        </div>
    )
}
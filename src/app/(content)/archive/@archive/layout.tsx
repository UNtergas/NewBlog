

import { Metadata } from "next";
import React from "react";
import ArchiveNav from "@components/server/ArchiveNav";

export const metadata: Metadata = {
    title: 'ArchiveNew',
    description: 'Various news articles from different years.',
}



export default function NewsLayout({ children, }: Readonly<{ children: React.ReactNode }>) {
    return (
        <div>
            {/* <ArchiveNav /> */}
            {children}
        </div>
    );
}
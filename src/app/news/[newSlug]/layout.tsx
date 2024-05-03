

import { Metadata } from "next";
import React from "react";


export const metadata: Metadata = {
    title: 'SinglePage',
    description: 'Detail page for news.',
}



export default function NewsLayout({ children, }: Readonly<{ children: React.ReactNode }>) {
    return (
        <div className="news-article">
            {children}
        </div>
    );
}
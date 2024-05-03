import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
    title: 'Next.js News Page',
    description: 'Page for news.',
}


export default function NewsLayout({ children, }: Readonly<{ children: React.ReactNode }>) {
    return (
        <div>
            {children}
        </div>
    );
}
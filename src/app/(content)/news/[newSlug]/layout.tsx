

import { Metadata } from "next";
import React from "react";


export const metadata: Metadata = {
    title: 'SinglePage',
    description: 'Detail page for news.',
}



export default function NewsLayout({ modal, children, }: Readonly<{ modal: React.ReactNode, children: React.ReactNode }>) {
    return (
        <div>
            {children}
            {modal}
        </div>

    );
}
import type { Metadata } from "next";
import "./globals.css";
import Header from "@components/server/Header";


export const metadata: Metadata = {
    title: 'Next.js Content Page',
    description: 'Learn how to route to different pages.',
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body>
                <div id="page">
                    {children}
                </div>
            </body>
        </html>
    );
}
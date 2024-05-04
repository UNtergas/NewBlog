import type { Metadata } from "next";




export const metadata: Metadata = {
  title: 'Blog landing page',
  description: 'Learn how to route to different pages.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      {children}
    </div>

  );
}

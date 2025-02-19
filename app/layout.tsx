import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import fetchPublicationInfo from "@/lib/hasnode/publication";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// export const metadata: Metadata = {
//   title: "GENZ IT Blogs",
//   description: "A blog for the next generation of IT professionals.",
// };

export async function generateMetadata(): Promise<Metadata> {
  const publication = await fetchPublicationInfo();
  if (!publication) {
    return {
      title: "GENZ IT Blogs",
      description: "A blog for the next generation of IT professionals.",
    };
  }
  return {
    title: publication.title,
    description: publication.descriptionSEO,
    icons: [
      {
        url: publication.url,
        href: publication.ogMetaData.image,
        sizes: "192x192",
        type: "image/png",
      },
    ],
    openGraph: {
      title: publication.title,
      description: publication.descriptionSEO,
      url: publication.url,
      siteName: publication.title,
      images: [publication.ogMetaData.image],
      type: "website",
    },
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}

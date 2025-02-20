import type { Metadata } from "next";
import { Inter, Lora } from "next/font/google";
import "./globals.css";
import fetchPublicationInfo from "@/lib/hasnode/publication";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import { ThemeProvider } from "next-themes";

const inter = Inter({
  subsets: ["latin"],
  style: ["italic", "normal"],
});
const lora = Lora({
  subsets: ["latin"],
  variable: "--font-lora",
});

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
      <body className={`${lora.variable} ${inter.className} antialiased`} suppressHydrationWarning={true}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Navbar />
          <div className="min-h-screen">{children}</div>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Inter, Roboto_Mono, Space_Grotesk } from "next/font/google";
import "./globals.css";

// 1. Initialize our hand-picked typography system
const sansFont = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});

const robotoMono = Roboto_Mono({
  subsets: ["latin"],
  style: ["italic", "normal"],
  variable: "--font-roboto-mono", 
});

// 2. Premium, customized application metadata with OpenGraph and Twitter images
export const metadata: Metadata = {
  title: "Bala Prakash | Full-Stack Software Engineer",
  description:
    "Portfolio of Bala Prakash, a third-year Information Technology student building production-ready full-stack applications with scalable backend systems and thoughtful user experiences.",
  
  // Open Graph metadata (for platforms like LinkedIn, Discord, and WhatsApp)
  openGraph: {
    title: "Bala Prakash | Full-Stack Software Engineer",
    description: "Portfolio of Bala Prakash, building production-ready full-stack applications.",
    type: "website",
    images: [
      {
        url: "https://res.cloudinary.com/dkp3wdik8/image/upload/v1784141382/7ec7c2a7-9e1b-424c-8e70-53239b8fe425_jwkofr.png",
        width: 1200, // Ideal width for standard modern display ratios
        height: 630, // Ideal height to prevent vertical squash
        alt: "Bala Prakash Portfolio Preview",
      },
    ],
  },

  // Twitter/X Card metadata
  twitter: {
    card: "summary_large_image",
    title: "Bala Prakash | Full-Stack Software Engineer",
    description: "Portfolio of Bala Prakash, building production-ready full-stack applications.",
    images: ["https://res.cloudinary.com/dkp3wdik8/image/upload/v1784141382/7ec7c2a7-9e1b-424c-8e70-53239b8fe425_jwkofr.png"],
  },
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // 3. Inject our variables cleanly into the document root
    <html lang="en" className={`${sansFont.variable} ${robotoMono.variable} ${spaceGrotesk.variable} scroll-smooth`}>
      <body className="antialiased bg-[#FAF9F6]">{children}</body>
    </html>
  );
}
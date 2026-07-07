import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Roboto_Mono } from "next/font/google";
import "./globals.css";

// 1. Initialize our hand-picked typography system
const sansFont = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const monoFont = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

const robotoMono = Roboto_Mono({
  subsets: ["latin"],
  style: ["italic", "normal"],
  variable: "--font-roboto-mono", // Define a unique variable name
});

// 2. Premium, customized application metadata
export const metadata: Metadata = {
  title: "Architecting Distributed Systems",
  description: "Personal engineering journal and software portfolio specializing in scalable backend systems and high-fidelity interfaces.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // 3. Inject our variables cleanly into the document root
    <html lang="en" className={`${sansFont.variable} ${robotoMono.variable}`}>
      <body className="antialiased bg-[#FAF9F6]">{children}</body>
    </html>
  );
}
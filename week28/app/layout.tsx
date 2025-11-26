import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ResponsiveNav from "@/components/NavBar/ResponsiveNav";
import Footer from "@/components/Footer";

const font = Inter({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin']
})

export const metadata: Metadata = {
  title: "Jihye Portfolio",
  description: "Portfolio built with Next.js 16",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${font.className} antialiased`} 
      >
        <ResponsiveNav />
        {children}
        <Footer />
      </body>
    </html>
  );
}

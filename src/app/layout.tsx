import type { Metadata } from "next";
import "./globals.css";
import "./fonts.css"; // Import your local fonts
import FooterSection from "@/components/ui/footer-section/footer-section";
import Navbar from "@/components/ui/navbar/navbar";

export const metadata: Metadata = {
  title: "Wertex",
  description:
    "From concept to production, Wertex provides precision manufacturing and contract manufacturing services, serving as your one stop solution for scalable production",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" style={{ fontFamily: 'var(--font-montserrat)' }}>
      <link rel="icon" href="/favicon.ico" type="image" />
      <body
        className="antialiased bg-background text-white scroll-smooth max-w-screen-3xl mx-auto relative"
        style={{ fontFamily: 'var(--font-montserrat)' }}
      >
        {/* <Navbar/> */}
        {children}
        <FooterSection />
      </body>
    </html>
  );
}
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montSerrat = Montserrat({
  variable: "--font-mont-serrat",
  subsets: ["latin"],
});
export const metadata: Metadata = {
  title: "Wertex",
  description: "From concept to production, Wertex provides precision manufacturing and contract manufacturing services, serving as your one stop solution for scalable production",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
        <link rel="icon" href="/favicon.ico" type="image" />
      <body
        className={`${montSerrat.variable}  antialiased  bg-background text-white scroll-smooth`}
      >
        {children}
      </body>
    </html>
  );
}

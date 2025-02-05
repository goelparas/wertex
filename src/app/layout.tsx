import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montSerrat = Montserrat({
  variable: "--font-mont-serrat",
  subsets: ["latin"],
});
export const metadata: Metadata = {
  title: "Wertex",
  description: "This is the Wertex website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${montSerrat.variable}  antialiased `}
      >
        {children}
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Image from "next/image";
import wertex from "@/cdn/images/wertex.png";
import frameBlack from "@/cdn/images/frame-black.png";
import FooterSection from "@/components/ui/footer-section/footer-section";

const montSerrat = Montserrat({
  variable: "--font-mont-serrat",
  subsets: ["latin"],
});

// Define an array of menu items
const menuItems = [
  "Home",
  "Why Wertex",
  "About us",
  "Industry",
  "Services",
  "CaseStudy",
];

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
    <html lang="en">
      <link rel="icon" href="/favicon.ico" type="image" />
      <body
        className={`${montSerrat.variable}  antialiased  bg-background text-white scroll-smooth`}
      >
        <nav className="flex justify-between p-4  lg:justify-around   lg:p-6  shadow-sm items-center  absolute top-8 left-2 right-2 w-[90%]   m-auto ">
          <Image
            alt="frame-black"
            src={frameBlack}
            className="z-10 absolute  w-full h-16 lg:h-32"
          />
          <div className="hidden lg:block" />
          <figure className="w-28 lg:w-48  relative h-6 lg:h-11 z-20 mx-10">
            <Image src={wertex} alt="logo" quality={100} fill />
          </figure>
          <span className="lg:flex items-center justify-between gap-7 hidden z-20">
            <ul className="justify-between gap-5 flex">
              {menuItems.map((item) => (
                <li
                  key={item}
                  className="text-[#CDCDCD] font-normal text-lg uppercase hover:cursor-pointer"
                >
                  {item}
                </li>
              ))}
            </ul>
            <span className="flex shrink-0">
              <a
                className="bg-custom-gradient font-bold  lg:text-[1rem] sm:px-8 sm:py-4   clipped uppercase "
                href="mailto:contact@wertex.in?subject=Query%20Regarding%20Manufacturing&body=Hello,%0A%0AI%20have%20some%20queries%20regarding%20your%20manufacturing%20process.%0A%0AThank%20you."
              >
                Contact us
              </a>
            </span>
          </span>
          <div className="border-y-2 w-4 h-4 block z-20 lg:hidden" />
        </nav>
        {children}
        <FooterSection />
      </body>
    </html>
  );
}

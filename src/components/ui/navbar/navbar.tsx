'use client'
import { motion, AnimatePresence } from 'framer-motion';
import React  ,{ useRef} from 'react'
import Image from "next/image";
import wertex from "@/cdn/images/wertex.png";
import Link from 'next/link';
import Dropdown from './dropdown';
import { useWindowSize } from '@/utils/hooks/useWindowSize';
import { useScroll } from '@/utils/hooks/useScroll';
import { cn } from "@/lib/utils";

// Define an array of menu items
const IndustryItems = [
  { name: "CNC Machining", href: "/services/cnc-machining" },
  { name: "Aluminium Extrusion", href: "/services/aluminium-extrusion" },
  { name: "Casting", href: "/services/casting" },
  { name: "Surface Treatment", href: "/services/surface-treatment" },
  { name: "Forging", href: "/services/forging" },
  { name: "Molding", href: "/services/molding" },
  { name: "Sheet Metal Fabrication", href: "/services/sheet-metal-fabrication" },
]
const menuItems = [
  { name: "HOME", href: "/" },
  { name: "WHY WERTEX", href: "/#why-wertex" },
  { name: "ABOUT US", href: "/about" },
  { name: "INDUSTRY", href: "#", hasDropdown: true, list: IndustryItems },
  { name: "SERVICES", href: "/#services" },
]



const Tab = ({
  item,
  href,
}: {
  item: (typeof menuItems)[0]
  href: string
}) => {
  const { hasDropdown, list } = item
  const isIndustry = item.name === "INDUSTRY"

  return (
    <span className={cn(
      "relative flex items-center justify-center ",
      hasDropdown ? 'rounded-t-2xl' : 'rounded-2xl',
      isIndustry && "hover:bg-black"
    )}>
    {hasDropdown ? (
      <Dropdown trigger={item.name} items={list} />
    ) : (
      <Link
        key={item.name}
        className="text-[#CDCDCD] font-semibold hover:font-bold text-lg uppercase hover:cursor-pointer py-4 px-3 text-nowrap"
        href={href}
      >
        {item.name}
      </Link>
    )}
  </span>

  )

}

const Navbar = () => {
  const { isMobile } = useWindowSize();
   

  const { scrollDirection, scrollY, isScrolling } = useScroll();
  
  // Show navbar when at the top OR when actively scrolling up (and not at the top)
  const shouldShowNavbar = scrollY <= 100 || (scrollDirection === 'up' && scrollY > 100 && isScrolling);
  
  if (isMobile) return null

  return (
    <AnimatePresence>
      {shouldShowNavbar && (
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -100, opacity: 0 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          className="fixed w-full bg-transparent flex items-center justify-center top-0 left-0 z-50"
        >
          <nav className="flex justify-between w-full max-w-screen-3xl items-center rounded-xl bg-background-300 backdrop-blur-sm h-24 px-6 mx-12 mt-8">
            <Link className="w-48 relative h-11 z-20 mx-10" href={'/'}>
              <Image src={wertex} alt="logo" quality={100} fill />
            </Link>
            <span className="lg:flex items-center justify-between gap-4 hidden z-20">
              <ul className="justify-between gap-3 flex">
                {menuItems.map((item) => (
                  <Tab item={item} key={item.name} href={item.href} />
                ))}
              </ul>
              <span className="flex shrink-0">
                <a
                  className="bg-custom-gradient font-bold lg:text-[1rem] sm:px-8 sm:py-4 clipped uppercase"
                  href="mailto:contact@wertex.in?subject=Query%20Regarding%20Manufacturing&body=Hello,%0A%0AI%20have%20some%20queries%20regarding%20your%20manufacturing%20process.%0A%0AThank%20you."
                >
                  Contact us
                </a>
              </span>
            </span>
          </nav>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
export default Navbar
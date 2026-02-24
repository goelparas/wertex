'use client'
import { motion, AnimatePresence } from 'framer-motion';
import React, { useEffect, useRef } from 'react'
import Image from "next/image";
import wertex from "@/cdn/images/wertex.png";
import Link from 'next/link';
import Dropdown from './dropdown';
import { useWindowSize } from '@/utils/hooks/useWindowSize';
import { useScroll } from '@/utils/hooks/useScroll';
import { cn } from "@/lib/utils";
import { useState } from "react"
import { useRouter } from "next/navigation"
import wertexNavbar from '@/cdn/images/wertex-navbar.png'
import whiteWertex from '@/cdn/images/wertex.png'
import { Equal, X, ChevronDown, ChevronUp } from 'lucide-react';
import navbarBackground from '@/cdn/images/navbar-bg.png'
import gridNavbar from "@/cdn/images/grid-navbar.png"
// Define an array of menu items
// Navigation items constant
const NAV_ITEMS = [
  { href: "/#why-wertex", label: "WHY WERTEX" },
  { href: "/about", label: "ABOUT US" },
  { href: "/#services", label: "INDUSTRY" },
];

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
  { name: "SERVICES", href: "#", hasDropdown: true, list: IndustryItems },
  { name: "INDUSTRY", href: "/#services" },
]



const Tab = ({
  item,
  href,
}: {
  item: (typeof menuItems)[0]
  href: string
}) => {
  const { hasDropdown, list } = item
  const isService = item.name === "SERVICES"
  return (
    <span className={cn(
      "relative flex items-center justify-center ",
      hasDropdown ? 'rounded-t-2xl' : 'rounded-2xl',
      isService && "hover:bg-black"
    )}>
      {hasDropdown ? (
        <Dropdown trigger={item.name} items={list} />
      ) : (
        <Link
          key={item.name}
          className="text-[#CDCDCD] font-semibold hover:font-bold text-lg hover:text-orangeBg uppercase hover:cursor-pointer py-4 px-3 text-nowrap"
          href={href}
        >
          {item.name}
        </Link>
      )}
    </span>

  )

}


const NavbarMobile = () => {
  const [open, setOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const [pendingHref, setPendingHref] = useState<string | null>(null) // navigate after exit
  const router = useRouter()

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    // Cleanup on unmount
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [open])
  const closeThenNavigate = (href: string) => (e?: React.MouseEvent | React.KeyboardEvent) => {
    if (e) e.preventDefault()
    if (!open) {
      // Handle hash links for same-page scroll
      const hashIndex = href.indexOf('#')
      if (hashIndex !== -1) {
        const path = href.slice(0, hashIndex) || '/'
        const hash = href.slice(hashIndex)
        if (path === '/' && window.location.pathname === '/') {
          const el = document.querySelector(hash)
          if (el) {
            el.scrollIntoView({ behavior: 'smooth', block: 'start' })
            window.history.pushState(null, '', href)
            return
          }
        }
      }
      router.push(href)
      return
    }
    setPendingHref(href)
    setOpen(false)
    setServicesOpen(false)
  }


  return <>
    {/* Bottom bar trigger (brand left, hamburger right) */}
    <div className="fixed bottom-4 left-4 h-[4.5rem] right-4 z-40 max-w-xl flex items-center justify-between rounded-2xl  bg-[#272727]/90 p-4 backdrop-blur-md border-foreground/10">
      <Link
        href="/"
        className="font-bold tracking-wide text-primary text-lg"
        aria-label="Go to home"
        onClick={closeThenNavigate("/")}
      >
        <Image src={wertexNavbar} alt="wertexNavbar" width={100} height={22} />
      </Link>

      <div className='w-8 h-8 flex flex-col gap-1 items-center justify-center'>
        <Equal onClick={() => setOpen(true)} className='text-white' size={80} />
      </div>
    </div>

    {/* Drawer + Overlay with Framer Motion */}
    <AnimatePresence
      onExitComplete={() => {
        if (pendingHref) {
          const target = pendingHref
          setPendingHref(null)
          // Handle hash links for same-page scroll
          const hashIndex = target.indexOf('#')
          if (hashIndex !== -1) {
            const path = target.slice(0, hashIndex) || '/'
            const hash = target.slice(hashIndex)
            if (path === '/' && window.location.pathname === '/') {
              setTimeout(() => {
                const el = document.querySelector(hash)
                if (el) {
                  el.scrollIntoView({ behavior: 'smooth', block: 'start' })
                  window.history.pushState(null, '', target)
                }
              }, 100)
              return
            }
          }
          router.push(target)
        }
      }}
    >
      {open && (
        <div className="fixed inset-0 z-50 w-full " onClick={(e) => { e.stopPropagation() }}>
          {/* Backdrop */}
          <motion.button
            aria-label="Close menu overlay"
            onClick={() => setOpen(false)}
            className="absolute inset-0 bg-black/60 w-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 0.35, ease: "easeOut" } }}
            exit={{ opacity: 0, transition: { duration: 0.25, ease: "easeOut" } }}

          />

          {/* Drawer Panel */}
          <motion.aside
            id="mobile-drawer"
            role="dialog"
            aria-modal="true"
            aria-label="Main navigation"
            className="absolute inset-y-0 left-0 w-full     backdrop-blur-xl"
            initial={{ x: "200%" }}
            animate={{ x: 0, transition: { duration: 0.4, ease: "easeOut" } }}
            exit={{ x: "200%", transition: { duration: 0.3, ease: "easeOut" } }}
          >
            <Image src={navbarBackground} fill alt='navbar-bg' />
            {/* <Image src={gridNavbar} fill alt='navbar-grid' className="z-20"/> */}


            <div className="relative flex h-full flex-col">
              {/* Header */}
              <div className="flex items-center justify-between px-5 pt-6 pb-4">
                <Link
                  href="/"
                  className="font-semibold tracking-wide text-primary text-lg relative w-32 h-8"
                  onClick={closeThenNavigate("/")}
                >
                  <Image src={whiteWertex} fill alt='navbar-bg' className='object-contain' />
                </Link>
              </div>

              {/* Nav Items */}
              <nav className="relative flex-1 px-5 backdrop-blur-sm bg-white/10 shadow-sm my-20 p-4">
                <ul className="flex flex-col gap-3 text-base">
                  {NAV_ITEMS.map((item) => (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        className="block rounded-lg px-2 py-2 text-foreground/90 transition-colors hover:bg-secondary/40 hover:text-primary text-lg"
                        onClick={closeThenNavigate(item.href)}
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}

                  {/* Services dropdown */}
                  <li>
                    <button
                      type="button"
                      aria-expanded={servicesOpen}
                      className={cn(
                        "flex w-full items-center justify-between rounded-lg px-2 py-2 text-left text-foreground/90 transition-colors hover:bg-secondary/40 hover:text-primary",
                        servicesOpen ? "bg-secondary/30" : "",
                      )}
                      onClick={() => setServicesOpen((v) => !v)}
                    >
                      <span>SERVICES</span>
                      {
                        servicesOpen ? <ChevronUp /> : <ChevronDown />
                      }
                    </button>

                    <AnimatePresence initial={false}>
                      {servicesOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1, transition: { duration: 0.25, ease: "easeOut" } }}
                          exit={{ height: 0, opacity: 0, transition: { duration: 0.2, ease: "easeOut" } }}
                        >
                          <ul className="mt-1 space-y-1 pl-3">
                            {IndustryItems.map((s) => (
                              <li key={s.href}>
                                <Link
                                  href={s.href}
                                  className="block rounded-md px-2 py-2 text-sm text-foreground/80 transition-colors hover:bg-secondary/40 hover:text-primary"
                                  onClick={closeThenNavigate(s.href)}
                                >
                                  {s.name}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </li>
                </ul>
              </nav>

              {/* Bottom action bar inside drawer */}
              <div className="relative mt-auto w-[90%] max-w-xl mx-auto h-[4.5rem] mb-8 rounded-2xl bg-[#272727]/90">
                <div className="flex items-center justify-between  rounded-2xl  p-3 backdrop-blur-md ">
                  <X onClick={() => setOpen(false)} />
                  <span className="flex shrink-0">
                    <a
                      className="bg-custom-gradient font-bold lg:text-[1rem] px-8 py-4 clipped uppercase"
                      href="mailto:contact@wertex.in?subject=Inquiry%3A%20Engineering%20%26%20Manufacturing%20Services%20%7C%20Wertex&body=Dear%20Wertex%20Team%2C%0A%0AI%20am%20interested%20in%20learning%20more%20about%20your%20engineering%20capabilities.%20Please%20find%20my%20details%20below%3A%0A%0A%E2%97%8F%20Service%20of%20Interest%3A%20%5Be.g.%2C%20NPI%2C%205-Axis%20CNC%2C%20Reverse%20Engineering%5D%0A%E2%97%8F%20Industry%3A%20%5Be.g.%2C%20Oil%20%26%20Gas%2C%20Marine%2C%20Aerospace%5D%0A%E2%97%8F%20Region%3A%20%5Be.g.%2C%20UAE%2C%20India%2C%20Global%5D%0A%0APlease%20let%20me%20know%20a%20suitable%20time%20for%20a%20brief%20technical%20discussion.%0A%0ARegards%2C%0A%5BName%5D%0A%5BCompany%5D"
                    >
                      Contact us
                    </a>
                  </span>
                </div>
              </div>
            </div>
          </motion.aside>
        </div>
      )}
    </AnimatePresence>
  </>
}

const Navbar = () => {
  const { isMobile } = useWindowSize();
  const { scrollDirection, scrollY, isScrolling } = useScroll();


  const shouldShowNavbar = scrollY <= 100 || (scrollDirection === 'up' && scrollY > 100 && isScrolling);
  const Component = isMobile ? <NavbarMobile /> :
    <motion.div
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: -100, opacity: 0 }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
      className="fixed w-full bg-transparent flex items-center justify-center top-0 left-0 z-50 "
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
              href="mailto:contact@wertex.in?subject=Inquiry%3A%20Engineering%20%26%20Manufacturing%20Services%20%7C%20Wertex&body=Dear%20Wertex%20Team%2C%0A%0AI%20am%20interested%20in%20learning%20more%20about%20your%20engineering%20capabilities.%20Please%20find%20my%20details%20below%3A%0A%0A%E2%97%8F%20Service%20of%20Interest%3A%20%5Be.g.%2C%20NPI%2C%205-Axis%20CNC%2C%20Reverse%20Engineering%5D%0A%E2%97%8F%20Industry%3A%20%5Be.g.%2C%20Oil%20%26%20Gas%2C%20Marine%2C%20Aerospace%5D%0A%E2%97%8F%20Region%3A%20%5Be.g.%2C%20UAE%2C%20India%2C%20Global%5D%0A%0APlease%20let%20me%20know%20a%20suitable%20time%20for%20a%20brief%20technical%20discussion.%0A%0ARegards%2C%0A%5BName%5D%0A%5BCompany%5D"
            >
              Contact us
            </a>
          </span>
        </span>
      </nav>
    </motion.div>

  return (
    <AnimatePresence>
      {shouldShowNavbar && (
        Component
      )}
    </AnimatePresence>
  )
}
export default Navbar
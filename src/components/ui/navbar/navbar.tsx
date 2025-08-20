'use client'
import React from 'react'
import Image from "next/image";
import wertex from "@/cdn/images/wertex.png";
import Link from 'next/link';
import Dropdown from './dropdown';
import { useWindowSize } from '@/utils/hooks/useWindowSize';

// Define an array of menu items
const IndustryItems = [
  { name: 'CNC Machining', href:"" },
  { name: 'Casting', href:""},
  { name: 'Forging',href:"" },
  { name: 'Sheet Metal Fabrication',href:"" },
  { name: 'Aluminium Extrusion', href:""},
  { name: 'Surface Treatment',href:"" },
  { name: 'Molding', href:""},
];
const menuItems = [
  { name: 'HOME', href: '/' },
  { name: 'WHY WERTEX', href: '#' },
  { name: 'ABOUT US', href: '/about' },
  { name: 'INDUSTRY', href: '#', hasDropdown: true, list: IndustryItems },
  { name: 'SERVICES', href: '#' },
  { name: 'CASE STUDIES', href: '#' },
];

const Tab = ({ item , href }: {
  item: typeof menuItems[0]
  href:string
}) => {

  const { hasDropdown, list } = item;

  return (
    <span className='relative flex items-center justify-center hover:bg-[#0606069E] hover:rounded-t-xl'>
      {
        hasDropdown ? <Dropdown trigger={item.name} items={list} /> : 
        <Link key={item.name} className="text-[#CDCDCD] font-semibold text-lg uppercase hover:cursor-pointer py-4 px-3 text-nowrap" href={href}>
          {item.name}
        </Link>
      }
    </span>

  )

}

const Navbar = () => {
  const {isMobile} = useWindowSize();
  if(isMobile) return <div>1</div>;

  return (
    <div className='h-40 w-full bg-transparent flex items-center justify-center'>
     <nav className="flex justify-between w-full  items-center rounded-xl bg-background-300  h-24 px-6 mx-12">
      <figure className="w-48  relative h-11 z-20 mx-10">
        <Image src={wertex} alt="logo" quality={100} fill />
      </figure>
      <span className="lg:flex items-center justify-between gap-4 hidden z-20">
        <ul className="justify-between gap-3 flex" >
          {menuItems.map((item) => (
            <Tab item={item} key={item.name} href={item.href} />
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
       
     </nav>
    </div>
    
  )
}




export default Navbar
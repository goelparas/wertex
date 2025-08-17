'use client'
import React from 'react'
import Image from "next/image";
import wertex from "@/cdn/images/wertex.png";
import frameBlack from "@/cdn/images/frame-black.png";
import Dropdown from './dropdown';

// Define an array of menu items
const IndustryItems = [
  { name: 'CNC Machining', },
  { name: 'Casting', },
  { name: 'Forging', },
  { name: 'Sheet Metal Fabrication', },
  { name: 'Aluminium Extrusion', },
  { name: 'Surface Treatment', },
  { name: 'Molding', },
];
const menuItems = [
  { name: 'HOME', href: '#' },
  { name: 'WHY WERTEX', href: '#' },
  { name: 'ABOUT US', href: '#' },
  { name: 'INDUSTRY', href: '#', hasDropdown: true, list: IndustryItems },
  { name: 'SERVICES', href: '#' },
  { name: 'CASE STUDIES', href: '#' },
];

const Tab = ({ item }: {
  item: typeof menuItems[0]
}) => {

  const { hasDropdown, list } = item;

  return (
    <span className='relative flex items-center justify-center hover:bg-[#0606069E] hover:rounded-t-xl'>
      {
        hasDropdown ? <Dropdown trigger={item.name} items={list} /> : <li key={item.name} className="text-[#CDCDCD] font-normal text-lg uppercase hover:cursor-pointer py-4 px-3 text-nowrap">
          {item.name}
        </li>
      }
    </span>

  )

}

const Navbar = () => {

  return (
    <nav className="flex justify-between   lg:justify-around relative px-2   shadow-sm items-center   max-w-[21.8rem] lg:w-full     mx-12 my-16 ">
      <Image
        alt="frame-black"
        src={frameBlack}
        className="z-10 absolute  w-full h-16 lg:h-32"
      />
      <span className="hidden lg:block" />
      <figure className="w-28 lg:w-48  relative h-6 lg:h-11 z-20 mx-10">
        <Image src={wertex} alt="logo" quality={100} fill />
      </figure>
      <span className="lg:flex items-center justify-between gap-4 hidden z-20">
        <ul className="justify-between gap-3 flex" >
          {menuItems.map((item) => (
            <Tab item={item} key={item.name} />
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
      <span className="border-y-2 w-4 h-4 block z-20 lg:hidden" />
    </nav>
  )
}




export default Navbar
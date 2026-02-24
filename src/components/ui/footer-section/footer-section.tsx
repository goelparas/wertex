
import React from 'react'
import Section from '@/components/common/Section'
import { ImageContainer } from '@/components/common/Container/ImageGrid'
import logo from "@/cdn/images/wtx_logo_service.png";
import Link from 'next/link';
import { FaLinkedinIn, FaWhatsapp } from 'react-icons/fa';
import Image from "next/image"
import circle from "@/cdn/images/circle.png"

const FOOTER_SERVICES = [
  { name: "CNC Machining", href: "/services/cnc-machining" },
  { name: "Aluminium Extrusion", href: "/services/aluminium-extrusion" },
  { name: "Casting", href: "/services/casting" },
  { name: "Surface Treatment", href: "/services/surface-treatment" },
  { name: "Forging", href: "/services/forging" },
  { name: "Molding", href: "/services/molding" },
  { name: "Sheet Metal Fabrication", href: "/services/sheet-metal-fabrication" },
]

const FooterSection = () => {
  return (
    <Section className='items-start justify-between bg-black gap-2 mt-0 lg:mt-0 flex flex-col lg:flex-row'>
      {/* Logo Section */}
      <div className='flex flex-col items-center justify-center gap-2 m-auto mb-12'>
        <div className="relative flex items-center justify-center mx-auto w-full">
          <Image src={circle} fill alt='circle' />
          <ImageContainer img={logo} width={200} className='w-80 h-80' height={200} size={{
            smWidth: 150,
            smHeight: 150,
            smClassName: 'w-56 h-56'
          }} />
        </div>
      </div>

      {/* ===== DESKTOP LAYOUT ===== */}
      <div className='hidden lg:flex w-full justify-between text-xl2 h-full'>
        {/* Home */}
        <div className='w-1/5 text-center'>
          <Link href="/" className='text-orangeBg hover:text-white transition-colors'>Home</Link>
        </div>

        {/* Services */}
        <div className='w-1/5 flex flex-col items-start'>
          <Link href="/#services" className='text-orangeBg hover:text-white transition-colors'>Services</Link>
          <ul className='text-left mt-4'>
            {FOOTER_SERVICES.map((item) => (
              <li key={item.name} className='text-nowrap text-xs lg:text-xl mt-2 text-[#72716D] hover:text-white transition-colors'>
                <Link href={item.href}>{item.name}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* About Us */}
        <div className='w-1/5 text-center'>
          <Link href='/about' className='text-orangeBg hover:text-white transition-colors'>About Us</Link>
        </div>

        {/* Contact Us + Address + Social */}
        <div className='w-1/5 flex flex-col items-start'>
          <span className='text-orangeBg'>Contact Us</span>
          <ul className='mt-4 space-y-2'>
            <li className='text-nowrap text-xl'>+971 50 150 2829</li>
            <li className='text-nowrap text-xl'>contact@wertex.in</li>
          </ul>

          <div className='mt-8 text-[#CAC9C4] text-base leading-relaxed'>
            Wertex PVT Ltd.<br />
            3/264, Pannimadai Road,<br />
            K.Vadamadurai,<br />
            Coimbatore - 641017
          </div>

          <div className='mt-8'>
            <p className='text-lg uppercase text-[#72716D] mb-3'>Follow us</p>
            <div className='flex items-center gap-4'>
              <a href='https://www.linkedin.com/company/wertex/' target='_blank' rel='noopener noreferrer' className='hover:text-orangeBg transition-colors'><FaLinkedinIn size={20} /></a>
              <a href='https://wa.me/971501502829' target='_blank' rel='noopener noreferrer' className='hover:text-orangeBg transition-colors'><FaWhatsapp size={20} /></a>
            </div>
          </div>
        </div>
      </div>

      {/* ===== MOBILE LAYOUT ===== */}
      <div className='lg:hidden w-full'>
        {/* Top nav row */}
        <div className='grid grid-cols-3 gap-6 text-xs items-start justify-items-start'>
          <Link href="/" className='text-orangeBg'>Home</Link>
          <Link href="/#services" className='text-orangeBg'>Services</Link>
          <Link href='/about' className='text-orangeBg'>About Us</Link>
        </div>

        {/* Contact + Address + Social */}
        <div className='mt-12'>
          <div className='text-orangeBg text-xs mb-3'>Contact Us</div>
          <ul className='text-left flex flex-col gap-2'>
            <li className='text-nowrap text-xs'>+971 50 150 2829</li>
            <li className='text-nowrap text-xs'>contact@wertex.in</li>
          </ul>

          <h1 className='text-left text-wrap text-xs text-[#CAC9C4] mt-4'>
            Wertex PVT Ltd.<br />
            3/264, Pannimadai Road,<br />
            K.Vadamadurai, Coimbatore - 641017
          </h1>

          <div className='mt-4'>
            <div className='text-nowrap text-left text-orangeBg text-xs mb-2'>Follow us</div>
            <div className='flex gap-4 text-xs'>
              <a href='https://www.linkedin.com/company/wertex/' target='_blank' rel='noopener noreferrer' className='hover:text-orangeBg transition-colors'><FaLinkedinIn size={16} /></a>
              <a href='https://wa.me/971501502829' target='_blank' rel='noopener noreferrer' className='hover:text-orangeBg transition-colors'><FaWhatsapp size={16} /></a>
            </div>
          </div>
        </div>
      </div>
    </Section>
  )
}

export default FooterSection
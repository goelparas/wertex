
import React from 'react'
import Section from '@/components/common/Section'
import { ImageContainer } from '@/components/common/Container/ImageGrid'
import logo from "@/cdn/images/wtx_logo_service.png";
import Link from 'next/link';
import { FaLinkedinIn } from 'react-icons/fa';
import Image from "next/image"
import circle from "@/cdn/images/circle.png"
const FooterSection = () => {
    return (
         <Section className=' items-start justify-between bg-transparent gap-2 hidden lg:flex'>
            <div className='flex flex-col  items-center justify-between gap-2  my-auto '> 
              <div className="relative">
                <Image src={circle} fill alt='circle'/>
            <ImageContainer img={logo} width={200} className='w-80 h-80' height={200} size={{
              smWidth: 100,
              smHeight: 100,
            }} />
              </div>

            </div>
            <div className='flex items-start gap-2 w-full justify-between text-xl2 h-full hover:cursor-pointer'>
                <div className='w-1/4 text-center text-orangeBg'>Home</div>
                <div className='w-1/4 text-center flex flex-col items-center justify-between'>
                <ul className='text-left w-min mx-auto'>
                  <li className='text-orangeBg'>Services</li>
                  <li className='text-nowrap'><Link href='/casting'>Casting</Link></li>
                  <li className='text-nowrap'><Link href='/forging'>Forging</Link></li>
                  <li className='text-nowrap'><Link href='/sheet-metal-fabrication'>Sheet Metal Fabrication</Link></li>
                  <li className='text-nowrap'><Link href='/aluminium'>Aluminium</Link></li>
                  <li className='text-nowrap'><Link href='/steel'>Steel</Link></li>
                  <li className='text-orangeBg mt-12'>Contact Us</li>
                <li className='text-nowrap'>+91 987654321</li>
                <li className='text-nowrap'>contact@wertex.in</li>
                <li className='text-nowrap mt-12 text-lg uppercase text-[#72716D]'>Follow us</li>
                 <li className='text-nowrap flex items-center gap-2'> <span><FaLinkedinIn/></span> <span>Linked In / Whatsapp</span> </li>
                </ul>
                 
                </div>
                <Link  href="/industries" className='w-1/4 text-center text-orangeBg'>Industries</Link>
                <div className='w-1/3 text-center '>
                 <Link href='/about' className='w-1/4 text-center text-orangeBg'>About us </Link>
                 <h1 className='text-left text-wrap  mt-20 text-[#CAC9C4]'>Wertex PVT Ltd.3/264, Pannimadai Road,  K.Vadamadurai, Coimbatore - 641017</h1>
                </div>
            </div>
        
         </Section>
    )
}

export default FooterSection

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
         <Section className=' items-start justify-between bg-black gap-2  flex flex-col lg:flex-row'>
            <div className='flex flex-col   items-center justify-center gap-2  m-auto mb-12 '> 
              <div className="relative flex items-center justify-center mx-auto w-full">
               <Image src={circle} fill alt='circle'/>
              <ImageContainer img={logo} width={200} className='w-80 h-80' height={200} size={{
                smWidth: 150,
                smHeight: 150,
                smClassName: 'w-56 h-56'
              }}   />
              </div>

            </div>
            <div className='lg:flex grid grid-cols-3 items-start gap-6 lg:gap-2 w-full justify-items-start justify-between text-xs leading-relaxed lg:text-xl2 h-full hover:cursor-pointer'>
                <Link  href="/"className='lg:w-1/4 text-center text-orangeBg'>Home</Link>
                <div className='lg:w-1/4 text-center flex flex-col items-center justify-between'>
                <ul className='text-left  mx-auto '>
                  <li className='text-orangeBg'>Services</li>
                  <li className='text-nowrap '><Link href='/services/casting'>Casting</Link></li>
                  <li className='text-nowrap '><Link href='/services/forging'>Forging</Link></li>
                  <li className='text-nowrap '><Link href='/services/sheet-metal-fabrication'>Sheet Metal Fabrication</Link></li>
                  <li className='text-nowrap '><Link href='/services/aluminium'>Aluminium</Link></li>
                  <li className='text-nowrap '><Link href='/services/steel'>Steel</Link></li>
                  <li className='text-orangeBg mt-12 hidden lg:block'>Contact Us</li>
                <li className='text-nowrap hidden lg:block'>+917907651046</li>
                <li className='text-nowrap hidden lg:block'>contact@wertex.in</li>
                <li className='text-nowrap hidden lg:block mt-12 text-lg uppercase text-[#72716D]'>Follow us</li>
                 <li className='text-nowrap hidden  lg:flex items-center gap-2'> <span><FaLinkedinIn/></span> <span>Linked In / Whatsapp</span> </li>
                </ul>
                 
                </div>
                <div   className='lg:w-1/4 text-center text-orangeBg'>Industries</div>
                <div className='w-1/3 text-center  hidden lg:block'>
                 <Link href='/about' className='lg:w-1/4 text-center text-orangeBg '>About us </Link>
                 <h1 className='text-left text-wrap  mt-20 text-[#CAC9C4]'>Wertex PVT Ltd.3/264, Pannimadai Road,  K.Vadamadurai, Coimbatore - 641017</h1>
                </div>
                <div className='text-orangeBg text-center  lg:hidden'>Contact Us</div>
                <div className='text-nowrap text-left  lg:hidden  text-orangeBg  '>Follow us</div>
                <Link href='/about' className=' text-center text-orangeBg  lg:hidden'>About us </Link>
            </div>
            <div className='lg:hidden mt-12'>
            <ul className='text-left flex flex-col gap-4 mx-auto'>
              <div className='flex flex-col gap-2'>
            <li className='text-nowrap text-xs '>+917907651046</li>
            <li className='text-nowrap text-xs '>contact@wertex.in</li>
            </div>
            <h1 className='text-left text-wrap  text-xs   text-[#CAC9C4]'>Wertex PVT Ltd. <br/> 3/264, Pannimadai Road,<br/>  K.Vadamadurai, Coimbatore - 641017</h1>
            <div className='text-nowrap  flex gap-2 text-xs'><span><FaLinkedinIn/></span> <span>Linked In / Whatsapp</span> </div>
            </ul>
            </div>
        
         </Section>
    )
}

export default FooterSection
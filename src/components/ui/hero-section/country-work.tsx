import Image from 'next/image'
import React from 'react'
import map from "@/cdn/images/map.avif"
import mapBg from "@/cdn/images/bg-map.avif"
import { HeaderBox } from '@/components/common/HeaderBox/HeaderBox'


const CountryWork = () => {
    return (
        <div className='h-screen relative '>

            <ul className='flex justify-between items-end w-full list-disc bg-background h-1/5 p-6   '>
                <li className='text-smokeWhite text-lg '>India</li>
                <li className='text-smokeWhite text-lg '>Hong Kong</li>
                <li className='text-smokeWhite text-lg '>Africa</li>
                <li className='text-smokeWhite text-lg '>Singapore</li>
                <li className='text-smokeWhite text-lg '>Europe</li>
                <li className='text-smokeWhite text-lg '>Australia</li>
            </ul>

            <div className='h-4/5 relative w-full '>
                <Image src={map} alt='' className='absolute' fill quality={100} />
                <Image src={mapBg} alt='' fill className='-z-10' />
                <div className='backdrop-blur-0  bg-[#D9D9D980] w-96 h-48 absolute top-1/3 p-3 left-5'> <h1 className='text-white text-2xl font-bold'>01</h1></div>
            </div>
            <HeaderBox>
                <div className='flex  p-6 absolute bottom-4 justify-between  rounded-md border-2 w-[90%]  mx-auto left-0 right-0'>
                    <div className='flex flex-col justify-between items-start gap-2'> <h1 className=' text-3xl font-bold'>Innovating Across Borders</h1>
                        <a className=" bg-white font-bold text-xs text-black text-left  md:text-[1rem] p-2  max-w-max  clipped uppercase" href="mailto:contact@wertex.in?subject=Query%20Regarding%20Manufacturing&body=Hello,%0A%0AI%20have%20some%20queries%20regarding%20your%20manufacturing%20process.%0A%0AThank%20you.">Contact us</a></div>
                    <p className=''>Delivering excellence to businesses wherever they are</p>
                </div>
            </HeaderBox>
        </div>
    )
}

export default CountryWork
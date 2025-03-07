import Image from 'next/image'
import React from 'react'
import map from "@/cdn/images/map.avif"
import mapBg from "@/cdn/images/bg-map.avif"
import { HeaderBox } from '@/components/common/HeaderBox/HeaderBox'
import frame from "@/cdn/images/frame.png"

const CountryWork = () => {
    return (
        <div className='h-screen relative '>

            <ul className='hidden justify-between items-end w-full list-disc bg-background lg:flex h-1/5 p-6   '>
                {["India", "Hong Kong", "Africa", "Singapore", "Europe", "Australia"].map((location) => (
                    <li key={location} className="text-smokeWhite text-lg">
                        {location}
                    </li>
                ))}
            </ul>

            <div className='h-4/5 relative w-full '>
                <Image src={map} alt='' className='absolute' fill quality={100} />
                <Image src={mapBg} alt='' fill className='-z-10 ' />
                <div className='backdrop-blur-0  bg-[#D9D9D980] w-52 h-24 lg:w-96 lg:h-48 absolute top-1/3 p-3 left-5'> <h1 className='text-white text-2xl font-bold'>01</h1></div>
                <ul className=' absolute bottom-6 left-6 z-20 flex flex-col justify-between items-start list-disc  lg:hidden '>
                {["India", "Hong Kong", "Africa", "Singapore", "Europe", "Australia"].map((location) => (
                    <li key={location} className="text-smokeWhite text-lg first:font-bold first:text-white">
                        {location}
                    </li>
                ))}
            </ul>
            </div>
            {/* <HeaderBox> */}
                <div className='flex flex-col lg:flex-row  gap-4 lg:gap-2 p-2 m-5 lg:p-6 lg:absolute lg:bottom-4 justify-between  rounded-md  w-[90%]  lg:mx-auto left-0 right-0 relative'>
                    <Image src={frame}fill alt='frame' className='-z-10'/>
                    <div className='flex flex-col z-10 justify-between items-start gap-2 px-6'> <h1 className='text-xl  lg:text-3xl font-bold'>Innovating Across Borders</h1>
                        <a className="  bg-white z-10 font-bold text-xs text-black text-left hidden lg:block  md:text-[1rem] p-2  max-w-max  clipped uppercase" href="mailto:contact@wertex.in?subject=Query%20Regarding%20Manufacturing&body=Hello,%0A%0AI%20have%20some%20queries%20regarding%20your%20manufacturing%20process.%0A%0AThank%20you.">Contact us</a></div>
                    <p className='z-10 px-6 lg:w-1/5 w-4/5 text-xxs lg:text-lg'>Delivering excellence to businesses wherever they are</p>
                    <a className="z-10 bg-white font-bold text-xxs text-black text-left  lg:hidden  md:text-[1rem] p-2  max-w-max  clipped uppercase" href="mailto:contact@wertex.in?subject=Query%20Regarding%20Manufacturing&body=Hello,%0A%0AI%20have%20some%20queries%20regarding%20your%20manufacturing%20process.%0A%0AThank%20you.">Contact us</a>
                </div>
            {/* </HeaderBox> */}
        </div>
    )
}

export default CountryWork
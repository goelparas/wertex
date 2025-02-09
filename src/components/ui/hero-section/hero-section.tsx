import React from 'react'
import CustomImage from "@/components/common/Image/Image"
import Button from '@/components/common/Button/button';
import logo from "@/cdn/images/logo.avif"
import bgDesktop from "@/cdn/images/hero_background.avif"
import bgMobile from "@/cdn/images/hero_background_mobile.avif"
import Image from 'next/image';
const HeroSection = () => {
    const statsData = [
        { value: "38", label: "Year of Growth" },
        { value: "3000+", label: "Projects completions" },
        { value: "300+", label: "satisfied clients" }
    ];
    return (
        <div className="relative h-svh w-screen flex items-center justify-center border-b-[1.5px] border-[#3F3F3F] bg-background overflow-x-hidden">
            <div className="absolute inset-0" >
                <CustomImage
                    mobileImage={{ path: bgMobile }}
                    desktopImage={{ path: bgDesktop }}
                    fill
                    alt="background"
                />
            </div>

            <a className=" bg-custom-gradient font-bold text-xs sm:text-sm md:text-[1rem] px-5 py-2 sm:px-8 sm:py-4  absolute top-[2%] right-[2%] clipped uppercase" href="mailto:contact@wertex.in?subject=Query%20Regarding%20Manufacturing&body=Hello,%0A%0AI%20have%20some%20queries%20regarding%20your%20manufacturing%20process.%0A%0AThank%20you.">Contact us</a>
            <div className="absolute w-[20rem]  sm:w-[40rem] md:w-[49rem]   h-[12rem] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className='relative flex flex-col sm:flex-row gap-2  items-start sm:items-center justify-between  mb-2'>
                    <p className='font-medium text-xxs lg:text-xs  '>Since <br />2010</p>
                    <figure className=' w-full relative  h-16 sm:h-[9rem] md:h-[10rem]'>
                        <Image src={logo} alt="logo" quality={100} fill />
                    </figure>
                </div>
                <h1 className="font-medium text-sm sm:text-2xl text-center">Shaping the Future of Manufacturing</h1>
            </div>
            <div className="absolute m-2 sm:m-12  left-0 bottom-5 right-0 ">
                <div className="grid  grid-cols-3 gap-8 sm:gap-32  mx-[2%]">
                    {
                        statsData.map((stat) => (
                            <div className='flex items-center justify-center sm:px-2' key={stat.value}>
                                <div className="w-[12.5rem]">
                                    <h1 className="font-bold text-sm sm:text-3xl text-center">{stat.value}</h1><p className="uppercase text-center text-[6px] sm:text-sm">{stat.label}</p> </div>
                            </div>))
                    }
                </div>

            </div>
        </div>
    )
}

export default HeroSection
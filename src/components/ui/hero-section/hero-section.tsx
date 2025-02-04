import React from 'react'
import cdn from "@/cdn/hero_background.avif"
import logo from "@/cdn/logo.avif"
import Button from "@/components/common/Button/button";
import Image from "next/image";

const HeroSection = () => {
    const statsData = [
        { value: "38", label: "Year of Growth" },
        { value: "3000+", label: "Projects completions" },
        { value: "300+", label: "satisfied clients" }
    ];
    return (
        <div className="relative h-dvh w-screen flex items-center justify-center border-b border-[#3F3F3F]">
            <Image src={cdn} fill alt="background" className="absolute" quality={100} />
            <Button title="Contact us" className="px-8 py-4 absolute top-10 right-10 clipped uppercase font-bold" />
            <div className="absolute w-[49rem] h-[12rem] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className='relative flex gap-2 items-center justify-between  mb-2'>
                    <p className='font-medium text-xs'>Since 2010</p>
                    <figure className=' w-full relative h-[10rem]'>
                        <Image src={logo} alt="logo" quality={100} fill/>
                    </figure>
                </div>
                <h1 className="font-medium text-2xl text-center">Shaping the Future of Manufacturing</h1>
            </div>
            <div className="absolute m-12  left-0 bottom-5 right-0 ">
                <div className="grid  grid-cols-3 gap-32   mx-16">
                    {
                        statsData.map((stat) => (
                            <div className='flex items-center justify-center px-2' key={stat.value}>
                                <div className="w-[12.5rem]">
                                    <h1 className="font-bold text-3xl">{stat.value}</h1><p className="uppercase text-end text-md">{stat.label}</p> </div>
                            </div>))
                    }
                </div>

            </div>
        </div>
    )
}

export default HeroSection
import React from 'react'
import cdn from "@/cdn/hero_background.avif"
import logo from "@/cdn/logo.avif"
import Button from "@/components/common/Button/button";
import Image from "next/image";

const HeroSection = () => {
    const statsData = [
        { value: "15+", label: "Years experience" },
        { value: "200+", label: "Projects completed" },
        { value: "98%", label: "Client satisfaction" }
    ];
    return (
        <div className="relative h-dvh w-screen flex items-center justify-center">
            <Image src={cdn} fill alt="background" className="absolute inset-0" quality={100} />
            <Button title="Contact us" className=" border border-white px-6 py-4 absolute top-10 right-10" />
            <div className="absolute w-[32rem] h-[11rem] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 ">
                <Image src={logo} alt="logo" className="w-full h-[9rem]" quality={100} />
                <h1 className="font-medium text-xl text-center">Shaping the Future of Manufacturing</h1>
            </div>
            <div className="absolute m-12  left-0 bottom-5 right-0 ">
                <div className="grid  grid-cols-3 gap-32     mx-16">
                    {
                        statsData.map((stat) => (
                            <div className='flex items-center justify-center ' key={stat.value}><div className="w-[12.5rem]">
                                <h1 className="font-bold text-2xl">{stat.value}</h1><p className="uppercase text-end text-sm">{stat.label}</p> </div>
                            </div>))
                    }
                </div>

            </div>
        </div>
    )
}

export default HeroSection
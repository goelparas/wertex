"use client"
import React from 'react'
import heroBgDesktop from "@/cdn/hero_background.avif"
import heroBgMobile from "@/cdn/hero_background_mobile.avif"
import Button from "@/components/common/Button/button";
import Image from 'next/image';
import { useWindowSize } from '@/utils/hooks/useWindowSize';

export const MainSection = () => {
    const { isMobile } = useWindowSize()
    return (
        <>
            <div className="absolute inset-0" >
                <Image src={isMobile ? heroBgMobile : heroBgDesktop} alt="background" fill quality={100} />
            </div>
            <Button title="Contact us" className=" px-5 py-2 sm:px-8 sm:py-4  absolute top-[2%] right-[2%] clipped uppercase font-bold" />
        </>

    )
}


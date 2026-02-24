"use client"
import React from 'react'
import heroBgDesktop from "@/cdn/hero_background.avif"
import heroBgMobile from "@/cdn/hero_background_mobile.avif"
import Button from "@/components/common/Button/button";
import HeroSectionMedia from './hero-section-media';

export const MainSection = () => {
    return (
        <>
            <div className="absolute inset-0" style={{ zIndex: 0 }}>
                <HeroSectionMedia
                    desktopVideo="/videos/desktop.mp4"
                    mobileVideo="/videos/mobile.mp4"
                    desktopImage={heroBgDesktop}
                    mobileImage={heroBgMobile}
                />
            </div>
            <Button title="Contact us" className="px-5 py-2 sm:px-8 sm:py-4 absolute top-[2%] right-[2%] clipped uppercase font-bold z-20" />
        </>
    )
}

'use client'
import Image from 'next/image';
import React from 'react'
import roadmap from '@/cdn/images/aboutus/aboutus.webp'
import roadmapMobile from '@/cdn/images/aboutus/roadmap_mobile.webp'
import { useWindowSize } from '@/utils/hooks/useWindowSize';

const TimeLine = () => {
  const { isMobile } = useWindowSize()
  return (
    <div className="relative w-full bg-background  mt-8 lg:mt-16 flex items-center justify-center  h-[124rem] lg:h-[210rem] p-4 lg:p-8">
    <div className='h-full relative w-full p-4 lg:p-8'>
    <Image src={ isMobile ? roadmapMobile : roadmap} alt="globe" fill className='object-contain  z-20' unoptimized/>
    </div>
  </div>
  )

}


export default TimeLine
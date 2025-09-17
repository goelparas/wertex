'use client'
import React from "react";
import {FlexHeader} from "../FlexHeader/FlexHeader";
import Image, { StaticImageData } from "next/image";
import { cn } from "@/lib/utils";
import { useWindowSize } from "@/utils/hooks/useWindowSize";
const HeroSection = ({
  src,
  alt,
  title,
  description,
  heading,
  longDescription,
  className
}: {
  src: StaticImageData;
  alt: string;
  title: string | React.ReactNode;
  description: string;
  heading?: string;
  longDescription: string;
  className?: string;
}) => {
  const { isMobile } = useWindowSize()
  return (
    <div className={cn(`w-full px-3 lg:px-12 bg-background`, className)}>
         <FlexHeader title={title} description={ isMobile? '': description} heading={heading} />
      
      <div className="w-full flex flex-col justify-start lg:justify-between items-center gap-8 lg:h-[85svh] mt-2 lg:mt-12">
        <div className="lg:h-full relative w-full h-72">
          <Image src={src} alt={alt} quality={100}  className="object-cover" fill />
        </div>
        <FlexHeader title={''} description={ isMobile? description:''} heading={''}  className="my-0"/>
        <p className="text-xs lg:text-xl2 text-white w-full leading-relaxed">{longDescription}</p>
      </div>
    </div>
  );
};

export default HeroSection;

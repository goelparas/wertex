import React from "react";
import {FlexHeader} from "../FlexHeader/FlexHeader";
import Image, { StaticImageData } from "next/image";
import { cn } from "@/lib/utils";
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
  return (
    <div className={cn(`w-full px-12 bg-background`, className)}>
      <FlexHeader title={title} description={description} heading={heading} />
      <div className="w-full flex flex-col  justify-between items-center gap-8 h-[85svh] mt-12">
        <div className="h-full relative w-full">
          <Image src={src} alt={alt} quality={100} objectFit="cover" fill />
        </div>
        <p className="text-xl2 text-white w-full">{longDescription}</p>
      </div>
    </div>
  );
};

export default HeroSection;

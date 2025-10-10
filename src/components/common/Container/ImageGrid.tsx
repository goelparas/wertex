'use client'
import grid from "@/cdn/images/cross.png";
import gridBlack from '@/cdn/images/vectors/black-grid.png'
import { cn } from "@/lib/utils";
import { useWindowSize } from "@/utils/hooks/useWindowSize";
import Image, { StaticImageData } from 'next/image';
import { ReactElement, ReactNode } from "react";



export const ImageContainer = ({ img, width, height, className , node , variant="white" ,size }: {
  img: string | StaticImageData,
  width?: number,
  height?: number,
  className?: string,
  node?:ReactElement | ReactNode 
  variant?: "black" |"white"
  size?: {
    smWidth?: number,
    smHeight?: number,
    smClassName?:string
  }
}) => {
  const {isMobile} = useWindowSize();
  const gridColor =   variant === "white" ? grid : gridBlack;
  return <div className={cn("relative flex items-center justify-center w-16 h-16 shrink-0 flex-none", isMobile ? size?.smClassName : className)}>
    {
       node ? node : 
      <Image  
      src={img}
      alt="molding service"
      width={isMobile ? size?.smWidth ?? width ?? 42 : width ?? 42}
      height={isMobile ? size?.smHeight ?? height ?? 42 : height ?? 42}
      className="z-20"
    />
    }
    
    <Image src={gridColor} alt="casting main" fill />
  </div>
}
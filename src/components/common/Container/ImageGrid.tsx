
import grid from "@/cdn/images/cross.png";
import gridBlack from '@/cdn/images/vectors/black-grid.png'
import { cn } from "@/lib/utils";
import Image, { StaticImageData } from 'next/image';
import { ReactElement } from "react";



export const ImageContainer = ({ img, width, height, className , node , variant="white" }: {
  img: string | StaticImageData,
  width?: number,
  height?: number,
  className?: string,
  node?:ReactElement 
  variant?: "black" |"white"
}) => {
  const gridColor =   variant === "white" ? grid : gridBlack;
  return <div className={cn("relative flex items-center justify-center w-16 h-16 shrink-0 flex-none", className)}>
    {
       node ? node : 
      <Image
      src={img}
      alt="molding service"
      width={width ?? 42}
      height={height ?? 42}
    />
    }
    
    <Image src={gridColor} alt="casting main" fill />
  </div>
}
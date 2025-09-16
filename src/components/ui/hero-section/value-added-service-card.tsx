'use client'
import { ImageContainer } from '@/components/common/Container/ImageGrid';
import { useWindowSize } from '@/utils/hooks/useWindowSize';
import { StaticImageData } from 'next/image';
import React from 'react';

interface ValueAddedServiceCardProps {
    title: string;
    description: string;
    icon: StaticImageData;
}


export const ValueAddedServiceCard: React.FC<ValueAddedServiceCardProps> = ({ 
    title, 
    description, 
    icon 
}) => {
    const { isMobile } = useWindowSize();
    return (
        <div className=" w-full h-full p-3  lg:h-min lg:w-min flex flex-row bg-[#2222225C] lg:bg-transparent rounded-2xl   lg:flex-col items-center text-white gap-4">
            <div className="lg:w-full flex justify-center bg-transparent w-1/4">
                <ImageContainer img={icon}  className='lg:w-20 lg:h-20 w-11 h-11' width={ isMobile ? 26 : 46} height={ isMobile ? 26 : 46}/>
            </div>
            <div className='lg:rounded-2xl  text-background-400  lg:border-white/5 lg:border    lg:bg-black/10 backdrop-blur-md    flex flex-col items-center justify-start w-4/5  lg:p-3  lg:w-max lg:max-w-80  lg:h-40 '>
            <h3 className=" w-full text-xs text-start lg:text-lg font-bold text-white lg:text-center ">{title}</h3>
            <p className="text-xs text-start lg:text-lg lg:text-center lg:leading-relaxed text-wrap w-full ">{description}</p>
            </div>
            
        </div>
    );
}; 
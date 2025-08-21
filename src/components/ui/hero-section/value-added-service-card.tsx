import { ImageContainer } from '@/components/common/Container/ImageGrid';
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
    return (
        <div className="h-min w-min flex flex-col items-center text-white gap-4">
            <div className="w-full flex justify-center bg-transparent">
                <ImageContainer img={icon}  className='w-20 h-20' width={46} height={46}/>
            </div>
            <div className='rounded-2xl  text-background-400  border-white/5 border    bg-black/10 backdrop-blur-md   flex flex-col items-center justify-start  p-3  w-max max-w-80  h-40 '>
            <h3 className="text-lg font-bold text-white text-center ">{title}</h3>
            <p className=" text-lg text-center leading-relaxed">{description}</p>
            </div>
            
        </div>
    );
}; 
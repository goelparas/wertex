'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { FlexHeader2 } from '@/components/common/FlexHeader/FlexHeader';
import Section from '../common/Section';
import arrow from "@/cdn/images/arrow.avif"

// Import carousel images
import cncCarousel1 from "@/cdn/images/cnc/carousel/cnc-carousel-1.webp"
import cncCarousel2 from "@/cdn/images/cnc/carousel/cnc-carousel-2.webp"
import cncCarousel3 from "@/cdn/images/cnc/carousel/cnc-carousel-3.webp"
import cncCarousel4 from "@/cdn/images/cnc/carousel/cnc-carousel-4.webp"
import cncCarousel5 from "@/cdn/images/cnc/carousel/cnc-carousel-5.webp"
import cncCarousel6 from "@/cdn/images/cnc/carousel/cnc-carousel-6.webp"
import cncCarousel7 from "@/cdn/images/cnc/carousel/cnc-carousel-7.webp"
import cncCarousel8 from "@/cdn/images/cnc/carousel/cnc-carousel-8.webp"
import cncCarousel9 from "@/cdn/images/cnc/carousel/cnc-carousel-9.webp"
import { useWindowSize } from '@/utils/hooks/useWindowSize';


const machineTypes = [
  { 
    name: 'CNC Horizontal Lathes',
    image: cncCarousel1
  },
  { 
    name: 'Sliding Head Machines',
    image: cncCarousel2
  },
  { 
    name: 'CNC Milling Machines',
    image: cncCarousel3
  },
  { 
    name: 'Double Column Fixed Bed Giant VMC',
    image: cncCarousel4
  },
  { 
    name: 'HMC (Horizontal Machining Center)',
    image: cncCarousel5
  },
   
  { 
    name: 'VTL (Vertical Turning Lathes)',
    image: cncCarousel6
  },
  { 
    name: 'Gear Cutting Machines',
    image: cncCarousel7
  },
  { 
    name: 'Grinding Machines',
    image: cncCarousel8
  },
  { 
    name: 'Wire EDM Machines',
    image: cncCarousel9
  },
   
];



const MachineLink = ({ 
  name, 
  image, 
  onClick, 
  isActive 
}: { 
  name: string;
  image: any; // Changed from string to any to handle StaticImageData
  onClick: () => void;
  isActive: boolean;
}) => {
  const { isMobile } = useWindowSize()
  return (
    <motion.div
      onClick={onClick}
      className={cn(
        'group flex items-center w-full justify-start hover:cursor-pointer border-b border-[#6A6A6A]',
        'p-1 md:p-4 border-b  hover:text-orangeBg',
        'transition-all duration-300',
        isActive && 'text-orangeBg bg-zinc-900/30'
      )}
      whileHover={{ x: 10 }}
      whileTap={{ scale: 0.98 }}
    >
      <span className={cn(
        'text-white text-nowrap text-sm md:text-3xl group-hover:text-orangeBg transition-colors font-bold',
        isActive && 'text-orangeBg'
      )}>
        {name}
      </span>
      <motion.span 
        initial={{ rotate: 45 }} 
        className='text-chart-1 pl-4'
         animate={{ rotate: isActive ? 0 : 45 }}
        transition={{ duration: 0.3 }}

      >
        <Image 
          src={arrow} 
          width={isMobile ? 30 : 60}
          height={isMobile ? 30 : 60}
          alt="arrow" 
          className='rotate-0 '
        />
      </motion.span>
    </motion.div>
  );
};

export default function CncPerformanceSection() {
  const [selectedImage, setSelectedImage] = useState({
    src: machineTypes[0].image,
    name: machineTypes[0].name
  });

  const handleMachineClick = (machine: typeof machineTypes[0]) => {
    setSelectedImage({
      src: machine.image,
      name: machine.name
    });
  };

  return (
    <Section className='bg-transparent'>
      <div className=''>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className=' text-white mb-4'
        >
          <FlexHeader2  heading="Enhancing Component Performance and Quality" description="Advanced finishing techniques for durability and precision." />
        </motion.h1>
        <div className='grid grid-cols-1 md:flex   border-y lg:border border-[#6A6A6A]'>
          <div className='lg:border-r  lg:p-4 p-0 lg:border-[#6A6A6A] max-w-xl md:w-2/5   py-6 pr-4  flex flex-col justify-between items-end '>
            <p className='text-white mb-8'>
            Specializes in turning and facing cylindrical and complex parts with high precision. Ideal for applications requiring smooth finishes and dimensional accuracy in large and small components.
            </p>
            <motion.div 
              className='relative  w-full h-80 md:h-[28rem] lg:h-[37.5rem] bg-borderGray lg:bg-transparent   mx-auto overflow-hidden'
              key={selectedImage.name}  
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <Image
                src={selectedImage.src}
                alt={selectedImage.name}
                fill
                className='object-cover'
              />
            </motion.div>
          </div>

          <div className='space-y-1    flex flex-col justify-center md:w-3/5 items-start'>
            {machineTypes.map((machine, index) => (
              <MachineLink 
                key={index} 
                {...machine} 
                onClick={() => handleMachineClick(machine)}
                isActive={selectedImage.src === machine.image}
              />
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}

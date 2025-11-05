'use client';

import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { FlexHeader2, FlexHeader } from '@/components/common/FlexHeader/FlexHeader';

import capability1 from "@/cdn/images/casting/capability-1.png";
import capability2 from "@/cdn/images/casting/capability-2.png";
import grid from "@/cdn/images/cross.png";
import Image from 'next/image';
import Section from '../common/Section';
import { CncCarousel } from './CncCarousel';
import { ImageContainer } from '../common/Container/ImageGrid';
import { useWindowSize } from '@/utils/hooks/useWindowSize';


const CASTING_CAPABILITIES = [
  {
    title: 'CAD Model Programming',
    description:
      'Our skilled machinists program precise tool paths based on 3D CAD models.',
    image: capability1,
    class: ""
  },
  {
    title: 'Material Removal Optimization',
    description: 'Techniques to reduce machining costs and cycle times.',
    image: capability2,
    class: ""
  },
  {
    title: 'Custom Tooling',
    description:
      'Special jigs and fixtures to meet unique client requirements.',
    image: capability2,
    class: "-rotate-90"
  },
] as const;

const CncWorkflowSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { isMobile } = useWindowSize()
  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const sectionTop = sectionRef.current.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      if (sectionTop < windowHeight * 0.75) {
        sectionRef.current.classList.add('visible');
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check on first render

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  return (
    <>
      <div ref={sectionRef} className='py-8 overflow-hidden   mt-0   p-2 lg:p-12 '>
        <div className=' mx-auto  px-6'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className=''
          >
            <FlexHeader2 heading="From Design to Delivery, Streamlined for Success" description="" />

          </motion.div>

          <div className="grid grid-cols-1  lg:grid-cols-3 gap-4 mt-6 ">
            {CASTING_CAPABILITIES.map((item, index) => (
              <div
                key={index}
                className="bg-background-200 p-4 lg:p-6 rounded-3xl shadow-lg flex flex-row lg:flex-col items-start text-start hover:scale-105 transition-transform duration-300 gap-4"
              >
                <h3 className="hidden lg:block lg:text-xl2 font-bold mb-2 text-white text-start w-full">
                  {item.title}
                </h3>
                <ImageContainer img={item.image} className='w-12 h-12 lg:w-24 lg:h-24' variant='white' width={isMobile ? 32 : 62} height={isMobile ? 32 : 62} />
                <div className='block lg:hidden'>
                  <h3 className="lg:text-xl2 font-bold mb-2 text-white text-start w-full">
                    {item.title}
                  </h3>
                  <p className="text-xs leading-relaxed lg:text-xl2 text-gray-300">{item.description}</p>
                </div>
                <p className="hidden lg:block text-xs leading-relaxed lg:text-xl2 text-gray-300">{item.description}</p>
              </div>
            ))}
          </div>


        </div>

      </div>

      <Section className='bg-transparent  border-t-2 border-white' >
        <FlexHeader title="Uncompromising Quality at Every Step" description='Advanced instruments and thorough checks ensure unparalleled precision in every product' />
        <p className='text-xs lg:text-xl2'>Wertex employs state-of-the-art quality assurance tools, including:</p>
      </Section>
      <CncCarousel />
    </>
  );
};

export default CncWorkflowSection;

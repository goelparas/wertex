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


const CASTING_CAPABILITIES = [
  {
    title: "Investment Casting",
    description:
      "Produces high-precision components with intricate geometries and excellent surface finishes.",
    image: capability1,
    class: ""
  },
  {
    title: "Die Casting",
    description:
      "Fast and cost-effective for complex shapes with superior dimensional accuracy.",
    image: capability2,
    class: ""
  },
  {
    title: "Sand Casting",
    description:
      "Flexible and economical, ideal for low to medium production volumes.",
    image: capability2,
    class: "-rotate-90"
  },
] as const;

const CncWorkflowSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

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

  const workflowItems = [
    {
      title: 'CAD Model Programming',
      description:
        'Our skilled machinists program precise tool paths based on 3D CAD models.',
    },
    {
      title: 'Material Removal Optimization',
      description: 'Techniques to reduce machining costs and cycle times.',
    },
    {
      title: 'Custom Tooling',
      description:
        'Special jigs and fixtures to meet unique client requirements.',
    },
  ];

  return (
    <>
    <div ref={sectionRef} className='py-8 overflow-hidden    mt-12 p-12 '>
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

        <div className="grid grid-cols-3 gap-4 mt-6 ">
          {CASTING_CAPABILITIES.map((item, index) => (
            <div
              key={index}
              className="bg-background-200 p-6 rounded-3xl shadow-lg flex flex-col items-start text-start hover:scale-105 transition-transform duration-300 gap-4"
            >
              <h3 className="text-xl2 font-bold mb-2 text-white text-start w-full">
                {item.title}
              </h3>
              <div className="relative flex items-center justify-center w-24 h-24 shrink-0 flex-none">
                <Image
                  src={item.image}
                  alt="molding service"
                  width={62}
                  height={62}
                  className={item.class}
                />
                <Image src={grid} alt="casting main" fill />
              </div>

              <p className="text-xl2 text-gray-300">{item.description}</p>
            </div>
          ))}
        </div>


      </div>

    </div>

    <Section className='bg-transparent  border-t-2 border-white' >
      <FlexHeader title="Uncompromising Quality at Every Step" description='Advanced instruments and thorough checks ensure unparalleled precision in every product' />
          <FlexHeader2 heading="" description="Wertex employs state-of-the-art quality assurance tools, including:" />
    </Section>
    <CncCarousel/>
    </>
  );
};

export default CncWorkflowSection;

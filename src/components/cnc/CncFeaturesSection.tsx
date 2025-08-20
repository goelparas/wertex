'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FlexHeader2 } from '@/components/common/FlexHeader/FlexHeader';
import { ImageContainer } from '../common/Container/ImageGrid';
import { StaticImageData } from 'next/image';

import image1 from '@/cdn/images/vectors/square.png';
import image2 from '@/cdn/images/vectors/diagonal.png';
import image3 from '@/cdn/images/vectors/trapezium.png';
import image4 from '@/cdn/images/vectors/diagonal.png';
import Section from '../common/Section';

const features = [
  {
    title: 'Fast Turnaround Times',
    description: 'High-capacity facilities for on-time delivery',
    icon: (image1),
  },
  {
    title: 'Cost Efficiency',
    description: 'Optimized processes for reduced cycle times and expenses',
    icon: (image2),
  },
  {
    title: 'Scalability',
    description: 'Solutions tailored for both small-batch and mass production',
    icon: (image3),
  },
  {
    title: 'Custom Solutions',
    description: 'Special tooling and fixtures for unique projects',
    icon :image4
  },
];

const FeatureCard = ({
  title,
  description,
  icon,
}: {
  title: string;
  description: string;
  icon: StaticImageData;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className='text-black p-6  border border-black w-80 h-72 flex flex-col items-center justify-between'
  >
    <ImageContainer variant="black" img={icon} className='w-24 h-24'  width={62} height={62} />
    <div>
    <h3 className='text-xl2 font-semibold mb-2 text-left w-full'>{title}</h3>
    <p className='text-black text-lg text-left w-full'>{description}</p>
    </div>
    
  </motion.div>
);

export default function CncFeaturesSection() {
  return (
    <Section className=' bg-white'>
      <div className='px-4'>
         <FlexHeader2 className='text-black' heading="Why Choose Wertex for CNC Machining?" description=""/> 

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </Section>
  );
}

'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { ImageContainer } from '../common/Container/ImageGrid';
import { StaticImageData, StaticImport } from 'next/dist/shared/lib/get-img-props';

interface CapabilityCardProps {
  icon: StaticImageData;
  title: string;
  description: string;
  delay?: number;
}

export default function CapabilityCard({
  icon,
  title,
  description,
  delay = 0,
}: CapabilityCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      className={cn(
        // GLASS EFFECT
        'bg-[#4F4F4F73]/20 backdrop-blur-md',
        'border border-white/10 rounded-2xl',
        'p-6 flex flex-col items-center justify-around text-center',
        // FONTS + COLORS
        'text-white',
        // HOVER EFFECT
        'transition-all duration-300 hover:shadow-lg hover:shadow-white/10 hover:-translate-y-1 h-[400px] max-w-[380px]'
      )}
    >
        <ImageContainer img={icon} className='w-24 h-24' width={85} height={85}/>
      <p className='text-gray-300'>{description}</p>
    </motion.div>
  );
}

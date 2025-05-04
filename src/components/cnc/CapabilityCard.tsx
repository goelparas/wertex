'use client';

import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface CapabilityCardProps {
  icon: ReactNode;
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
        'bg-black/30 backdrop-blur-md',
        'border border-white/20 rounded-2xl',
        'p-6 flex flex-col items-center justify-between text-center',
        // FONTS + COLORS
        'text-white',
        // HOVER EFFECT
        'transition-all duration-300 hover:shadow-lg hover:shadow-white/10 hover:-translate-y-1 h-[400px] max-w-[380px]'
      )}
    >
      <div className='h-full flex items-center'>
        <div className='mb-4 p-4 bg-white/10 rounded-full '>{icon}</div>
      </div>
      <p className='text-gray-300'>{description}</p>
    </motion.div>
  );
}

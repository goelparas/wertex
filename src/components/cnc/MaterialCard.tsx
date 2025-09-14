'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { ImageContainer } from '../common/Container/ImageGrid';
import { StaticImageData } from 'next/image';

interface MaterialCardProps {
  icon: StaticImageData;
  title: string;
  description: string;
  delay?: number;
}

export default function MaterialCard({
  icon,
  title,
  description,
  delay = 0,
}: MaterialCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      className={cn(
        'bg-[#EEEEEE] rounded-lg p-4 text-black',
        'flex items-center gap-4',
        'transition-all duration-300 hover:bg-muted/80 '
      )}
    >
    <ImageContainer img={icon} className='w-16 h-16' variant='black' width={44} height={44}/>
      <div>
        <p className='font-bold text-xl2'>
          {title}:{' '}
          <span className='text-muted-foreground font-normal'>
            {description}
          </span>
        </p>
      </div>
    </motion.div>
  );
}

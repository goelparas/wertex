'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { ImageContainer } from '../common/Container/ImageGrid';
import { StaticImageData } from 'next/image';
import { useWindowSize } from '@/utils/hooks/useWindowSize';

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
  const { isMobile } = useWindowSize();
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
    <ImageContainer img={icon} className='w-12 h-12 lg:w-16 lg:h-16' variant='black' width={isMobile? 32 : 44} height={isMobile? 32 : 44}/>
       
        <p className='font-bold text-xs lg:text-xl2 leading-relaxed'>
          {title}:{' '}
          <span className='text-xs lg:text-xl2 text-muted-foreground font-normal'>
            {description}
          </span>
        </p>

    </motion.div>
  );
}

'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { cn } from '@/lib/utils';

const machineTypes = [
  { name: 'CNC Horizontal Lathes', href: '/machines/horizontal-lathes' },
  { name: 'Sliding Head Machines', href: '/machines/sliding-head' },
  { name: 'CNC Milling Machines', href: '/machines/milling' },
  { name: 'Double Column Fixed Bed Giant VMC', href: '/machines/vmc' },
  { name: 'HMC (Horizontal Machining Center)', href: '/machines/hmc' },
  { name: 'Turn Mills and Mill Turn Machines', href: '/machines/turn-mills' },
  { name: 'VTL (Vertical Turning Lathes)', href: '/machines/vtl' },
  { name: 'Gear Cutting Machines', href: '/machines/gear-cutting' },
  { name: 'Grinding Machines', href: '/machines/grinding' },
  { name: 'Wire EDM Machines', href: '/machines/edm' },
  {
    name: 'Gantry VMC (Vertical Machining Center)',
    href: '/machines/gantry-vmc',
  },
];

const MachineLink = ({ name, href }: { name: string; href: string }) => {
  return (
    <Link
      href={href}
      className={cn(
        'group flex items-center justify-start',
        'p-4 border-b border-zinc-800 hover:bg-zinc-900/50 hover:text-[#E97713]',
        'transition-all duration-300 '
      )}
    >
      <span className='text-zinc-300 group-hover:text-[#E97713] transition-colors font-bold'>
        {name}
      </span>
      <motion.span initial={{ rotate: 0 }} className='text-chart-1'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='24'
          height='24'
          viewBox='0 0 24 24'
          fill='none'
          stroke='currentColor'
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
          className='transform transition-transform duration-300 group-hover:rotate-45'
        >
          <path d='M7 7h10v10' />
          <path d='M7 17 17 7' />
        </svg>
      </motion.span>
    </Link>
  );
};

export default function CncPerformanceSection() {
  return (
    <section className='py-20 bg-black'>
      <div className='container mx-auto px-4'>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className='text-4xl font-bold text-white mb-4'
        >
          Enhancing Component Performance and Quality
        </motion.h2>
        <p className='text-zinc-400 mb-8'>
          Advanced finishing techniques for durability and precision.
        </p>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 border-y border-zinc-800'>
          <div className='border-r  border-zinc-800 py-6 px-4'>
            <p className='text-zinc-300 mb-8'>
              Specializes in turning and facing cylindrical and complex parts
              with high precision. Ideal for applications requiring smooth
              finishes and dimensional accuracy in large and small components.
            </p>
            <div className='relative w-full aspect-square lg:aspect-[4/3] rounded-lg overflow-hidden'>
              <Image
                src='https://images.pexels.com/photos/3912982/pexels-photo-3912982.jpeg'
                alt='CNC Machined Component'
                fill
                className='object-cover'
              />
            </div>
          </div>

          <div className='space-y-1 -ml-12'>
            {machineTypes.map((machine, index) => (
              <MachineLink key={index} {...machine} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

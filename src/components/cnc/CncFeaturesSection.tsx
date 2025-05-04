'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

const features = [
  {
    title: 'Fast Turnaround Times',
    description: 'High-capacity facilities for on-time delivery',
    icon: (
      <svg
        width='40'
        height='40'
        viewBox='0 0 40 40'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <rect
          x='12'
          y='12'
          width='16'
          height='16'
          stroke='currentColor'
          strokeWidth='2'
        />
        <rect x='16' y='16' width='8' height='8' fill='currentColor' />
      </svg>
    ),
  },
  {
    title: 'Cost Efficiency',
    description: 'Optimized processes for reduced cycle times and expenses',
    icon: (
      <svg
        width='40'
        height='40'
        viewBox='0 0 40 40'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <rect
          x='10'
          y='10'
          width='12'
          height='12'
          stroke='currentColor'
          strokeWidth='2'
        />
        <rect
          x='18'
          y='18'
          width='12'
          height='12'
          stroke='currentColor'
          strokeWidth='2'
        />
      </svg>
    ),
  },
  {
    title: 'Scalability',
    description: 'Solutions tailored for both small-batch and mass production',
    icon: (
      <svg
        width='40'
        height='40'
        viewBox='0 0 40 40'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <rect
          x='8'
          y='8'
          width='12'
          height='12'
          stroke='currentColor'
          strokeWidth='2'
        />
        <rect
          x='20'
          y='20'
          width='12'
          height='12'
          stroke='currentColor'
          strokeWidth='2'
        />
        <rect
          x='14'
          y='14'
          width='12'
          height='12'
          stroke='currentColor'
          strokeWidth='2'
        />
      </svg>
    ),
  },
  {
    title: 'Custom Solutions',
    description: 'Special tooling and fixtures for unique projects',
    icon: (
      <svg
        width='40'
        height='40'
        viewBox='0 0 40 40'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <rect
          x='12'
          y='12'
          width='8'
          height='8'
          stroke='currentColor'
          strokeWidth='2'
        />
        <rect
          x='20'
          y='20'
          width='8'
          height='8'
          stroke='currentColor'
          strokeWidth='2'
        />
      </svg>
    ),
  },
];

const FeatureCard = ({
  title,
  description,
  icon,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className='text-black p-6  border border-zinc-800'
  >
    <div className='mb-4 text-chart-1'>{icon}</div>
    <h3 className='text-xl font-semibold mb-2 '>{title}</h3>
    <p className='text-zinc-400'>{description}</p>
  </motion.div>
);

export default function CncFeaturesSection() {
  return (
    <section className='py-8 bg-white'>
      <div className=' px-4'>
        <h2 className='text-2xl font-bold mb-4 text-black'>
          Why Choose Wertex for CNC Machining?
        </h2>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
}

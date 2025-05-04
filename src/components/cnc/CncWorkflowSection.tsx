'use client';

import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface WorkflowItemProps {
  title: string;
  description: string;
  index: number;
}

const WorkflowItem = ({ title, description, index }: WorkflowItemProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      viewport={{ once: true }}
      className='relative flex flex-col h-full bg-zinc-900 rounded-lg p-8 shadow-xl'
    >
      <div className='absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-chart-1 to-chart-2 opacity-80 rounded-t-lg'></div>

      <h3 className='text-xl font-bold text-white mb-4'>{title}</h3>

      <div className='flex-1 flex items-center'>
        <div
          className={cn(
            'w-full aspect-square relative mb-8',
            'bg-zinc-800 rounded-lg overflow-hidden',
            'flex items-center justify-center'
          )}
        >
          <div className='absolute inset-0 bg-gradient-to-br from-zinc-800/60 to-zinc-900/90 mix-blend-overlay'></div>
          <div className='hexagon-overlay'></div>
          {index === 0 && (
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='80'
              height='80'
              viewBox='0 0 24 24'
              fill='none'
              stroke='currentColor'
              strokeWidth='1'
              strokeLinecap='round'
              strokeLinejoin='round'
              className='text-chart-1'
            >
              <path d='M14 3v4a1 1 0 0 0 1 1h4'></path>
              <path d='M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z'></path>
              <path d='M10 13l-1 2l1 2'></path>
              <path d='M14 13l1 2l-1 2'></path>
            </svg>
          )}
          {index === 1 && (
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='80'
              height='80'
              viewBox='0 0 24 24'
              fill='none'
              stroke='currentColor'
              strokeWidth='1'
              strokeLinecap='round'
              strokeLinejoin='round'
              className='text-chart-2'
            >
              <path d='M20.9999 16.3v.7a2 2 0 0 1-2 2H5.00004a2 2 0 0 1-2-2v-.7a4.00001 4.00001 0 0 1 1.38-3.03l4.62-4.27v-1H7.00004a1 1 0 0 1 0-2h10a1 1 0 0 1 1 1 1 1 0 0 1-1 1h-2v1l4.62 4.27a4.00001 4.00001 0 0 1 1.38 3.03Z'></path>
              <path d='M12 8v6'></path>
              <path d='M8 2v2'></path>
              <path d='M16 2v2'></path>
            </svg>
          )}
          {index === 2 && (
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='80'
              height='80'
              viewBox='0 0 24 24'
              fill='none'
              stroke='currentColor'
              strokeWidth='1'
              strokeLinecap='round'
              strokeLinejoin='round'
              className='text-chart-3'
            >
              <path d='M11 4h2a1 1 0 0 1 1 1v2H10V5a1 1 0 0 1 1-1Z'></path>
              <path d='M14 8v6h1a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2v-3H11v3H9a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1h1V8h4Z'></path>
              <path d='M5 8v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V8H5Z'></path>
            </svg>
          )}
        </div>
      </div>

      <p className='text-zinc-300 text-base mb-4 leading-relaxed'>
        {description}
      </p>
    </motion.div>
  );
};

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
    <section ref={sectionRef} className='py-8 overflow-hidden bg-black'>
      <div className=' mx-auto px-4 px-6'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className=''
        >
          <h2 className='text-2xl md:text-3xl font-bold text-white'>
            From Design to Delivery, Streamlined for Success
          </h2>
          <div className='w-24 h-1 bg-chart-2 mx-auto'></div>
        </motion.div>

        <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
          {workflowItems.map((item, index) => (
            <WorkflowItem
              key={index}
              title={item.title}
              description={item.description}
              index={index}
            />
          ))}
        </div>
      </div>

      <style jsx>{`
        .hexagon-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 30 L15 7.5 L45 7.5 L60 30 L45 52.5 L15 52.5 Z' stroke='%233b82f6' stroke-opacity='0.1' stroke-width='0.5' fill='none' /%3E%3C/svg%3E");
          background-size: 60px 60px;
          opacity: 0.2;
        }
      `}</style>
    </section>
  );
};

export default CncWorkflowSection;

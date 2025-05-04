'use client';

import React from 'react';
import { motion } from 'framer-motion';
import CapabilityCard from './CapabilityCard';
import { Workflow, Cog, GitFork } from 'lucide-react';
import Image from 'next/image';
import machineHammer from '../../cdn/images/cnc/metalworking-cnc-milling-machine.png';

export default function CncCapabilitiesSection() {
  return (
    <section className='relative w-full py-16 md:py-24 bg-black text-white'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className='space-y-4 text-left mb-12'
        >
          <h2 className='text-3xl md:text-4xl font-bold'>
            Comprehensive CNC Capabilities Tailored for Your Needs
          </h2>
          <p className='text-xl text-muted-foreground'>
            Our CNC machining capabilities include:
          </p>
        </motion.div>

        <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
          <div className='absolute inset-y-60 w-full h-[380px]'>
            <Image
              src={machineHammer}
              alt='Precision Casting Process'
              fill
              className='object-cover'
              priority
            />
            <div className='absolute inset-0 bg-black/60 mix-blend-multiply' />
          </div>
          <CapabilityCard
            icon={<Workflow size={48} className='text-chart-1' />}
            title='Multi-Axis Milling'
            description='3-axis, 4-axis, and 5-axis milling machines for precision cuts and complex geometries'
            delay={0}
          />

          <CapabilityCard
            icon={<Cog size={48} className='text-chart-1' />}
            title='Advanced Tooling'
            description='Precision lathes, Wire EDM, gear hobbing, and grinding machines for versatile manufacturing solutions'
            delay={0.2}
          />

          <CapabilityCard
            icon={<GitFork size={48} className='text-chart-1' />}
            title='Synchronized Systems'
            description='Specialized equipment to handle stationary, rotating, or synchronized workpiece movements'
            delay={0.4}
          />
        </div>
      </div>
    </section>
  );
}

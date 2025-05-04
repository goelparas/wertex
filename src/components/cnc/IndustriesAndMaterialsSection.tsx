'use client';

import React from 'react';
import { motion } from 'framer-motion';
import IndustryCard from './IndustryCard';
import MaterialCard from './MaterialCard';
import {
  Car,
  Plane,
  Stethoscope,
  Bot,
  Cpu,
  Layers,
  Hammer,
} from 'lucide-react';

export default function IndustriesAndMaterialsSection() {
  return (
    <section className='relative w-full bg-white'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6'>
        <div className='grid grid-cols-1 lg:grid-cols-2'>
          {/* Industries Column */}
          <div className='px-6 border-r-2 border-black py-8'>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className='mb-8'
            >
              <h2 className='text-3xl font-bold mb-2 text-black'>
                Delivering <span className='text-[#E97713]'>Excellence</span>{' '}
                Across Industries
              </h2>
              <p className='text-black'>
                Wertex provides CNC machining solutions for:
              </p>
            </motion.div>

            <div className='space-y-4'>
              <IndustryCard
                icon={<Car size={28} />}
                title='Automotive'
                description='Engine components, transmission parts'
                delay={0}
              />

              <IndustryCard
                icon={<Plane size={28} />}
                title='Aerospace'
                description='Aircraft engines, structural parts'
                delay={0.1}
              />

              <IndustryCard
                icon={<Stethoscope size={28} />}
                title='Medical'
                description='Surgical instruments, diagnostic devices'
                delay={0.2}
              />

              <IndustryCard
                icon={<Bot size={28} />}
                title='Robotics'
                description='Precision components for automation'
                delay={0.3}
              />

              <IndustryCard
                icon={<Cpu size={28} />}
                title='Electronics'
                description='Custom parts for cutting-edge devices'
                delay={0.4}
              />
            </div>
          </div>

          {/* Materials Column */}
          <div className='px-6 py-8'>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className='mb-8 text-black'
            >
              <h2 className='text-3xl font-bold mb-2'>
                Materials for{' '}
                <span className='text-[#E97713]'>Every Application</span>
              </h2>
              <p className='text-muted-foreground'>
                We specialize in machining an extensive range of materials
                tailored to diverse needs:
              </p>
            </motion.div>

            <div className='space-y-4 '>
              <MaterialCard
                icon={<Layers size={28} />}
                title='Metals'
                description='Aluminum, steel, stainless steel, titanium, Inconel, zinc, lead, copper, and graphite'
                delay={0}
              />

              <MaterialCard
                icon={<Hammer size={28} />}
                title='Advanced Plastics'
                description='ABS, Teflon, PEEK, PPS, and more'
                delay={0.1}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

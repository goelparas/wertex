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
import Section from '../common/Section';
import   {
  FlexHeader2,
} from "@/components/common/FlexHeader/FlexHeader";
export default function IndustriesAndMaterialsSection() {
  return (
    <Section className='relative w-full bg-transparent pt-0 mt-0 '>
      <Section className=' mx-auto px-4 sm:px-6  bg-white'>
        <div className='grid grid-cols-1 lg:grid-cols-2'>
          {/* Industries Column */}
          <div className='px-6 border-r-2 border-[#BCBCBC] py-8'>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className='mb-8'
            >
            <FlexHeader2 className='p-0 text-black' heading={<p>Delivering <span className='text-orangeBg'>Excellence</span> Across Industries</p>} description='Wertex provides CNC machining solutions for:' />

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
              <FlexHeader2 className='p-0 text-black' heading={<p>Materials for <span className='text-orangeBg'>Every Application</span> </p>} description='Wertex provides CNC machining solutions for:' />
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
      </Section>
    </Section>
  );
}

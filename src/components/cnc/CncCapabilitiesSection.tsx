'use client';

import React from 'react';
import { motion } from 'framer-motion';
import CapabilityCard from './CapabilityCard';
import { Workflow, Cog, GitFork } from 'lucide-react';
import Image from 'next/image';
import machineHammer from '../../cdn/images/cnc/metalworking-cnc-milling-machine.png';
import Section from '../common/Section';


import logo1 from '@/cdn/images/casting/logo-1.svg';
import logo2 from '@/cdn/images/casting/logo-2.svg';
import logo3 from '@/cdn/images/casting/logo-3.svg';
import   {
  FlexHeader2,
} from "@/components/common/FlexHeader/FlexHeader";

export default function CncCapabilitiesSection() {
  return (
  
      <Section className=' mx-auto bg-transparent pb-0'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className='text-left mb-12'
        >
          <FlexHeader2 heading="Comprehensive CNC Capabilities Tailored for Your Needs" description={"Our CNC machining capabilities include:"}/>
        </motion.div>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-6 p-4 w-full relative h-[50rem] justify-center items-center'>
          <div className='w-full h-[50rem] absolute'>
            {/* <Image
              src={machineHammer}
              alt='Precision Casting Process'
              fill
              className='object-cover'
              priority
            /> */}
           
          </div>
          <CapabilityCard
            icon={logo1}
            title='Multi-Axis Milling'
            description='3-axis, 4-axis, and 5-axis milling machines for precision cuts and complex geometries'
            delay={0}
          />

          <CapabilityCard
            icon={logo2}
            title='Advanced Tooling'
            description='Precision lathes, Wire EDM, gear hobbing, and grinding machines for versatile manufacturing solutions'
            delay={0.2}
          />

          <CapabilityCard
            icon={logo3}
            title='Synchronized Systems'
            description='Specialized equipment to handle stationary, rotating, or synchronized workpiece movements'
            delay={0.4}
          />
        </div>
      </Section>
    
   
  );
}

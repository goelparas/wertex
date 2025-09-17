'use client';

import React from 'react';
import { motion } from 'framer-motion';
import IndustryCard from './IndustryCard';
import MaterialCard from './MaterialCard';
import {
  Layers,
  Hammer,
} from 'lucide-react';
import Section from '../common/Section';
import bus from "@/cdn/images/cnc/bus.png"
import aeroplane from "@/cdn/images/cnc/aeroplane.png"
import medical from "@/cdn/images/cnc/metal.png"
import robotics from "@/cdn/images/cnc/roboticsd.png"
import electronic from "@/cdn/images/cnc/electronic.png"
import metal from "@/cdn/images/cnc/metal.png"
import plastics from "@/cdn/images/cnc/plastic.png"
import   {
  FlexHeader2,
} from "@/components/common/FlexHeader/FlexHeader";
import { StaticImageData } from 'next/image';
const industries = [
  {
    icon: bus,
    title: "Automotive",
    description: "Engine components, transmission parts",
    delay: 0,
  },
  {
    icon: aeroplane,
    title: "Aerospace",
    description: "Aircraft engines, structural parts",
    delay: 0.1,
  },
  {
    icon: medical,
    title: "Medical",
    description: "Surgical instruments, diagnostic devices",
    delay: 0.2,
  },
  {
    icon: robotics,
    title: "Robotics",
    description: "Precision components for automation",
    delay: 0.3,
  },
  {
    icon: electronic,
    title: "Electronics",
    description: "Custom parts for cutting-edge devices",
    delay: 0.4,
  },
];
export default function IndustriesAndMaterialsSection() {
  return (
    <Section className='relative w-full bg-transparent pt-0 mt-0 '>
      <Section className=' mx-auto p-0 lg:px-4 sm:px-6  bg-white'>
        <div className='grid grid-cols-1 lg:grid-cols-2'>
          {/* Industries Column */}
          <div className='px-6 border-r-2 border-[#BCBCBC] py-8'>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className='lg:mb-8'
            >
            <FlexHeader2 className='p-0 text-black' heading={<p>Delivering <span className='text-orangeBg'>Excellence</span> Across Industries</p>} description='Wertex provides CNC machining solutions for:' />

            </motion.div>

            <div className="space-y-2 lg:space-y-4">
  {industries.map((industry, index) => (
    <IndustryCard
      key={index}
      icon={industry.icon as StaticImageData}
      title={industry.title}
      description={industry.description}
      delay={industry.delay}
    />
  ))}
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

            <div className='space-y-2 lg:space-y-4 '>
              <MaterialCard
                icon={metal}
                title='Metals'
                description='Aluminum, steel, stainless steel, titanium, Inconel, zinc, lead, copper, and graphite'
                delay={0}
              />

              <MaterialCard
                icon={plastics}
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

'use client';

import React from 'react';
import Image from 'next/image';

import { H4, Paragraph } from '../common/Topography';
import vidadigitalin from '../../cdn/images/cnc/vidadigitalin.png';

export default function CncHeroSection() {
  return (
    <div className='w-full max-h-[750px] space-y-5 px-6'>
      <div className='flex justify-between items-center w-full'>
        <H4>
          Precision Redefined with{' '}
          <span className='text-[#E97713]'>CNC Machining</span>
        </H4>
        <Paragraph>
          High-accuracy manufacturing solutions <br />
          for complex geometries across industries.
        </Paragraph>
      </div>
      <Image src={vidadigitalin} layout='contain' alt='cnc machine' />
      <Paragraph>
        CNC (Computer Numerical Control) machining is a cutting-edge
        manufacturing process that uses automated, high-speed cutting tools to
        transform metal and plastic workpieces into intricate geometries with
        unmatched precision. At Wertex, our CNC capabilities deliver
        high-quality components tailored to meet the diverse needs of industries
        like automotive, aerospace, medical, robotics, and electronics.
      </Paragraph>
    </div>
  );
}

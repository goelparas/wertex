import React from 'react';

import { Gauge, Hammer, Ruler, TestTube } from 'lucide-react';
import Container from '@/components/common/Container/Container';
import HeroSection from '@/components/common/Container/HeroSection-service';
import FlexHeader from '@/components/common/FlexHeader/FlexHeader';
// import vidadigitalin from '../../cdn/images/cnc/vidadigitalin.png';
import vidadigitalin from '../../../cdn/images/cnc/vidadigitalin.png';

const ForgingPage: React.FC = () => {
  const forgingTypes = [
    {
      title: 'Drop Forging',
      icon: <Hammer className='w-10 h-10 text-blue-400' />,
      description: [
        'Utilizes gravity and drop hammers to precisely shape heated metal.',
        'Produces components with consistent strength and fine grain structure.',
        'Commonly used for tools, hardware, and automotive parts.',
      ],
    },
    {
      title: 'Hot Forging',
      icon: <Hammer className='w-10 h-10 text-blue-400' />,
      description: [
        'Conducted at high temperatures to make the metal more pliable and easier to shape.',
        'Reduces strain hardening, improving ductility and material flow.',
        'Suitable for large, high-strength parts.',
      ],
    },
    {
      title: 'Cold Forging',
      icon: <Hammer className='w-10 h-10 text-blue-400' />,
      description: [
        'Performed at room temperature, achieving tighter tolerances and superior surface finishes.',
        'Offers excellent dimensional accuracy and material savings.',
        'Ideal for small to medium-sized components like fasteners and shafts.',
      ],
    },
    {
      title: 'Rolled Ring Forging',
      icon: <Hammer className='w-10 h-10 text-blue-400' />,
      description: [
        'Produces seamless rings with exceptional strength and dimensional accuracy.',
        'Commonly used in applications like bearings, flanges, and aerospace components.',
        'Accommodates a variety of sizes, from small to large diameters.',
      ],
    },
    {
      title: 'Press Forging',
      icon: <Hammer className='w-10 h-10 text-blue-400' />,
      description: [
        'Applies controlled pressure to shape metal gradually for intricate geometries.',
        'Offers better control over the deformation process.',
        'Commonly used for creating complex shapes with high precision.',
      ],
    },
    {
      title: 'Precision Forging',
      icon: <Hammer className='w-10 h-10 text-blue-400' />,
      description: [
        'Achieves near-net shapes, minimizing post-forging machining requirements.',
        'Optimizes material usage and reduces waste.',
        'Ideal for high-accuracy components in automotive and aerospace industries',
      ],
    },
    {
      title: 'Upset Forging',
      icon: <Hammer className='w-10 h-10 text-blue-400' />,
      description: [
        'Focuses on increasing the cross-sectional area of the workpiece.',
        'Commonly used for manufacturing bolts, rivets, and shafts.',
        'Ensures superior tensile and shear strength.',
      ],
    },
  ];

  const qualityControls = [
    {
      title: 'Non-Destructive Testing (NDT)',
      icon: <TestTube className='w-10 h-10 text-white' />,
      description:
        'Includes ultrasonic, magnetic particle, and dye penetrant inspections to guarantee structural integrity.',
    },
    {
      title: 'Dimensional Verification',
      icon: <Ruler className='w-10 h-10 text-white' />,
      description:
        'Tools like Coordinate Measuring Machines (CMMs) and profile projectors ensure precise measurements.',
    },
    {
      title: 'Mechanical Testing',
      icon: <Gauge className='w-10 h-10 text-white' />,
      description:
        'Confirms critical properties like strength, ductility, and wear resistance.',
    },
  ];

  return (
    <Container>
      <HeroSection
        title='Forging Excellence for High-Strength Components'
        description='Precision forging solutions for demanding industrial applications.'
        heading=''
        alt='Forging'
        src={vidadigitalin}
        longDescription='Forging is a cornerstone of manufacturing, shaping metal through compressive forces to create durable, high-strength components. At Wertex, we combine advanced techniques with industry expertise to deliver precision-forged parts for industries like aerospace, automotive, oil and gas, and industrial machinery. Every project is crafted to meet the highest standards of strength, consistency, and performance.'
      />

      <div className='border p-4 mb-4'>
        <div className='mb-8'>
          <h2 className='text-xl mb-6'>
            Wertex's wide range of forging capabilities ensures every project is
            delivered <br /> with precision, quality, and efficiency:
          </h2>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-3  gap-8'>
          {forgingTypes.map((type, index) => (
            <div
              key={index}
              className=' text-white p-8  hover:shadow-xl transition-shadow duration-300 border'
            >
              <div className='flex items-center mb-4'>
                <h3 className='text-xl font-bold'>{type.title}</h3>
              </div>
              <ul className='space-y-3 list-disc list-outside pl-4'>
                {type.description.map((item, idx) => (
                  <li key={idx}>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <FlexHeader
        title='Rigorously Tested for Superior Quality'
        description='Ensuring compliance with industry standards and client specifications.'
        heading=''
      />

      <div className='mt-16 mb-16 bg-[#4F4F4F73] border p-4 rounded-xl'>
        <h2 className='text-xl text-white mb-8 '>
          Every forging project at <span className='text-orangeBg'>Wertex</span>{' '}
          undergoes <br /> strict quality control measures:
        </h2>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-6 '>
          {qualityControls.map((control, index) => (
            <div
              key={index}
              className='bg-gradient-to-br from-orange-500 to-orange-700 text-white p-8 rounded-lg shadow-lg'
            >
              <div className='flex items-center mb-8'>
                <h3 className='text-xl font-bold'>{control.title}:</h3>
              </div>
              <p className='text-white'>{control.description}</p>
            </div>
          ))}
        </div>
      </div>

      <FlexHeader
        title='Your Partner for High-Performance'
        heading='Forging Solutions'
        description='Ensuring compliance with industry standards and client specifications.'
      />
      <ProcessSteps />
    </Container>
  );
};

export default ForgingPage;

const ProcessSteps: React.FC = () => {
  const steps = [
    {
      number: '01',
      title: 'Unmatched Expertise',
      description:
        'Expertise in developing tailored profiles for diverse applications.',
    },
    {
      number: '02',
      title: 'Advanced Techniques',
      description:
        'Comprehensive support from design consultation to final finishing.',
    },
    {
      number: '03',
      title: 'End-to-End Solutions',
      description:
        'From forging to post-processing and quality assurance, we deliver complete solutions.',
    },
    {
      number: '04',
      title: 'Commitment to Quality',
      description:
        'Environmentally friendly processes that align with global standards.',
    },
  ];

  return (
    <div className='bg-black text-white py-16 px-4'>
      <div className='grid grid-cols-4 gap-12 relative'>
        {steps.map((step, index) => (
          <div
            key={index}
            className='flex flex-col items-center text-center relative'
          >
            {/* Number */}
            <div className='text-6xl font-bold text-gray-400 mb-4'>
              {step.number}
            </div>

            {/* Orange dot / mark */}
            <div className='w-4 h-4 bg-orange-500 rotate-45 mb-4'></div>

            {/* Title */}
            <h3 className='font-semibold text-xl mb-2'>{step.title}</h3>

            {/* Description */}
            <p className='text-gray-400'>{step.description}</p>

            {/* Dotted connector (for all except last) */}
            {index < steps.length - 1 && (
              <div className='hidden md:block absolute top-20 right-[-50%] w-[100%] border-t border-dotted border-gray-600'></div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

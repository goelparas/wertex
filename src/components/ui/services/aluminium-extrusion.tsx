'use client';
import HeroSection from '@/components/common/Container/HeroSection-service';
import React, { useEffect, useState } from 'react';
import vidadigitalin from '../../../cdn/images/cnc/vidadigitalin.png';
import {
  Gauge,
  Hammer,
  Ruler,
  TestTube,
  Layers,
  SquareStack,
  Scissors,
  ThermometerSnowflake,
  Settings2,
  Sparkles,
} from 'lucide-react';
import IndustriesAndMaterialsSection from '@/components/cnc/IndustriesAndMaterialsSection';
import CncWorkflowSection from '@/components/cnc/CncWorkflowSection';
import FlexHeader from '@/components/common/FlexHeader/FlexHeader';
import { cn } from '@/lib/utils';
import { motion, AnimatePresence } from 'framer-motion';

type Props = {};

const AluminiumExtrusion = (props: Props) => {
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

  const extrusionServices = [
    {
      title: 'Custom Profiles',
      description:
        'Tailored profiles to suit unique design and application requirements. Capable of producing complex geometries for specialized purposes.',
      icon: <Layers className='w-8 h-8' />,
    },
    {
      title: 'Structural Extrusions',
      description:
        'Lightweight structural components designed for aerospace, construction, and renewable energy applications.',
      icon: <SquareStack className='w-8 h-8' />,
    },
    {
      title: 'Hollow and Solid Extrusions',
      description:
        'Lightweight hollow profiles and robust solid shapes for versatile applications.',
      icon: <SquareStack className='w-8 h-8' />,
    },
    {
      title: 'Surface Treatments',
      description:
        'Options like anodizing, powder coating, polishing, and brushing enhance durability and aesthetics.',
      icon: <Sparkles className='w-8 h-8' />,
    },
    {
      title: 'Precision Cutting and Machining',
      description:
        'Post-extrusion CNC machining ensures exact dimensions and superior surface finishes.',
      icon: <Scissors className='w-8 h-8' />,
    },
    {
      title: 'Secondary Operations',
      description:
        'Includes punching, drilling, assembly, and finishing for ready-to-use components.',
      icon: <Settings2 className='w-8 h-8' />,
    },
    {
      title: 'Heat Sink Extrusions',
      description:
        'Optimized for thermal management in electronics, automotive, and industrial systems.',
      icon: <ThermometerSnowflake className='w-8 h-8' />,
    },
  ];

  return (
    <div>
      <HeroSection
        title='Precision Aluminum Extrusions for Lightweight and Durable Solutions'
        description='Custom-engineered profiles to meet diverse industrial needs.'
        heading=''
        alt='Forging'
        src={vidadigitalin}
        longDescription='Aluminum extrusions are a versatile manufacturing process used to create continuous cross-sectional profiles with exceptional lightweight, corrosion-resistant, and durable properties. At Wertex, we deliver premium aluminum extrusion solutions tailored to industries such as aerospace, automotive, construction, electronics, and renewable energy. With cutting-edge technology and precision engineering, we provide custom extrusions designed to meet exacting requirements while ensuring high performance and reliability.'
      />
      <div>
        <h3>Why Aluminum is the Ideal Material for Extrusions</h3>
        <p>
          Explore the unmatched benefits of aluminum for modern manufacturing.
        </p>
        <div className='border p-4 mb-4'>
          <div className='mb-8'>
            <h2 className='text-xl mb-6'>
              Wertex's wide range of forging capabilities ensures every project
              is delivered <br /> with precision, quality, and efficiency:
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

        <div className='bg-white'>
          <div className='bg-white'>
            <h2>Comprehensive Aluminum Extrusion Services</h2>
            <p>
              Wertex offers a wide range of aluminum extrusion capabilities,
              delivering tailored solutions to meet your needs
            </p>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mb-16 '>
            {extrusionServices.map((service, index) => (
              <div
                key={index}
                className='flex items-start bg-[#A7A7A773] text-black p-6 rounded-lg shadow-sm gap-4'
              >
                {service.icon}
                <div>
                  <h4 className='font-semibold text-lg'>{service.title}</h4>
                  <p>{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <IndustryShowcase />
        <FlexHeader
          title='Your Trusted Partner for Premium Aluminum Extrusions'
          heading=''
          description='Experience the difference with custom-engineered, high-performance solutions.'
        />
      </div>
    </div>
  );
};

export default AluminiumExtrusion;

interface Industry {
  id: number;
  name: string;
  description: string;
  image: string;
}

const industries: Industry[] = [
  {
    id: 1,
    name: 'Aerospace',
    description: 'Lightweight frames, brackets, and structural supports.',
    image: '/lovable-uploads/3a20ede0-d497-4a6d-b668-6500557c7b6c.png',
  },
  {
    id: 2,
    name: 'Automotive',
    description:
      'Roof rails, trim, crash management systems, and heat exchangers.',
    image: '/lovable-uploads/6052b9e6-9156-4d1a-81e5-547de0def317.png',
  },
  {
    id: 3,
    name: 'Construction',
    description:
      'Window and door frames, curtain walls, and structural frameworks.',
    image: '/lovable-uploads/101d802c-86ce-49a7-a1d5-7c6305342e6d.png',
  },
  {
    id: 4,
    name: 'Electronics',
    description: 'Heatsinks, chassis components, and electronic enclosures.',
    image: '/lovable-uploads/3a20ede0-d497-4a6d-b668-6500557c7b6c.png',
  },
  {
    id: 5,
    name: 'Renewable Energy',
    description:
      'Solar panel frames, mounting systems, and wind turbine components.',
    image: '/lovable-uploads/6052b9e6-9156-4d1a-81e5-547de0def317.png',
  },
  {
    id: 6,
    name: 'Consumer Products',
    description:
      'Furniture components, appliance parts, and recreational equipment.',
    image: '/lovable-uploads/101d802c-86ce-49a7-a1d5-7c6305342e6d.png',
  },
];

export function IndustryShowcase() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [activeName, setActiveName] = useState(industries[0].name);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => {
        const nextIndex = (current + 1) % industries.length;
        setActiveName(industries[nextIndex].name);
        return nextIndex;
      });
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const activeIndustry = industries[activeIndex];

  return (
    <div className='w-full bg-gradient-to-r from-orange-500 to-red-600 py-16 px-4 md:px-8'>
      <div className='max-w-6xl mx-auto'>
        <div className='flex flex-col md:flex-row gap-8 items-center'>
          {/* Left side - Image */}
          <div className='w-full md:w-1/2 relative overflow-hidden'>
            <AnimatePresence mode='wait'>
              <motion.div
                key={activeIndustry.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className='aspect-square md:aspect-[4/3] rounded-2xl overflow-hidden border-4 border-blue-500'
              >
                <img
                  src={activeIndustry.image}
                  alt={activeIndustry.name}
                  className='w-full h-full object-cover'
                />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right side - Content */}
          <div className='w-full md:w-1/2 text-white'>
            <h2 className='text-2xl font-medium mb-4'>
              Vertex aluminium extrusions are used in a wide variety of
              industries and applications:
            </h2>

            {/* List of industries */}
            <div className='space-y-4 mb-8'>
              {industries.map((industry) => (
                <div
                  key={industry.id}
                  className={cn(
                    'text-3xl md:text-4xl font-bold transition-all duration-300 relative',
                    activeName === industry.name
                      ? 'text-white'
                      : 'text-white/60'
                  )}
                >
                  {industry.name}
                  {activeName === industry.name && (
                    <div className='absolute -bottom-2 left-0 w-full max-w-xs h-1 bg-white' />
                  )}
                </div>
              ))}
            </div>

            {/* Active industry description */}
            <AnimatePresence mode='wait'>
              <motion.div
                key={activeIndustry.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className='bg-orange-600/60 backdrop-blur-sm p-6 rounded-lg mt-8'
              >
                <h3 className='text-2xl font-bold mb-2'>
                  {activeIndustry.name}
                </h3>
                <p className='text-xl'>{activeIndustry.description}</p>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}

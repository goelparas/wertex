import React from "react";

import { Gauge, Hammer, Ruler, TestTube } from "lucide-react";

import HeroSection from "@/components/common/Container/HeroSection-service";
import   {
  FlexHeader,
  FlexHeader2,
} from "@/components/common/FlexHeader/FlexHeader";
// import vidadigitalin from '../../cdn/images/cnc/vidadigitalin.png';
import vidadigitalin from "../../../cdn/images/cnc/vidadigitalin.png";
import Section from "@/components/common/Section";
//images
import logo1 from '@/cdn/images/casting/logo-1.svg';
import logo2 from '@/cdn/images/casting/logo-2.svg';
import logo3 from '@/cdn/images/casting/logo-3.svg';
import { ImageContainer } from "@/components/common/Container/ImageGrid";
import Image from "next/image";
import gridBg from "@/cdn/images/main_grid.avif";
const forgingTypes = [
  {
    title: "Drop Forging",
    icon: <Hammer className="w-10 h-10 text-blue-400" />,
    description: [
      "Utilizes gravity and drop hammers to precisely shape heated metal.",
      "Produces components with consistent strength and fine grain structure.",
      "Commonly used for tools, hardware, and automotive parts.",
    ],
  },
  {
    title: "Hot Forging",
    icon: <Hammer className="w-10 h-10 text-blue-400" />,
    description: [
      "Conducted at high temperatures to make the metal more pliable and easier to shape.",
      "Reduces strain hardening, improving ductility and material flow.",
      "Suitable for large, high-strength parts.",
    ],
  },
  {
    title: "Cold Forging",
    icon: <Hammer className="w-10 h-10 text-blue-400" />,
    description: [
      "Performed at room temperature, achieving tighter tolerances and superior surface finishes.",
      "Offers excellent dimensional accuracy and material savings.",
      "Ideal for small to medium-sized components like fasteners and shafts.",
    ],
  },
  {
    title: "Rolled Ring Forging",
    icon: <Hammer className="w-10 h-10 text-blue-400" />,
    description: [
      "Produces seamless rings with exceptional strength and dimensional accuracy.",
      "Commonly used in applications like bearings, flanges, and aerospace components.",
      "Accommodates a variety of sizes, from small to large diameters.",
    ],
  },
  {
    title: "Press Forging",
    icon: <Hammer className="w-10 h-10 text-blue-400" />,
    description: [
      "Applies controlled pressure to shape metal gradually for intricate geometries.",
      "Offers better control over the deformation process.",
      "Commonly used for creating complex shapes with high precision.",
    ],
  },
  {
    title: "Precision Forging",
    icon: <Hammer className="w-10 h-10 text-blue-400" />,
    description: [
      "Achieves near-net shapes, minimizing post-forging machining requirements.",
      "Optimizes material usage and reduces waste.",
      "Ideal for high-accuracy components in automotive and aerospace industries",
    ],
  },
  {
    title: "Upset Forging",
    icon: <Hammer className="w-10 h-10 text-blue-400" />,
    description: [
      "Focuses on increasing the cross-sectional area of the workpiece.",
      "Commonly used for manufacturing bolts, rivets, and shafts.",
      "Ensures superior tensile and shear strength.",
    ],
  },
];

const qualityControls = [
  {
    title: "Non-Destructive Testing (NDT)",
    icon: <TestTube className="w-10 h-10 text-white" />,
    description:
      "Includes ultrasonic, magnetic particle, and dye penetrant inspections to guarantee structural integrity.",
  },
  {
    title: "Dimensional Verification",
    icon: <Ruler className="w-10 h-10 text-white" />,
    description:
      "Tools like Coordinate Measuring Machines (CMMs) and profile projectors ensure precise measurements.",
  },
  {
    title: "Mechanical Testing",
    icon: <Gauge className="w-10 h-10 text-white" />,
    description:
      "Confirms critical properties like strength, ductility, and wear resistance.",
  },
];

const newItems = [
  {
    title: "Heat Treatment",
    description:
      "Enhances hardness, toughness, and overall mechanical properties for better performance.",

    img: logo1,
  },
  {
    title: "CNC Machining",
    description:
      "Achieves precise dimensions, tight tolerances, and impeccable surface finishes.",
    img: logo2,
  },
  {
    title: "Surface Treatments",
    description:
      "Options like polishing, anodizing, and specialized coatings improve durability, resistance to corrosion, and visual appeal.",
    img: logo3,
  },
];

const ForgingPage: React.FC = () => {
  

  return (
    <>
      <HeroSection
        title="Forging Excellence for High-Strength Components"
        description="Precision forging solutions for demanding industrial applications."
        heading=""
        alt="Forging"
        src={vidadigitalin}
        longDescription="Forging is a cornerstone of manufacturing, shaping metal through compressive forces to create durable, high-strength components. At Wertex, we combine advanced techniques with industry expertise to deliver precision-forged parts for industries like aerospace, automotive, oil and gas, and industrial machinery. Every project is crafted to meet the highest standards of strength, consistency, and performance."
      />

      <Section>
        <FlexHeader2
          heading="Comprehensive Forging Capabilities Tailored to Your Needs"
          description="From precision forging to rolled rings, we deliver excellence in every process."
        />
        <div className="grid grid-cols-1 md:grid-cols-3  gap-8 my-12">
          {forgingTypes.map((type, index) => (
            <div
              key={index}
              className=" text-white p-8  hover:shadow-xl transition-shadow duration-300 border"
            >
              <div className="flex items-center mb-4">
                <h3 className="text-xl font-bold">{type.title}</h3>
              </div>
              <ul className="space-y-3 list-disc list-outside pl-4">
                {type.description.map((item, idx) => (
                  <li key={idx}>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      <Section className="relative bg-black my-0">
      <Image
          src={gridBg}
          alt="grid-background"
          className="absolute  inset-0 z-10"
          fill
        />
        <FlexHeader2
          className="text-white"
          heading="Your Trusted Partner for Casting Solutions"
          description=""
        />
      <div className="grid grid-cols-3 gap-8 mt-12 z-20">

          {newItems.map((item, _) => (
            <div key={item.title} className="w-96 h-[500px] mx-auto flex flex-col items-center justify-between gap-2 p-4 z-10 text-white bg-borderGray rounded-2xl">
              <p className="text-center  font-bold  text-xl2 text-white">
                {item.title}
              </p>

              <ImageContainer img={item.img} className="w-24 h-24" height={65} width={84} />
              <p className="text-xl2 text-borderGray text-center text-white">
                {item.description}
              </p>
            </div>
          ))}
        </div>
        </Section>
      <Section className="mt-0">
        <FlexHeader
          title="Rigorously Tested for Superior Quality"
          description="Ensuring compliance with industry standards and client specifications."
          heading=""
        />
        <div className="mt-16 mb-16 bg-[#4F4F4F73] border p-4 rounded-xl">
          <h2 className="text-xl text-white mb-8 ">
            Every forging project at{" "}
            <span className="text-orangeBg">Wertex</span> undergoes <br />{" "}
            strict quality control measures:
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 ">
            {qualityControls.map((control, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-orange-500 to-orange-700 text-white p-8 rounded-lg shadow-lg"
              >
                <div className="flex items-center mb-8">
                  <h3 className="text-xl font-bold">{control.title}:</h3>
                </div>
                <p className="text-white">{control.description}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section className="bg-black">
        <FlexHeader
          title="Your Partner for High-Performance"
          heading="Forging Solutions"
          description="Ensuring compliance with industry standards and client specifications."
        />
        <ProcessSteps />
      </Section>
    </>
  );
};

export default ForgingPage;

const ProcessSteps: React.FC = () => {
  const steps = [
    {
      number: "01",
      title: "Unmatched Expertise",
      description:
        "Expertise in developing tailored profiles for diverse applications.",
    },
    {
      number: "02",
      title: "Advanced Techniques",
      description:
        "Comprehensive support from design consultation to final finishing.",
    },
    {
      number: "03",
      title: "End-to-End Solutions",
      description:
        "From forging to post-processing and quality assurance, we deliver complete solutions.",
    },
    {
      number: "04",
      title: "Commitment to Quality",
      description:
        "Environmentally friendly processes that align with global standards.",
    },
  ];

  return (
    <div className="bg-black text-white py-16 px-4">
      <div className="grid grid-cols-4 gap-12 relative">
        {steps.map((step, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center relative"
          >
            {/* Number */}
            <div className="text-6xl font-bold text-gray-400 mb-4">
              {step.number}
            </div>

            {/* Orange dot / mark */}
            <div className="w-4 h-4 bg-orange-500 rotate-45 mb-4"></div>

            {/* Title */}
            <h3 className="font-semibold text-xl mb-2">{step.title}</h3>

            {/* Description */}
            <p className="text-gray-400">{step.description}</p>

            {/* Dotted connector (for all except last) */}
            {index < steps.length - 1 && (
              <div className="hidden md:block absolute top-20 right-[-50%] w-[100%] border-t border-dotted border-gray-600"></div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

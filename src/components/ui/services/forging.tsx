import React from "react";

import { Gauge, Ruler, TestTube } from "lucide-react";

import HeroSection from "@/components/common/Container/HeroSection-service";
import   {
  FlexHeader,
  FlexHeader2,
} from "@/components/common/FlexHeader/FlexHeader";
import forgingHero from '@/cdn/images/forging/forging-hero.webp'
import Section from "@/components/common/Section";
//images
import logo1 from '@/cdn/images/casting/logo-1.svg';
import logo2 from '@/cdn/images/casting/logo-2.svg';
import logo3 from '@/cdn/images/casting/logo-3.svg';
import { ImageContainer } from "@/components/common/Container/ImageGrid";
import Image from "next/image";
import gridBg from "@/cdn/images/main_grid.avif";

import logo1SVGs from '@/cdn/images/forging/logo-1.svg'; 
import logo2SVGs from '@/cdn/images/forging/logo-2.svg'; 
import logo3SVGs from '@/cdn/images/forging/logo-3.png'; 
import logo4SVGs from '@/cdn/images/forging/logo-4.png'; 
import logo5SVGs from '@/cdn/images/forging/logo-5.png'; 
import logo6SVGs from '@/cdn/images/forging/logo-6.png'; 
import logo7SVGs from '@/cdn/images/forging/logo-7.png'; 

import { forging } from "@/components/common/ImageShowCaseContainer/constant";
import trapezium from "@/cdn/images/aluminiumextrution/trapezium.png";
import divider from "@/cdn/images/aluminiumextrution/line.svg";
import DynamicShowcase from "@/components/common/ImageShowCaseContainer/ImageShowCaseContainer";

const forgingTypes = [
  {
    title: "Drop Forging",
    icon:   logo1SVGs,
    description: [
      "Utilizes gravity and drop hammers to precisely shape heated metal.",
      "Produces components with consistent strength and fine grain structure.",
      "Commonly used for tools, hardware, and automotive parts.",
    ],
  },
  {
    title: "Hot Forging",
    icon:   logo2SVGs,
    description: [
      "Conducted at high temperatures to make the metal more pliable and easier to shape.",
      "Reduces strain hardening, improving ductility and material flow.",
      "Suitable for large, high-strength parts.",
    ],
  },
  {
    title: "Cold Forging",
    icon:   logo3SVGs,
    description: [
      "Performed at room temperature, achieving tighter tolerances and superior surface finishes.",
      "Offers excellent dimensional accuracy and material savings.",
      "Ideal for small to medium-sized components like fasteners and shafts.",
    ],
  },
  {
    title: "Rolled Ring Forging",
    icon:   logo4SVGs,
    description: [
      "Produces seamless rings with exceptional strength and dimensional accuracy.",
      "Commonly used in applications like bearings, flanges, and aerospace components.",
      "Accommodates a variety of sizes, from small to large diameters.",
    ],
  },
  {
    title: "Press Forging",
    icon:   logo5SVGs,
    description: [
      "Applies controlled pressure to shape metal gradually for intricate geometries.",
      "Offers better control over the deformation process.",
      "Commonly used for creating complex shapes with high precision.",
    ],
  },
  {
    title: "Precision Forging",
    icon:   logo6SVGs,
    description: [
      "Achieves near-net shapes, minimizing post-forging machining requirements.",
      "Optimizes material usage and reduces waste.",
      "Ideal for high-accuracy components in automotive and aerospace industries",
    ],
  },
  {
    title: "Upset Forging",
    icon:   logo7SVGs,
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
        className="bg-background"
        src={forgingHero}
        longDescription="Forging is a cornerstone of manufacturing, shaping metal through compressive forces to create durable, high-strength components. At Wertex, we combine advanced techniques with industry expertise to deliver precision-forged parts for industries like aerospace, automotive, oil and gas, and industrial machinery. Every project is crafted to meet the highest standards of strength, consistency, and performance."
      />

      <Section className="bg-black mt-12">
        <FlexHeader2
          heading="Comprehensive Forging Capabilities Tailored to Your Needs"
          description="From precision forging to rolled rings, we deliver excellence in every process."
        />
        <Section className=" bg-black  border border-white">
        <FlexHeader2
          heading=""
          description="Wertex’s wide range of forging capabilities ensures every project is delivered with precision, quality, and efficiency:"
        />
          <div className="grid grid-cols-1 md:grid-cols-3  gap-8  mt-12">
          {forgingTypes.map((type, index) => (
            <div
              key={index}
              className=" text-white p-8  border "
            >
              <ImageContainer img={type.icon} className="w-24 h-24" height={42} width={42} />
              <div className="flex items-center my-4">
                <h3 className="text-xl2 font-bold">{type.title}</h3>
              </div>
              <ul className="space-y-3 list-disc list-outside pl-4 text-xl2">
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
      </Section>
      <Section className="bg-black mt-0">
        <FlexHeader2
          heading="Versatile Material Options for Forging"
          description="Delivering strength and reliability with a range of metals."
        />
      </Section>
      <Section className="mt-0 bg-white"> 
        <DynamicShowcase
          items={forging}
          variant="forging"
          headerText={<> <span className="text-orangeBg">Wertex</span> works with an extensive selection of materials to ensure the right fit for every application</>}
        />
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
      <Section className="mt-0 bg-black">
        <FlexHeader
          title="Rigorously Tested for Superior Quality"
          description="Ensuring compliance with industry standards and client specifications."
          heading=""
        />
        <Section className="bg-background-200 border p-4 rounded-xl">
          <FlexHeader2
          heading=""
          description={<h2 className="text-xl text-white mb-8 ">
            Every forging project at{" "}
            <span className="text-orangeBg">Wertex</span> undergoes <br />{" "}
            strict quality control measures:
          </h2>}
        />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-2">
            {qualityControls.map((control, index) => (
              <div
                key={index}
                className=" bg-custom-map-gradient text-white p-8 rounded-lg shadow-lg"
              >
                <div className="flex items-center mb-8">
                  <h3 className="text-xl2 font-bold">{control.title}:</h3>
                </div>
                <p className="text-white">{control.description}</p>
              </div>
            ))}
          </div>
        </Section>
      </Section>

      <Section className="bg-black">
        <FlexHeader
         
          title={<>Your Trusted Partner for  Premium <br/> Aluminum Extrusions </>}

          description="Experience the difference with custom-engineered, high-performance solutions."
        />
        <Section className="bg-black border border-[#E8E8E8]">
        
        <div className="grid grid-cols-4  place-items-center h-48">
        {
    Array.from({ length: 4 }).map((item, index) => 
      <ImageContainer className='h-40 w-40' key={index} img={''}  node={<span className="text-[6rem] font-semibold  text-[#999999] " > 0{index+1}</span>} />
    )
  }
        </div>
         <div className="w-[71rem] h-1  border-1 border-dashed  mx-auto my-12 relative flex items-center justify-between">
          <Image src={divider} alt="divider" fill className="object-cover z-10"/>
          
            <Image src={trapezium} alt="trapezium" width={30} height={30} className="object-cover z-20"/>
            <Image src={trapezium} alt="trapezium" width={30} height={30} className="object-cover z-20"/>
            <Image src={trapezium} alt="trapezium" width={30} height={30} className="object-cover z-20"/>
            <Image src={trapezium} alt="trapezium" width={30} height={30} className="object-cover z-20"/>
           
         </div>
        <div className="grid grid-cols-4  place-items-center h-40">
        {
         [
        {
          title: "Unmatched Expertise",
          description:
            "Expertise in developing tailored profiles for diverse applications.",
        },
        {
          title: "Advanced Techniques",
          description:
            "Comprehensive support from design consultation to final finishing.",
        },
        {
          title: "End-to-End Solutions",
          description:
            "From forging to post-processing and quality assurance, we deliver complete solutions.",
        },
        {
          title: "Commitment to Quality",
          description:
            "Environmentally friendly processes that align with global standards.",
        },
      ].map((item, index) => 
      <div className="flex flex-col items-center  justify-start text-lg gap-4 mx-auto max-w-52"><h1 className="font-bold">{item.title}</h1><p className="text-[#8C8C8C] text-center ">{item.description}</p></div>
    )
  }
        </div>

          </Section>
          </Section>
    </>
  );
};

export default ForgingPage;

 
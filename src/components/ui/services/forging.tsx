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
import dividerVertical from '@/cdn/images/forging/divider-vertical.png'
import DynamicShowcase from "@/components/common/ImageShowCaseContainer/ImageShowCaseContainer";
import Footerservice from "@/components/common/footer-service/footerservice";

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

      <Section>
        <FlexHeader2
          heading="Comprehensive Forging Capabilities Tailored to Your Needs"
          description="From precision forging to rolled rings, we deliver excellence in every process."
        />
        <Section className=" bg-black  border border-white">
        <FlexHeader2
          heading=""
          description="Wertex’s wide range of forging capabilities ensures every project is delivered with precision, quality, and efficiency:"
        />
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-2 lg:gap-8  mt-12">
          {forgingTypes.map((type, index) => (
            <div
              key={index}
              className="text-white p-2 leading-3 lg:p-8  border"
            >
              <div className="lg:block hidden">
               <ImageContainer img={type.icon} className="w-24 h-24" height={42} width={42} /> 
              </div>
              <div className="lg:hidden block">
                <ImageContainer img={type.icon} className="w-16 h-16" height={34} width={34} /> 
              </div>
              
              <div className="flex items-center my-4">
                <h3 className="text-xs lg:text-xl2 font-bold">{type.title}</h3>
              </div>
              <ul className=" space-y-1 lg:space-y-3 list-disc list-outside  pl-2 lg:pl-4 text-xxs lg:text-xl2">
                {type.description.map((item, idx) => (
                  <li key={idx}>
                    <span className="text-xxs lg:leading-8 lg:text-xl2">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          </div>
          
        </Section>
      </Section>
      <Section className="lg:my-0 lg:py-0 ">
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
      <Section className="relative  my-0">
      <Image
          src={gridBg}
          alt="grid-background"
          className="absolute  inset-0 z-10"
          fill
        />
        <FlexHeader2
          className="text-white"
          heading="Enhanced Performance with 
Advanced Post-Processing"
          description=""
        />
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-8 mt-6 lg:mt-12 z-20">

          {newItems.map((item, _) => (
            <div
            key={_}
            className="bg-background-200 p-2 z-20 backdrop:backdrop-blur-3xl lg:p-6 rounded-xl lg:rounded-3xl shadow-lg flex flex-row lg:flex-col items-center  lg:items-start text-start hover:scale-105 transition-transform duration-300 gap-4"
          >
            <h3 className="hidden lg:block text-xs lg:text-xl2 font-bold mb-2 text-white text-start w-full">
              {item.title}
            </h3>
            <ImageContainer img={item.img} variant='white' size={{smWidth:32,smHeight:32,smClassName:'w-12 h-12'}} />
            <div className='block lg:hidden'>
              <h3 className="text-xs lg:text-xl2 font-bold mb-2 text-white text-start w-full">
                {item.title}
              </h3>
              <p className="text-xs lg:text-xl2 leading-relaxed text-gray-300">{item.description}</p>
            </div>
            <p className="hidden lg:block text-xs leading-relaxed lg:text-xl2 text-gray-300">{item.description}</p>
          </div>
          ))}
        </div>
        </Section>
      <Section className="mt-0 p-0 pl-3">
        <FlexHeader
          title="Rigorously Tested for Superior Quality"
          description="Ensuring compliance with industry standards and client specifications."
          heading=""
          className="p-3 lg:p-0"
        />
        <Section className="bg-background-200 border  border-r-0 lg:border-r-2  pl-3 py-3 pr-0  rounded-xl lg:rounded-xl rounded-tr-none rounded-br-none">
          <FlexHeader2
          heading=""
          description={<h2 className="text-xs lg:text-xl text-white mb-2 lg:mb-8 ">
            Every forging project at {" "}
            <span className="text-orangeBg ">Wertex</span> undergoes <br />{" "}
            strict quality control measures:
          </h2>}
        />
          <div className="lg:grid flex lg:grid-cols-3 gap-6 p-2 overflow-x-scroll w-full">
            {qualityControls.map((control, index) => (
              <div
                key={index}
                className=" bg-custom-map-gradient text-white p-4  lg:p-8 rounded-lg shadow-lg w-[20rem]  lg:w-full shrink-0"
              >
                <div className="flex items-center mb-8">
                  <h3 className="text-sm lg:text-xl2 font-bold">{control.title}:</h3>
                </div>
                <p className="text-white">{control.description}</p>
              </div>
            ))}
          </div>
        </Section>
      </Section>

      <Section className="h-max">
        <FlexHeader
          title={<>Your Trusted Partner for  Premium <br/> for Forging solutions </>}
          description="Ensuring compliance with industry standards and  client specifications."
        />
        <Section className="border border-[#E8E8E8]  flex gap-4 lg:block min-h-max">
        
        <div className="grid grid-cols-1 lg:grid-cols-4 order-3 lg:order-none ml-4 lg:ml-0  place-items-center lg:h-48">
        {
    Array.from({ length: 4 }).map((item, index) => 
      <ImageContainer className='h-40 w-40' key={index} img={''} size={{
        smClassName: 'h-20 w-20',
        smHeight: 30,
        smWidth: 30,
      }}  node={<span className=" text-[3rem] lg:text-[6rem]  font-semibold  text-[#999999]">0{index+1}</span>} />
    )
  }
        </div>
         <div className=" hidden lg:flex w-[71rem]  h-1  lg:rotate-0  border-1 border-dashed  order-1 lg:order-none mx-auto my-12 relative  items-center justify-between">
            <Image src={divider} alt="divider" fill className="object-cover z-10"/>

            <Image src={trapezium} alt="trapezium" width={30} height={30} className="object-cover z-20"/>
            <Image src={trapezium} alt="trapezium" width={30} height={30} className="object-cover z-20"/>
            <Image src={trapezium} alt="trapezium" width={30} height={30} className="object-cover z-20"/>
            <Image src={trapezium} alt="trapezium" width={30} height={30} className="object-cover z-20"/>
           
           </div>
           
        <div className="grid grid-cols-1 lg:grid-cols-4 relative place-items-center lg:h-40 gap-10  order-2 lg:order-none">
        <Image src={dividerVertical} alt="divider"  width={2}    className="h-full absolute top-0 left-2 lg:hidden  z-10"/>
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
      <div className="flex lg:flex-col  items-start lg:items-center   justify-start text-xs lg:text-lg gap-2 lg:gap-4 mx-auto max-w-52 relative">
         <Image src={trapezium} alt="trapezium" width={40} height={40} className="lg:hidden object-cover z-20"/>
         <div className="flex flex-col gap-2 mt-2">
         <h1 className="font-bold">{item.title}</h1>
         <p className="text-[#8C8C8C] text-start lg:text-center ">{item.description}</p>
         </div>
        
          </div>
    )
  }
        </div>

          </Section>
      </Section>
       <Footerservice title="Experience Precision Like Never Before" heading="" description="" 
       buttonText="Contact Us" 
       longDescription="Let Wertex help you achieve your project goals with precision and reliability. Get in touch with us to learn how our CNC machining solutions can elevate your manufacturing needs."/>
    </>
  );
};

export default ForgingPage;

 
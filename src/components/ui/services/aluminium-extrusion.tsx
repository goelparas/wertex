"use client";
import HeroSection from "@/components/common/Container/HeroSection-service";
import React from "react";
// Import aluminum extrusion logos
import logo1 from "@/cdn/images/aluminiumextrution/logo-1.png";
import logo2 from "@/cdn/images/aluminiumextrution/logo-2.png";
import logo3 from "@/cdn/images/aluminiumextrution/logo-3.png";
import logo4 from "@/cdn/images/aluminiumextrution/logo-4.png";
import logo5 from "@/cdn/images/aluminiumextrution/logo-5.png"; 
//
import logo1a from "@/cdn/images/aluminiumextrution/logo-1-a.png";
import logo2a from "@/cdn/images/aluminiumextrution/logo-2-a.png";
import logo3a from "@/cdn/images/aluminiumextrution/logo-3-a.png";
import logo4a from "@/cdn/images/aluminiumextrution/logo-4-a.png";
import capability2 from "@/cdn/images/casting/capability-2.png";
import capability5 from "@/cdn/images/casting/capablity-5.png";
import capability6 from "@/cdn/images/casting/capabilty-6.png";
import capability8 from "@/cdn/images/casting/capablity-8.png";
import heroImage from '@/cdn/images/aluminiumextrution/aluminium-hero.webp'
import {FlexHeader, FlexHeader2} from "@/components/common/FlexHeader/FlexHeader";

import Section from "@/components/common/Section";
import Image, { StaticImageData } from "next/image";
import {ImageContainer} from '@/components/common/Container/ImageGrid'
import Footerservice from "@/components/common/footer-service/footerservice";
import DynamicShowCaseContainer from '@/components/common/ImageShowCaseContainer/ImageShowCaseContainer'
import { aluminiumExtrusion } from "@/components/common/ImageShowCaseContainer/constant";
import divider from "@/cdn/images/aluminiumextrution/line.svg";
import trapezium from "@/cdn/images/aluminiumextrution/trapezium.png";
import { useWindowSize } from "@/utils/hooks/useWindowSize";

type Props = {};
const forgingTypes = [
  {
    title: "Lightweight",
    icon: logo1,
    description: "Perfect for applications requiring reduced weight without sacrificing strength.",
  },
  {
    title: "Corrosion Resistance",
    icon: logo2,
    description: "Reliable performance in harsh environments, including marine and industrial settings.",
  },
  {
    title: "High Strength-to-Weight Ratio",
    icon: logo3,
    description: "Ensures excellent structural integrity for demanding applications.",
  },
  {
    title: "Thermal and Electrical Conductivity",
    icon: logo4,
    description: "Ideal for heat sinks and electrical components",
  },
  {
    title: "Recyclability",
    icon: logo5,
    description: "Environmentally friendly and sustainable, aligning with modern industry standards.",
  },
];

const extrusionServices = [
  {
    title: "Custom Profiles",
    description:
      "Tailored profiles to suit unique design and application requirements. Capable of producing complex geometries for specialized purposes.",
    icon: logo1a,
  },
  {
    title: "Structural Extrusions",
    description:
      "Lightweight structural components designed for aerospace, construction, and renewable energy applications.",
    icon:  logo2a,
  },
  {
    title: "Hollow and Solid Extrusions:",
    description:
      " Lightweight hollow profiles and robust solid shapes for versatile applications.",
    icon:  logo3a,
  },
  {
    title: "Surface Treatments",
    description:
      "Options like anodizing, powder coating, polishing, and brushing enhance durability and aesthetics.",
    icon: logo4a,
  },
  {
    title: "Secondary Operations",
    description:
      "Includes punching, drilling, assembly, and finishing for ready-to-use components.",
    icon: logo4a,
  },
  {
    title: "Heat Sink Extrusions",
    description:
      "Optimized for thermal management in electronics, automotive, and industrial systems.",
    icon: logo4a,
  },
];


const qualityStandards = [{
  img:capability5,
  heading:'Dimensional Accuracy',
  description :"Verified using advanced tools for precise measurements."

},{
  img:capability2,
  heading:'Material Testing',
  description :"Confirms mechanical properties like tensile strength and hardness."

},{
  img:capability6,
  heading:'Surface Inspection',
  description :"Ensures uniformity and defect-free finishes."

},
{
  img:capability8,
  heading:'Load and Stress Testing',
  description:"Validates performance under real-world conditions."

}]
const AluminiumExtrusion = (props: Props) => {
  const { isMobile } = useWindowSize()
  return (
    <>
      <HeroSection
        title= {<>Precision <span className="text-orangeBg">Aluminum Extrusions</span> for Lightweight and Durable Solutions</>}
        description="Custom-engineered profiles to meet diverse industrial needs."
        heading=""
        alt="Forging"
        src={heroImage}
        longDescription="Aluminum extrusiExtrusionsons are a versatile manufacturing process used to create continuous cross-sectional profiles with exceptional lightweight, corrosion-resistant, and durable properties. At Wertex, we deliver premium aluminum extrusion solutions tailored to industries such as aerospace, automotive, construction, electronics, and renewable energy. With cutting-edge technology and precision engineering, we provide custom extrusions designed to meet exacting requirements while ensuring high performance and reliability."
      />
      <Section className="bg-black">
      <FlexHeader2
          heading="Why Aluminum is the Ideal Material for Extrusions"
          description="Explore the unmatched benefits of aluminum for modern manufacturing."
        />
       <Section className="border bg-black ">
          <div className="mb-8">
            <h2 className=" text-lg lg:text-xl lg:mb-6">
            Aluminium’s superior properties make it a preferred material for extrusion:
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3  gap-2 lg:gap-8">
            {forgingTypes.map((type, index) => (
              <div
                key={index}
                className=" text-white p-2 lg:p-8  hover:shadow-xl transition-shadow duration-300 border"
              >
                <div className="flex  mb-4 flex-col justify-center items-start gap-4">
                  <ImageContainer img={type.icon} className="w-16 h-16 lg:w-24 lg:h-24" height={isMobile ? 40 : 72} width={isMobile ? 40 : 72}/>
                  <h3 className="text-xs leading-relaxed  lg:text-xl2 w-full font-bold text-start">{type.title}</h3>
                  <p className="text-xs  leading-relaxed lg:text-xl2 font-light">{type.description}</p>
                </div>
              </div>
            ))}
          </div>
        </Section>
      </Section>
        <Section className="bg-white mt-0">
        <FlexHeader2
          heading={<>Comprehensive <span className="text-orangeBg">Aluminum Extrusion Services </span></>}
          description="Wertex offers a wide range of aluminum extrusion capabilities, delivering tailored solutions to meet your needs"
          className="text-black"
        />
          <div className="grid grid-cols-2  gap-2 lg:gap-6 mt-12 bg-white ">
            {extrusionServices.map((service, index) => (
              <div
                key={index}
                className="flex items-start flex-col lg:flex-row bg-[#A7A7A773] text-black p-2 lg:p-6 rounded-lg shadow-sm gap-4"
              >
                <ImageContainer img={service.icon}/>
                <div className="gap-2">
                  <span className="font-semibold text-xs leading-relaxed  lg:text-xl2">{service.title}</span>
                  <p className="font-light text-xs leading-relaxed  lg:text-xl2">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </Section>

      <Section className="bg-black mt-0"> 
       <FlexHeader2
          heading={<>Versatile Aluminium Extrusions for <span className="text-orangeBg">Every Industry </span></>}
          description="From aerospace to consumer goods, we meet diverse industry needs."
        />
      </Section>
      <Section className="mt-0 bg-custom-map-gradient"> 
        <DynamicShowCaseContainer
          items={aluminiumExtrusion}
          variant="aluminiumExtrusion"
          headerText="Wertex aluminium extrusions are used in a wide variety of industries and applications:"
        />
         </Section>
       <Section>
       <FlexHeader
          title= "Stringent Quality Standards for Flawless Components"
          description="Delivering reliability and performance through rigorous quality control."
        />
        <Section className="border border-white rounded-2xl ">
        <FlexHeader2
          heading=""
          description="At Wertex, quality is integral to our aluminum extrusion services. Our quality assurance measures include."
        />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 my-6">
{
  qualityStandards.map((item)=><div className="bg-[#4F4F4F73]/45 flex p-2 lg:p-4 flex-col gap-4 justify-start items-start rounded-2xl border border-white">

  <ImageContainer img={item.img}/>
  <h1 className="font-bold text-lg lg:text-xl2">{item.heading}</h1>
  <p className="font-light text-lg lg:text-xl2">{item.description}</p>
  </div>)
}

          </div>
        </Section>
        </Section> 
        <Section className="bg-black">
        <FlexHeader
         
          title={<>Your Trusted Partner for  Premium <br/> Aluminum Extrusions </>}

          description="Experience the difference with custom-engineered, high-performance solutions."
        />
        <Section className="bg-black border border-[#E8E8E8]">
        <FlexHeader2
          heading=""
          description="Why industries choose Wertex for aluminum extrusions:"
        />
        <div className="grid grid-cols-5  place-items-center h-48">
        {
    Array.from({ length: 5 }).map((item, index) => 
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
            <Image src={trapezium} alt="trapezium" width={30} height={30} className="object-cover z-20"/>
           
         </div>
        <div className="grid grid-cols-5  place-items-center h-40">
        {
     [
      {
 heading:"Customized Solutions",
 description:"Expertise in developing tailored profiles for diverse applications."
      },
      {
 heading:"End-to-End Service",
 description:"Comprehensive support from design consultation to final finishing."
      },{
 heading:"Advanced Technology",
 description:"State-of-the-art equipment ensures accuracy, consistency, and efficiency."
      },{
 heading:"Sustainability Focus",
 description:"Environmentally friendly processes that align with global standards."
      },{
         heading:"Commitment to Quality",
         description:"Stringent quality checks ensure flawless components every time."
      }
     ].map((item, index) => 
      <div className="flex flex-col items-start justify-start text-lg gap-4"><h1 className="font-bold">{item.heading}</h1><p className="text-[#8C8C8C]">{item.description}</p></div>
    )
  }
        </div>

          </Section>
          </Section>
        <Footerservice
        title="Elevate Your Projects with Wertex Aluminum Extrusions"
        description=""
        heading=""
        longDescription="Let Wertex bring your ideas to life with cutting-edge aluminum extrusion solutions. Contact us today to learn more about our capabilities and experience the perfect blend of precision, quality, and innovation."
        buttonText="Contact Us"
      ></Footerservice>
    </>
  );
};

export default AluminiumExtrusion;


import {
  FlexHeader2,
} from "@/components/common/FlexHeader/FlexHeader";

import Image from "next/image";
import React from "react";
import castingHero from "@/cdn/images/casting/casting-hero.webp";
import gridBg from "@/cdn/images/main_grid.avif";
import HeroSection from "@/components/common/Container/HeroSection-service";
import Footerservice from "@/components/common/footer-service/footerservice";
import grid from "@/cdn/images/cross.png";

// Import capability images
import capability1 from "@/cdn/images/casting/capability-1.png";
import capability2 from "@/cdn/images/casting/capability-2.png";
import capability5 from "@/cdn/images/casting/capablity-5.png";
import capability6 from "@/cdn/images/casting/capabilty-6.png";
import capability8 from "@/cdn/images/casting/capablity-8.png";



//import comaprison imags
import ferrousMetal from "@/cdn/images/casting/ferrous.avif"
import nonFerrous from "@/cdn/images/casting/non-ferrous.webp"

import logo1 from '@/cdn/images/casting/logo-1.svg';
import logo2 from '@/cdn/images/casting/logo-2.svg';
import logo3 from '@/cdn/images/casting/logo-3.svg';
import { ImageContainer } from "@/components/common/Container/ImageGrid";
import Section from "@/components/common/Section";

// Define casting capabilities with their respective images
const CASTING_CAPABILITIES = [
  {
    title: "Investment Casting",
    description:
      "Produces high-precision components with intricate geometries and excellent surface finishes.",
    image: capability1,
    class: ""
  },
  {
    title: "Die Casting",
    description:
      "Fast and cost-effective for complex shapes with superior dimensional accuracy.",
    image: capability2,
    class: ""
  },
  {
    title: "Sand Casting",
    description:
      "Flexible and economical, ideal for low to medium production volumes.",
    image: capability2,
    class: "-rotate-90"
  },
  {
    title: "Gravity Die Casting",
    description:
      "Creates high-density components with excellent structural integrity.",
    image: capability5,
    class: ""
  },
  {
    title: "Centrifugal Casting",
    description:
      "Perfect for hollow components with superior mechanical properties.",
    image: capability6,
    class: ""
  },
  {
    title: "Permanent Mold Casting",
    description:
      "Ensures smooth finishes and dimensional accuracy, ideal for medium to high production volumes.",
    image: capability5,
    class: "-rotate-90"
  },
  {
    title: "Continuous Casting",
    description:
      "Ensures consistent quality for billets, rods, and other long-section parts.",
    image: capability5,
    class: "rotate-90"
  },
  {
    title: "Lost Foam Casting",
    description:
      "Reduces machining time and produces intricate shapes, making it perfect for prototypes and medium-scale production.",
    image: capability8,
    class: ""
  },
] as const;

type Props = {};




const Casting = (props: Props) => {
  const cardItems = [
    {
      title: "X-Ray and Radiography Testing",
      description: "Detects internal defects to ensure structural integrity.",
    },
    {
      title: "Dimensional Verification",
      description:
        "Advanced tools like CMM and profile projectors for precision.",
    },
    {
      title: "Material Analysis",
      description: "Verifies chemical composition and mechanical properties.",
    },
    {
      title: "Dye Penetration Testing (DPT)",
      description: "Identifies surface cracks and defects non-destructively.",
    },
    {
      title: "Ultrasonic Testing",
      description: "Assesses internal soundness for critical applications.",
    },
    {
      title: "Magnetic Particle Inspection (MPI)",
      description:
        "Locates surface and near-surface defects in ferrous materials.",
    },
  ];

  const newItems = [
    {
      title: "Expertise in Complex Geometries",
      description:
        "Capable of producing intricate shapes with repeatability and precision.",

      img: logo1,
    },
    {
      title: "Cost-Effective Processes",
      description:
        "Advanced casting techniques for optimal quality and efficiency.",
      img: logo2,
    },
    {
      title: "Commitment to Quality",
      description:
        "Rigorous inspections ensure each component meets the highest standards.",
      img: logo3,
    },
  ];

  return (
    <>
      <HeroSection
        src={castingHero}
        alt="casting hero"
        title="Precision Casting for Complex Applications"
        description="Delivering high-quality components with precision, repeatability, and expertise."
        heading="Casting"
        longDescription={
          "Casting is a versatile manufacturing process where molten metal is poured into molds to create complex shapes with precision and repeatability. At Wertex, we specialize in investment casting, die casting, and sand casting, producing reliable and high-quality components for industries such as aerospace, automotive, defense, and industrial equipment. Our advanced techniques ensure each part is crafted with exceptional accuracy, durability, and performance."
        }
      />


      <div className="mt-4 lg:mt-12 w-full bg-black p-3 lg:p-12">
        <FlexHeader2
          heading="Comprehensive Casting Capabilities"
          description="Advanced casting methods tailored to your needs."
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-2 lg:gap-4 mt-6">
          {CASTING_CAPABILITIES.map((item, index) => (
            <div
              key={index}
              className="bg-background-200 p-3 lg:p-6 rounded-lg shadow-lg flex lg:flex-col items-start text-start hover:scale-105 transition-transform duration-300 gap-4"
            >
              <div className="flex items-center justify-center">
              <ImageContainer img={item.image} variant="white" className='w-28  h-28' width={62} height={62} size={{
                smWidth: 20,
                smHeight: 20,
                smClassName: 'w-8 h-8'
              }}/>
              </div>
              
              <h3 className="text-lg lg:text-xl2  font-bold hidden lg:block mb-2 text-white text-start w-full ">
                {item.title}
              </h3>
                <p className="text-sm lg:text-xl2 lg:leading-relaxed text-gray-300">{item.description}</p>
                </div>
              
          ))}
        </div>
      </div>
      <div className="bg-custom-gradient p-3 lg:p-12">
        <FlexHeader2
          heading="Versatile Material Options"
          description="Ferrous and non-ferrous materials for diverse applications."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5">
          {[
            {
              title: "Ferrous Materials",
              image: ferrousMetal,
              points: {
                " Carbon Steel":
                  "Strong, durable, and suitable for heavy-duty applications.",
                "Stainless Steel":
                  "Corrosion-resistant for medical, food-grade, and industrial uses.",
                " Cast Iron":
                  "Excellent wear resistance, ideal for engine blocks and machine bases.",
                "Alloy Steel":
                  "Enhanced strength and toughness for critical aerospace and defense applications.",
              },
            },
            {
              title: "Non-Ferrous Materials",
              points: {
                Aluminum:
                  "Lightweight and corrosion-resistant, perfect for aerospace and automotive.",
                Zinc: "High-strength and corrosion-resistant for intricate components.",
                Brass:
                  "Known for machinability and conductivity, ideal for plumbing, electrical, and decorative uses.",
                Bronze:
                  "High wear resistance, perfect for bearings and marine applications.",
                Copper:
                  "Exceptional conductivity, ideal for electrical components.",
                Magnesium:
                  "Lightweight and strong for automotive and aerospace needs.",
                Titanium:
                  "High strength-to-weight ratio for aerospace and medical applications.",
              },
              image: nonFerrous,
            },
          ].map((item) => (
            <div
              key={item.title}
              className=" bg-white/15 max-w-96 mx-auto lg:max-w-none backdrop-blur-md rounded-3xl p-4 lg:py-16  lg:px-8 shadow-sm lg:shadow-md mt-12"
            >
              <h1 className="text-xs lg:text-xl2 font-bold mb-6">{item.title}</h1>
              <div className="h-72 w-full rounded-lg lg:rounded-2xl p-1 mb-4 relative ">
                <Image
                  src={item.image}
                  alt={item.title}
                  className="object-cover rounded-2xl"
                  fill
                />
              </div>

              <ul className="list-disc pl-5 leading-4">
                {Object.entries(item.points).map(([key, value]) => (
                  <li key={key} className="text-xs lg:text-xl2 leading-relaxed text-gray-300 ">
                    <strong>{key}:</strong> {value}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <Section className=" bg-black">
        <FlexHeader2
          heading="Enhancing Component Performance and Quality"
          description="Advanced finishing techniques for durability and precision."
        />
        <div className="border border-white p-4 mt-12">
        <FlexHeader2 heading={<p className="font-normal">  <span className="text-orangeBg">Wertex</span> employs a range of
            post-processing techniques to ensure <br /> optimal performance and
            aesthetics:</p>} description={""}/> 
          <div className="grid grid-cols-2 lg:grid-cols-3 p-2 lg:p-4 gap-8 mt-6">
            {[
              {
                title: "Shot Blasting",
                description:
                  "Cleans surfaces, removing impurities for a clean, uniform finish.",
              },
              {
                title: "Vibro Polishing",
                description:
                  "Smooths and polishes surfaces for improved functionality and aesthetics.",
              },
              {
                title: "Tumbling",
                description:
                  "Deburrs and polishes components for smooth edges.",
              },
              {
                title: "Heat Treatment",
                description:
                  "Improves mechanical properties like hardness and toughness.",
              },
              {
                title: "CNC Machining",
                description: "Delivers precise dimensions and final geometry.",
              },
              {
                title: "Surface Treatments",
                description:
                  "Includes anodizing, powder coating, and painting to enhance durability and corrosion resistance.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-black border border-white p-2 lg:py-8 lg:px-4  shadow-md flex flex-col items-start text-start"
              >

                <h1 className="text-lg lg:text-xl2 font-bold mb-2">{item.title}</h1>
                <p className="text-sm lg:text-xl2 text-gray-300">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>
      <div className="w-full bg-white p-12">
        <FlexHeader2
          className="text-background"
          heading="Enhancing Component Performance and Quality"
          description="Ensuring each component meets exact specifications."
        />

        <div className="lg:grid grid-cols-3 gap-0 gap-y-8 mt-24 hidden">
          {cardItems.map((item, index) => (
            <div key={index} className="bg-white py-4 text-foreground">
              <div className="w-full mx-auto flex flex-col items-center gap-2">
                <p className="text-lightGray text-center w-[90%] font-bold  text-4xl">
                  0{index + 1}
                </p>
                <div className=" bg-foreground h-[1px] relative w-full ">
                  <span className="absolute  -bottom-[6px]  mx-auto left-0 right-0  h-3 w-3 rounded-full bg-gray-400" />
                </div>
                <p className="text-2xl font-semibold mb-2 text-center w-[90%]">
                  {item.title}
                </p>
                <p className="text-xl2 text-borderGray text-center">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="h-auto relative p-8">
        <Image
          src={gridBg}
          alt="grid-background"
          className="absolute  inset-0 -z-10"
          fill
        />

        <FlexHeader2
          className="text-white"
          heading="Your Trusted Partner for Casting Solutions"
          description=""
        />
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-12 z-20">
          {newItems.map((item, _) => (
            <div key={item.title} className="lg:w-96 h-40 lg:h-[500px] mx-auto flex flex-col items-start lg:items-center justify-between gap-2 p-4 z-10 text-white bg-borderGray rounded-2xl">
              <p className="text-center  font-bold hidden lg:block text-lg leading-relaxed lg:text-xl2 text-white">
                {item.title}
              </p>

              <ImageContainer img={item.img} className="w-24  h-24" height={65} width={84} size={{
                smWidth: 38,
                smHeight: 38,
                smClassName: 'w-12 h-12'
              }} />
              <p className="text-center lg:text-start font-bold block lg:hidden text-lg leading-relaxed lg:text-xl2 text-white">
                {item.title}
              </p>
              <p className="text-sm lg:text-xl2 leading-relaxed text-borderGray lg:text-center text-white text-start">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      <Footerservice
        title="Experience the Precision of "
        description=""
        heading="WERTEX Casting"
        buttonText="Contact Us"
        longDescription="Partner with Wertex for reliable casting solutions that meet your industry’s toughest demands. Contact us today to discuss your project and experience the precision of our advanced casting capabilities."
      />
    </>
  );
};

export default Casting;

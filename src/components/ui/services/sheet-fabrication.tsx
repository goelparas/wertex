import React from "react";
import HeroSection from "@/components/common/Container/HeroSection-service";
import sheetFabricationHero from "@/cdn/images/sheet-fabrication/sheet-fabrication.jpg";
import {
  FlexHeader,
  FlexHeader2,
} from "@/components/common/FlexHeader/FlexHeader";
import Image from "next/image";
import Footerservice from "@/components/common/footer-service/footerservice";
import grid from "@/cdn/images/white_grid.png";

// Import all sheet fabrication images
import sheetMetal1 from "@/cdn/images/sheet-fabrication/sheet-metal.webp";
import sheetMetal2 from "@/cdn/images/sheet-fabrication/sheet-metal-2.webp";
import sheetMetal3 from "@/cdn/images/sheet-fabrication/sheet-metal-3.webp";
import pressBreak from "@/cdn/images/sheet-fabrication/pressBreak.webp";
import drawing from "@/cdn/images/sheet-fabrication/drawing.webp";
import welding1 from "@/cdn/images/sheet-fabrication/welding-1.webp";
import welding2 from "@/cdn/images/sheet-fabrication/welding-2.webp";
import welding3 from "@/cdn/images/sheet-fabrication/welding-3.webp";
import welding4 from "@/cdn/images/sheet-fabrication/welding-4.webp";
import polishing from "@/cdn/images/sheet-fabrication/polishign.webp";
import painting from "@/cdn/images/sheet-fabrication/painting.webp";
import coating from "@/cdn/images/sheet-fabrication/coating.webp";

import Section from "@/components/common/Section";
import GridBackgroundSection from "@/components/common/GridBackgroundSection/GridBackgroundSection";

//cutting methids
type Props = {};

const SheetFabrication = (props: Props) => {
  const cuttingMethods = [
    {
      title: "Laser Cutting",
      description: "Delivers clean, precise cuts for intricate designs.",
      imageSrc: sheetMetal1,
    },
    {
      title: "Waterjet Cutting",
      description: "Non-thermal cutting preserves material integrity.",
      imageSrc: sheetMetal2,
    },
    {
      title: "Punching",
      description:
        "Efficiently creates holes and custom shapes using punch presses.",
      imageSrc: sheetMetal3,
    },
  ];
  return (
    <>
      <HeroSection
        src={sheetFabricationHero}
        alt="sheet fabrication hero"
        title="Transforming Flat Sheets into Custom Solutions"
        description="Precision-driven sheet metal fabrication for diverse industries."
        heading="Sheet Fabrication"
        longDescription={
          "Sheet metal fabrication transforms flat metal sheets into precise parts and assemblies through cutting, bending, punching, and welding. At Wertex, we deliver tailored solutions that meet the demands of industries like automotive, aerospace, and industrial manufacturing with exceptional quality and precision."
        }
      />
      <Section className="bg-black"> 
        <FlexHeader2
        heading="Materials Built for Precision and Versatility"
        description="A wide variety of materials to suit your project needs."
      />
        <Section className="bg-black">

          <div className="grid grid-cols-3 gap-4 ">
            {[
              {
                title: "Cold-Rolled Steel (CRS)",
              },
              {
                title: "Hot-Rolled Steel",
              },
              {
                title: "Stainless Steel",
              },
              {
                title: "Galvanised Steel",
              },
              {
                title: "Brass",
              },
              {
                title: "Zinc",
              },

              {
                title: "Aluminum",
              },
              {
                title: "Copper",
              },
              {
                title: "MU Sheets specialized magnetic steel)",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-background-200 w-28 h-28 p-3 lg:h-auto lg:w-auto  lg:p-6 rounded-lg shadow-lg flex flex-col items-center text-center "
              >
                <h3 className="text-xs lg:text-xl2 leading-normal my-auto">{item.title}</h3>
              </div>
            ))}
          </div>
        </Section>
      </Section>

      <Section className="bg-black mt-0 lg:mt-0">
        <FlexHeader2
          heading="Precision Cutting Methods for Complex Designs"
          description="Advanced technologies ensure accurate and efficient shaping."
        />
        <div className="flex overflow-x-scroll lg:grid grid-cols-3 justify-between items-center gap-8 mt-6 lg:mt-12">
          {cuttingMethods.map((method, index) => (
            <div
              key={index}
              className="p-2 first:ml-4 last:mr-4 lg:p-4 gap-4 max-w-[350px] lg:max-w-max shrink-0  shadow-lg border  flex flex-row items-left text-left"
            >
              <Image
                src={method.imageSrc}
                alt={method.title}
                className="lg:mb-4 min-w-32 max-w-32 lg:min-w-40 lg:max-w-40 lg:w-40 object-cover h-32 lg:h-52"
              />
              <div className="w-full">
              <h3 className="text-xs lg:text-xl2 font-bold mb-2 ">{method.title}</h3>
              <p className="text-xs lg:text-lg">{method.description}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>
      <Section className="bg-custom-gradient lg:mt-0">
        <FlexHeader2
          heading="Accurate and Consistent Bending Solutions"
          description="Shaping sheet metal with precision and reliability."
        />
        <div className="grid grid-cols-1 lg:grid-cols-2   gap-3 lg:gap-5">
          {[
            {
              title: "Press Brakes",
              image: pressBreak,
              points: {
                " ": "Strong, durable, and suitable for heavy-duty applications.",
              },
            },
            {
              title: "Deep Drawing",
              points: {
                "": "Uses hydraulic presses to stretch sheet metal into deep, seamless shapes, ideal for producing hollow components with structural integrity",
              },
              image: drawing,
            },
          ].map((item) => (
            <div
              key={item.title}
              className="bg-white/10 backdrop-blur-sm lg:backdrop-blur-md rounded-2xl lg:rounded-3xl p-4 lg:py-16 lg:px-8 shadow-md mt-6 lg:mt-12"
            >
              <h1 className="text-lg  lg:text-2xl font-bold mb-4">{item.title}</h1>
              <Image
                src={item.image}
                alt={item.title}
                className="w-full h-32 lg:h-60 object-cover mb-4 rounded-2xl"
                
              />
              <ul className="list-none leading-2 lg:leading-4 font-semibold">
                {Object.entries(item.points).map(([key, value]) => (
                  <li key={key} className="text-sm lg:text-xl text-white ">
                    {value}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>
      <Section className="lg:mt-0">
        <FlexHeader
          heading=""
          title="Advanced Welding Techniques for Robust Assemblies"
          description="Extensive welding options tailored for strength and consistency"
        />
        <div className="flex overflow-x-scroll lg:grid lg:grid-cols-4 gap-5 my-12">
          {[
            {
              title: "MIG Welding",
              description: "Efficiently joins thin metal sheets with minimal distortion.",
              image: welding1,
            },
            {
              title: "TIG Welding",
              description: "Provides high-precision and clean welds, ideal for thin and non-ferrous materials",
              image: welding2,
            },
            {
              title: "Spot Welding",
              description: "Ensures quick and strong welds, suitable for various thicknesses",
              image: welding3,
            },
            {
              title: "Robotic Welding",
              description: "Guarantees consistent and high-quality welds for large-scale production",
              image: welding4,
            },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-borderGray px-3 py-6 shrink-0 w-80 lg:w-auto  lg:py-8 lg:px-4 rounded-xl lg:rounded-2xl shadow-lg flex flex-col items-center justify-start text-left lg:h-[31.75rem] gap-4"
            >
              <Image
                src={item.image}
                alt={item.title}
                className="w-full h-40 lg:h-80 object-cover mb-4 rounded-2xl"
              />
              <h2 className="text-lg lg:text-xl2 font-semibold text-left w-full">{item.title}</h2>
              <p className="text-sm lg:text-lg text-left  ">{item.description}</p>
            </div>
          ))}
        </div>
        <div className=" my-12 lg:my-24">
        <FlexHeader2
          heading="Ensuring Every Weld Meets Stringent Standards"
          description="Comprehensive checks for quality and precision"
        />
       
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 lg:gap-6 mt-6 lg:mt-12">
          {[
            {
              title: "Assembly Planning",
              description:
                "Designing templates for seamless fit and structural integrity of assemblies.",
            },
            {
              title: "Weldment Inspections",
              description:
                "Comprehensive X-ray and radiography testing ensure compliance with quality standards.",
            },
            {
              title: "100% Quality Checks:",
              description:
                "Advanced tools like Coordinate Measuring Machines (CMMs), profile projectors, and 3D scanners support high-quality production.",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-[#272727] p-3 lg:p-6 rounded-lg shadow-lg flex flex-col items-start justify-start text-left"
            >
              <p className="text-lg lg:text-xl2 leading-8 font-bold text-left mb-3 lg:mb-6">{item.title}</p>
              <p className="text-sm leading-normal lg:text-xl2 ">{item.description}</p>
            </div>
          ))}
        </div>
        </div>
      </Section>
      <div className="bg-white relative mb-6 lg:mb-12 pt-6 lg:pt-12">
        <FlexHeader2
          className="text-black px-3 lg:px-12"
          heading="Enhancing Durability and Aesthetics"
          description="Surface treatments tailored to your project’s needs."
        />
        <div className="relative h-full lg:h-[80svh] flex items-center justify-center mt-6 lg:mt-12">
          <div className="absolute top-0 left-0 w-full h-full z-10">
            <Image src={grid} alt="sheet fabrication" fill priority />
          </div>

          <div className=" my-6  border border-black  relative w-full h-full lg:p-12 ml-4 mr-0 lg:m-12 z-20">
            <p className="text-sm lg:text-xl2 leading-normal text-black p-2">
              <span className="text-orangeBg">Wertex</span> offers various surface
              treatments to enhance durability and appearance:
            </p>

            <div className="flex gap-3 overflow-x-scroll lg:grid lg:grid-cols-3 lg:gap-6 m-2 bg-white mt-6 lg:my-12 relative z-10">
              {[  
                {
                  title: "Polishing",
                  description: "Adds a clean and professional finish.",
                  image: polishing,
                },
                {
                  title: "Painting",
                  description: "Provides customized colors for aesthetic appeal.",
                  image: painting,
                },
                {
                  title: "Specialized Coatings",
                  description: "Increases resistance to wear, corrosion, and environmental conditions.",
                  image: coating,
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="border shrink-0 border-black p-4 w-72 h-64 lg:h-auto lg:w-auto lg:p-8 relative flex  flex-col items-center gap-4 lg:gap-8 bg-[#1717171A]/10 text-black"
                >
                  <Image
                    src={item.image}
                    alt={item.title}
                    className="w-full h-48 lg:h-60 object-cover overflow-hidden"
                  />
                  <div className="flex flex-col gap-0 lg:gap-2 text-left w-full">
                    <h3 className="text-xs lg:text-xl2 leading-normal font-bold text-left">
                      {item.title}
                    </h3>
                    <p className="text-xs leading-normal lg:text-xl2">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
            <GridBackgroundSection
                heading="Your Trusted Partner in Sheet Metal Fabrication"
                description=""
            >
             <p className="text-xs lg:text-xl2 leading-normal">
            <span className="text-orangeBg ">Wertex</span> combines
            state-of-the-art technology, skilled craftsmanship, and a wide range
            of material options to deliver reliable and high-quality sheet metal
            fabrication. Our comprehensive approach, from precision cutting and
            forming to advanced welding and quality assurance, ensures every
            project meets the highest standards of performance and visual
            appeal.
          </p>
    </GridBackgroundSection>
      <Footerservice
        title="Bring Your Vision to Life with Wertex"
        description=""
        heading=""
        longDescription={"Let Wertex’s sheet metal fabrication expertise help you achieve your project goals. Contact us today to discuss your requirements and explore how we can deliver precision-driven solutions tailored to your needs."}
        buttonText="Contact Us"
      />
         
    </>
  );
};

export default SheetFabrication;

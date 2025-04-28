import React from "react";
import HeroSection from "@/components/common/Container/HeroSection-service";
import sheetFabricationHero from "@/cdn/images/sheet-fabrication/sheet-fabrication.jpg";
import { FlexHeader2 } from "@/components/common/FlexHeader/FlexHeader";
import Image from "next/image";
type Props = {};

const SheetFabrication = (props: Props) => {
  const cuttingMethods = [
    {
      title: "Laser Cutting",
      description: "Delivers clean, precise cuts for intricate designs.",
      imageSrc: "path/to/laser-cutting-image.jpg", // Replace with actual image path
    },
    {
      title: "Waterjet Cutting",
      description: "Non-thermal cutting preserves material integrity.",
      imageSrc: "path/to/waterjet-cutting-image.jpg", // Replace with actual image path
    },
    {
      title: "Plasma Cutting",
      description: "Reliable for fast cutting of thicker metal.",
      imageSrc: "path/to/plasma-cutting-image.jpg", // Replace with actual image path
    },
    {
      title: "Punching",
      description:
        "Efficiently creates holes and custom shapes using punch presses.",
      imageSrc: "path/to/punching-image.jpg", // Replace with actual image path
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
      <div className="w-full mx-auto p-12">
        <FlexHeader2
          heading="Materials Built for Precision and Versatility"
          description="A wide variety of materials to suit your project needs."
        />
        <div className="grid grid-cols-3 gap-4 mt-12">
          {[
            {
              title: "Cold-Rolled Steel (CRS)",
            },
            {
              title: "Hot-Rolled Steel",
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
              className="bg-borderGray p-6 rounded-lg shadow-lg flex flex-col items-center text-center"
            >
              <h3 className="text-xl2 ">{item.title}</h3>
            </div>
          ))}
        </div>
      </div>
      <div className="w-full mx-auto p-12">
        <FlexHeader2
          heading="Precision Cutting Methods for Complex Designs"
          description="Advanced technologies ensure accurate and efficient shaping."
        />
        <div className="flex justify-between items-center gap-8 mt-12">
          {cuttingMethods.map((method, index) => (
            <div
              key={index}
              className="bg-borderGray shrink-0  p-4 rounded-lg shadow-lg flex flex-col items-center text-center"
            >
              <Image
                src={""}
                alt={method.title}
                className="mb-4"
                width={100}
                height={100}
              />
              <h3 className="text-xl2">{method.title}</h3>
              <p>{method.description}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="bg-custom-gradient p-12">
        <FlexHeader2
          heading="Accurate and Consistent Bending Solutions"
          description="Shaping sheet metal with precision and reliability."
        />
        <div className="grid grid-cols-2 gap-5">
          {[
            {
              title: "Press Brakes",
              image: "/path/to/image",
              points: {
                " ":"Strong, durable, and suitable for heavy-duty applications.",
              },
            },
            {
              title: "Deep Drawing",
              points: {
                "": "Uses hydraulic presses to stretch sheet metal into deep, seamless shapes, ideal for producing hollow components with structural integrity",
              },
              image: "/path/to/image",
            },
          ].map((item) => (
            <div
              key={item.title}
              className=" bg-white/15 backdrop-blur-md rounded-3xl p-6 shadow-md mt-12"
            >
              <h1 className="text-2xl font-bold mb-2">{item.title}</h1>
              <Image
                src={"/path/to/image"}
                alt={item.title}
                className="w-full h-48 object-cover mb-4"
                width={100}
                height={100}
              />
              <ul className="list-none pl-5 leading-4">
                {Object.entries(item.points).map(([key, value]) => (
                  <li key={key} className="text-xl text-gray-300 ">
                      {value}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default SheetFabrication;

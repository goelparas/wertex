import React from "react";
import HeroSection from "@/components/common/Container/HeroSection-service";
import sheetFabricationHero from "@/cdn/images/sheet-fabrication/sheet-fabrication.jpg";
import FlexHeader, {
  FlexHeader2,
} from "@/components/common/FlexHeader/FlexHeader";
import Image from "next/image";
import Footerservice from "@/components/common/footer-service/footerservice";
import grid from "@/cdn/images/white_grid.png";
import testImg from "@/cdn/images/sheet-fabrication/sheet-fabrication.jpg";
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
        <div className="grid grid-cols-4 justify-between items-center gap-8 mt-12">
          {cuttingMethods.map((method, index) => (
            <div
              key={index}
              className=" p-4  shadow-lg border  flex flex-col items-left text-left"
            >
              <Image
                src={testImg}
                alt={method.title}
                className="mb-4 w-1/2 object-cover h-52"
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
                " ": "Strong, durable, and suitable for heavy-duty applications.",
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
      <div className="bg-black p-12">
        <FlexHeader
          heading=""
          title="Advanced Welding Techniques for Robust Assemblies"
          description="Extensive welding options tailored for strength and consistency"
        />
        <div className="grid grid-cols-4 gap-5 my-12">
          {[
            {
              title: "MIG Welding",
              description:
                "Efficiently joins thin metal sheets with minimal distortion.",
            },
            {
              title: "TIG Welding",
              description:
                "Provides high-precision and clean welds, ideal for thin and non-ferrous materials",
            },
            {
              title: "Spot Welding",
              description:
                "Ensures quick and strong welds, suitable for various thicknesses",
            },
            {
              title: "Robotic Welding",
              description:
                "Guarantees consistent and high-quality welds for large-scale production",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-borderGray p-6 rounded-lg shadow-lg flex flex-col items-center justify-start text-left h-[500px]"
            >
              <p className="text-xl2 font-bold text-left">{item.title}</p>
              <p className="text-xl2 ">{item.description}</p>
            </div>
          ))}
        </div>
        <FlexHeader2
          heading="Ensuring Every Weld Meets Stringent Standards"
          description="Comprehensive checks for quality and precision"
        />
        <div className="grid grid-cols-3 gap-6 mt-12">
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
              className="bg-borderGray p-6 rounded-lg shadow-lg flex flex-col items-start justify-start text-left"
            >
              <p className="text-xl2 font-bold text-left">{item.title}</p>
              <p className="text-xl2 ">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="bg-white relative h-svh py-12">
        <FlexHeader2
          className="text-black px-12"
          heading="Enhancing Durability and Aesthetics"
          description="Surface treatments tailored to your project’s needs."
        />
        <div className="relative h-[80svh] flex items-center justify-center mt-12">
          <div className="absolute top-0 left-0 w-full h-full">
            <Image src={grid} alt="sheet fabrication" fill priority />
          </div>

          <div className="mt-12 border border-black relative h-[90%] p-12 m-12">
            <p className="text-xl2 text-black  ">
              <span className="bg-orangeBg">Wertex</span> offers various surface
              treatments to enhance durability and appearance:
            </p>

            <div className="grid grid-cols-3 gap-6   mt-12">
              {[
                {
                  title: "Polishing",
                  description: "Adds a clean and professional finish.",
                  image: "/path/to/image",
                },
                {
                  title: "Painting",
                  description:
                    "Provides customized colors for aesthetic appeal.",
                  image: "/path/to/image",
                },
                {
                  title: "Specialized Coatings",
                  description:
                    "Increases resistance to wear, corrosion, and environmental conditions.",
                  image: "/path/to/image",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="border border-black p-4 relative flex flex-col items-center gap-8 bg-[#1717171A]/10 text-black"
                >
                  <Image
                    src={testImg}
                    alt={item.title}
                    className="w-full h-60 object-cover"
                  />
                  <div className="flex flex-col gap-2 text-left">
                    <h3 className="text-xl2 font-bold text-left">
                      {item.title}
                    </h3>
                    <p className="text-xl2">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <Footerservice
        title="Your Trusted Partner in Sheet Metal Fabrication"
        description=""
        heading=""
        longDescription={
          <>
            <span className="text-orangeBg">Wertex</span> combines
            state-of-the-art technology, skilled craftsmanship, and a wide range
            of material options to deliver reliable and high-quality sheet metal
            fabrication. Our comprehensive approach, from precision cutting and
            forming to advanced welding and quality assurance, ensures every
            project meets the highest standards of performance and visual
            appeal.
          </>
        }
        buttonText="Contact Us"
      >
        <FlexHeader
          className="mt-12 flex justify-between items-start"
          title="Bring Your Vision to Life with Wertex"
          heading=""
          description="Let Wertex’s sheet metal fabrication expertise help you achieve your project goals. Contact us today to discuss your requirements and explore how we can deliver precision-driven solutions tailored to your needs."
        />
      </Footerservice>
    </>
  );
};

export default SheetFabrication;

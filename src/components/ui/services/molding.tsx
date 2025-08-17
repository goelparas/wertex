import React from "react";
import HeroSection from "@/components/common/Container/HeroSection-service";
import mouldinghero from "@/cdn/images/moulding/moulding.avif";
import {FlexHeader} from "@/components/common/FlexHeader/FlexHeader";
import grid from "@/cdn/images/cross.png";
import {
  BentoGrid,
  BentoGridItem,
} from "@/components/common/BentoGrid/BentoGrid";
import Image from "next/image";
import moldingservice from "@/cdn/images/moulding/moulding-service.avif";
import Footerservice from "@/components/common/footer-service/footerservice";
import vector1 from '@/cdn/images/vectors/vector-1.svg'
import vector2 from '@/cdn/images/vectors/vector-2.svg'
import vector3 from '@/cdn/images/vectors/vector-3.svg'
import vector4 from '@/cdn/images/vectors/vector-4.svg'
import { ImageContainer } from "@/components/common/Container/ImageGrid";

type Props = {};

const component1 = (
  <div className="flex flex-col gap-8 justify-between items-center w-[31.25rem]  mx-auto">
    <div className="flex flex-col items-center justify-center relative w-60 h-60 ">
      <p className="text-[150px] font-bold">01</p>
      <Image
        src={grid}
        alt="casting main"
        width={250}
        height={250}
        className="absolute"
      />
    </div>
    <div className="flex flex-col gap-4">
      <h3 className="text-xl2 font-bold text-center">
        <span className="text-orangeBg">Injection</span> Molding
      </h3>
      <p className="text-xl2 w-full text-left ">
        Ideal for producing precise, repeatable parts using thermoplastics and
        engineered polymers. Suitable for industries like automotive, aerospace,
        medical, and electronics.
      </p>
    </div>
  </div>
);
const component2 = (
  <div className="bg-custom-map-gradient flex items-center justify-center rounded-xl max-w-[31.25rem] mx-auto">
    <Image
      src={moldingservice}
      alt="molding service"
      width={490}
      height={680}
    />
  </div>
);

const component3 = (
  <div className="flex flex-col gap-14">
    <div>
      <p className="text-3.5xl font-bold">
        <span className="text-orangeBg">Versatile Materials</span> for Every
        Need
      </p>
      <p className="text-xl2 mt-4 text-gray-muted-100">
        We work with a wide range of thermoplastics and engineered polymers,
        including:
      </p>
    </div>
    <div className="flex flex-col gap-4">
      {[
        {
          name: "Polypropylene (PP):",
          description:
            " Lightweight and durable, ideal for automotive and packaging.",
          img: vector1,
        },
        {
          name: "Polyethylene (PE):",
          description:
            " Impact-resistant and flexible, used in industrial applications.",
          img: vector2,
        },
        {
          name: "Acrylonitrile Butadiene Styrene (ABS):",
          description:
            "Tough and versatile, perfect for electronics and consumer goods.",
          img: vector3,
        },
        {
          name: "Polycarbonate (PC): ",
          description:
            "Transparent and high-impact, suitable for lenses and protective equipment.",
          img: vector4,
        },
      ].map((item, index) => (
        <div
          key={index}
          className="bg-borderGray rounded-xl p-4 flex  justify-between gap-8 "
        >
          <div className="flex flex-col items-center justify-center">
            <ImageContainer img={item.img} />
          </div>

          <div>
            <span className="text-xl2 font-bold">{item.name}</span>
            <span className="text-xl2">{item.description}</span>
          </div>
        </div>
      ))}
    </div>
  </div>
);
const component4 = (
  <div>
    <p className="text-3.5xl font-bold">
      <span className="text-orangeBg">High-Precision Solutions </span> for
      Complex Designs
    </p>
    <p className="text-xl2 mt-4 text-[#FFFFFF91]">
      Delivering repeatable, high-quality components for critical industries.
    </p>
    <p className="text-xl2 mt-4">
      Injection molding is a precise and efficient process where molten plastic
      is injected into a mold cavity to produce complex, repeatable parts. At
      Wertex, we excel in delivering top-notch injection molding solutions
      tailored to industries like automotive, aerospace, medical devices, and
      electronics.
    </p>
  </div>
);
const component5 = (
  <div className="flex flex-col gap-4">
    <p className="text-3.5xl font-bold">
      <span className="text-orangeBg">Finishing Touches </span> That Perfect
      Every Component
    </p>
    <p className="text-xl2 mt-4 text-[#FFFFFF91]">
      Wertex offers a range of post-processing services to enhance the quality
      and functionality of injection-molded parts:
    </p>
    <ul className="text-xl2 mt-4 list-disc leading-loose">
      <li><span className="font-bold">Deburring and Trimming:</span> Ensures clean, precise finishes.</li>
      <li><span className="font-bold">Surface Texturing:</span> Provides custom aesthetic finishes.</li>
      <li><span className="font-bold">Assembly Services:</span> Combines multiple components into finished assemblies </li>
    </ul>
  </div>
);

const component6 = (
  <div className="flex flex-col gap-4">
    <p className="text-3.5xl font-bold">
      Ensuring{" "}
      <span className="text-orangeBg"> Precision and Performance </span>
    </p>
    <p className="text-xl2 mt-4 text-[#FFFFFF91]">
      To guarantee the highest quality standards, Wertex implements rigorous
      quality control measures:
    </p>
    <ul className="text-xl2 mt-4 list-disc leading-loose">
      <li>
        Dimensional Verification: Advanced tools ensure precise measurements.
      </li>
      <li>
        Material Testing: Validates strength and durability of each component.
      </li>
      <li>
        Mold Flow Analysis: Optimizes mold design and reduces defects for
        flawless results.
      </li>
    </ul>
  </div>
);

const componentTwo1 = (
  <div className="flex flex-col gap-8 justify-between items-center w-[31.25rem]  mx-auto">
    <div className="flex flex-col items-center justify-center relative w-60 h-60 ">
      <p className="text-[150px] font-bold">02</p>
      <Image
        src={grid}
        alt="casting main"
        width={250}
        height={250}
        className="absolute"
      />
    </div>

    <div className="flex flex-col gap-4">
      <h3 className="text-xl2 font-bold text-center">
        <span className="text-orangeBg">Compression</span> Molding
      </h3>
      <p className="text-xl2">
        Best for shaping thermosetting plastics and rubber into high-strength,
        durable components.
      </p>
    </div>
  </div>
);
const componentTwo2 = (
  <div className="bg-custom-map-gradient flex items-center justify-center rounded-xl">
    <Image
      src={moldingservice}
      alt="molding service"
      width={490}
      height={680}
    />
  </div>
);
const componentTwo3 = (
  <div>
    <p className="text-3.5xl font-bold">
      Engineered for{" "}
      <span className="text-orangeBg">Durability and Performance </span>
    </p>
    <p className="text-xl2 mt-4 text-[#FFFFFF91]">
      We work with a wide range of thermoplastics and engineered polymers,
      including:
    </p>
    <div className="flex flex-col gap-4 mt-12">
      {[
        {
          name: "Thermosets:",
          description: "Epoxy, Phenolic, and Melamine.",
        },
        {
          name: "Rubbers:",
          description: "Silicone, Neoprene, and EPDM.",
        },
      ].map((item, index) => (
        <div
          key={index}
          className="bg-borderGray rounded-xl p-4 flex  justify-between gap-8 "
        >
          <div className="w-2/5 flex items-center justify-center">
            <div className="relative flex items-center justify-center h-16 w-16 ">
              <Image
                src={moldingservice}
                alt="molding service"
                width={42}
                height={42}
              />
              <Image src={grid} alt="casting main" fill />
            </div>
          </div>

          <div>
            <span className="text-xl2 font-bold">{item.name}</span>
            <span className="text-xl2">{item.description}</span>
          </div>
        </div>
      ))}
    </div>
  </div>
);
const componentTwo4 = (
  <div>
    <p className="text-3.5xl font-bold">
      <span className="text-orangeBg">Durable Solutions for </span>{" "}
      High-Strength Components
    </p>
    <p className="text-xl2 mt-4 text-[#FFFFFF91]">
      Specializing in thermosetting plastics and rubber for intricate, reliable
      designs
    </p>
    <p className="text-xl2 mt-4">
      Compression molding uses heat and pressure to transform thermosetting
      plastics and rubber into durable components. This robust process is ideal
      for applications requiring high strength and intricate designs.
    </p>
  </div>
);
const componentTwo5 = (

  <div>
    <p className="text-3.5xl font-bold">
      Refining Components for  <span className="text-orangeBg"> Optimal
        Performance</span>
    </p>
    <p className="text-xl2 mt-4 text-[#FFFFFF91]">
      Our post-processing services ensure each compression-molded component is
      delivered to exact specifications:
    </p>
    <ul className="text-xl2 mt-4 list-disc">
      <li>
        Deburring and Trimming: Removes excess material for a precise finish.
      </li>
      <li>Surface Finishing: Offers smooth, textured, or polished surfaces.</li>
      <li>
        Assembly Services: Combines compression-molded parts into finished
        products.
      </li>
    </ul>
  </div>
);
const componentTwo6 = (
  <div>
    <p className="text-3.5xl font-bold">
      Precision Delivered Through  <span className="text-orangeBg"> Rigorous Quality Control </span>
    </p>
    <p className="text-xl2 mt-4 text-[#FFFFFF91]">
      To meet stringent quality standards, Wertex conducts:
    </p>
    <ul className="text-xl2 mt-4 list-disc ">
      <li className="font-normal">
        <span className="font-bold"> Dimensional Checks:</span> Ensures precise measurements for all components.
      </li>
      <li className="font-normal"><span className="font-bold">Material Analysis:</span> Validates thermal and mechanical properties.</li>
      <li className="font-normal">
        <span className="font-bold">Defect Inspection:</span> Identifies and eliminates surface and internal
        inconsistencies.
      </li>
    </ul>
  </div>
);

const renderBentoGrid = (
  components: { component: React.ReactNode }[],
  bgColor: string,
  className?: string
) => {
  return (
    <BentoGrid className={`mt-12 ${bgColor} ${className}`}>
      {components.map((item, index) => (
        <BentoGridItem
          key={index}
          className={`box-item-${index + 1} p-12`}
          style={{
            gridArea: `box-${index + 1}`,
          }}
        >
          {item.component}
        </BentoGridItem>
      ))}
    </BentoGrid>
  );
};

const Molding = (props: Props) => {
  const componentItems = [
    { component: component1 },
    { component: component2 },
    { component: component3 },
    { component: component4 },
    { component: component5 },
    { component: component6 },
  ];
  const componentItems2 = [
    { component: componentTwo1 },
    { component: componentTwo2 },
    { component: componentTwo3 },
    { component: componentTwo4 },
    { component: componentTwo5 },
    { component: componentTwo6 },
  ];

  return (
    <>
      <HeroSection
        src={mouldinghero}
        alt="casting hero"
        title="Crafting Precision Components Through Advanced Molding Solutions"
        description="From design to delivery, Wertex molds quality, precision, and performance into every part."
        heading="Casting"
        longDescription={
          "Molding is a versatile and efficient manufacturing process used to shape materials into specific forms using molds. At Wertex, we provide comprehensive molding solutions tailored to the needs of industries such as automotive, aerospace, medical devices, consumer electronics, and industrial equipment. Our expertise guarantees precision, consistency, and superior quality in every project."
        }
      />

      <div className="bg-[#242424] mt-12 p-12">
        <FlexHeader
          title={`Tailored Molding Solutions for  Every Application`}
          heading=""
          className="text-xl2"
          description="From thermoplastics to rubber, we offer customized techniques to suit your needs."
          headingClassName=" text-gray-muted-100"
          descriptionClassName="text-xl2 text-gray-muted-100"
        />
        <p className="text-xl2">
          <span className="text-orangeBg">Wertex</span> specializes in two
          primary molding techniques:
        </p>
        {renderBentoGrid(componentItems, "bg-[#242424]")}
      </div>
      <div className="p-12 bg-black">
        {renderBentoGrid(componentItems2, "bg-black")}
      </div>
      <Footerservice
        title="Your Trusted Partner for Moulding Excellence"
        description=""
        heading=""
        longDescription={
          <ul>
            Wertex stands out for its expertise, customization, and
            quality-driven processes:
            <li>
              -Expertise: Decades of experience across diverse molding
              techniques.
            </li>
            <li>
              -Customization: Tailored solutions for complex designs and
              materials.
            </li>
            <li>
              -Quality Assurance: Stringent testing ensures defect-free
              components.
            </li>
            <li>
              -End-to-End Support: Seamless project execution from design to
              delivery.
            </li>
          </ul>
        }
        buttonText="Contact Us"
      >
        <FlexHeader
          className="mt-12 flex justify-between items-start"
          title="Transform Your Ideas Into Reality with Wertex"
          heading=""
          description="Partner with Wertex for cutting-edge molding solutions that meet the highest industry standards. Contact us today to discuss your project and experience precision, quality, and innovation in every component."
        />
      </Footerservice>
    </>
  );
};

export default Molding;

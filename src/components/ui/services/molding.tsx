import React from "react";
import HeroSection from "@/components/common/Container/HeroSection-service";
import mouldinghero from "@/cdn/images/moulding/moulding.avif";
import FlexHeader from "@/components/common/FlexHeader/FlexHeader";
import grid from "@/cdn/images/cross.png";
import {
  BentoGrid,
  BentoGridItem,
} from "@/components/common/BentoGrid/BentoGrid";
import Image from "next/image";
import moldingservice from "@/cdn/images/moulding/moulding-service.avif";
type Props = {};

const Molding = (props: Props) => {
  const component1 = (
    <div className="flex flex-col gap-4 justify-between items-center p-12">
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

      <div>
        <h3 className="text-xl2 font-bold text-center">
          <span className="text-orangeBg">Injection</span> Molding
        </h3>
        <p className="text-xl2">
          Ideal for producing precise, repeatable parts using thermoplastics and
          engineered polymers. Suitable for industries like automotive,
          aerospace, medical, and electronics.
        </p>
      </div>
    </div>
  );
  const component2 = (
    <div className="p-12">
      <div className=" bg-custom-map-gradient rounded-xl">
        <Image
          src={moldingservice}
          alt="molding service"
          width={490}
          height={680}
        />
      </div>
    </div>
  );

  const component3 = (
    <div className="p-12">
      <div className="flex flex-col gap-14">
        <div>
          <p className="text-[32px] font-bold">
            <span className="text-orangeBg">Versatile Materials</span> for Every
            Need
          </p>
          <p className="text-xl2 mt-4">
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
            },
            {
              name: "Polyethylene (PE):",
              description:
                " Impact-resistant and flexible, used in industrial applications.",
            },
            {
              name: "Acrylonitrile Butadiene Styrene (ABS):",
              description:
                "Tough and versatile, perfect for electronics and consumer goods.",
            },
            {
              name: "Polycarbonate (PC): ",
              description:
                "Transparent and high-impact, suitable for lenses and protective equipment.",
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
    </div>
  );
  const component4 = (
    <div className="p-12">
      <div>
        <p className="text-[32px] font-bold">
          <span className="text-orangeBg">High-Precision Solutions </span> for
          Complex Designs
        </p>
        <p className="text-xl2 mt-4">
          We work with a wide range of thermoplastics and engineered polymers,
          including:
        </p>
      </div>
    </div>
  );

  const componentItems = [
    { component: component1, className: "" },
    { component: component2, className: "row-span-4" },
    { component: component3, className: "row-span-2" },
    { component: component3, className: "row-span-4" },
    { component: <div>4asdf</div>, className: "" },
    { component: <div>asdfasd</div>, className: "row-span-2" },
  ];

  return (
    <>
      <HeroSection
        src={mouldinghero}
        alt="casting hero"
        title="Crafting Precision Components Through Advanced Molding Solutions"
        description="Delivering high-quality components with precision, repeatability, and expertise."
        heading="Casting"
        longDescription={
          "Molding is a versatile and efficient manufacturing process used to shape materials into specific forms using molds. At Wertex, we provide comprehensive molding solutions tailored to the needs of industries such as automotive, aerospace, medical devices, consumer electronics, and industrial equipment. Our expertise guarantees precision, consistency, and superior quality in every project."
        }
      />

      <div className="bg-[#242424] mt-12 p-12">
        <FlexHeader
          title={`Tailored Molding Solutions for  Every Application`}
          heading=""
          description="From thermoplastics to rubber, we offer customized techniques to suit your needs."
        />
        <p className="text-xl2 ">
          <span className="text-orangeBg">Wertex</span> specializes in two
          primary molding techniques:
        </p>
        <BentoGrid className="bg-[#242424] mt-12">
          {componentItems.map((item, index) => (
            <BentoGridItem key={index} className={item.className}>
              {item.component}
            </BentoGridItem>
          ))}
        </BentoGrid>
      </div>
    </>
  );
};

export default Molding;

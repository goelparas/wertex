import FlexHeader, {
  FlexHeader2,
} from "@/components/common/FlexHeader/FlexHeader";
import Image from "next/image";
import React from "react";
import castingHero from "@/cdn/images/casting/casting-hero.avif";
import castingMain from "@/cdn/images/casting/casting-1.avif";
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

  return (
    <>
      <div className="w-[90%] mx-auto ">
        <FlexHeader
          title="Precision Casting for Complex Applications"
          description="Delivering high-quality components with precision, repeatability, and expertise."
          heading="Casting"
        />
        <div className="w-full flex flex-col  justify-between items-center gap-8 h-[85svh] mt-12">
          <div className="h-full relative w-full">
            <Image
              src={castingHero}
              alt="casting hero"
              quality={100}
              objectFit="cover"
              fill
            />
          </div>

          <p className="text-xl2 text-white">
            Casting is a versatile manufacturing process where molten metal is
            poured into molds to create complex shapes with precision and
            repeatability. At Wertex, we specialize in investment casting, die
            casting, and sand casting, producing reliable and high-quality
            components for industries such as aerospace, automotive, defense,
            and industrial equipment. Our advanced techniques ensure each part
            is crafted with exceptional accuracy, durability, and performance.
          </p>
        </div>
      </div>
      <div className="mt-12 w-full bg-black p-12">
        <FlexHeader2
          heading="Comprehensive Casting Capabilities"
          description="Advanced casting methods tailored to your needs."
        />

        <div className="grid grid-cols-3 gap-4 mt-6">
          {[
            {
              title: "Investment Casting",
              description:
                "Produces high-precision components with intricate geometries and excellent surface finishes.",
            },
            {
              title: "Die Casting",
              description:
                "Fast and cost-effective for complex shapes with superior dimensional accuracy.",
            },
            {
              title: "Sand Casting",
              description:
                "Flexible and economical, ideal for low to medium production volumes.",
            },
            {
              title: "Gravity Die Casting",
              description:
                "Creates high-density components with excellent structural integrity.",
            },
            {
              title: "Centrifugal Casting",
              description:
                "Perfect for hollow components with superior mechanical properties.",
            },
            {
              title: "Permanent Mold Casting",
              description:
                "Ensures smooth finishes and dimensional accuracy, ideal for medium to high production volumes.",
            },
            {
              title: "Continuous Casting",
              description:
                "Ensures consistent quality for billets, rods, and other long-section parts.",
            },
            {
              title: "Lost Foam Casting:",
              description:
                "Reduces machining time and produces intricate shapes, making it perfect for prototypes and medium-scale production.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="bg-foreground p-4 rounded-2xl shadow-md flex flex-col items-start text-start"
            >
              <div className="w-12 h-12  mb-4 flex items-center justify-center">
                {/* Image slot */}
                <Image src="/path/to/image" alt="icon" width={24} height={24} />
              </div>
              <h1 className="text-xl2 font-bold mb-2">{item.title}</h1>
              <p className="text-xl2 text-gray-300">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="bg-custom-gradient p-12">
        <FlexHeader2
          heading="Versatile Material Options"
          description="Ferrous and non-ferrous materials for diverse applications."
        />
        <div className="grid grid-cols-2 gap-5">
          {[
            {
              title: "Ferrous Materials",
              image: "/path/to/image",
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
              image: "/path/to/image",
            },
          ].map((item) => (
            <div
              key={item.title}
              className=" bg-white/15 backdrop-blur-md rounded-3xl p-6 shadow-md mt-12"
            >
              <h1 className="text-2xl font-bold mb-2">{item.title}</h1>
              <Image
                src={null}
                alt={item.title}
                className="w-full h-48 object-cover mb-4"
              />
              <ul className="list-disc pl-5 leading-4">
                {Object.entries(item.points).map(([key, value]) => (
                  <li key={key} className="text-xl text-gray-300 ">
                    <strong>{key}:</strong> {value}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="w-full bg-black p-12">
        <FlexHeader2
          heading="Enhancing Component Performance and Quality"
          description="Advanced finishing techniques for durability and precision."
        />
        <div className="border border-white p-4 mt-12">
          <p className="text-xl2 p-4 ">
            <span className="text-orangeBg">Wertex</span> employs a range of
            post-processing techniques to ensure <br /> optimal performance and
            aesthetics:
          </p>
          <div className="grid grid-cols-3 p-4 gap-8">
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
                className="bg-black border border-white p-4  shadow-md flex flex-col items-start text-start"
              >
                <div className="w-12 h-12 mb-4 flex items-center justify-center">
                  {/* Image slot */}
                  <Image src={null} alt="icon" width={24} height={24} />
                </div>
                <h1 className="text-xl2 font-bold mb-2">{item.title}</h1>
                <p className="text-xl2 text-gray-300">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="w-full bg-white p-12">
        <FlexHeader2
          className="text-background"
          heading="Enhancing Component Performance and Quality"
          description="Ensuring each component meets exact specifications."
        />
        <div className="grid grid-cols-3 gap-0">
          {cardItems.map((item, index) => (
            <div
              key={index}
              className="bg-white py-4 text-foreground"
            >
              <div className="w-full mx-auto flex flex-col items-center gap-2">
                <p className="text-borderGray text-center w-[90%] font-bold  text-4xl">
                  0{index + 1}
                </p>
                <div className=" bg-foreground h-[2px] relative w-full ">
                  <span className="absolute  -bottom-1  mx-auto left-0 right-0  h-2 w-2 rounded-full bg-foreground" />
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
    </>
  );
};

export default Casting;

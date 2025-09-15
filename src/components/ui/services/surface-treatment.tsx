import React from "react";
import HeroSection from "@/components/common/Container/HeroSection-service";
import Section from "@/components/common/Section";
import surfaceTreatment from "@/cdn/images/surface-treatment.webp";
import {FlexHeader} from "@/components/common/FlexHeader/FlexHeader";
import Footerservice from "@/components/common/footer-service/footerservice";
import gridBg from "@/cdn/images/surface/grid-bg-surfce.png";
import Image, { StaticImageData } from "next/image";
import vector1 from "@/cdn/images/surface/vector-1.png"
import vector2 from "@/cdn/images/surface/vector-2.png"
import vector3 from "@/cdn/images/surface/vector-3.png"
import vector4 from "@/cdn/images/surface/vector-4.png"
import vector5 from "@/cdn/images/surface/vector-5.png"
import vector6 from "@/cdn/images/surface/vector-6.png"
import metal from "@/cdn/images/surface/metal.png"
import plastic from "@/cdn/images/surface/inspection-panel.png"
import sheet from "@/cdn/images/surface/sheet.png"
import { ImageContainer } from "@/components/common/Container/ImageGrid";
import IndustryCard from "@/components/cnc/IndustryCard"
;
const SurfaceTreatment = () => {
  const surfaceTreatments = [
    {
      title: "Anodizing:",
      features: [
        "Creates a corrosion-resistant oxide layer on aluminum and other metals.",
        "Available in various colors for aesthetic and functional applications.",
      ],
      highlighted: false,
    },
    {
      title: "Powder Coating:",
      features: [
        "Provides a durable, uniform, and weather-resistant finish.",
        "Ideal for components exposed to harsh environments.",
      ],
      highlighted: false,
    },
    {
      title: "Electroplating:",
      features: [
        "Deposits a thin metallic layer for enhanced corrosion resistance, wear resistance, or conductivity.",
        "Common finishes include nickel, chrome, and zinc plating.",
      ],
      highlighted: false,
    },
    {
      title: "PVD (Physical Vapor Deposition) Coating:",
      features: [
        "Offers a hard, wear-resistant, and decorative metallic coating.",
        "Commonly used in aerospace, medical devices, and precision tools.",
      ],
      highlighted: false,
    },
    {
      title: "Teflon Coating:",
      features: [
        "Provides a non-stick, low-friction, and chemical-resistant surface.",
        "Ideal for industrial applications requiring heat and corrosion resistance.",
      ],
      highlighted: false,
    },
    {
      title: "Urethane Coating:",
      features: [
        "Protects components with a flexible, durable, and abrasion-resistant layer.",
        "Often used in automotive and industrial equipment.",
      ],
      highlighted: false,
    },
    {
      title: "Phosphating:",
      features: [
        "Creates a wear-resistant and corrosion-resistant layer on steel components.",
        "Serves as an excellent base for paint or powder coating.",
      ],
      highlighted: false,
    },
    {
      title: "Nitriding:",
      features: [
        "Introduces nitrogen into the surface of steel to enhance hardness and wear resistance.",
        "Ideal for high-performance parts in automotive and aerospace industries.",
      ],
      highlighted: true,
    },
    {
      title: "Black Oxide Coating:",
      features: [
        "Adds a decorative, corrosion-resistant finish to ferrous materials.",
        "Reduces light reflection and improves aesthetic appeal.",
      ],
      highlighted: false,
    },
    {
      title: "Painting:",
      features: [
        "Offers customized finishes in various colors and textures.",
        "Enhances corrosion protection and visual appeal.",
      ],
      highlighted: false,
    },
    {
      title: "Electropolishing:",
      features: [
        "Removes surface imperfections and enhances the brightness of metal parts.",
        "Commonly used in food, medical, and aerospace applications.",
      ],
      highlighted: false,
    },
    {
      title: "Sandblasting:",
      features: [
        "Cleans and preps surfaces by removing rust, scale, or old coatings.",
        "Provides a uniform surface texture for subsequent treatments.",
      ],
      highlighted: false,
    },
  ];

  const treatmentBenefits = [
    {
      title: "Corrosion Protection",
      description: "Extends lifespan in harsh conditions.",
      img: vector1
    },
    {
      title: "Aesthetic Enhancement",
      description: "Custom finishes and colors.",
      img: vector2

    },
    {
      title: "Wear Resistance",
      description: "Increases durability and reduces friction.",
      img :vector3
    },
    {
      title: "Non-Stick Surfaces",
      description: "For medical and industrial products.",
      img :vector4
    },
    {
      title: "Electrical & Thermal Properties",
      description: "Enhances conductivity or insulation.",
      img :vector5
    },
    {
      title: "Adhesion Improvement",
      description: "Prepares surfaces for further coatings or paints.",
      img :vector6
    },
  ];
  const industries = [
    {
      icon: plastic,
      title: "Coating Thickness Testing ",
      description: "Verifies the uniformity and durability of applied layers.",
      delay: 0,
    },
    {
      icon: metal,
      title: "Visual and Dimensional Inspection",
      description: "Post-extrusion CNC machining ensures exact dimensions and superior surface finishes.",
      delay: 0.1,
    },
    {
      icon:sheet,
      title: "Salt Spray Testing",
      description: "Evaluates corrosion resistance under simulated conditions.",
      delay: 0.2,
    },
    {
      icon: metal,
      title: "Hardness Testing",
      description: "Measures the enhanced surface properties after processes like nitriding and PVD.",
      delay: 0.3,
    },
    {
      icon: metal,
      title: "Adhesion Testing",
      description: "Ensures coatings adhere securely to the base material.",
      delay: 0.4,
    },
   
    {
      icon: metal,
      title: "Secondary Operations",
      description: "Confirms the finish meets aesthetic and specification requirements.",
      delay: 0.5,
    },
  ];
  return (
    <>
      <HeroSection
        title={
          <p>
            Transforming
            <span className="text-orangeBg">Surface Properties</span> for
            Enhanced Durability and Performance
          </p>
        }
        src={surfaceTreatment}
        alt="Surface Treatment"
        description="Comprehensive surface treatment solutions for superior protection, functionality, and aesthetics."
        longDescription="Surface treatment enhances the durability, functionality, and aesthetics of manufactured components by modifying their surface properties through advanced processes. At Wertex, we provide tailored solutions to meet the demands of industries like aerospace, automotive, defense, electronics, and industrial equipment."
      />

      <Section className="bg-black relative">
        <FlexHeader
          title="Comprehensive Surface Treatment Capabilities"
          description=""
        />
        <p className="text-white mb-8 text-xl2">
          Advanced processes tailored to meet diverse industrial needs.
        </p>
        <Image src={gridBg} alt='grid-background' className='absolute  inset-0' fill />  
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6  border-[#FFFFFF]/45 border-4 p-12">
          {surfaceTreatments.map((treatment, index) => (
            <div key={index} className={`bg-black p-6 border border-white`}>
              <h3 className="text-white font-bold text-xl2 mb-3">
                {treatment.title}
              </h3>
              <ul className="text-white text-xl2 space-y-2 list-disc list-inside">
                {treatment.features.map((feature, featureIndex) => (
                  <li key={featureIndex}>{feature}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>
      <Section className="bg-white mt-0">
        <FlexHeader
          className="text-black text-3xl"
          title="Our Surface Treatment Process"
          description=""
        />
        <p className="text-black text-xl2">
          Meeting the demands of industries with tailored solutions.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8 bg-white">
          {treatmentBenefits.map((benefit, index) => (
            <div key={index} className="bg-[#D0D0D073] p-6 rounded-lg">
              <ImageContainer img={benefit.img} variant="black" className='w-24 h-24' width={62} height={62}/>
              <h3 className="text-black font-bold text-xl2 my-2">
                {benefit.title}
              </h3>
              <p className="text-gray-700 text-xl2">{benefit.description}</p>
            </div>
          ))}
        </div>
      </Section>
      <Section className="bg-background">
        <FlexHeader
          title="Ensuring Superior Quality in Every Treatment"
          description=""
        />
        <p className="text-xl2">
          Advanced testing and inspections for consistent and reliable results.
        </p>
        
      <div className="grid grid-cols-2 gap-4 mt-12" >
        {industries.map((industry, index) => (
      
      <IndustryCard
      key={index}
      icon={industry.icon as StaticImageData}
      title={industry.title}
      description={industry.description}
      delay={industry.delay}
       className="bg-[#2C2C2C] rounded-2xl p-6 "
       descriptionClassName="text-white"
       titleClassName="text-white"
       imageVariant="white"
    />))}
    </div>

      </Section>

      <Footerservice
        title="Your Trusted Partner in Surface Treatment Solutions"
        description=""
        longDescription={
          <ul>
            <li>
              -Comprehensive Solutions: From corrosion protection to non-stick
              finishes, we provide end-to-end surface treatment services.
            </li>
            <li>
              -State-of-the-Art Facilities: Equipped with advanced tools and
              technologies for precise and reliable results.
            </li>
            <li>
              -Industry Expertise: Serving a wide range of sectors, including
              aerospace, automotive, medical, and more.
            </li>
            <li>
              -Commitment to Quality: Rigorous inspections and testing ensure
              flawless, high-performance finishes.
            </li>
          </ul>
        }
        heading=""
        buttonText="Get in touch"
      >
        <div className="my-12">
          <FlexHeader
            title={<p>Elevate Your Components with <br/> Wertex Surface Treatments</p>}
            description="Let Wertex enhance your components with cutting-edge surface treatment solutions designed to deliver unmatched durability, protection, and aesthetics. Contact us today to discuss your project requirements."
            heading=""
          />
        </div>
      </Footerservice>
    </>
  );
};

export default SurfaceTreatment;

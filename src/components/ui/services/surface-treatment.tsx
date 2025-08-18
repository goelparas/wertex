import React from "react";
import HeroSection from "@/components/common/Container/HeroSection-service";
import Section from "@/components/common/Section";
import surfaceTreatment from "@/cdn/images/hero_background.avif";
import {FlexHeader} from "@/components/common/FlexHeader/FlexHeader";
import FooterSection from "../footer-section/footer-section";
import Footerservice from "@/components/common/footer-service/footerservice";
import anodizing from "@/cdn/images/about_us_background.png";
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
    },
    {
      title: "Aesthetic Enhancement",
      description: "Custom finishes and colors.",
    },
    {
      title: "Wear Resistance",
      description: "Increases durability and reduces friction.",
    },
    {
      title: "Non-Stick Surfaces",
      description: "For medical and industrial products.",
    },
    {
      title: "Electrical & Thermal Properties",
      description: "Enhances conductivity or insulation.",
    },
    {
      title: "Adhesion Improvement",
      description: "Prepares surfaces for further coatings or paints.",
    },
  ];

  return (
    <div>
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

      <Section className="bg-black">
        <FlexHeader
          title="Comprehensive Surface Treatment Capabilities"
          description=""
        />
        <p className="text-white mb-8 text-xl2">
          Advanced processes tailored to meet diverse industrial needs.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {surfaceTreatments.map((treatment, index) => (
            <div key={index} className={`bg-black p-6 border border-white`}>
              <div className="w-full h-72 bg-gray-300 mb-4"></div>
              <h3 className="text-white font-bold text-xl2 mb-3">
                {treatment.title}
              </h3>
              <ul className="text-white text-xl2 space-y-2 ">
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
            <div key={index} className="bg-gray-100 p-6 rounded-lg">
              <div className="w-16 h-16 bg-gray-300 rounded mb-4 flex items-center justify-center">
                <div className="w-12 h-12 bg-gray-400 rounded"></div>
              </div>
              <h3 className="text-black font-bold text-xl2 mb-1">
                {benefit.title}
              </h3>
              <p className="text-gray-700 text-xl2">{benefit.description}</p>
            </div>
          ))}
        </div>
      </Section>
      <Section className=" mt-0">
        <FlexHeader
          title="Ensuring Superior Quality in Every Treatment"
          description=""
        />
        <p className="text-xl2">
          Advanced testing and inspections for consistent and reliable results.
        </p>
         
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
            title="Elevate Your Components with Wertex Surface Treatments"
            description="Let Wertex enhance your components with cutting-edge surface treatment solutions designed to deliver unmatched durability, protection, and aesthetics. Contact us today to discuss your project requirements."
            heading=""
          />
        </div>
      </Footerservice>
    </div>
  );
};

export default SurfaceTreatment;

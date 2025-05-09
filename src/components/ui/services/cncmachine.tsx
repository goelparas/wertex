import CncCapabilitiesSection from "@/components/cnc/CncCapabilitiesSection";
import CncFeaturesSection from "@/components/cnc/CncFeaturesSection";
import CncHeroSection from "@/components/cnc/CncHeroSection";
import CncPerformanceSection from "@/components/cnc/CncPerformanceSection";
import CncWorkflowSection from "@/components/cnc/CncWorkflowSection";
import IndustriesAndMaterialsSection from "@/components/cnc/IndustriesAndMaterialsSection";
import Container from "@/components/common/Container/Container";
import React from "react";
import HeroSection from "@/components/common/Container/HeroSection-service";
import vidadigitalin from "@/cdn/images/cnc/vidadigitalin.png";
import FlexHeader from "@/components/common/FlexHeader/FlexHeader";
import Footerservice from "@/components/common/footer-service/footerservice";
type Props = {};

const CncMachine = (props: Props) => {
  return (
    <>
      <HeroSection
        src={vidadigitalin}
        alt="casting hero"
        title="Precision Redefined with"
        description="High-accuracy manufacturing solutions for complex geometries across industries."
        heading=" CNC Machining"
        longDescription={
          "CNC (Computer Numerical Control) machining is a cutting-edge manufacturing process that uses automated, high-speed cutting tools to transform metal and plastic workpieces into intricate geometries with unmatched precision. At Wertex, our CNC capabilities deliver high-quality components tailored to meet the diverse needs of industries like automotive, aerospace, medical, robotics, and electronics."
        }
      />
      <CncCapabilitiesSection />
      <IndustriesAndMaterialsSection />
      <CncWorkflowSection />
      <CncFeaturesSection />
      <CncPerformanceSection />
      <Footerservice
        title="Experience Precision Like Never Before"
        description=""
        heading=""
        longDescription={
          "Let Wertex help you achieve your project goals with precision and reliability. Get in touch with us to learn how our CNC machining solutions can elevate your manufacturing needs."
        }
        buttonText="Contact Us"
      ></Footerservice>
    </>
  );
};

export default CncMachine;

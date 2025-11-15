import React from "react";
import aboutUs from "@/cdn/images/aboutus/about_us.webp";
import vision from "@/cdn/images/visionicon.png";
import mission from "@/cdn/images/missionIcon.png";
import Image from "next/image";
import H1 from "@/components/common/H1/H1";
import { cn } from "@/lib/utils";
import wertex from "@/cdn/images/wertex-hollow.avif";
import wertexWhite from '@/cdn/images/wertex.png'
import TimeLine from "@/components/ui/about/timeline-section/TimeLine";
import JoinSection from "@/components/ui/JoinSection/join-section";
import Section from "@/components/common/Section";
import { FlexHeader } from "@/components/common/FlexHeader/FlexHeader";

type Props = {};
const  Mission = [
  {
    title: "MISSION",
    logo: mission, // Replace with actual logo path
    description:
      "To deliver precision-driven manufacturing solutions that empower industries through innovation, quality, and collaboration.",
  },
  {
    title: "VISION",
    logo: vision, // Replace with actual logo path
    description:
      "To be the world’s most trusted partner in manufacturing, delivering solutions that shape the future of industries.",
  },
]
const About = (props: Props) => {
  
  return (
    <Section className="m-0 lg:m-0 p-0 lg:p-0">
      <div className="h-dvh  relative  overflow-hidden">
        <Image src={aboutUs} alt="AboutUs" fill  className="w-full object-cover bottom-0 left-0" />
        <Section className="absolute bottom-0  left-0  w-full bg-gradient-to-t  max-h-[60dvh]   from-black via-black/40 to-black/10 backdrop-blur-lg z-10">
          <div className="flex flex-col  items-center justify-between gap-2 ">
            <H1 className="text-lg mx-auto lg:text-3xl text-center">
              Rooted in Heritage, Driven by
              <span className="text-orangeBg"> Technology</span>
            </H1>
            <p className=" text-center text-xsm md:text-xs lg:leading-normal  lg:text-xl2">  
              Wertex was born out of a vision to redefine precision
              manufacturing. Nestled in Coimbatore, a city renowned for its
              engineering legacy, we’ve embraced the spirit of innovation and
              excellence that the region is celebrated for. From humble
              beginnings, we’ve grown into a trusted partner for industries
              worldwide, delivering solutions that combine cutting-edge
              technology with unmatched craftsmanship.
            </p>
            <p className=" text-center text-xsm md:text-xs lg:leading-normal lg:text-xl2">
              Our journey is built on the foundation of engineering expertise, a
              relentless commitment to quality, and a passion for solving
              complex challenges. Whether it's automotive, aerospace, medical,
              or industrial applications, we thrive on turning bold ideas into
              reality. Every component we create carries the hallmark of
              precision, collaboration, and trust.{" "}
            </p>
            <p className=" text-center text-xsm md:text-xs lg:leading-normal lg:text-xl2">
              At Wertex, we don’t just manufacture parts—we create
              possibilities. With a focus on sustainability, scalability, and
              customer-centric solutions, we are shaping the future of
              manufacturing, one innovation at a time.
            </p>
          </div>
        </Section>
      </div>

      <Section className="flex  bg-transparent justify-between gap-4  lg:gap-12">
        
        
        {Mission.map(({ logo, title, description }) => (
          <div className="flex flex-col  gap-4 w-full">
            <div className="flex items-center w-full justify-start gap-1 h-8 md:hidden">
              <div className="w-9 h-9 p-1 relative flex items-center justify-center bg-borderGray">
              <Image src={logo} alt={title}  fill className="object-contain"/>
              </div>
              <H1 className="text-xxs  block  lg:text-xl2">{title}</H1>
            </div>
 <div className={cn(
            'group  md:w-full aspect-square  h-32 w-40 md:h-44 lg:h-[21rem] hover:cursor-pointer shrink-0 relative bg-background hover:scale-105 transition-all duration-300'
          )}>

            <div className="w-full h-full flex flex-col items-center justify-between z-20 p-2 lg:p-3 bg-background relative border border-white">
              
              <div className="z-20  justify-start items-center w-full gap-2 lg:gap-4 hidden md:flex">
                <Image src={logo} alt={title} width={42} height={42} />
                <H1 className="text-xxs hidden lg:block  lg:text-xl2">{title}</H1>
              </div>
              <h1 className="text-start text-xxs md:text-xs leading-normal lg:text-xl2 lg:leading-relaxed">{description}</h1>
            </div>
          
            <div className="w-full h-full lg:block border border-white bg-transparent absolute -top-1 p-2 lg:-top-4 -left-1 lg:-left-4  transition-all duration-300 z-10 ease-in-out  group-hover:bg-orangeBg" />
          </div>
          </div>
            
        ))}
       
        
      </Section>
      <Section className=" bg-custom-gradient ">
        <div className="md:w-4/5 h-16 md:h-48 relative mx-auto">
          <Image src={wertexWhite} alt="logo" fill className="object-contain" />
          <H1 className="text-end absolute -bottom-8 right-4 md:right-36 text-lg md:text-xl lg:text-3xl">RoadMap</H1>
        </div>
        <TimeLine />
      </Section>
      <Section>
        <div className="flex justify-between items-center">
           <FlexHeader title="OUR LOGO" description="Wertex logo representing precision manufacturing and innovative solutions." />
        </div>
        <div className="border h-80 lg:h-[37.5rem] flex flex-col justify-around p-4 lg:p-12 my-10">
          <div className="relative w-full lg:w-3/5 h-44 mx-auto">
            <Image src={wertex} fill alt="wertex logo" className="object-contain" />
          </div>
          <p className="text-center w-full mt-5 lg:mt-10 text-xs lg:text-xl2 lg:leading-relaxed">
            The Wertex logo reflects our commitment to engineering excellence
            and innovation. Its bold, geometric design symbolizes precision,
            trust, and collaboration—core values that define our approach. The
            angular elements nod to Coimbatore’s rich industrial heritage,
            blending tradition with cutting-edge solutions. The logo is a mark
            of our journey to deliver world-class manufacturing expertise,
            locally inspired and globally driven.
          </p>
        </div>
      </Section>
      <Section className="mt-0">
      <FlexHeader title="Talk to Us"  description="Business professionals collaborating with Wertex engineers to discuss custom manufacturing solutions." />
      <JoinSection />
      </Section>
      
    </Section>
  ) ;
};

export default About;

import React from "react";
import aboutUs from "@/cdn/images/about_us_background.png";
import vision from "@/cdn/images/visionicon.png";
import mission from "@/cdn/images/missionIcon.png";
import Image from "next/image";
import H1 from "@/components/common/H1/H1";
import { cn } from "@/lib/utils";
import wertex from "@/cdn/images/wertex-hollow.avif";
import TimeLine from "@/components/ui/about/timeline-section/TimeLine";
import JoinSection from "@/components/ui/JoinSection/join-section";

type Props = {};


const About = (props: Props) => {
  return (
    <>
      <div className="mt-44 w-[95%] mx-auto">
        <div className="w-full h-svh  relative  overflow-hidden ">
          <Image
            src={aboutUs}
            alt="AboutUs"
            height={950}
            className="w-full "
          />
          <div className="absolute bottom-0   w-full    bg-black/30 backdrop-blur-xl">
            <div className="flex flex-col  items-center justify-between gap-5 p-4 ">
              <H1>
                Rooted in Heritage, Driven by{" "}
                <span className="text-orangeBg">Technology</span>
              </H1>
              <p className=" text-center md:text-xl">
                Wertex was born out of a vision to redefine precision
                manufacturing. Nestled in Coimbatore, a city renowned for its
                engineering legacy, we’ve embraced the spirit of innovation and
                excellence that the region is celebrated for. From humble
                beginnings, we’ve grown into a trusted partner for industries
                worldwide, delivering solutions that combine cutting-edge
                technology with unmatched craftsmanship.
              </p>
              <p className=" text-center md:text-xl">
                Our journey is built on the foundation of engineering expertise,
                a relentless commitment to quality, and a passion for solving
                complex challenges. Whether it's automotive, aerospace, medical,
                or industrial applications, we thrive on turning bold ideas into
                reality. Every component we create carries the hallmark of
                precision, collaboration, and trust.{" "}
              </p>
              <p className=" text-center md:text-xl">
                At Wertex, we don’t just manufacture parts—we create
                possibilities. With a focus on sustainability, scalability, and
                customer-centric solutions, we are shaping the future of
                manufacturing, one innovation at a time.
              </p>
            </div>
          </div>
        </div>

        <div className="flex gap-5  w-full  mt-10 h-max">
          {[
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
          ].map(({ logo, title, description }) => (
            <div
              className={cn(
                "w-max h-max lg:w-1/2 lg:h-80  flex flex-col p-4 items-center justify-between  border border-white   bg-black relative"
              )}
              key={title}
            >
              <div className="w-full h-full lg:block border border-white absolute -top-2 -left-2 transition-all -z-10  ease-in-out hover:bg-orangeBg hidden" />
              <div className="flex gap-4 justify-start w-full">
                <Image src={logo} alt={title} className="w-8 h-8" />
                <H1>{title}</H1>
              </div>
              <p>{description}</p>
            </div>
          ))}
        </div>
        <div className="w-full bg-custom-gradient p-5 my-10">
          <div className="md:w-4/5 md:h-48 relative mx-auto">
            <Image src={wertex} alt="logo" fill />
            <H1 className="text-end">RoadMap</H1>
          </div>
          <TimeLine />
        </div>
        <div className="w-full my-8 ">
          <div className="flex justify-between items-center">
            <H1>OUR LOGO</H1>
            <p className="text-xl2">
              Wertex logo representing precision <br />
              manufacturing and innovative solutions.
            </p>
          </div>
          <div className="border h-[37.5rem] flex flex-col justify-around p-12 my-10">
            <div className="relative w-3/5 h-44 mx-auto">
              <Image src={wertex} fill alt="wertex logo" />
            </div>
            <p className="text-center w-full mt-10 text-xl2">
              The Wertex logo reflects our commitment to engineering excellence
              and innovation. Its bold, geometric design symbolizes precision,
              trust, and collaboration—core values that define our approach. The
              angular elements nod to Coimbatore’s rich industrial heritage,
              blending tradition with cutting-edge solutions. The logo is a mark
              of our journey to deliver world-class manufacturing expertise,
              locally inspired and globally driven.
            </p>
          </div>
        </div>
        <div className="flex justify-between items-center mt-10">
          <H1 className="capitalize">Talk to Us </H1>
          <p className="text-xl2">
            Business professionals collaborating with Wertex <br />
            engineers to discuss custom manufacturing solutions.
          </p>
        </div>
        <JoinSection />
      </div>
    </>
  );
};

export default About;

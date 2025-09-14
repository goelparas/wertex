import React from "react";
import CustomImage from "@/components/common/Image/Image";
import logo from "@/cdn/images/logo.avif";
import bgDesktop from "@/cdn/images/hero_background.avif";
import bgMobile from "@/cdn/images/hero_background_mobile.avif";
import Image from "next/image";
import WhatWeOffer from "./what-we-offer";
import { BrandsShowCase } from "./brands-showcase";
import { TESTIMONIALS } from "@/utils/constants/constant";
import ServicesSection from "./services-section";
import Inovation from "./inovation";
import CountryWork from "./country-work";
import Testimonials from "@/components/ui/Testimonials";

const HeroSection = () => {
  const statsData = [
    { value: "38", label: "Year of Growth" },
    { value: "3000+", label: "Projects completions" },
    { value: "300+", label: "satisfied clients" },
  ];
  return (
    <>
      <div className="relative h-svh w-screen  flex items-center justify-center border-b-[1.5px] border-[#3F3F3F] bg-background overflow-x-hidden">
        <div className="absolute inset-0">
          <CustomImage
            mobileImage={{ path: bgMobile }}
            desktopImage={{ path: bgDesktop }}
            fill
            alt="background"
          />
        </div>

        <span className="absolute  bottom-6 mx-auto lg:hidden">
          <a
            className=" bg-custom-gradient font-bold text-xs sm:text-sm md:text-[1rem] px-6 py-3 sm:px-8 sm:py-4   clipped uppercase"
            href="mailto:contact@wertex.in?subject=Query%20Regarding%20Manufacturing&body=Hello,%0A%0AI%20have%20some%20queries%20regarding%20your%20manufacturing%20process.%0A%0AThank%20you."
          >
            Contact us
          </a>
        </span>
        <div className="absolute w-[20rem]  sm:w-[40rem] md:w-[49rem]   h-[12rem] left-1/2 top-[40%] -translate-x-1/2 -translate-y-[40%]">
          <div className="relative flex flex-col sm:flex-row gap-2  items-start sm:items-center justify-between  mb-2">
            <p className="font-medium text-xxs lg:text-xs">
              Since <br />
              2010
            </p>
            <figure className="w-full relative  h-16 sm:h-[9rem] md:h-[10rem]">
              <Image src={logo} alt="logo" quality={100} fill />
            </figure>
          </div>
          <h1 className="font-medium text-sm sm:text-2xl text-center">
            Shaping the Future of Manufacturing
          </h1>
        </div>
        
        <div className="absolute m-2 sm:m-12  left-0 bottom-20 lg:bottom-5 right-0 ">
          <div className="grid  grid-cols-3 gap-8 sm:gap-32  mx-[2%]">
            {statsData.map((stat) => (
              <div
                className="flex items-center justify-center sm:px-2"
                key={stat.value}
              >
                <div className="w- flex flex-col">
                  <h1 className="font-bold text-sm sm:text-4xl text-center">
                    {stat.value}
                  </h1>
                  <div className="flex justify-between">
                    <div className="w-1/2"/>
                   <p className="uppercase text-start text-[6px] sm:text-sm">
                    {stat.label}
                  </p>{" "}
                  </div>
                  
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <WhatWeOffer />

      <div className="mt-8 border-t border-t-smokeWhite flex flex-col  gap-8 items-center justify-between p-8 w-full">
        <div className="flex flex-col lg:flex-row justify-between w-full items-start lg:items-center py-6 gap-2">
          <h1 className="font-bold lg:text-2xl uppercase hidden lg:block  ">
            OUR TRACK RECORD OF <br /> TRUSTED PARTNERS AND CLIENTS
          </h1>
          <h1 className="font-bold text-xl  uppercase lg:hidden">
            OUR TRACK RECORD OF TRUSTED PARTNERS AND CLIENTS
          </h1>
          <p className="font-normal  text-[10px] md:text-xs lg:text-lg  md:w-[30%] text-start">
            We've been fortunate to work with a lot of awesome people on even
            more awesome projects.
          </p>
        </div>
        <div className="w-full">
          <BrandsShowCase items={TESTIMONIALS.slice(0, 4)} />
          <BrandsShowCase items={TESTIMONIALS.slice(4, 8)} direction="right" />
          <BrandsShowCase items={TESTIMONIALS.slice(8)} />
        </div>
      </div>
      <ServicesSection />
      <Inovation />

      <CountryWork />
      <Testimonials />
    </>
  );
};

export default HeroSection;

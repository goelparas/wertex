import React from "react";
import {FlexHeader} from "../FlexHeader/FlexHeader";
import Button from "../Button/button";
import imag from "@/cdn/images/wtx_logo_service.png";
import { ImageContainer } from "../Container/ImageGrid";
import Section from "../Section";
import Image from "next/image";
import grid from "@/cdn/images/footer-grid.png";
type Props = {
  title: string;
  description: string;
  longDescription: string | React.ReactNode;
  heading: string;
  buttonText: string;
  buttonLink?: string;
  children?: React.ReactNode;
};

const Footerservice = ({
  title,
  description,
  longDescription,
  heading,
  buttonText,
  children,
}: Props) => {
  return (

    <Section className="lg:p-6 p-0  bg-transparent relative">
      
      <div className="lg:bg-borderGray relative flex items-start flex-row justify-between p-3 lg:p-8 gap-6 ">
        <div className="flex-col gap-12  lg:justify-between items-start lg:items-start w-full lg:w-3/5  flex ">
          <FlexHeader
            title={title}
            description={description}
            heading={heading}
            className=""
          />
          <p className="leading-relaxed text-xs lg:text-xl2 text-white">{longDescription}</p>
        </div>
          <ImageContainer className="w-80 h-80" img={imag}   height={238} width={238}
           size={{
            smClassName: 'w-16 h-16',
            smHeight: 42,
            smWidth: 42,
           }}
         />
         <Image src={grid} alt="grid"fill className="lg:hidden"/>
      </div>
      <div className="p-4 lg:p-0">

      {children}
     

      <Button className="w-full rounded-none text-center py-3  mt-8">
        <p className="text-center text-white font-bold text-xs leading-relaxed lg:text-xl2 w-full uppercase">
          {buttonText}
        </p>
      </Button>
      </div>
    </Section>

  );
};

export default Footerservice;

'use client'
import React from "react";
import {FlexHeader} from "../FlexHeader/FlexHeader";
import Button from "../Button/button";
import imag from "@/cdn/images/wtx_logo_service.png";
import { ImageContainer } from "../Container/ImageGrid";
import Section from "../Section";
import { useWindowSize } from "@/utils/hooks/useWindowSize";

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
  const { isMobile } = useWindowSize()
  return (

    <Section className="lg:p-6 bg-transparent">
      <FlexHeader
            title={title}
            description={description}
            heading={""}
            className="w-4/5 lg:hidden"
      />

      <div className="bg-borderGray flex items-center lg:items-start justify-between p-3 lg:p-8">
        <div className=" flex-col gap-12 justify-between items-center lg:items-start w-3/5  flex">
          <FlexHeader
            title={title}
            description={description}
            heading={heading}
            className="hidden lg:block"
          />
          <p className="leading-relaxed text-xs lg:text-xl2 text-white">{longDescription}</p>
        </div>
        <ImageContainer className="w-14 h-14 flex-none lg:w-1/5 lg:h-80" img={imag} height={isMobile ? 40 : 238} width={isMobile ? 40 : 238} />
      </div>

      {children}

      <Button className="w-full rounded-none text-center py-3 lg:py-6 mt-8">
        <p className="text-center text-white font-bold text-xs lg:text-xl2 w-full uppercase">
          {buttonText}
        </p>
      </Button>
    </Section>

  );
};

export default Footerservice;

import React from "react";
import {FlexHeader} from "../FlexHeader/FlexHeader";
import Button from "../Button/button";
import imag from "@/cdn/images/wtx_logo_service.png";
import { ImageContainer } from "../Container/ImageGrid";
import Section from "../Section";

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

    <Section className="p-6 bg-transparent">
      <div className="bg-borderGray flex justify-between p-8">
        <div className="flex flex-col gap-12 justify-between items-start w-3/5">
          <FlexHeader
            title={title}
            description={description}
            heading={heading}
          />
          <p className="text-xl2 text-white">{longDescription}</p>
        </div>
        <ImageContainer className="w-1/5 h-80" img={imag} height={238} width={238} />
      </div>
      {children}
      <Button className="w-full rounded-none text-center py-6 mt-8">
        <p className="text-center text-white font-bold text-2xl w-full uppercase">
          {buttonText}
        </p>
      </Button>
    </Section>

  );
};

export default Footerservice;

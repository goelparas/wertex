import React from "react";
import FlexHeader from "../FlexHeader/FlexHeader";
import Button from "../Button/button";
import Image, { StaticImageData } from "next/image";
import imag from "@/cdn/images/wtx_logo_service.png";
import grid from "@/cdn/images/cross.png";

type Props = {
  title: string;
  description: string;
  longDescription: string |  React.ReactNode;
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
  buttonLink,
  children,
}: Props) => {
  return (
    <div>
      <div className="p-6">
        <div className="bg-borderGray flex justify-between p-8">
          <div className="flex flex-col gap-12 justify-between items-start w-1/2">
            <FlexHeader
              title={title}
              description={description}
              heading={heading}
            />
            <p className="text-xl2 text-white">{longDescription}</p>
          </div>
          <div className="flex flex-col items-center justify-center relative">
            <Image src={imag} alt="casting main" width={230} height={230} />
            <Image
              src={grid}
              alt="casting main"
              width={230}
              height={230}
              className="absolute"
            />
          </div>
        </div>
        {children}
        <Button className="w-full rounded-none text-center py-6 mt-8">
          <p className="text-center text-white font-bold text-2xl w-full uppercase">
            {buttonText}
          </p>
        </Button>
      </div>
    </div>
  );
};

export default Footerservice;

import React from "react";
import { HeaderBox } from "../HeaderBox/HeaderBox";
import { cn } from "@/lib/utils";

const FlexHeader = ({
  title,
  description,
  heading,
  className,
}: {
  title: string;
  description: string;
  heading?: string;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "flex justify-between items-center w-full gap-6",
        className
      )}
    >
      <h1 className="text-3xl font-bold w-3/5  ">
        {title} { heading && <span className="text-orangeBg">{heading}</span>}
      </h1>
      <p className="text-xl2 text-white w-2/5">{description}</p>
    </div>
  );
};

export default FlexHeader;

export const FlexHeader2 = ({
  heading,
  description,
  className,
}: {
  description: string;
  heading: string;
  className?: string;
}) => {
  return (
    <>
      <h1 className={`text-3xl  font-bold ${className}`}>{heading}</h1>
      <span className={`text-xl2 ${className}`}>{description}</span>
    </>
  );
};

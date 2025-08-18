import React, { ReactElement } from "react";
import { cn } from "@/lib/utils";

export const FlexHeader = ({
  title,
  description,
  heading,
  className,
  headingClassName,
  descriptionClassName,
}: {
  title: string | React.ReactNode;
  description: string;
  heading?: string;
  className?: string;
  headingClassName?: string;
  descriptionClassName?: string;
}) => {
  return (
    <div
      className={cn(
        "flex justify-between items-start w-full gap-6",
        className
      )}
    >
      <h1 className={cn("text-3xl font-bold w-3/5 ", headingClassName)}>
        {title} {heading && <span className="text-orangeBg">{heading}</span>}
      </h1>
      <p className={cn(" text-white w-1/2 text-right", descriptionClassName)} style={{
        fontSize:"22px"
      }} >{description}</p>
    </div>
  );
};

 

export const FlexHeader2 = ({
  heading,
  description,
  className,
}: {
  description:  string | ReactElement ;
  heading: string | ReactElement;
  className?: string;
}) => {
  const Heading = typeof heading === 'string' ? heading : heading;
  
  return (
    <>
      <h1 className={cn(`text-3xl font-bold mb-4`, className)}>
        {typeof heading === 'string' ? heading : heading}
      </h1>
      <span className={cn(`text-xl`, className)}>{description}</span>
    </>
  );
};
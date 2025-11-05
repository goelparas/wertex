import React, { ReactElement } from "react";
import { cn } from "@/lib/utils";

export const FlexHeader = ({
  title,
  description,
  heading,
  className,
  headingClassName,
  descriptionClassName,
  id,
}: {
  title: string | React.ReactNode;
  description: string | ReactElement;
  heading?: string;
  className?: string;
  headingClassName?: string;
  descriptionClassName?: string;
  id?: string;
}) => {
  return (
    <div
      className={cn(
        "flex flex-col lg:flex-row justify-between items-start w-full lg:gap-6",
        className
      )}
      id={id}
    >
      <h1 className={cn("text-lg lg:text-3.5xl leading-relaxed  font-bold w-full lg:w-3/5 ", headingClassName)}>
        {title} {heading && <span className="text-orangeBg">{heading}</span>}
      </h1>
      <p className={cn("text-sm lg:text-xl2 leading-relaxed text-white w-full lg:w-1/2 text-left lg:text-right", descriptionClassName)}>{description}</p>
    </div>
  );
};

 

export const FlexHeader2 = ({
  heading,
  description,
  className,
  id
}: {
  description:  string | ReactElement ;
  heading: string | ReactElement;
  className?: string;
  id?: string;
}) => {
  const Heading = typeof heading === 'string' ? heading : heading;
  
  return (
    <>
      <h1 className={cn(`text-lg  lg:text-3.5xl font-bold lg:mb-4`, className)} id={id}>
        {Heading}
      </h1>
      <span className={cn(`text-xs lg:text-xl`, className)}>{description}</span>
    </>
  );
};
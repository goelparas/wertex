import React, { ReactNode } from "react";

interface HeadingProps {
  children: ReactNode;
  className?: string;
}

const H1: React.FC<HeadingProps> = ({ children, className = "" }) => {
  return (
    <h1 className={`font-bold lg:text-2xl uppercase hidden lg:block ${className}`}>
      {children}
    </h1>
  );
};

export default H1;

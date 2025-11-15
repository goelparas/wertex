import React, { ReactNode } from "react";

interface HeadingProps {
  children: ReactNode;
  className?: string;
}

const H1: React.FC<HeadingProps> = ({ children, className = "" }) => {
  return (
    <h1 className={`font-bold text-3xl uppercase  ${className}`}>
      {children}
    </h1>
  );
};

export default H1;

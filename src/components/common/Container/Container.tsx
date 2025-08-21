import { cn } from "@/lib/utils";
import React from "react";

type Props = {};

const Container = ({ children, className }: { children: React.ReactNode, className?: string }) => {
  return <div className={cn("w-full mx-auto ", className)}>
    {children}
  </div>;
};

export default Container;

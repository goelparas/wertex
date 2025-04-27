import { cn } from "@/lib/utils";
import React from "react";

type Props = {};

const Container = ({ children  , className}: { children: React.ReactNode , className?: string }) => {
  return <div className={cn("mt-44 w-[95%] mx-auto" , className)}>
    {children}
  </div>;
};

export default Container;

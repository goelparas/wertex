import { cn } from '@/lib/utils';
import React from 'react';

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

const Section: React.FC<ContainerProps> = ({ children, className }) => {
  return (
    <div className={cn(`p-4 mt-6 md:p-6 md:mt-8  lg:mt-12  lg:p-12 overflow-x-hidden`, className)}>
      {children}
    </div>
  );
  
};


export const ServiceSection = ({children, className}:{children:React.ReactNode, className?:string})=>{
  return (
    <div className={cn('bg-background',className)}>
      {children}
    </div>
  );
};

export default Section; 
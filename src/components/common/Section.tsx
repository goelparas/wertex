import { cn } from '@/lib/utils';
import React from 'react';

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

const Section: React.FC<ContainerProps> = ({ children, className }) => {
  return (
    <div className={cn(`bg-[#242424]  p-4 mt-3 lg:mt-12 lg:p-12 overflow-x-hidden`, className)}>
      {children}
    </div>
  );
};

export default Section; 
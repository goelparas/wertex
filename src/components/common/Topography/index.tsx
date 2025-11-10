import { cn } from '@/lib/utils';
import React, { ReactNode } from 'react';

interface TypographyProps {
  children: ReactNode;
  className?: string;
}

const H1: React.FC<TypographyProps> = ({ children, className }) => (
  <h1
    className={cn(
      'text-3xl sm:text-4xl md:text-5xl lg:text-[72px] font-bold leading-tight text-center',
      className
    )}
  >
    {children}
  </h1>
);

const H2: React.FC<TypographyProps> = ({ children, className }) => (
  <h2
    className={cn(
      'text-2xl sm:text-3xl md:text-4xl lg:text-[56px] lg:leading-[1] font-semibold ',
      className
    )}
  >
    {children}
  </h2>
);

const H3: React.FC<TypographyProps> = ({ children, className }) => (
  <h3
    className={cn(
      'text-xl sm:text-2xl md:text-3xl lg:text-4xl font-medium leading-normal',
      className
    )}
  >
    {children}
  </h3>
);
const H4: React.FC<TypographyProps> = ({ children, className }) => (
  <h3
    className={cn(
      'text-lg sm:text-xl md:text-2xl lg:text-3xl font-medium leading-normal',
      className
    )}
  >
    {children}
  </h3>
);

const Paragraph: React.FC<TypographyProps> = ({ children, className }) => (
  <p className={cn('text-sm sm:text-lg  leading-normal', className)}>
    {children}
  </p>
);
const MutedParagraph: React.FC<TypographyProps> = ({ children, className }) => (
  <p
    className={cn(
      'text-sm sm:text-base  leading-normal text-muted',
      className
    )}
  >
    {children}
  </p>
);

export { H1, H2, H3, H4, Paragraph, MutedParagraph };

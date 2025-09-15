'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { ImageContainer } from '../common/Container/ImageGrid';
import { StaticImageData } from 'next/image';

interface IndustryCardProps {
  icon: StaticImageData;
  title: string;
  description: string;
  delay?: number;
  className?: string;
  imageVariant?: "black" | "white";
  titleClassName?: string;      // ✅ custom classes for <p>
  descriptionClassName?: string; // ✅ custom classes for <span>
}

export default function IndustryCard({
  icon,
  title,
  description,
  delay = 0,
  className,
  imageVariant = "black",
  titleClassName,
  descriptionClassName,
}: IndustryCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      className={cn(
        "bg-[#EEEEEE] rounded-lg p-4 text-xl2",
        "flex items-center gap-4",
        "transition-all duration-300 hover:bg-muted/80",
        className
      )}
    >
      <ImageContainer
        img={icon}
        className="w-16 h-16"
        variant={imageVariant}
        width={44}
        height={44}
      />
      <div>
        <p className={cn("font-bold text-black", titleClassName)}>
          {title}:{" "}
          <span className={cn("text-black font-normal", descriptionClassName)}>
            {description}
          </span>
        </p>
      </div>
    </motion.div>
  );
}

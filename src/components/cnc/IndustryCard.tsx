"use client";

import React, { ReactNode } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface IndustryCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  delay?: number;
}

export default function IndustryCard({ 
  icon, 
  title, 
  description,
  delay = 0 
}: IndustryCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      className={cn(
        "bg-muted rounded-lg p-4",
        "flex items-center gap-4",
        "transition-all duration-300 hover:bg-muted/80"
      )}
    >
      <div className="p-2 bg-background rounded-full">
        {icon}
      </div>
      <div>
        <h3 className="font-bold">{title}:</h3>
        <p className="text-muted-foreground text-sm">{description}</p>
      </div>
    </motion.div>
  );
}
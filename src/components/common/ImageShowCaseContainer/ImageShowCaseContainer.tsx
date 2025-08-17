"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {ShowcaseItem, variantStyles} from './constant'
import { cn } from "@/lib/utils"
import Image from "next/image"
 

  export interface ShowcaseProps {
    items: ShowcaseItem[]
    autoRotateInterval?: number
    variant?: "dark" | "aluminiumExtrusion" | "forging"
    hoverVariant?: "scale" | "glow" | "lift" | "slide"
    backgroundColor?: string
    className?: string
    headerText?: string
    descriptionText?: string
  }



export default function DynamicShowcase({
  items,
  variant = "dark",
  className = "",
  headerText = "Showcase",
  descriptionText,
}: ShowcaseProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  

  const styles = variantStyles[variant]
  const handleItemClick = (index: number) => {
    setCurrentIndex(index)
  }

  const currentItem = items[currentIndex]

  if (!currentItem) return null

  const getItemTitle = (item: ShowcaseItem) => {
    const titleKey = Object.keys(item).find((key) => key !== "image" && key !== "detail")
    return titleKey ? item[titleKey] : "Item"
  }

  return (
    <motion.div
      className={cn("relative w-full  h-[90svh] overflow-hidden", styles.container, className)}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      <div className="grid lg:grid-cols-2 h-full ">
        {/* Image Section */}
        <div className="relative  flex flex-col justify-center  h-full max-w-xl">
          {descriptionText && (
            <motion.p
              className={cn("text-xl2 mb-6 leading-relaxed", styles.description)}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              {descriptionText}
            </motion.p>
          )}

          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              className={cn("relative overflow-hidden border-2 flex-1 ", styles.imageContainer)}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <div className="h-full relative">
                <Image
                  src={currentItem.image || "/placeholder.svg"}
                  alt={getItemTitle(currentItem)}
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Content Section */}
        <div className={cn("flex flex-col justify-center h-full", styles.contentContainer)}>
          <motion.h2
            className={cn("text-xl2   font-medium", styles.title)}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            {headerText}
          </motion.h2>

          <div className="space-y-3 flex-1">
            {items.map((item, index) => (
              <motion.div
                key={index}
                className={cn(
                  "group flex items-center justify-between p-4 relative transition-all duration-300 cursor-pointer",
                  index === currentIndex ? styles.itemHighlighted : styles.itemDefault
                )}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 + index * 0.05 }}
                whileHover={{ x: 4 }}
                onClick={() => handleItemClick(index)}
              >
             
                  <p className="text-5xl font-semibold">{getItemTitle(item)}</p>
                 
                <motion.div
                  className="bg-black  h-[4px] absolute bottom-0 left-0"
                  initial="initial"
                  animate={index === currentIndex ? "selected" : "initial"}
                  whileHover="hover"
                  variants={{
                    initial: {
                      width: "0%",
                      opacity: 1,

                    },
                    hover: {
                      width: "100%",
                      opacity: 1,
                    },
                    selected: {
                      width: "100%",
                      opacity: 1,
                    },
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 200,
                    damping: 25,
                    duration: 0.3,
                  }}
                />
              </motion.div>
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              className={cn("mt-6 p-4  rounded-2xl", styles.itemBox)}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className={cn("font-semibold text-2xl mb-2", styles.title)}>{getItemTitle(currentItem)}</h3>
              <p className={cn("text-xl", styles.description)}>{currentItem.detail}</p>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  )
}




 


 
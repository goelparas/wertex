 "use client"

import { useState, type ReactElement, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { type ShowcaseItem, variantStyles } from "./constant"
import { cn } from "@/lib/utils"
import Image from "next/image"

export interface ShowcaseProps {
  items: ShowcaseItem[]
  autoRotateInterval?: number
  variant?: "dark" | "aluminiumExtrusion" | "forging"
  hoverVariant?: "scale" | "glow" | "lift" | "slide"
  backgroundColor?: string
  className?: string
  headerText?: string | ReactElement
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
  const carouselRef = useRef<HTMLDivElement>(null)

  const styles = variantStyles[variant]

  const handleItemClick = (index: number) => {
    setCurrentIndex(index)

    if (carouselRef.current) {
      const itemWidth = carouselRef.current.scrollWidth / items.length
      carouselRef.current.scrollTo({
        left: itemWidth * index,
        behavior: "smooth",
      })
    }
  }

  const currentItem = items[currentIndex]

  if (!currentItem) return null

  const getItemTitle = (item: ShowcaseItem) => {
    const titleKey = Object.keys(item).find((key) => key !== "image" && key !== "detail")
    return titleKey ? item[titleKey] : "Item"
  }

  return (
    <motion.div
      className={cn("relative w-full max-h-svh overflow-hidden", styles.container, className)}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      {/* Desktop Layout - unchanged */}
      <div className="hidden lg:grid lg:grid-cols-2 h-full">
        {/* Image Section */}
        <div className="relative flex flex-col justify-center h-full max-w-xl">
          {descriptionText && (
            <motion.p
              className={cn("text-xl2 mb-6 leading-normal", styles.description)}
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
              className={cn("relative overflow-hidden border-2 flex-1", styles.imageContainer)}
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
                  fill
                />
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Content Section */}
        <div className={cn("flex flex-col justify-center h-full", styles.contentContainer)}>
          <motion.h2
            className={cn("text-lg lg:text-xl2 font-medium mb-8", styles.title)}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            {headerText}
          </motion.h2>

          <div className="space-y-2 lg:space-y-3 flex-1">
            {items.map((item, index) => (
              <motion.div
                key={index}
                className={cn(
                  "group flex items-center justify-between py-2 lg:py-4 w-min hover:border-black pl-0 relative transition-all duration-300 cursor-pointer",
                  index === currentIndex ? styles.itemHighlighted : styles.itemDefault,
                )}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 + index * 0.05 }}
                whileHover={{ x: 4 }}
                onClick={() => handleItemClick(index)}
              >
                <p className="text-xl lg:text-5xl font-semibold text-nowrap pr-2">{getItemTitle(item)}</p>

                <motion.div
                  className="bg-black h-1 lg:h-2 absolute bottom-0 left-0 z-10"
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
                <motion.div
                  className="bg-white border-2 h-1 lg:h-2 absolute bottom-0 left-0 w-full"
                  initial="initial"
                  animate={index === currentIndex ? "selected" : "initial"}
                  whileHover="hover"
                  variants={{
                    initial: {
                      opacity: 0,
                    },
                    hover: {
                      width: "50%",
                      opacity: 1,
                    },
                    selected: {
                      width: "50%",
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
              className={cn("mt-6 p-4 rounded-2xl", styles.itemBox)}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className={cn("font-semibold text-lg lg:text-2xl mb-2", styles.title)}>
                {getItemTitle(currentItem)}
              </h3>
              <p className={cn("text-lg lg:text-xl", styles.description)}>{currentItem.detail}</p>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      <div className="lg:hidden h-full flex flex-col w-full p-2">
        <div
          ref={carouselRef}
          className="flex-1 overflow-x-auto overflow-y-hidden snap-x snap-mandatory scrollbar-hide"
          style={{ scrollBehavior: "smooth" }}
        >
          <div className="flex h-full gap-4">
            {items.map((item, index) => (
              <div key={index} className="min-w-full h-full snap-center flex flex-col">
                {/* Image */}
                <div
                  className={cn(
                    "relative  aspect-square h-72 w-full  overflow-hidden border-2 mb-6",
                    styles.imageContainer,
                  )}
                >
                  <Image
                    src={item.image || "/placeholder.svg"}
                    alt={getItemTitle(item)}
                    className="w-full h-full object-cover"
                    fill
                  />
                </div>
{/* Header Section */}
<div>
          <motion.h2
            className={cn("text-sm md:text-3xl font-medium mb-3", styles.title)}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            {headerText}
          </motion.h2>
          {descriptionText && (
            <motion.p
              className={cn("text-xs md:text-lg leading-normal", styles.description)}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              {descriptionText}
            </motion.p>
          )}
        </div>

                <div className="space-y-1 w-full">
                  {items.map((listItem, listIndex) => (
                    <motion.div
                      key={listIndex}
                      className={cn(
                        "cursor-pointer transition-all duration-300 relative pb-2 w-min",
                        listIndex === index ? "opacity-100" : "opacity-40",
                      )}
                      onClick={() => handleItemClick(listIndex)}
                    >
                      <p
                        className={cn(
                          "text-lg md:text-3xl font-semibold text-nowrap",
                          listIndex === index ? "font-bold" : "font-normal",
                        )}
                      >
                        {getItemTitle(listItem)}
                      </p>
                         <motion.div
                        className="bg-black h-1 lg:h-2 absolute bottom-0 left-0 z-10"
                        initial="initial"
                        animate={listIndex === currentIndex ? "selected" : "initial"}
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
                          damping: 50,
                          duration: 2,
                        }}
                      />  
                
                    </motion.div>
                  ))}
                </div>
           <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              className={cn("mt-4  h-56 rounded-2xl")}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className={cn("font-semibold text-sm md:text-3xl mb-1", styles.title)}>
                {getItemTitle(currentItem)}
              </h3>
              <p className={cn("text-xs md:text-lg leading-normal", styles.description)}>{currentItem.detail}</p>
            </motion.div>
          </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  )
}

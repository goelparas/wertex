import React, { ReactElement } from "react";
import Image from "next/image";
import Section from "@/components/common/Section";
import { FlexHeader2 } from "@/components/common/FlexHeader/FlexHeader";
import { ImageContainer } from "@/components/common/Container/ImageGrid";
import gridBg from "@/cdn/images/grid-casting.png";
import gridBgLargeScreen from "@/cdn/images/main_grid.avif";
import { StaticImageData } from "next/image";

export interface GridItem {
  title: string;
  description: string;
  img: StaticImageData | string;
}

interface GridBackgroundSectionProps {
  heading: string | ReactElement;
  description?: string | ReactElement;
  items?: GridItem[];
  children?: React.ReactNode;
  headingClassName?: string;
  contentClassName?: string;
}

/**
 * A reusable section component with consistent grid background images.
 * Features:
 * - Fixed background images (mobile and desktop variants)
 * - Flexible content: pass either `items` for default grid or `children` for custom content
 * - Consistent styling and spacing
 * 
 * @param heading - Main heading text or ReactNode
 * @param description - Optional description text or ReactNode
 * @param items - Optional array of items to display in default grid layout (each with title, description, and img)
 * @param children - Optional custom content to render instead of default grid
 * @param headingClassName - Optional additional classes for heading
 * @param contentClassName - Optional additional classes for content wrapper
 * 
 * @example
 * // With items (default grid layout)
 * <GridBackgroundSection heading="Title" items={[...]} />
 * 
 * @example
 * // With custom children
 * <GridBackgroundSection heading="Title">
 *   <div>Your custom content here</div>
 * </GridBackgroundSection>
 */
export const GridBackgroundSection: React.FC<GridBackgroundSectionProps> = ({
  heading,
  description = "",
  items,
  children,
  headingClassName = "",
  contentClassName = "",
}) => {
  return (
    <Section className="h-auto relative  bg-transparent my-6 mx-4 lg:m-12">
      {/* Mobile background image */}
      <Image
        src={gridBg}
        alt="grid-background"
        className="absolute lg:hidden inset-0 z-10"
        fill
      />
      
      {/* Desktop background image */}
      <Image
        src={gridBgLargeScreen}
        alt="grid-background"
        className="absolute hidden lg:block inset-0 z-10"
        fill
      />

      {/* Header */}
      <FlexHeader2
        className={`text-white ${headingClassName}`}
        heading={heading}
        description={description}
      />

      {/* Content - Either custom children or default grid items */}
      <div className={`mt-12 z-20 ${contentClassName}`}>
        {children ? (
          // Render custom children if provided
          children
        ) : items ? (
          // Render default grid layout with items
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {items.map((item, index) => (
              <div
                key={`${item.title}-${index}`}
                className="lg:w-96 h-40 lg:h-[500px] mx-auto flex flex-col items-start lg:items-center justify-between gap-2 p-4 z-10 text-white bg-borderGray rounded-2xl"
              >
                {/* Title - Desktop */}
                <p className="text-center font-bold hidden lg:block text-xs leading-normal lg:text-xl2 text-white">
                  {item.title}
                </p>

                {/* Image */}
                <ImageContainer
                  img={item.img}
                  className="w-24 h-24"
                  height={65}
                  width={84}
                  size={{
                    smWidth: 38,
                    smHeight: 38,
                    smClassName: "w-12 h-12",
                  }}
                />

                {/* Title - Mobile */}
                <p className="text-center lg:text-start font-bold block lg:hidden text-xs leading-normal lg:text-xl2 text-white">
                  {item.title}
                </p>

                {/* Description */}
                <p className="text-xs lg:text-xl2 leading-normal text-borderGray lg:text-center text-white text-start">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        ) : null}
      </div>
    </Section>
  );
};

export default GridBackgroundSection;


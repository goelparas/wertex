import alCaroseul1 from '@/cdn/images/aluminiumextrution/carousel/carousel-1.webp'
import alCaroseul2 from '@/cdn/images/aluminiumextrution/carousel/carousel-2.webp'
import alCaroseul3 from '@/cdn/images/aluminiumextrution/carousel/carousel-3.webp'
import alCaroseul4 from '@/cdn/images/aluminiumextrution/carousel/carousel-4.webp'
import alCaroseul5 from '@/cdn/images/aluminiumextrution/carousel/carousel-5.webp'
import { StaticImageData } from 'next/image'
export const variantStyles = {
    dark: {
      container: "bg-gray-900 text-white",
      imageContainer: "bg-gray-800 border-gray-700",
      contentContainer: "bg-gray-900",
      title: "text-white",
      description: "text-gray-300",
      itemDefault: "text-gray-300 hover:text-white border-gray-700",
      itemHighlighted: "text-orange-400 border-orange-400",
      itemBox: "bg-gray-800/50",
    },
    aluminiumExtrusion: {
      container: "bg-custom-map-gradient text-white",
      imageContainer: "border-gray-800 rounded-2xl ",
      contentContainer: "bg-transparent",
      title: "text-white",
      description: "text-orange-100",
      itemDefault: "",
      itemHighlighted: "text-black ",
      itemBox: "bg-[#ED994D]",
    },
    forging: {
      container: "bg-white text-gray-900 border border-gray-200",
      imageContainer: "bg-gray-50 border-gray-200",
      contentContainer: "bg-white",
      title: "text-gray-900",
      description: "text-gray-600",
      itemDefault: "text-gray-600 hover:text-gray-900 border-gray-200",
      itemHighlighted: "text-gray-900 border-gray-900 bg-gray-50",
      itemBox: "bg-gray-50",
    },
  }

  export interface ShowcaseItem {
    [key: string]: any; // Allow any type for dynamic properties
    image: StaticImageData | string;
    detail: string;
  }
  export const  aluminiumExtrusion: ShowcaseItem[] = [
    {
      machine: "Aerospace",
      image: alCaroseul1,
      detail: "Lightweight frames, brackets, and structural supports.",
    },
    {
      machine: "Automotive",
      image: alCaroseul2,
      detail: "Roof rails, trim, crash management systems, and heat exchangers. ",
    },
    {
      machine: "Construction",
      image: alCaroseul3,
      detail: "Window and door frames, curtain walls, and structural frameworks.",
    },
    {
      machine: "Electronics",
      image: alCaroseul4,
      detail: "Heat sinks, housings, and cable management systems.",
    },
    {
      machine: "Renewable Energy",
      image: alCaroseul5,
      detail: "Solar panel frames, mounting systems, and wind turbine components.",
    },
    {
      machine: "Consumer Products",
      image: alCaroseul5,
      detail: "Furniture parts, display fixtures, and appliance components.",
    },
  ]
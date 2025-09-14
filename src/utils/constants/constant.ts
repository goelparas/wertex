import cncMachine from "@/cdn/images/what-we-offer/cnc-machine.png"
import casting from "@/cdn/images/what-we-offer/casting.png"
import forging from "@/cdn/images/what-we-offer/forging.png"
import sheetMetal from "@/cdn/images/what-we-offer/sheet-metal.png"
import molding from "@/cdn/images/what-we-offer/molding.png"
import surfaceTreatMent from "@/cdn/images/what-we-offer/surface-treatment.png"
import aluminiumExtrusionWWO from "@/cdn/images/what-we-offer/aluminium-extrusion.png"


// testimonials 

import brand1 from "@/cdn/images/testimonial-card/brand1.png"
import brand2 from "@/cdn/images/testimonial-card/brand2.png"
import brand3 from "@/cdn/images/testimonial-card/brand3.png"
import brand4 from "@/cdn/images/testimonial-card/brand4.png"
import brand5 from "@/cdn/images/testimonial-card/brand5.png"
import brand6 from "@/cdn/images/testimonial-card/brand6.png"
import brand7 from "@/cdn/images/testimonial-card/brand7.png"
import brand8 from "@/cdn/images/testimonial-card/brand8.png"
import brand9 from "@/cdn/images/testimonial-card/brand9.png"
import brand10 from "@/cdn/images/testimonial-card/brand10.png"
import brand11 from "@/cdn/images/testimonial-card/brand11.png"
import brand12 from "@/cdn/images/testimonial-card/brand12.png"


import { StaticImport } from "next/dist/shared/lib/get-img-props"


import cncMachineImg from  "@/cdn/images/cnc/hero-cnc.webp";
import castingImg from "@/cdn/images/casting/casting-hero.webp";
import forgingImg from '@/cdn/images/forging/forging-hero.webp';
import sheetfab from "@/cdn/images/sheet-fabrication/sheet-fabrication.jpg";
import moulding from "@/cdn/images/moulding/moulding.webp";
import aluminiumExtrusion from'@/cdn/images/aluminiumextrution/aluminium-hero.webp';



import inovation1 from "@/cdn/images/inovations/showcase-1.webp";
import inovation2 from "@/cdn/images/inovations/showcase-2.webp";
import inovation3 from "@/cdn/images/inovations/showcase-3.webp";
import inovation4 from "@/cdn/images/inovations/showcase-4.webp";
import inovation5 from "@/cdn/images/inovations/showcase-5.webp";
import inovation6 from "@/cdn/images/inovations/showcase-6.webp";
import inovation7 from "@/cdn/images/inovations/showcase-7.webp";
import inovation8 from "@/cdn/images/inovations/showcase-8.webp";
import inovation9 from "@/cdn/images/inovations/showcase-9.webp";



import valueVector1 from '@/cdn/images/value-added/vector-1.png'
import valueVector2 from '@/cdn/images/value-added/vector-2.png'
import valueVector3 from '@/cdn/images/value-added/vector-3.png'
import valueVector4 from '@/cdn/images/value-added/vector-4.png'
import valueVector5 from '@/cdn/images/value-added/vector-5.png'
import valueVector6 from '@/cdn/images/value-added/vector-6.png'
import valueVector7 from '@/cdn/images/value-added/vector-7.png'



export const WindowSize = {
  mobile: 300,
  tablet: 500,
  desktop: 1024

}

export const WhatWeOfferConst = [
  {
    "image": cncMachine,
    "text": "CNC Machining",
    className: "flex flex-col gap-1 lg:flex-row lg:gap-0"
  },
  {
    "image": casting,
    "text": "Casting",
    className: "flex flex-col gap-1 lg:flex-row lg:gap-0"
  },
  {
    "image": forging,
    "text": "Forging",
    className: ""
  },
  {
    image: sheetMetal,
    text: "Sheet Metal Fabrication",
    className: ""
  },
  {
    "image": aluminiumExtrusionWWO,
    "text": "Aluminum Extrusion",
     className: "flex flex-col gap-1 lg:flex-row lg:gap-0"
  },
  {
    "image": surfaceTreatMent,
    "text": "Surface Treatment",
     className: "flex flex-col gap-1 lg:flex-row lg:gap-0"
  },
  {
    "image": molding,
    "text": "Molding",
     className: "flex flex-col gap-1 lg:flex-row lg:gap-0"
  }
]

export const DetailCardConst = [
  {
    "heading": "Fast Turnaround Times",
    "text": "Quick deliveries without compromising precision—leveraging 40 years of manufacturing expertise and tech-driven processes for efficient results",
    style: {
      container: "bg-[#000000]/5",
      heading: "string",
      footer: "string"
    }

  },
  {
    "heading": "Scalable and Flexible Production",
    "text": "Our business model enables unmatched flexibility, utilizing spare machinery capacity from an extensive, global vendor network to meet your needs",
    style: {
      container: "bg-custom-card-gradient-lt-br",
      heading: "string",
      footer: "string"
    }
  },
  {
    "heading": "Strong Emphasis on Quality Control",
    "text": "Implementing rigorous quality checks across the entire production process to ensure flawless products, driven by advanced engineering tools",
    style: {
      container: "bg-[#000000]/5",
      heading: "string",
      footer: "string"
    }
  },
  {
    "heading": "Competitive and Transparent Pricing",
    "text": "Highly detailed quotes with transparent pricing defined by production processes, ensuring fairness and clarity for every project",
    style: {
      container: "bg-[#5F5F5F]/15",
      heading: "string",
      footer: "string"
    }
  },
  {
    "heading": "Network of Vetted Suppliers",
    "text": "We work exclusively with a carefully vetted network of trusted suppliers to ensure reliable materials and seamless execution on every order",
    style: {
      container: "bg-[#FFFFFF]/15",
      heading: "string",
      footer: "string"
    }
  },
  {
    "heading": "Detailed Tracking and Project Management",
    "text": "Our engineering-led project management ensures full visibility at every stage, keeping you informed from start to finish",
    style: {
      container: "bg-[#5F5F5F]/15",
      heading: "string",
      footer: "string"
    }
  },
  {
    "heading": "Emphasis on DFM (Design for Manufacturability)",
    "text": "Our engineers collaborate to optimize your designs, ensuring cost-effective, efficient, and error-free production",
    style: {
      container: "bg-white",
      heading: "text-black",
      footer: "text-black"
    }
  }
]

export const ServiceSection = [
  {
    title: "CNC Machining",
    paragraph: "Precision-crafted components with advanced CNC techniques. Optimized for intricate geometries, tight tolerances, and improved production efficiency.",
    image: cncMachineImg,
    cta: {
      text: "Learn More",
      onClick: () => alert("CNC Machining Clicked!"),
    },
  },
  {
    title: "Casting",
    paragraph: "Durable, complex parts through expendable and permanent mold casting. Perfect for projects requiring strength, detail, and dimensional accuracy.",
    image: castingImg,
    cta: {
      text: "Explore",
      onClick: () => alert("3D Printing Clicked!"),
    },
  },
  {
    title: "Forging",
    paragraph: "High-strength components built to endure demanding conditions. Achieved with expert forging processes and precise material control.",
    image: forgingImg,
    cta: {
      text: "Discover",
      onClick: () => alert("Injection Molding Clicked!"),
    },
  },
  {
    title: "Sheet Metal Fabrication",
    paragraph: "Lightweight, durable metal solutions with precision cutting, bending, and welding. Tailored to meet diverse design needs with efficiency.",
    image: sheetfab,
    cta: {
      text: "View Details",
      onClick: () => alert("Sheet Metal Fabrication Clicked!"),
    },
  },
  {
    title: "Aluminium Extrusion",
    paragraph: "Seamless, precise extrusions for structural and aesthetic applications. Designed for strength and flexibility in every industry.",
    image: aluminiumExtrusion,
    cta: {
      text: "See More",
      onClick: () => alert("Laser Cutting Clicked!"),
    },
  },
  {
    title: "Molding",
    paragraph: "Accurate, flawless parts via injection and compression molding. Perfect for high-volume production with consistent quality.",
    image: moulding,
    cta: {
      text: "Learn How",
      onClick: () => alert("Quality Assurance Clicked!"),
    },
  },
  // {
  //   title: "Surface Treatment",
  //   paragraph: "Durability and aesthetics redefined with advanced surface finishing techniques, enhancing wear resistance and visual appeal.",
  //   image: image6,
  //   cta: {
  //     text: "Learn How",
  //     onClick: () => alert("Quality Assurance Clicked!"),
  //   },
  // },
];

export const Innovation = [{
  image: inovation1,
  title: "Textile"
}, {
  image: inovation2,
  title: "Automotive"
}, {
  image: inovation3,
  title: "Aerospace"
}, {
  image: inovation4,
  title: "DEFENCE"
}, {
  image: inovation5,
  title: "ENERGY"
}, {
  image: inovation6,
  title: "Medical Devices"
}, {
  image: inovation7,
  title: "Agriculture Machinery"
}, {
  image: inovation8,
  title: "OIL & gas"
}, {
  image: inovation9,
  title: "Industrial Equipment and Machinery"
}]

export const TESTIMONIALS: StaticImport[] = [
  brand1, brand2, brand3, brand4, brand5, brand6, brand7, brand8, brand9, brand10, brand11, brand12
]

export const ValueAddedServices = [
  {
    title: "Quality Control (QC)",
    description: "Rigorous quality control processes to ensure product reliability and compliance with international standards",
    icon:   valueVector1
  },
  {
    title: "Logistics",
    description: " Comprehensive logistics solutions to streamline the delivery of your products worldwide.",
    icon: valueVector2
  },
  {
    title: "Die Making",
    description: " Expertise in custom die making for precision manufacturing.",
    icon: valueVector3
  },
  {
    title: "DFM Analysis (Design for Manufacturing)", 
    description: "Expert design analysis to optimize your product for manufacturability and cost-effectiveness.",
    icon: valueVector4
  },
  {
    title: "Rapid Prototyping",
    description: "Fast turnaround for prototypes to accelerate your product development process.",
    icon: valueVector5
  },
  {
    title: "Assembly Services",
    description: "Full assembly services for various components, ensuring high-quality finished products.",
    icon: valueVector6
  },
  {
    title: "Project Management",
    description: "Efficient management of your projects from concept to completion, ensuring timely and cost-effective delivery.",
    icon: valueVector7
  }
]
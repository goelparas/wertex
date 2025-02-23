import cncMachine from "@/cdn/images/what-we-offer/cnc-machine.avif"
import casting from "@/cdn/images/what-we-offer/casting.avif"
import forging from "@/cdn/images/what-we-offer/Forging.avif"
import fabrication from "@/cdn/images/what-we-offer/fabrication.avif"


// testimonials 

import brand1 from "@/cdn/images/testimonial-card/pricol-brand.avif"
import brand2 from "@/cdn/images/testimonial-card/lls-brand.avif"
import brand3 from "@/cdn/images/testimonial-card/janatics.avif"
import brand4 from "@/cdn/images/testimonial-card/inxeption.avif"
import brand5 from "@/cdn/images/testimonial-card/bpl.avif"
import brand6 from "@/cdn/images/testimonial-card/brand-6.avif"
import brand7 from "@/cdn/images/testimonial-card/brand-7.avif"
import brand8 from "@/cdn/images/testimonial-card/brand-8.avif"
import brand9 from "@/cdn/images/testimonial-card/brand-9.avif"
import brand10 from "@/cdn/images/testimonial-card/brand10.avif"
import brand11 from "@/cdn/images/testimonial-card/brand-11.avif"


import { StaticImport } from "next/dist/shared/lib/get-img-props"


import image1 from "@/cdn/images/services/image-1.avif";
import image2 from "@/cdn/images/services/image-2.avif";
import image3 from "@/cdn/images/services/image-3.avif";
import image4 from "@/cdn/images/services/image-4.avif";
import image5 from "@/cdn/images/services/image-5.avif";
import image6 from "@/cdn/images/services/image-6.avif";



import inovation1 from "@/cdn/images/inovations/inovation-1.avif";
import inovation2 from "@/cdn/images/inovations/inovation-2.avif";
import inovation3 from "@/cdn/images/inovations/inovation-3.avif";
import inovation4 from "@/cdn/images/inovations/inovation-4.avif";
import inovation5 from "@/cdn/images/inovations/inovation-5.avif";
import inovation6 from "@/cdn/images/inovations/inovation-6.avif";
import inovation7 from "@/cdn/images/inovations/inovation-7.avif";
import inovation8 from "@/cdn/images/inovations/inovation-8.avif";
import inovation9 from "@/cdn/images/inovations/inovation-9.avif";


export const WindowSize = {
  mobile: 300,
  tablet: 500,
  desktop: 1024

}

export const WhatWeOfferConst = [
  {
    "image": cncMachine,
    "text": "CNC Machining "
  },

  {
    "image": casting,
    "text": "Casting."
  },
  {
    "image": forging,
    "text": "Forging"
  },
  {
    image: fabrication,
    text: "Sheet Metal Fabrication"
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
    image: image1,
    cta: {
      text: "Learn More",
      onClick: () => alert("CNC Machining Clicked!"),
    },
  },
  {
    title: "Casting",
    paragraph: "Durable, complex parts through expendable and permanent mold casting. Perfect for projects requiring strength, detail, and dimensional accuracy.",
    image: image2,
    cta: {
      text: "Explore",
      onClick: () => alert("3D Printing Clicked!"),
    },
  },
  {
    title: "Forging",
    paragraph: "High-strength components built to endure demanding conditions. Achieved with expert forging processes and precise material control.",
    image: image4,
    cta: {
      text: "Discover",
      onClick: () => alert("Injection Molding Clicked!"),
    },
  },
  {
    title: "Sheet Metal Fabrication",
    paragraph: "Lightweight, durable metal solutions with precision cutting, bending, and welding. Tailored to meet diverse design needs with efficiency.",
    image: image3,
    cta: {
      text: "View Details",
      onClick: () => alert("Sheet Metal Fabrication Clicked!"),
    },
  },
  {
    title: "Aluminium Extrusion",
    paragraph: "Seamless, precise extrusions for structural and aesthetic applications. Designed for strength and flexibility in every industry.",
    image: image4,
    cta: {
      text: "See More",
      onClick: () => alert("Laser Cutting Clicked!"),
    },
  },
  {
    title: "Molding",
    paragraph: "Accurate, flawless parts via injection and compression molding. Perfect for high-volume production with consistent quality.",
    image: image5,
    cta: {
      text: "Learn How",
      onClick: () => alert("Quality Assurance Clicked!"),
    },
  },
  {
    title: "Surface Treatment",
    paragraph: "Durability and aesthetics redefined with advanced surface finishing techniques, enhancing wear resistance and visual appeal.",
    image: image6,
    cta: {
      text: "Learn How",
      onClick: () => alert("Quality Assurance Clicked!"),
    },
  },
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
  brand1, brand2, brand3, brand4, brand5, brand6, brand7, brand8, brand9, brand10, brand11
]
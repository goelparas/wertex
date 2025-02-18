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
    style:""

  },
  {
    "heading": "Scalable and Flexible Production",
    "text": "Our business model enables unmatched flexibility, utilizing spare machinery capacity from an extensive, global vendor network to meet your needs",
    style:""
  },
  {
    "heading": "Strong Emphasis on Quality Control",
    "text": "Implementing rigorous quality checks across the entire production process to ensure flawless products, driven by advanced engineering tools",
    style:""
  },
  {
    "heading": "Competitive and Transparent Pricing",
    "text": "Highly detailed quotes with transparent pricing defined by production processes, ensuring fairness and clarity for every project",
    style:""
  },
  {
    "heading": "Network of Vetted Suppliers",
    "text": "We work exclusively with a carefully vetted network of trusted suppliers to ensure reliable materials and seamless execution on every order",
    style:""
  },
  {
    "heading": "Detailed Tracking and Project Management",
    "text": "Our engineering-led project management ensures full visibility at every stage, keeping you informed from start to finish",
     style:""
  },
  {
    "heading": "Emphasis on DFM (Design for Manufacturability)",
    "text": "Our engineers collaborate to optimize your designs, ensuring cost-effective, efficient, and error-free production",
     style:"bg-white!"
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
    title: "3D Printing",
    paragraph: "Rapid prototyping and production with state-of-the-art 3D printing technology. Ideal for complex designs and fast iterations.",
    image: image2,
    cta: {
      text: "Explore",
      onClick: () => alert("3D Printing Clicked!"),
    },
  },
  {
    title: "Injection Molding",
    paragraph: "High-volume production of plastic parts with precision injection molding. Consistent quality and cost-effective solutions.",
    image: image4,
    cta: {
      text: "Discover",
      onClick: () => alert("Injection Molding Clicked!"),
    },
  },
  {
    title: "Sheet Metal Fabrication",
    paragraph: "Custom sheet metal parts with high accuracy and durability. Suitable for a wide range of industrial applications.",
    image: image3,
    cta: {
      text: "View Details",
      onClick: () => alert("Sheet Metal Fabrication Clicked!"),
    },
  },
  {
    title: "Laser Cutting",
    paragraph: "Precision laser cutting for intricate designs and clean edges. Perfect for metals, plastics, and composites.",
    image: image4,
    cta: {
      text: "See More",
      onClick: () => alert("Laser Cutting Clicked!"),
    },
  },
  {
    title: "Quality Assurance",
    paragraph: "Rigorous quality control processes to ensure every product meets the highest standards. Delivering reliability and trust.",
    image: image5,
    cta: {
      text: "Learn How",
      onClick: () => alert("Quality Assurance Clicked!"),
    },
  },
  {
    title: "Mold",
    paragraph: "Rigorous quality control processes to ensure every product meets the highest standards. Delivering reliability and trust.",
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
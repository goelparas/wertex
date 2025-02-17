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
        "text": "Quick deliveries without compromising precision—leveraging 40 years of manufacturing expertise and tech-driven processes for efficient results"
    },
    {
        "heading": "Scalable and Flexible Production",
        "text": "Our business model enables unmatched flexibility, utilizing spare machinery capacity from an extensive, global vendor network to meet your needs"
    },
    {
        "heading": "Strong Emphasis on Quality Control",
        "text": "Implementing rigorous quality checks across the entire production process to ensure flawless products, driven by advanced engineering tools"
    },
    {
        "heading": "Competitive and Transparent Pricing",
        "text": "Highly detailed quotes with transparent pricing defined by production processes, ensuring fairness and clarity for every project"
    },
    {
        "heading": "Network of Vetted Suppliers",
        "text": "We work exclusively with a carefully vetted network of trusted suppliers to ensure reliable materials and seamless execution on every order"
    },
    {
        "heading": "Detailed Tracking and Project Management",
        "text": "Our engineering-led project management ensures full visibility at every stage, keeping you informed from start to finish"
    },
    {
        "heading": "Emphasis on DFM (Design for Manufacturability)",
        "text": "Our engineers collaborate to optimize your designs, ensuring cost-effective, efficient, and error-free production"
    }
]



export const TESTIMONIALS  :StaticImport[]= [
    brand1, brand2, brand3, brand4, brand5, brand6, brand7, brand8, brand9, brand10, brand11
]
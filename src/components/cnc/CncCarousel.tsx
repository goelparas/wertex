import * as React from "react"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/common/carousel/carousel'
import Section from "../common/Section"
import  Image , { StaticImageData   } from "next/image"




import carousel1 from '@/cdn/images/cnc/carousel-2/carousel-1.webp'
import carousel2 from '@/cdn/images/cnc/carousel-2/carousel-2.webp'
import carousel3 from '@/cdn/images/cnc/carousel-2/carousel-3.webp'
import carousel4 from '@/cdn/images/cnc/carousel-2/carousel-4.webp'
import carousel5 from '@/cdn/images/cnc/carousel-2/carousel-5.webp'
import carousel6 from '@/cdn/images/cnc/carousel-2/carousel-6.webp'

const Items = [

  {
    title:"Coordinate Measuring Machines (CMM)",
    image:carousel1
  },
  {
    title:"Video Measuring Devices",
    image:carousel2
  },
  {
    title:"Contour Tracers",
    image:carousel3
  },
  {
    title:"Profile Projectors",
    image:carousel4
  },
  {
    title:"3D Scanners",
    image:carousel5
  },
  {
    title:"Gauges",
    image:carousel6
  }

]



const Card = ({
  title, 
  icon
}: { 
  title?:string,
  icon?:StaticImageData
})=>{
  if(!title || !icon) return <div className="bg-transparent w-[26.75rem]"></div>;
  return <div className="h-[20.5rem] bg-white w-[26.75rem] flex justify-between items-start">
    <h1 className="text-xl2 text-left p-4 text-black font-bold"> {title}</h1>
    <div className="flex items-center w-2/3 h-full justify-center relative ">

    <Image src={icon} fill alt= {title} className="object-cover absolute bottom-0 right-0"/>
    </div>
  </div>
}
export const   CncCarousel  = ()=>{
  return (
    <Section className="bg-transparent">

    <Section className="bg-transparent py-0 my-0" >
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-full"
    >
      <CarouselContent>
        {Items.map((item, index) => (
          <CarouselItem key={index} className="md:basis-1/3 ">
             <Card title={item.title} icon={item.image} />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
    </Section>
    </Section>
  )
}




import H1 from '@/components/common/H1/H1'
import Image from 'next/image';
import React from 'react'
import globe from '@/cdn/images/vectors/aboutus.png'
import roadmap from '@/cdn/images/aboutus/aboutus.webp'
 
const TimelineCard = ({date , heading ,  description} :{
  date: number, 
  heading:string,
  description : string,
  


})=>{return ( <div className='border  p-2 bg-foreground backdrop-blur-sm'>
   <H1 className='text-end'>{date}</H1>
   <div className='flex flex-col gap-3  justify-between items-start'>
      <h1 className='lg:text-xl font-bold'>{heading}</h1>
      <p className='lg:text-xl font-normal'>{description}</p>
   </div>

</div>)
}


const TimeLine = () => {
  return (
    <div className="relative w-full bg-background   mt-16 flex items-center justify-center  h-[210rem] p-8">
        
    <Image src={globe} alt="globe" fill className='object-cover absolute inset-0 z-10'/>
    <div className='h-full relative w-full p-8'>

    <Image src={roadmap} alt="globe" fill className='object-contain  z-20' unoptimized
 />
    </div>
  </div>
  )

}


export default TimeLine
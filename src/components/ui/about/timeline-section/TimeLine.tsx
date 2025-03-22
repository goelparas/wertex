import H1 from '@/components/common/H1/H1'
import React from 'react'

const TimelineCard = ({date , heading ,  description} :{
  date: number, 
  heading:string,
  description : string 

})=>{return  <div className='border md:w-[420px] p-2'>
   <H1 className='text-end'>{date}</H1>
   <div className='flex flex-col gap-3  justify-between items-start'>
      <h1 className='lg:text-xl font-bold'>{heading}</h1>
      <p className='lg:text-xl font-normal'>{description}</p>
   </div>

</div>
}


const TimeLine = () => {
  return (
    <div className="relative w-full bg-background p-5 mt-16">
        
    <TimelineCard  date={1987} heading='The Beginning of Precision Manufacturing' description='Santhos Industries was founded by Mr. K. Ramamoorthy, pioneering the production of precision-turned components under 32 mm diameter using conventional CAM-actuated automates machines.'/>
  </div>
  )

}


export default TimeLine
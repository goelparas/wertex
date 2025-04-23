import H1 from '@/components/common/H1/H1'
import React from 'react'


const timelineData = [
  {
    date: 1987,
    heading: 'The Beginning of Precision Manufacturing',
    description: 'Santhos Industries was founded by Mr. K. Ramamoorthy, pioneering the production of precision-turned components under 32 mm diameter using conventional CAM-actuated automates machines.'
  },
  {
    date: 1994,
    heading: 'Expansion into Advanced Machining',
    description: 'Diversified into Conventional Milling, Grinding, and other precision manufacturing processes to meet growing industry demands.'
  },
  {
    date: 2000,
    heading: 'National Recognition for Excellence',
    description: 'Santhos Industries, led by Mr. Ramamoorthy, received the prestigious award from the Chairman of LMW, Mr. Jayavarthanavelu, for innovation and excellence in developing precision prototypes and production parts.'
  },
  {
    date: 2001,
    heading: 'Venturing into Plastics Manufacturing',
    description: 'Founded Santhos Polymers, marking a new chapter in plastic product manufacturing to complement existing metalworking capabilities.'
  },
  {
    date: 2009,
    heading: 'Diversification into Multi-Industry Solutions',
    description: 'Expanded into diverse sectors such as automotive, textiles, irrigation, pneumatics, and defense, showcasing versatility in addressing unique industry challenges.'
  },
  {
    date: 2014,
    heading: 'Automation and Innovation in Manufacturing',
    description: 'Introduced cutting-edge automation projects, including custom-designed gantry setups for CNC machines featuring robotic fingers, bowl feeders, and conveyor assemblies.'
  },
  {
    date: 2019,
    heading: 'Contributing to Landmark Infrastructure Projects',
    description: 'Manufactured casted tunnel rings for Bengaluru Metro’s underground project in collaboration with L&T Heavy Civil Infrastructures, covering a span of 2.8 kilometers.'
  },
  {
    date: 2020,
    heading: "Expanding Manufacturing Expertise",
    description: 'Began catering to diverse industries such as casting, sheet metal, machining, and forging across South India.Established a skilled and semi-skilled labor contracting model, ensuring a robust workforce for high-quality production.'

  },
  {
    date: 2021,
    heading: "Establishment of Rainer Engineering",
    description: 'Co-founded by Gokul, Rainer Engineering brought in-house CNC machining, rapid prototyping, and tooling solutions, enabling precision manufacturing at scale.Strengthened capabilities in producing complex, custom-engineered components.'

  },
  {
    date: 2022,
    heading: 'The Genesis of WTX',
    description: 'Leveraging decades of manufacturing expertise and a vast network of trusted vendors, WTX was born, embodying innovation and engineering excellence.'
  },
  {
    date: 2025,
    heading: 'A Growing Legacy of Excellence',
    description: 'A team of over 250 skilled professionals delivering precision-engineered solutions.Achieved an impressive milestone of 3000+ completed projects for 200+ global customers, establishing Wertex as a trusted leader in manufacturing.Achieved an impressive milestone of 3000+ completed projects for 200+ global customers, establishing Wertex as a trusted leader in manufacturing.'
  },
  
];

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
    <div className="relative w-full bg-background p-5 mt-16 grid grid-cols-3 gap-5">
        
        {timelineData.map((item, index) => (
        <TimelineCard 
          key={index}
          date={item.date}
          heading={item.heading}
          description={item.description}
        />
      ))}
  </div>
  )

}


export default TimeLine
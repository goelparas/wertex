import  {FlexHeader} from "../common/FlexHeader/FlexHeader";
import Section from "../common/Section";
import krishnanImage from '@/cdn/images/thinkersanddoes/krishnan.webp';
import justin from '@/cdn/images/thinkersanddoes/justin.webp';
import kalamani from '@/cdn/images/thinkersanddoes/kalamani.webp';
import Gokul from '@/cdn/images/thinkersanddoes/gokul.webp';
import Ravi from '@/cdn/images/thinkersanddoes/ravi.webp';
import ArjunR from '@/cdn/images/thinkersanddoes/arjunr.webp';
import Image from "next/image";

import wertexlogo from "@/cdn/images/wtx_logo_service.png";
import H1 from "../common/H1/H1";
export default function TeamShowcase() {
  const teamMembers = [
    { id: "01", name: "Krishnan Ramamoorthy", designation: "Chief Engineer" ,image:krishnanImage },
    { id: "02", name: "Justin Dhiraviam", designation: "Chief Technical Advisor" ,image:justin },
    { id: "03", name: "Kalamani Ramamoorthy", designation: "Head of Administration and Compliance" ,image:kalamani },
    { id: "04", name: "Gokul K R", designation: "Head of Business Development – US, EU & GCC" ,image:Gokul },
    { id: "05", name: "Ravi Chandra ", designation: "Chief Product Development" ,image:Ravi },
    { id: "06", name: "Arjun R ", designation: "Business Development - GCC " ,image:ArjunR },
  ];
  const testimonials = [
    {
      id: 1,
      quote:
        "Great experience working with them —excellent quality control and customer service.",
    },
    {
      id: 2,
      quote:
        "Every interaction with their team was seamless. They delivered exactly what we needed with great attention to detail.",
    },
    {
      id: 3,
      quote: "From design to delivery, every step was smooth and professional.",
    },
    {
      id: 4,
      quote:
        "An outstanding team that balances professionalism with great communication. They truly understood our vision.",
    },
  ];

  return (
    <Section className="bg-background200  p-6 lg:p-12 lg:min-h-dvh mb-6 lg:mb-12 ">
      {/* <div className="lg:my-12 ">
        <FlexHeader title="WHAT OUR" description="" heading="CLIENTS SAYS!" />
        <div className=" flex flex-nowrap overflow-x-scroll gap-4 mt-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-background200 p-6 rounded-lg flex flex-col lg:h-full lg:w-full  w-56 h-60"
            >
              <div className="w-12 h-12 bg-white rounded-full mb-6 "></div>
              <p className="text-white text-xxs lg:text-lg leading-normal w-full h-44 p-4 clipped bg-[#282828]">
                {testimonial.quote}
              </p>
            </div>
          ))}
        </div>
      </div> */}
      <div className="flex flex-col md:flex-row justify-between my-6 lg:my-16">
        <FlexHeader
          title="THE THINKERS, DOERS, AND INNOVATORS"
          description={<span className="hidden lg:block">Driving innovation through expertise.</span>}
          heading=""
        />
      </div>
      <div className="flex flex-col lg:flex-row  w-full  items-start justify-between gap-4 lg:gap-8">
        <div className="w-full lg:w-1/4">
          <p className="text-xs lg:text-xl2 leading-normal">
            We've been fortunate to work with a lot of awesome people on even
            more awesome projects.
          </p>
        </div>
        <div className="w-full flex justify-end lg:hidden my-6">
         <h1 className="text-end text-lg w-3/4 mr-0 font-bold lg:hidden">Driving innovation through expertise.</h1>
        </div>
        <div className=" flex overflow-scroll md:grid   md:grid-cols-2 lg:grid-cols-3 gap-8 w-full lg:w-3/4">
        {teamMembers.map((member, index) => (
  <div key={member.id} className={ `w-64 lg:w-full shrink-0 ${index >= 3 ? "lg:mt-8" : ""}`}>
    <div className="flex items-center">
      <div className="shrink-0 w-12 h-12 mr-4 bg-[#2B2B2B] rounded-full flex items-center justify-center">
        <Image src={wertexlogo} alt="logo" className="w-8 h-8" />
      </div>
      <div className="h-12 max-h-16">
        <h3 className="text-xs font-bold lg:text-xl">{member.name}</h3>
        <p className="text-xs leading-tight text-[#8C8C8C]">{member.designation}</p>
      </div>
    </div>
    <div className="relative w-full mt-6 overflow-hidden aspect-[4/3]">
      <Image src={member.image} alt={member.name} fill className="object-cover grayscale" />
    </div>
  </div>
))}
        </div>
      </div>
    </Section>
  );
}

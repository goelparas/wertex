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
    <Section className="bg-background200   lg:p-12 min-h-dvh mb-12 hidden lg:block">
      <div className="lg:my-12">
        <FlexHeader title="WHAT OUR" description="" heading="CLIENTS SAYS!" />
        <div className=" flex flex-nowrap overflow-x-scroll gap-4 mt-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-background200 p-6 rounded-lg flex flex-col lg:h-full lg:w-full  w-56 h-60"
            >
              <div className="w-12 h-12 bg-white rounded-full mb-6 "></div>
              <p className="text-white text-xxs lg:text-lg leading-relaxed w-full h-44 p-4 clipped bg-[#282828]">
                {testimonial.quote}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-between my-16">
        <FlexHeader
          title="THE THINKERS, DOERS, AND INNOVATORS"
          description="Driving innovation through expertise."
          heading=""
        />
      </div>
      <div className="flex w-full  items-start justify-between gap-8">
        <div className="w-1/4">
          <p className="text-xl2">
            We've been fortunate to work with a lot of awesome people on even
            more awesome projects.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-3/4">
          {teamMembers.map((member, index) => (
            <div key={member.id} className={`${index >= 3 ? "mt-8" : ""}`}>
              <div className="flex items-center  max-h-10">
                <div className="w-12 h-12 shrink-0 bg-[#2B2B2B] rounded-full mr-4 flex items-center justify-center">
                  <Image src={wertexlogo} alt="logo" className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">{member.name}</h3>
                  <p className="text-[#8C8C8C] leading-tight">{member.designation}</p>
                </div>
              </div>
                <div className="relative aspect-[4/3] w-full mt-6 overflow-hidden">
                  <Image src={member.image} alt={member.name} fill className="object-cover grayscale" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

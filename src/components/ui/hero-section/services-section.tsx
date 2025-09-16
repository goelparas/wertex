
"use client"
import React, { Fragment } from 'react'
import { ServiceSection, ValueAddedServices } from '@/utils/constants/constant'
import { ServiceCard } from './sevice-card'
import { ValueAddedServiceCard } from './value-added-service-card'
import H1 from '@/components/common/H1/H1'
import Section from '@/components/common/Section'
import { FlexHeader } from '@/components/common/FlexHeader/FlexHeader'

const ServicesSection = () => {
    return (
        <Section className=' bg-white   w-full overflow-x-hidden relative z-10 ' >
            <div className='flex flex-col lg:flex-row justify-between w-full items-center gap-2' id='services'>
                <FlexHeader 
                title='Comprehensive Manufacturing Services'
                description={<p className='text-black'>Your <span className="text-orangeBg font-bold">One-Stop</span><br/> Manufacturing Partner</p>}
                className='text-black'
                /> 
            </div>
            <div className='grid grid-cols-2 gap-x-4 gap-y-8 my-8  justify-items-center align-middle  sm:grid-cols-3  md:grid-cols-3 lg:grid-cols-4'>
                {
                    ServiceSection.map((item, index) =>
                        <Fragment key={item.title}>
                            <ServiceCard
                                title={item.title}
                                paragraph={item.paragraph}
                                image={item.image}
                                cta={item.cta}
                                itemCount={index + 1}
                            />
                        </Fragment>
                    )
                }
            </div>
            <Section className='w-full relative  lg:p-6 rounded-2xl bg-gradient-gray-shine' >
            <div className='bg-background absolute bottom-0 left-0 w-full h-1/2 lg:hidden -z-10 '/>
            
                 
                <h1 className='text-xl lg:text-3.5xl font-bold w-full   text-center '>Value-Added Services</h1>
                <Section className='bg-transparent grid grid-cols-1 lg:flex lg:flex-wrap gap-2 lg:gap-12 justify-center px-0'>
                        {ValueAddedServices.map((service, index) => (
                            <ValueAddedServiceCard
                                key={service.title}
                                title={service.title}
                                description={service.description}
                                icon={service.icon}
                            />
                        ))}
                </Section>

            </Section>
            
        </Section>
    )
}

export default ServicesSection





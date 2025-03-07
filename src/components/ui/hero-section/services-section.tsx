
"use client"
import React, { Fragment } from 'react'
import { ServiceSection } from '@/utils/constants/constant'
import { ServiceCard } from './sevice-card'

const ServicesSection = () => {
    return (
        <div className=' bg-white   w-full overflow-x-hidden relative z-10 pt-6'>
            <div className='flex flex-col lg:flex-row justify-between w-full items-center gap-2 mb-10 px-6'>
                <h1 className='font-bold text-3xl   w-2/5 text-black hidden lg:block'>Comprehensive <br /> Manufacturing Services</h1>
                <h1 className='font-bold text-xl  text-black  lg:hidden'>Comprehensive Manufacturing Services</h1>
                <p className='font-normal text-base items-center  md:w-1/5 text-black hidden lg:block'>Your <span className='text-orangeBg font-bold'>One-Stop</span> <br /> Manufacturing Partner.</p>
                <p className='font-normal text-[10px] items-center  w-full text-black  lg:hidden'>Your <span className='text-orangeBg font-bold'>One-Stop</span> Manufacturing Partner.</p>
            </div>
            <div className='grid grid-cols-2 gap-x-4 gap-y-8 mb-8 px-3 justify-items-center align-middle  sm:grid-cols-3  md:grid-cols-3 lg:grid-cols-4'>
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
            <div className='w-full relative  lg:p-6' >
                    <div className='bg-background absolute bottom-0 left-0 w-full h-1/2 lg:hidden -z-10 '/>
            <div className=' p-3 lg:p-6 rounded-[20px] lg:rounded-2xl bg-custom-gradient  z-10 mx-6 lg:m-0'>
                <div className='flex lg:flex-row flex-col justify-between  mb-6 gap-2'>
                    <h2 className='text-xl lg:text-2xl font-bold'>Value-Added Services</h2>
                    <ul className='flex lg:flex-row flex-col gap-2 lg:gap-5 text-sm font-light list-disc pl-3 lg:p-0'> <li className='text-xs' >Molding</li> <li className='text-xs'>Surface Treatment</li></ul>
                </div>
                <p className=' text-xs lg:text-sm text-start w-full'>Accurate, flawless parts via injection and compression molding. Perfect for high-volume production with consistent quality.</p>
            </div>

            </div>
            
        </div>
    )
}

export default ServicesSection





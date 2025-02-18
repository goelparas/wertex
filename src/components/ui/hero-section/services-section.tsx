
"use client"
import React, { Fragment } from 'react'
import { ServiceSection } from '@/utils/constants/constant'
import { ServiceCard } from './sevice-card'

const ServicesSection = () => {
    return (
        <div className=' bg-white p-6  '>
            <div className='flex justify-between w-full items-center  mb-10'>
                <h1 className='font-bold text-3xl   w-2/5 text-black'>Comprehensive <br/> Manufacturing Services</h1>
                <p className='font-normal text-base items-center  md:w-1/5 text-black'>Your <span className='text-orangeBg'>One-Stop</span> <br /> Manufacturing Partner.</p>
            </div>
            <div className='grid grid-cols-4 gap-x-3 gap-y-8 mb-8'>
                {
                    ServiceSection.map((item , index) =>
                        < Fragment key={item.title}>
                            <ServiceCard
                                title={item.title}
                                paragraph={item.paragraph}
                                image={item.image}
                                cta={item.cta}
                                itemCount={index +1}
                            />
                        </ Fragment>
                    )
                }
            </div>
            <div className='p-6 rounded-2xl bg-custom-gradient'>
                <div className='flex justify-between  mb-6'>
                    <h2 className='text-2xl font-bold'>Value-Added Services</h2>
                    <ul className='flex gap-5 text-sm font-light '> <li >Molding</li> <li>Surface Treatment</li></ul>
                </div>
                <p className='text-sm text-start w-full'>Accurate, flawless parts via injection and compression molding. Perfect for high-volume production with consistent quality.</p>
            </div>
        </div>
    )
}

export default ServicesSection





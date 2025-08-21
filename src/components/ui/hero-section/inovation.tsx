import Section from '@/components/common/Section'
import { Innovation } from '@/utils/constants/constant'
import Image from 'next/image'
import React from 'react'


const Inovation = () => {
    return (
        <div className=' pb-6 px-1 lg:px-6  lg:p-6 '>
            <div className='flex justify-between w-full  items-start lg:items-center  my-10 mt-20 lg:flex-row flex-col'>
                <h1 className='font-bold text-xl lg:text-3xl  w-full lg:w-2/5  uppercase'>Driving Innovation <br /> Across Industries</h1>
                <p className='font-normal text-start text-xxs lg:text-base items-center  md:w-1/5 '>From concept to delivery, we serve industries across the world.</p>
            </div>
            <Section className='grid grid-cols-3   bg-transparent  m-auto content-center gap-y-11 gap-x-5 w-[84rem]'>
                {
                    Innovation.map((item, index) =>
                        <div className='aspect-[4/7] w-28 h-48 xsm:w-32 xsm:h-52 md:w-36  lg:w-full lg:h-[700px]   relative mx-auto' key={item.title}>
                            <Image src={item.image} alt='' className='object-cover ' fill />
                            <div className='absolute bottom-0 flex w-full  justify-between items-center p-2'><h2 className=' text-[9px] lg:text-3xl font-bold'> 0{index + 1}</h2> <h2 className='text-[9px] lg:text-xl uppercase font-bold text-end'>{item.title}</h2></div>
                        </div>)
                }
            </Section>
        </div>
    )
}

export default Inovation
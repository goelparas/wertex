import { Innovation } from '@/utils/constants/constant'
import Image from 'next/image'
import React from 'react'


const Inovation = () => {
    return (
        <div className='p-6'>
            <div className='flex justify-between w-full items-center  my-10 mt-20'>
                <h1 className='font-bold text-3xl   w-2/5  uppercase'>Driving Innovation <br /> Across Industries</h1>
                <p className='font-normal text-base items-center  md:w-1/5 '>From concept to delivery, we serve industries across the world.</p>
            </div>
            <div className='grid grid-cols-3 gap-x-5 gap-y-10   m-auto content-center'>
                {
                    Innovation.map((item, index) =>
                        <div className='aspect-[4/7] w-[400px] h-[700px]   relative mx-auto ' key={item.title}>
                            <Image src={item.image} alt='' className='object-cover ' fill />
                            <div className='absolute bottom-0 flex w-full  justify-between items-center p-2'><h2 className=' text-xl font-semibold'> 0{index + 1}</h2> <h2 className=' text-xl font-semibold text-end'>{item.title}</h2></div>
                        </div>)
                }
            </div>
        </div>
    )
}

export default Inovation
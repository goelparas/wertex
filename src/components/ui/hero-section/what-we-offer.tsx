import React from 'react'
import Image from 'next/image';
import { StaticImport } from 'next/dist/shared/lib/get-img-props';
import { DetailCardConst, WhatWeOfferConst } from '@/utils/constants/constant';
import gridBg from "@/cdn/images/main_grid.avif"
import clsx from 'clsx';
const WhatWeOffer = () => {
    return (
        <div className=' flex flex-col '>
            <div className='p-4 relative'>
                <h1 className=' font-semibold text-3xl mb-10'>Your One-Stop Manufacturing Partner</h1>
                <div className='flex w-full justify-between  items-center'>
                    {
                        WhatWeOfferConst.map((item) => <ImageCard image={item.image} text={item.text} key={item.text} />)
                    }

                </div>
            </div>
            <div className='h-auto relative  p-4'>
                <Image src={gridBg} alt='grid-background' className='absolute  inset-0' fill />
                <h1 className=' font-semibold text-3xl mb-10'>The Wertex Difference</h1>
                <div className='grid  grid-cols-4 gap-4'>
                    {
                        DetailCardConst.map((item, index) => <DifferrenceCard heading={item.heading} paragraph={item.text} index={index + 1} key={item.text} className='' />)
                    }
                </div>
            </div>
        </div>
    )
}

export default WhatWeOffer;



const ImageCard = ({ image, text }: {
    image: StaticImport,
    text: string
}) => {
    return <div className='w-56 h-44 flex items-center justify-between border border-white p-3 bg-black relative'>
        <div className='w-56 h-44 border border-white absolute -top-2 -left-2 transition-all -z-10  ease-in-out hover:bg-orangeBg '></div>
        <div className='w-28 h-24  relative z-10'>
            <Image src={image} fill alt={text} />
        </div>
        <h1 className='text-end  font-bold'>{text}</h1>

    </div>

}

const DifferrenceCard = ({ heading, paragraph, index, className }: {
    heading: string,
    paragraph: string
    index: number
    className: string
}) => {
    return <div className={clsx('w-80 h-80 p-3 flex flex-col items-center justify-between border border-black shadow-sm relative backdrop-blur-sm ', className)}>
        <h1 className='text-start text-xl font-bold '> {heading}</h1>
        <div className='flex flex-col w-full '>
            <p className='font-normal text-start text-lg'>
                {paragraph}
            </p>
            <h1 className='text-end  font-bold text-2xl'>0{index}</h1>
        </div>


    </div>

}


import React from 'react'
import Image from 'next/image';
import { StaticImport } from 'next/dist/shared/lib/get-img-props';
import { DetailCardConst, WhatWeOfferConst } from '@/utils/constants/constant';
import gridBg from "@/cdn/images/main_grid.avif"
import gridBlock from "@/cdn/images/grid blocks.avif"
import clsx from 'clsx';
const WhatWeOffer = () => {
    return (
        <div className=' flex flex-col '>
            <div className='my-6 relative '>
                <h1 className='p-3 font-semibold text-3xl mb-10'>Your One-Stop Manufacturing Partner</h1>
                <div className='flex w-full justify-between gap-5  items-center my-6 overflow-x-scroll py-4'>
                    {
                        WhatWeOfferConst.map((item) => <ImageCard image={item.image} text={item.text} key={item.text} />)
                    }

                </div>
            </div>
            <div className='h-auto relative  p-6'>
                <Image src={gridBg} alt='grid-background' className='absolute  inset-0' fill />
                <Image src={gridBlock} alt='grid-background' className='absolute  inset-0 z-10 opacity-50' fill />
                <h1 className=' font-bold text-3xl mb-10 uppercase'>The Wertex Difference</h1>
                <div className='grid  grid-cols-4 gap-4 z-20 relative'>
                    {
                        DetailCardConst.map((item, index) => <DifferrenceCard heading={item.heading} paragraph={item.text} index={index + 1} key={item.text} style={item.style} />)
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

const DifferrenceCard = ({ heading, paragraph, index, style }: {
    heading: string,
    paragraph: string
    index: number
    style: {
        container: string,
        heading: string,
        footer: string
    }
}) => {
    return <div className={clsx('w-80 h-80 p-3 flex flex-col items-center justify-between border border-[#303030] shadow-sm relative backdrop-blur-md  ', style.container)}>
        <h1 className={clsx('text-start text-xl font-bold ', style.heading)}> {heading}</h1>
        <div className={clsx('flex flex-col w-full', style.footer)}>
            <p className={'font-normal text-start text-lg'}>
                {paragraph}
            </p>
            <h1 className='text-end  font-bold text-2xl'>0{index}</h1>
        </div>


    </div>

}


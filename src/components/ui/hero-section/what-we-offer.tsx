import React from 'react'
import Image from 'next/image';
import { StaticImport } from 'next/dist/shared/lib/get-img-props';
import { DetailCardConst, WhatWeOfferConst } from '@/utils/constants/constant';
import gridBg from "@/cdn/images/main_grid.avif"
import gridBlock from "@/cdn/images/grid blocks.avif"
import clsx from 'clsx';
import { cn } from '@/lib/utils';
import Section from '@/components/common/Section';
import { FlexHeader } from '@/components/common/FlexHeader/FlexHeader';
const WhatWeOffer = () => {
    return (
        <div className=' flex flex-col   overflow-hidden'>
            <Section className=' relative bg-transparent mr-0 px-0'>
                <FlexHeader 
                title='Your One-Stop Manufacturing Partner'
                description=''
                className='pl-12'/>
                <Section className='grid grid-cols-4  lg:flex w-full justify-between gap-12  items-center py-12 overflow-hidden lg:overflow-x-scroll pl-12 bg-transparent transition-all duration-300'>
                    {
                        WhatWeOfferConst.map((item, index) => <ImageCard image={item.image} text={item.text} key={item.text}  className={`${item.className} ${index === 0  && 'ml-12'}`}/>)
                    }
                </Section>
            </Section>
            <div className='h-auto relative py-6'>
                <Image src={gridBg} alt='grid-background' className='absolute  inset-0' fill />
                <Image src={gridBlock} alt='grid-background' className='absolute  inset-0 z-10 opacity-50' fill />
                <h1 className=' font-bold  text-xl lg:text-3xl mb-10 uppercase px-6'>The Wertex Difference</h1>
                <div className='flex items-center justify-between overflow-x-scroll lg:grid  lg:grid-cols-4 gap-4 z-20 relative lg:p-6'>
                    {
                        DetailCardConst.map((item, index) => <DifferrenceCard heading={item.heading} paragraph={item.text} index={index + 1} key={item.text} style={item.style} />)
                    }
                </div>
            </div>
        </div>
    )
}

export default WhatWeOffer;



export const ImageCard = ({ image, text, className }: {
    image: StaticImport,
    text: string,
    className: string

}) => {
    return <div className={cn('w-max h-max lg:w-60 lg:h-48 hover:cursor-pointer shrink-0 relative hover:scale-105 transition-all duration-300  ', className)}>
        <div className='w-full h-full flex items-center justify-between z-20 lg:p-3 bg-black relative border border-white '>
        <div className='w-28 h-24  relative z-20 '>
            <Image src={image} fill alt={text} />
        </div>
        <h1 className='text-end  font-bold'>{text}</h1>
        </div>
        <div className='w-56 h-44 lg:block border border-white bg-transparent absolute -top-4 -left-4 transition-all z-10  ease-in-out hover:bg-orangeBg hidden'/>
       

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
    return <div className={clsx('w-48 h-52 lg:w-80 lg:h-80 p-3 flex flex-col shrink-0 items-center justify-between border border-[#303030] shadow-sm relative backdrop-blur-md  ', style.container)}>
        <h1 className={clsx('text-start text-xs lg:text-xl font-bold ', style.heading)}> {heading}</h1>
        <div className={clsx('flex flex-col w-full', style.footer)}>
            <p className={'font-normal text-start text-[10px] lg:text-lg'}>
                {paragraph}
            </p>
            <h1 className='text-end  font-bold text-2xl'>0{index}</h1>
        </div>


    </div>

}


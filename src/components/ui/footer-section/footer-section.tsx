
import Image from 'next/image'
import React from 'react'
import arrow from "@/cdn/arrow.avif"
type Props = {}

const FooterSection = (props: Props) => {
    return (
        <footer className='bg-background grid grid-cols-2 w-full h-[60dvh] py-5 px-10'>
            <section className='flex flex-col gap-16 justify-center items-start px-6'>
                <div>
                    <h1 className='uppercase text-3xl font-bold mb-8 '>DROP US A LINE AND WE’LL <br /> GET IN TOUCH</h1>
                    <p className='uppercase underline underline-offset-2 font-semibold text-[0.5rem]  p-1'>Drop us a line</p>
                </div>
                <div>
                    <div>
                        <p className='uppercase  font-semibold text-md p-1'>+91  7907651046</p>
                        <p className='uppercase  font-semibold text-md p-1'>3/264, Pannimadai Road,<br />K.Vadamadurai,<br />Coimbatore - 641017.</p>
                    </div>
                </div>
            </section>
            <section className='flex flex-col w-full items-center justify-center '>
                <div className='group-parent  hover:cursor-pointer w-full relative flex justify-between items-center'>
                    <span className='uppercase text-5xl font-bold'>contact@wertex.in</span>
                    <Image src={arrow} height={80} width={80} alt='arrow' className='inline' />
                    <div className='w-full bg-white h-[1px] absolute bottom-0 '></div>
                </div>
            </section>
        </footer>
    )
}

export default FooterSection
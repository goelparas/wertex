
import Image from 'next/image'
import React from 'react'
import arrow from "@/cdn/arrow.avif"
const FooterSection = ({ isMobile }: { isMobile: boolean }) => {
    return (
        <footer className='bg-black grid grid-cols-2 w-full overflow-hidden p-2 sm:p-4 lg:px-4 lg:pt-8 lg:pb-12'>
            <section className='flex flex-col  justify-between items-start '>
                <h1 className='uppercase text-[0.6rem] sm:text-2xl font-bold mb-8 '>DROP US A LINE AND WE’LL <br/> GET IN TOUCH</h1>
                <div className='flex flex-col justify-between gap-2'>
                    <a className='uppercase underline font-semibold text-xxs sm:text-sm p-1' href="tel:+919876543210">+91  7907651046</a>
                    <p className='uppercase  font-semibold text-xxs sm:text-lg p-1'>3/264, Pannimadai Road,<br />K.Vadamadurai,<br />Coimbatore - 641017.</p>
                </div>
            </section>
            <section className='flex flex-col w-full items-center justify-center  '>
                <div className=' hover:cursor-pointer w-full relative flex justify-between items-center '>
                    <span className='uppercase text-xs sm:text-5xl font-bold'>contact@wertex.in</span>
                    {
                        isMobile ? <Image src={arrow} height={25} width={25} alt='arrow' className='inline' /> : <Image src={arrow} height={80} width={80} alt='arrow' className='inline' />
                    }

                    <div className='w-full bg-white h-[1px] absolute bottom-0 '></div>
                </div>
            </section>
        </footer>
    )
}

export default FooterSection
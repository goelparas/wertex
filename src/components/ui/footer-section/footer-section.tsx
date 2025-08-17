
import React from 'react'
import CustomImage from '@/components/common/Image/Image'
import arrow from "@/cdn/images/arrow.avif"
import * as motion from "motion/react-client"

const FooterSection = () => {
    return (
        <footer className='bg-black grid grid-cols-2 w-full overflow-hidden p-2 sm:p-4 lg:px-4 lg:pt-8 lg:pb-12'>
            <section className='flex flex-col  justify-between items-start '>
                <h1 className='uppercase text-[0.6rem] sm:text-2xl font-bold mb-8 '>DROP US A LINE AND WE’LL <br /> GET IN TOUCH</h1>
                <div className='flex flex-col justify-between gap-2'>
                    <a className='uppercase underline font-semibold text-xxs sm:text-sm p-1' href="tel:+919876543210">+91  7907651046</a>
                    <p className='uppercase  font-semibold text-xxs sm:text-lg p-1'>3/264, Pannimadai Road,<br />K.Vadamadurai,<br />Coimbatore - 641017.</p>
                </div>
            </section>

            <section className="flex flex-col w-full items-center justify-center">
      <motion.div
        className="group hover:cursor-pointer w-full relative flex justify-between items-center"
        whileHover="hover"
        initial="initial"
      >
        <a
          className="uppercase text-xs sm:text-2xl md:text-3xl lg:text-5xl text-orangeBg font-bold relative z-10"
          href="mailto:contact@wertex.in?subject=Query%20Regarding%20Manufacturing&body=Hello,%0A%0AI%20have%20some%20queries%20regarding%20your%20manufacturing%20process.%0A%0AThank%20you."
        >
          contact@wertex.in
        </a>

        {/* Arrow with rotation animation */}
        <motion.div
          variants={{
            initial: { rotate: 0 },
            hover: { rotate: 45 },
          }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 20,
          }}
        >
          <CustomImage
            mobileImage={{ path: arrow, height: 40, width: 40 }}
            desktopImage={{ path: arrow, height: 85, width: 85 }}
            alt="arrow"
          />
        </motion.div>
        {/* Animated underline with spring effect */}
        <motion.div
          className="bg-orangeBg h-[2px] absolute bottom-0 left-0"
          variants={{
            initial: {
              width: "15%",
              opacity: 1,
            },
            hover: {
              width: "100%",
              opacity: 1,
            },
          }}
          transition={{
            type: "spring",
            stiffness: 400,
            damping: 25,
            duration: 0.6,
          }}
        />
      </motion.div>
    </section>
        </footer>
    )
}

export default FooterSection
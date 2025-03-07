"use client"

import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";
interface CardProps {
    title: string;
    paragraph: string;
    image: StaticImport; // URL of the image
    cta?: {
        text: string
        onClick: () => void;
    };
    itemCount: number
}

export const ServiceCard: React.FC<CardProps> = ({ title, paragraph, image, cta, itemCount }) => {
    return (
        <div className="overflow-hidden  w-min  flex flex-col gap-5   shrink-0 ">
            <div className=" relative  w-40 h-32 xsm:w-44 xsm:h-36 md:w-56 md:h-44    lg:w-72 lg:h-60 text-center">
                <p className="absolute top-2 left-2 bg-lightGray shadow-sm font-semibold  lg:rounded-lg  p-1 lg:p-2">0{itemCount}</p>
                <Image src={image} alt={title} className="object-cover rounded-md lg:rounded-xl w-full h-full" quality={100} />
                {cta && (
                    <div className=" p-1 lg:p-2 lg:py-3 absolute bottom-1 left-0  bg-background flex  w-[95%] lg:w-[90%]  rounded-md lg:rounded-xl right-0 m-auto  justify-between items-center">
                        <div className="font-semibold  text-[10px] lg:text-sm">{title}</div>
                        <div className="bg-orangeBg  p-1 lg:p-2 rounded-lg">
                            <FaArrowRight width={20} height={20} />
                        </div>
                    </div>
                )}
            </div>
            <div className="flex items-start w-full">
                <p className="text-gray-700  text-xxs md:text-xs lg:text-base text-start">{paragraph}</p>
            </div>

        </div>
    );
};
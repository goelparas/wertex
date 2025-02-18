"use client"

import Button from "@/components/common/Button/button";
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
        <div className=" overflow-hidden  w-min  flex flex-col gap-5 rounded-t-2xl">
            <div className=" relative w-80 h-60 text-center">
                <p className="absolute top-2 left-2 bg-lightGray shadow-sm font-semibold rounded-lg  p-2">0{itemCount}</p>
                <Image src={image} alt={title} className="object-cover rounded-2xl w-full h-full" quality={100} />
                {cta && (
                    <div className="p-2 py-3 absolute bottom-1 left-0  bg-background flex w-[90%] rounded-xl right-0 m-auto  justify-between items-center">
                        <div className="font-semibold text-sm">{title}</div>
                        <div className="bg-orangeBg p-2 rounded-lg">
                            <FaArrowRight width={20} height={20} />
                        </div>
                    </div>
                )}
            </div>
            <div className="flex items-start w-full">
                <p className="text-gray-700 text-base text-start">{paragraph}</p>
            </div>

        </div>
    );
};
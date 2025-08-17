"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"
import arrow from '@/cdn/images/Vector.svg'
import Image from "next/image"
interface DropdownItem {
  name: string
  hasArrow?: boolean
}

interface DropdownProps {
  trigger: string
  items: DropdownItem[]
}

const Dropdown = ({ trigger, items }: DropdownProps) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      {/* Trigger */}
      <div className="flex items-center gap-1 text-[#CDCDCD] font-normal text-lg uppercase hover:cursor-pointer">
        <span>{trigger}</span>
        <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isOpen ? "rotate-180" : "rotate-0"}`} />
      </div>

      {/* Dropdown */}
      {isOpen && (
        <div className="absolute top-8 left-1/2 transform -translate-x-1/2 mt-4 w-[500px] bg-[#1a1a1a] rounded-2xl shadow-2xl border border-gray-800 overflow-hidden z-50">
          <div className="grid grid-cols-2 p-6 gap-x-8 gap-y-6">
            {items.map((item, index) => (
              <div key={item.name} className="flex items-center justify-between hover:cursor-pointer group">
                <span className="text-white text-lg font-medium group-hover:text-gray-300 transition-colors">
                  {item.name}
                </span>
                <Image src={arrow} alt="arrow" className="w-6 h-6 rotate-90 transition-all duration-300 hover:rotate-0 " />

              </div>
            ))}
          </div>
        </div>
      )}
    </>
  )
}

export default Dropdown

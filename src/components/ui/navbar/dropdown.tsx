"use client"
import type React from "react"
import { useState, useCallback, useRef, useEffect, memo } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import arrow from "@/cdn/images/aboutus/arrow-dot.svg"
import Image from "next/image"
interface DropdownItem {
  name: string
  href: string
  icon?: string
}

interface DropdownProps {
  trigger: string
  items?: DropdownItem[]
  className?: string
}

// Service icons mapping with better type safety
const DEFAULT_SERVICE_ICONS: Record<string, string> = {
  "CNC Machining": "/icons/cnc-machining.svg",
  "Casting": "/icons/casting.svg", 
  "Forging": "/icons/forging.svg",
  "Sheet Metal Fabrication": "/icons/sheet-metal.svg",
  "Aluminium Extrusion": "/icons/aluminium-extrusion.svg",
  "Surface Treatment": "/icons/surface-treatment.svg",
  "Molding": "/icons/molding.svg",
  "Value-Added Services": "/icons/value-added.svg",
} as const

// Animation variants for better performance
const dropdownVariants = {
  hidden: { 
    opacity: 0, 
    y: -10,
    scale: 0.95
  },
  visible: { 
    opacity: 1, 
    y: 0,
    scale: 1,
    transition: {
      duration: 0.15,
      ease: [0.4, 0.0, 0.2, 1] // Custom easing for smoother animation
    }
  },
  exit: { 
    opacity: 0, 
    y: -10,
    scale: 0.95,
    transition: {
      duration: 0.1,
      ease: [0.4, 0.0, 1, 1]
    }
  }
}

const Dropdown: React.FC<DropdownProps> = memo(({ trigger, items = [], className = "" }) => {
  const [isOpen, setIsOpen] = useState(true)
  const [focusedIndex, setFocusedIndex] = useState(-1)
  const dropdownRef = useRef<HTMLDivElement>(null)
  const triggerRef = useRef<HTMLButtonElement>(null)

  // Memoized handlers for better performance
  const handleMouseEnter = useCallback(() => {
    setIsOpen(true)
    setFocusedIndex(-1)
  }, [])

  const handleMouseLeave = useCallback(() => {
   setIsOpen(false)
    setFocusedIndex(-1)
  }, [])

  const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
    if (!isOpen) {
      if (e.key === 'Enter' || e.key === ' ' || e.key === 'ArrowDown') {
        e.preventDefault()
        setIsOpen(true)
        setFocusedIndex(0)
      }
      return
    }

    switch (e.key) {
      case 'Escape':
        e.preventDefault()
       //setIsOpen(false)
        setFocusedIndex(-1)
        triggerRef.current?.focus()
        break
      case 'ArrowDown':
        e.preventDefault()
        setFocusedIndex(prev => (prev + 1) % items.length)
        break
      case 'ArrowUp':
        e.preventDefault()
        setFocusedIndex(prev => prev <= 0 ? items.length - 1 : prev - 1)
        break
      case 'Enter':
      case ' ':
        if (focusedIndex >= 0) {
          e.preventDefault()
          // Trigger click on focused item
          const focusedLink = dropdownRef.current?.querySelector(
            `[data-index="${focusedIndex}"]`
          ) as HTMLAnchorElement
          focusedLink?.click()
        }
        break
    }
  }, [isOpen, focusedIndex, items.length])

  const handleItemClick = useCallback(() => {
   setIsOpen(false)
    setFocusedIndex(-1)
  }, [])

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
       setIsOpen(false)
        setFocusedIndex(-1)
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isOpen])

  

  return (
    <div 
      ref={dropdownRef}
      className={`relative ${className}`} 
      onMouseEnter={handleMouseEnter} 
      onMouseLeave={handleMouseLeave}
    >
      <button 
        ref={triggerRef}
        className="text-[#CDCDCD] font-semibold text-lg uppercase hover:cursor-pointer py-4 px-3 text-nowrap hover:text-white focus:text-white focus:outline-none focus:ring-2   focus:ring-offset-2 focus:ring-offset-black rounded-t-2xl roun transition-colors duration-200"
        onKeyDown={handleKeyDown}
        aria-expanded={isOpen}
        aria-haspopup="true"
        aria-label={`${trigger} menu`}
      >
        {trigger}
      </button>

      <AnimatePresence>
        {isOpen && items.length > 0 && (
          <motion.div
            variants={dropdownVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="absolute top-full  -right-[200%] transform    w-[42rem] bg-[#0606069E] backdrop-blur-sm  rounded-2xl shadow-2xl border border-black z-50"
            role="menu"
            aria-label={`${trigger} options`}
          >
            <div className="grid grid-cols-2 gap-2 p-6">
              {items.map((item, index) => (
                <Link
                  key={item.href}
                  href={item.href}
                  data-index={index}
                  className={`flex items-center gap-4 p-4 text-[#CDCDCD]  rounded-lg transition-all duration-200 group focus:outline-none  focus:ring-offset-2 focus:ring-offset-black ${
                    focusedIndex === index ? 'bg-gray-800/50 ring-2 ' : ''
                  }`}
                  onClick={handleItemClick}
                  role="menuitem"
                  tabIndex={isOpen ? 0 : -1}
                >
                  <div className="flex items-center justify-between flex-1">
                    <span className="text-white font-medium group-hover:text-orange-400 group-focus:text-orange-400 transition-colors">
                      {item.name}
                    </span>
                    <Image src={arrow} alt="arrow" width={20} height={20} className="transition-transform duration-200 group-hover:rotate-45" />
                  </div>
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
})

Dropdown.displayName = 'Dropdown'

export default Dropdown

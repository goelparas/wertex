'use client'
import Image from 'next/image'
import React, { useState, useCallback, useMemo } from 'react'
import map from "@/cdn/images/map.webp"
import mapBg from "@/cdn/images/bg-map.avif"
import frame from "@/cdn/images/frame.png"
import { useWindowSize } from '@/utils/hooks/useWindowSize'

// Constants extracted outside component to prevent recreation
const COUNTRIES = ['India', 'UAE', 'Germany', 'USA', 'Netherlands'] as const
type Country = typeof COUNTRIES[number]

interface ContactInfo {
  phone: string
  email: string
  linkedin: string
}

const CONTACT_DATA: Record<Country, ContactInfo> = {
  India: {
    phone: "+91 8745 6123",
    email: "india@wertex.in",
    linkedin: "linkedin.com/company/wertex-india",
  },
  UAE: {
    phone: "+971 4 123 4567",
    email: "uae@wertex.in",
    linkedin: "linkedin.com/company/wertex-uae",
  },
  Germany: {
    phone: "+49 30 123 4567",
    email: "germany@wertex.in",
    linkedin: "linkedin.com/company/wertex-germany",
  },
  USA: {
    phone: "+1 555 123 4567",
    email: "usa@wertex.in",
    linkedin: "linkedin.com/company/wertex-usa",
  },
  Netherlands: {
    phone: "+31 20 123 4567",
    email: "netherlands@wertex.in",
    linkedin: "linkedin.com/company/wertex-netherlands",
  },
}

// Country markers configuration
const COUNTRY_MARKERS: Record<Country, { top: string; left?: string; right?: string }> = {
  India: { top: '50%', right: '30%' },
  UAE: { top: '45%', right: '36%' },
  USA: { top: '30%', left: '20%' },
  Germany: { top: '30%', left: '52%' },
  Netherlands: { top: '20%', left: '55%' },
}

// Common className patterns
const MARKER_BASE_CLASS = "absolute w-3 h-3 bg-white rounded-full hover:scale-125 transition-transform duration-200"
const COUNTRY_LIST_ITEM_CLASS = "text-smokeWhite text-lg cursor-pointer hover:text-white transition-colors duration-300"
const CONTACT_BUTTON_BASE_CLASS = "bg-white font-bold text-black text-left clipped uppercase hover:bg-gray-100 transition-colors duration-200 z-10"

const CountryWork: React.FC = () => {
  const [selectedCountry, setSelectedCountry] = useState<Country>("India")
  const [isAnimating, setIsAnimating] = useState(false)
  const { isMobile } = useWindowSize()
  // Memoized contact data for selected country
  const selectedContactData = useMemo(() => 
    CONTACT_DATA[selectedCountry], 
    [selectedCountry]
  )

  // Optimized country click handler with useCallback
  const handleCountryClick = useCallback((country: Country) => {
    if (country !== selectedCountry) {
      setIsAnimating(true)
      // Simplified animation logic with single timeout
      setTimeout(() => {
        setSelectedCountry(country)
        setIsAnimating(false)
      }, 150)
    }
  }, [selectedCountry])

  // Memoized email link generator
  const generateEmailLink = useCallback((country: Country) => {
    const email = CONTACT_DATA[country]?.email || "contact@wertex.in"
    const subject = encodeURIComponent("Query Regarding Manufacturing")
    const body = encodeURIComponent("Hello,\n\nI have some queries regarding your manufacturing process.\n\nThank you.")
    return `mailto:${email}?subject=${subject}&body=${body}`
  }, [])

  // Memoized email link for selected country
  const selectedCountryEmailLink = useMemo(() => 
    generateEmailLink(selectedCountry), 
    [selectedCountry, generateEmailLink]
  )

  // Memoized country list items to prevent recreation
  const countryListItems = useMemo(() => 
    COUNTRIES.map((country) => ({
      country,
      isSelected: selectedCountry === country,
      className: `${COUNTRY_LIST_ITEM_CLASS} ${selectedCountry === country ? "text-white font-bold" : ""}`,
    })), 
    [selectedCountry]
  )

  return (
    <div className="h-[32rem] lg:h-dvh relative">
      {/* Desktop country navigation */}
      <ul className="hidden justify-between items-end w-full list-disc bg-background lg:flex h-[10dvh] p-6">
        {countryListItems.map(({ country, className }) => (
          <li
            key={country}
            className={className}
            onClick={() => handleCountryClick(country)}
          >
            {country}
          </li>
        ))}
      </ul>

      {/* Map section */}
      <div className="h-full lg:h-[90dvh] relative w-full bg-custom-map-gradient backdrop-brightness-0">
        <Image src={map } alt="World map" className="absolute object-cover lg:object-contain" fill quality={100} />
        <Image src={mapBg} alt="Map background" fill className="-z-10 backdrop-brightness-110" />
        {/* Country information card */}
        <div
          className={`backdrop-blur-0 bg-[#D9D9D980] w-52  h-24 lg:w-96 lg:h-48 absolute  top-24 lg:top-auto lg:bottom-48 p-3 left-5 z-10 transition-all duration-300 ease-in-out transform ${
            isAnimating ? "scale-95 opacity-70" : "scale-100 opacity-100"
          }`}
        >
          <h1 className="text-white text-lg lg:text-3xl font-bold mb-2">{selectedCountry}</h1>
          <div className="text-white text-xxs lg:text-base space-y-1 opacity-90">
            <p className=' font-semibold'>Ph no: {selectedContactData.phone}</p>
            <p className=' font-semibold'>Email: {selectedContactData.email}</p>
          </div>
        </div>

        {/* Country markers */}
       {isMobile ? null : <div className="absolute inset-0 z-10">
          {COUNTRIES.map((country) => {
            const position = COUNTRY_MARKERS[country]
            const isSelected = selectedCountry === country
            return (
              <div key={country} className="absolute" style={{
                top: position.top,
                left: position.left,
                right: position.right,
              }}>
                {/* Main marker dot */}
                <button
                  className={`${MARKER_BASE_CLASS} ${isSelected ? 'bg-white scale-150' : ''}`}
                  onClick={() => handleCountryClick(country)}
                  aria-label={`Select ${country}`}
                />
                
                {/* Concentric circle animation for selected country */}
                {isSelected && (
                  <>
                    <div className="absolute w-6 h-6 border-2 border-white rounded-full animate-ping" 
                         style={{ top: '-6px', left: '-6px' }} />
                    <div className="absolute w-8 h-8 border border-white rounded-full animate-pulse" 
                         style={{ top: '-10px', left: '-10px' }} />
                    <div className="absolute w-12 h-12 border border-white rounded-full animate-pulse" 
                         style={{ top: '-18px', left: '-18px', animationDelay: '0.5s' }} />
                  </>
                )}
                
                {/* Country name label */}
                <div className={`absolute top-4 left-1/2 transform -translate-x-1/2 whitespace-nowrap transition-all duration-300 ${
                  isSelected ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
                }`}>
                  <span className="bg-black bg-opacity-80 text-white text-xs px-2 py-1 rounded-md font-medium">
                    {country}
                  </span>
                </div>
              </div>
            )
          })}
        </div>}

        {/* Mobile country navigation */}
        <ul className="absolute bottom-6 left-6 z-20 flex flex-col justify-between items-start list-disc lg:hidden">
          {countryListItems.map(({ country, className }) => (
            <li
              key={country}
              className={className}
              onClick={() => handleCountryClick(country)}
            >
              {country}
            </li>
          ))}
        </ul>
      </div>

      {/* Bottom section */}
      <div className=" hidden lg:flex flex-col lg:flex-row gap-2 lg:gap-2 p-2 m-5 lg:p-6 lg:absolute lg:bottom-4 justify-between rounded-md w-[90%] lg:mx-auto left-0 right-0 relative">
        <Image src={frame} fill alt="Frame decoration" className="z-10 mask" />
        <div className="flex flex-col z-10 justify-between items-start gap-2 px-6">
          <h1 className="text-xl lg:text-3xl font-bold">Innovating Across Borders</h1>
          <a
            className={`${CONTACT_BUTTON_BASE_CLASS} text-xs hidden lg:block md:text-[1rem] p-2 max-w-max`}
            href={selectedCountryEmailLink}
          >
            Contact us
          </a>
        </div>
        <p className="z-10 px-6 lg:w-1/5 w-4/5 text-xxs lg:text-lg">
          Delivering excellence to businesses wherever they are
        </p>
        <a
          className={`${CONTACT_BUTTON_BASE_CLASS} text-xxs ml-6 lg:hidden md:text-[1rem] p-2 max-w-max`}
          href={selectedCountryEmailLink}
        >
          Contact us
        </a>
      </div>
    </div>
  )
}

export default CountryWork
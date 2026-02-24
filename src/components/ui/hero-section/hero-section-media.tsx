"use client"
import React, { useState, useRef, useEffect } from 'react'
import Image from 'next/image'
import { StaticImport } from 'next/dist/shared/lib/get-img-props'
import { useWindowSize } from '@/utils/hooks/useWindowSize'

interface HeroSectionMediaProps {
    desktopVideo: string
    mobileVideo: string
    desktopImage: StaticImport | string
    mobileImage: StaticImport | string
    alt?: string
}

const HeroSectionMedia = ({
    desktopVideo,
    mobileVideo,
    desktopImage,
    mobileImage,
    alt = "background",
}: HeroSectionMediaProps) => {
    const { isMobile } = useWindowSize()
    const videoRef = useRef<HTMLVideoElement>(null)
    const [videoReady, setVideoReady] = useState(false)
    const [videoFailed, setVideoFailed] = useState(false)

    const videoSrc = isMobile ? mobileVideo : desktopVideo
    const imageSrc = isMobile ? mobileImage : desktopImage

    useEffect(() => {
        // Reset states when source changes
        setVideoReady(false)
        setVideoFailed(false)

        const video = videoRef.current
        if (!video) return

        // Timeout: if video doesn't load within 5s, fall back to image
        const timeout = setTimeout(() => {
            if (!videoReady) {
                setVideoFailed(true)
            }
        }, 5000)

        const handleCanPlay = () => {
            clearTimeout(timeout)
            setVideoReady(true)
            video.play().catch(() => {
                // Autoplay blocked — fall back to image
                setVideoFailed(true)
            })
        }

        const handleError = () => {
            clearTimeout(timeout)
            setVideoFailed(true)
        }

        video.addEventListener('canplaythrough', handleCanPlay)
        video.addEventListener('error', handleError)

        // Trigger load
        video.load()

        return () => {
            clearTimeout(timeout)
            video.removeEventListener('canplaythrough', handleCanPlay)
            video.removeEventListener('error', handleError)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [videoSrc])

    const showVideo = videoReady && !videoFailed

    return (
        <>
            {/* Fallback image — always rendered, hidden once video plays */}
            <Image
                src={imageSrc}
                alt={alt}
                fill
                quality={100}
                priority
                className={`object-cover transition-opacity duration-700 ${showVideo ? 'opacity-0' : 'opacity-100'}`}
                style={{ zIndex: 0 }}
            />

            {/* Video — lowest z-index, fades in when ready */}
            {!videoFailed && (
                <video
                    ref={videoRef}
                    muted
                    loop
                    playsInline
                    preload="auto"
                    className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${showVideo ? 'opacity-100' : 'opacity-0'}`}
                    style={{ zIndex: 1 }}
                >
                    <source src={videoSrc} type="video/mp4" />
                </video>
            )}

            {/* Dark overlay for text readability */}
            <div className="absolute inset-0 z-[2] bg-gray-900/10" />
        </>
    )
}

export default HeroSectionMedia

'use client'

import { useEffect } from 'react'

function easeInOutCubic(t: number): number {
    return t < 0.5
        ? 4 * t * t * t
        : 1 - Math.pow(-2 * t + 2, 3) / 2
}

function smoothScrollTo(targetY: number, duration = 1200) {
    const startY = window.scrollY
    const distance = targetY - startY
    const startTime = performance.now()

    function step(currentTime: number) {
        const elapsed = currentTime - startTime
        const progress = Math.min(elapsed / duration, 1)
        const easedProgress = easeInOutCubic(progress)

        window.scrollTo(0, startY + distance * easedProgress)

        if (progress < 1) {
            requestAnimationFrame(step)
        }
    }

    requestAnimationFrame(step)
}

export default function SmoothScrollAnchor() {
    useEffect(() => {
        const handleClick = (e: MouseEvent) => {
            const target = e.target as HTMLElement
            const anchor = target.closest('a, button[data-scroll-to]')
            if (!anchor) return

            // For <a> tags with hash links
            if (anchor.tagName === 'A') {
                const href = anchor.getAttribute('href')
                if (!href) return

                const hashIndex = href.indexOf('#')
                if (hashIndex === -1) return

                const hash = href.slice(hashIndex)
                if (hash === '#') return

                const element = document.querySelector(hash)
                if (element) {
                    e.preventDefault()
                    const rect = element.getBoundingClientRect()
                    const targetY = window.scrollY + rect.top - 80 // 80px offset for navbar

                    smoothScrollTo(targetY, 1200)
                    window.history.pushState(null, '', href)
                }
            }

            // For buttons with data-scroll-to attribute
            if (anchor.tagName === 'BUTTON') {
                const scrollTarget = anchor.getAttribute('data-scroll-to')
                if (!scrollTarget) return

                const element = document.querySelector(scrollTarget)
                if (element) {
                    const rect = element.getBoundingClientRect()
                    const targetY = window.scrollY + rect.top - 80

                    smoothScrollTo(targetY, 1200)
                }
            }
        }

        document.addEventListener('click', handleClick)
        return () => document.removeEventListener('click', handleClick)
    }, [])

    return null
}

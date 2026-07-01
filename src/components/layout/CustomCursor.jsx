import { useEffect, useRef, useState } from 'react'
import { config } from '../../data/config.js'

/**
 * Custom cursor: a small dot tracking the mouse exactly, plus a
 * ring trailing with spring-like lag. Expands when hovering any
 * element marked data-hover. Disabled entirely on touch devices
 * and when the customCursor feature flag is off.
 */
export default function CustomCursor() {
  const dotRef = useRef(null)
  const ringRef = useRef(null)
  const [hovering, setHovering] = useState(false)

  useEffect(() => {
    if (!config.features.customCursor) return
    const isTouchDevice = window.matchMedia('(hover: none)').matches
    if (isTouchDevice) return

    let mouseX = window.innerWidth / 2
    let mouseY = window.innerHeight / 2
    let ringX = mouseX
    let ringY = mouseY
    let rafId

    const handleMove = (e) => {
      mouseX = e.clientX
      mouseY = e.clientY
      if (dotRef.current) {
        dotRef.current.style.left = `${mouseX}px`
        dotRef.current.style.top = `${mouseY}px`
      }
    }

    const animate = () => {
      ringX += (mouseX - ringX) * 0.18
      ringY += (mouseY - ringY) * 0.18
      if (ringRef.current) {
        ringRef.current.style.left = `${ringX}px`
        ringRef.current.style.top = `${ringY}px`
      }
      rafId = requestAnimationFrame(animate)
    }

    window.addEventListener('mousemove', handleMove)
    animate()

    const handleOver = (e) => {
      if (e.target.closest('[data-hover]')) setHovering(true)
    }
    const handleOut = (e) => {
      if (e.target.closest('[data-hover]')) setHovering(false)
    }
    document.addEventListener('mouseover', handleOver)
    document.addEventListener('mouseout', handleOut)

    return () => {
      window.removeEventListener('mousemove', handleMove)
      document.removeEventListener('mouseover', handleOver)
      document.removeEventListener('mouseout', handleOut)
      cancelAnimationFrame(rafId)
    }
  }, [])

  if (!config.features.customCursor) return null

  return (
    <>
      <div
        ref={dotRef}
        className="custom-cursor pointer-events-none fixed z-[9999] h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent transition-opacity duration-200"
      />
      <div
        ref={ringRef}
        className={`custom-cursor pointer-events-none fixed z-[9998] -translate-x-1/2 -translate-y-1/2 rounded-full border transition-[width,height,background-color,border-color] duration-200 ${
          hovering
            ? 'h-16 w-16 border-accent/40 bg-accent/10'
            : 'h-[34px] w-[34px] border-white/15 bg-transparent'
        }`}
      />
    </>
  )
}

import { useEffect } from 'react'
import Lenis from 'lenis'

/**
 * Initializes Lenis smooth scrolling for the whole app. Mount once
 * at the root (in App.jsx). Respects prefers-reduced-motion by
 * skipping smoothing entirely for users who've requested it.
 */
export function useLenis() {
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion) return

    const lenis = new Lenis({
      duration: 1.1,
      smoothWheel: true,
    })

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    const rafId = requestAnimationFrame(raf)

    return () => {
      cancelAnimationFrame(rafId)
      lenis.destroy()
    }
  }, [])
}

export default useLenis

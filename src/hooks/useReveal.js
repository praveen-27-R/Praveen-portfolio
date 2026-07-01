import { useEffect, useRef, useState } from 'react'

/**
 * Returns a ref + boolean for whether the attached element has
 * entered the viewport. Drives fade/translate reveal animations
 * declaratively. Fires once per element by default.
 */
export function useReveal(threshold = 0.15) {
  const ref = useRef(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          observer.unobserve(el)
        }
      },
      { threshold }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [threshold])

  return [ref, inView]
}

export default useReveal

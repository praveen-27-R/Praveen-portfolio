import { useEffect, useRef } from 'react'

/**
 * Fixed full-viewport ambient background. A crimson-accent glow
 * follows the cursor with elastic lag -- the signature visual
 * element the rest of the page stays quiet around.
 */
export default function AmbientBackground() {
  const glowRef = useRef(null)

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    let targetX = window.innerWidth / 2
    let targetY = window.innerHeight * 0.3
    let glowX = targetX
    let glowY = targetY
    let rafId

    const handleMove = (e) => {
      targetX = e.clientX
      targetY = e.clientY
    }

    const animate = () => {
      glowX += (targetX - glowX) * 0.045
      glowY += (targetY - glowY) * 0.045
      if (glowRef.current) {
        glowRef.current.style.left = `${glowX}px`
        glowRef.current.style.top = `${glowY}px`
      }
      rafId = requestAnimationFrame(animate)
    }

    if (!prefersReducedMotion) {
      window.addEventListener('mousemove', handleMove)
      animate()
    }

    return () => {
      window.removeEventListener('mousemove', handleMove)
      cancelAnimationFrame(rafId)
    }
  }, [])

  return (
    <>
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        <div
          className="absolute inset-0 opacity-50"
          style={{
            backgroundImage:
              'radial-gradient(1px 1px at 20% 30%, rgba(255,255,255,0.4), transparent), radial-gradient(1px 1px at 70% 60%, rgba(255,255,255,0.3), transparent), radial-gradient(1px 1px at 40% 80%, rgba(255,255,255,0.35), transparent), radial-gradient(1px 1px at 85% 15%, rgba(255,255,255,0.3), transparent)',
            backgroundSize: '200% 200%',
          }}
        />
        <div
          ref={glowRef}
          className="absolute h-[60vmax] w-[60vmax] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[50px]"
          style={{
            background:
              'radial-gradient(circle at 40% 40%, rgba(255,45,85,0.32), rgba(255,45,85,0.08) 45%, transparent 70%)',
            left: '50%',
            top: '30%',
          }}
        />
        <div
          className="absolute right-[-10%] top-[60%] h-[40vmax] w-[40vmax] animate-driftSlow rounded-full blur-[60px]"
          style={{ background: 'radial-gradient(circle, rgba(255,255,255,0.05), transparent 70%)' }}
        />
      </div>
      <div
        className="fixed inset-0 z-[2] opacity-[0.05] mix-blend-overlay pointer-events-none"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
        }}
      />
    </>
  )
}

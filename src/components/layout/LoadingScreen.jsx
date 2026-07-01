import { useEffect, useState } from 'react'
import { config } from '../../data/config.js'

/**
 * Splash/loading screen shown briefly on first mount. Counts to
 * 100 then fades out. Disabled entirely via config.features.loadingScreen
 * if not wanted.
 */
export default function LoadingScreen({ onDone }) {
  const [percent, setPercent] = useState(0)
  const [fading, setFading] = useState(false)

  useEffect(() => {
    if (!config.features.loadingScreen) {
      onDone?.()
      return
    }

    const interval = setInterval(() => {
      setPercent((p) => {
        const next = Math.min(100, p + Math.ceil(Math.random() * 14))
        if (next >= 100) {
          clearInterval(interval)
          setFading(true)
          setTimeout(() => onDone?.(), 500)
        }
        return next
      })
    }, 90)

    return () => clearInterval(interval)
  }, [onDone])

  if (!config.features.loadingScreen) return null

  return (
    <div
      className={`fixed inset-0 z-[10000] flex flex-col items-center justify-center bg-bg transition-opacity duration-500 ${
        fading ? 'pointer-events-none opacity-0' : 'opacity-100'
      }`}
    >
      <div className="font-display text-lg sm:text-xl font-bold tracking-[0.2em] text-white/90">
        DEVELOPER PRAVEEN
      </div>
      <div className="mt-6 h-px w-40 overflow-hidden bg-white/10">
        <div className="h-full bg-accent transition-[width] duration-150" style={{ width: `${percent}%` }} />
      </div>
      <div className="mt-3 font-mono text-xs text-grey/50">{percent}%</div>
    </div>
  )
}

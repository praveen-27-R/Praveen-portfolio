import { useEffect, useState } from 'react'
import { Menu, X, Code } from 'lucide-react'
import { navigation } from '../../data/navigation.js'
import { profile } from '../../data/profile.js'
import Button from '../ui/Button.jsx'

export default function Navbar() {
  const [hidden, setHidden] = useState(false)
  const [active, setActive] = useState('home')
  const [progress, setProgress] = useState(0)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    let lastScroll = window.scrollY

    const handleScroll = () => {
      const current = window.scrollY
      setHidden(current > lastScroll && current > 140)
      lastScroll = current

      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      setProgress(docHeight > 0 ? Math.min(100, (current / docHeight) * 100) : 0)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const sections = navigation.map((l) => document.getElementById(l.id)).filter(Boolean)
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id)
        })
      },
      { threshold: 0.5, rootMargin: '-100px 0px -50% 0px' }
    )
    sections.forEach((s) => observer.observe(s))
    return () => observer.disconnect()
  }, [])

  return (
    <>
      <div
        className={`fixed left-1/2 top-5 z-[200] w-[min(94vw,920px)] -translate-x-1/2 transition-[top] duration-[400ms] ${
          hidden ? '-top-24' : 'top-5'
        }`}
      >
        <nav className="relative flex items-center justify-between gap-2 overflow-hidden rounded-full border border-white/[0.12] bg-[#101010]/70 p-2 px-3 shadow-[0_8px_32px_rgba(0,0,0,0.5)] backdrop-blur-xl">
          <div
            className="absolute bottom-0 left-0 h-[2px] bg-accent"
            style={{ width: `${progress}%` }}
          />

          <a href="#home" data-hover className="flex items-center gap-1.5 whitespace-nowrap px-3 py-2 font-mono text-[13px] tracking-wide text-white">
            <Code size={15} className="text-accent" />
            Praveen
          </a>

          <div className="hidden items-center gap-0.5 md:flex">
            {navigation.map((link) => (
              <a
                key={link.id}
                data-hover
                href={link.href}
                className={`rounded-full px-4 py-2 text-[13px] font-medium transition-colors duration-200 ${
                  active === link.id ? 'text-white' : 'text-grey/70 hover:bg-white/10 hover:text-white'
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>

          <button
            data-hover
            onClick={() => setMobileOpen((v) => !v)}
            className="rounded-full p-2.5 text-white md:hidden"
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </nav>

        {mobileOpen && (
          <div className="mt-2 flex flex-col gap-1 rounded-3xl border border-white/[0.12] bg-[#101010]/90 p-3 backdrop-blur-xl md:hidden">
            {navigation.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className={`rounded-2xl px-4 py-3 text-sm font-medium ${
                  active === link.id ? 'bg-white/10 text-white' : 'text-grey/70'
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </>
  )
}

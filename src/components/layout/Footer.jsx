import { socials } from '../../data/socials.js'
import { profile } from '../../data/profile.js'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="relative z-[1] border-t border-white/[0.08] px-8 py-10">
      <div className="mx-auto flex flex-col items-center justify-center gap-1.5 text-center">
        <div className="font-mono text-[11px] tracking-[0.2em] text-grey/50 uppercase">
          © {year} ALL RIGHTS RESERVED.
        </div>
        <div className="font-display text-[13px] sm:text-sm font-bold tracking-wider text-accent">
          Designed & Developed by PRAVEEN KUMAR R
        </div>
      </div>
    </footer>
  )
}

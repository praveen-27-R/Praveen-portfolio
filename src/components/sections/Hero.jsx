import { useEffect, useState } from 'react'
import { profile } from '../../data/profile.js'
import Button from '../ui/Button.jsx'

function useTypewriter(words, typeSpeed = 55, deleteSpeed = 30, pause = 1500) {
  const [text, setText] = useState('')

  useEffect(() => {
    let wordIndex = 0
    let charIndex = 0
    let typingForward = true
    let timeoutId

    const tick = () => {
      const current = words[wordIndex]
      if (typingForward) {
        charIndex++
        setText(current.slice(0, charIndex))
        if (charIndex >= current.length) {
          typingForward = false
          timeoutId = setTimeout(tick, pause)
          return
        }
      } else {
        charIndex--
        setText(current.slice(0, charIndex))
        if (charIndex <= 0) {
          typingForward = true
          wordIndex = (wordIndex + 1) % words.length
          timeoutId = setTimeout(tick, 300)
          return
        }
      }
      timeoutId = setTimeout(tick, typingForward ? typeSpeed : deleteSpeed)
    }

    timeoutId = setTimeout(tick, typeSpeed)
    return () => clearTimeout(timeoutId)
  }, [words, typeSpeed, deleteSpeed, pause])

  return text
}

export default function Hero() {
  const typed = useTypewriter(profile.roles)
  const [name1, name2, ...rest] = profile.name.split(' ')

  return (
    <section id="home" className="relative mx-auto min-h-screen max-w-[1280px] px-8 pb-16 pt-32 flex items-center">
      <div className="grid w-full grid-cols-1 gap-12 lg:grid-cols-12 items-center">
        
        {/* Left Column: Bio & Buttons */}
        <div className="lg:col-span-7 flex flex-col justify-center order-2 lg:order-1">
          <div className="mb-7 flex animate-fadeUp items-center gap-2.5 font-mono text-[12.5px] tracking-wide text-grey/70 opacity-0 [animation-delay:.1s]">
            <span className="h-[7px] w-[7px] animate-pulseDot rounded-full bg-accent" />
            {profile.status.toUpperCase()}
          </div>

          <h1 className="animate-fadeUp font-display text-[clamp(40px,7vw,80px)] font-semibold leading-[0.96] tracking-tight opacity-0 [animation-delay:.2s]">
            {name1} {name2}
            {rest.length > 0 && (
              <>
                <br />
                <span className="text-accent">{rest.join(' ')}</span>
              </>
            )}
          </h1>

          <div className="mt-6 flex animate-fadeUp items-center gap-3.5 opacity-0 [animation-delay:.4s]">
            <div className="h-px w-7 bg-white/20" />
            <div className="min-h-[24px] font-mono text-base text-grey/80">
              {typed}
              <span className="animate-blink text-accent">|</span>
            </div>
          </div>

          <p className="mt-7 max-w-[540px] animate-fadeUp text-[15px] leading-[1.7] text-grey/70 opacity-0 [animation-delay:.5s] font-medium tracking-wide">
            Web Developer | Full Stack Enthusiast | ECE Engineer
          </p>

          <div className="mt-9 flex flex-wrap animate-fadeUp gap-3 opacity-0 [animation-delay:.6s]">
            <Button as="a" href="#contact" variant="primary">
              Contact Me
            </Button>
            <Button as="a" href={profile.resumeUrl} download variant="glass">
              Download Resume
            </Button>
          </div>
        </div>

        {/* Right Column: Styled Profile Pic */}
        <div className="lg:col-span-5 flex justify-center items-center order-1 lg:order-2 animate-fadeUp opacity-0 [animation-delay:.3s]">
          <div className="relative flex items-center justify-center w-full max-w-[380px] md:max-w-[400px] lg:max-w-[420px] aspect-square">
            {/* Glowing Ring */}
            <div className="absolute w-[86%] h-[86%] rounded-full border border-accent/40 shadow-[0_0_60px_rgba(255,45,85,0.3)] animate-pulse" />
            
            {/* Decorative arrow markers like the reference photo */}
            <div className="absolute left-[3%] top-[48%] -translate-y-1/2 font-mono text-[32px] text-accent/30 font-extralight select-none pointer-events-none">
              &lt;
            </div>
            <div className="absolute right-[3%] top-[48%] -translate-y-1/2 font-mono text-[32px] text-accent/30 font-extralight select-none pointer-events-none">
              &gt;
            </div>
            
            {/* Profile Image container */}
            <div className="relative w-[76%] h-[76%] rounded-full overflow-hidden border border-white/10 shadow-[0_10px_40px_rgba(0,0,0,0.6)] bg-white/[0.02]">
              <img 
                src="/praveen.png" 
                alt={profile.name} 
                className="w-full h-full object-cover object-top transition-transform duration-700 hover:scale-105"
              />
            </div>
          </div>
        </div>

      </div>

      <div className="absolute bottom-9 left-8 hidden animate-fadeUp items-center gap-2.5 font-mono text-[11px] tracking-wide text-grey/50 opacity-0 [animation-delay:1s] sm:flex">
        <div className="relative h-[34px] w-px overflow-hidden bg-gradient-to-b from-grey/50 to-transparent">
          <div className="absolute left-0 top-[-100%] h-full w-full animate-scrollDrip bg-accent" />
        </div>
        SCROLL
      </div>
    </section>
  )
}

import { useState, useEffect } from 'react'
import { ArrowUp } from 'lucide-react'
import AmbientBackground from './components/layout/AmbientBackground.jsx'
import CustomCursor from './components/layout/CustomCursor.jsx'
import Navbar from './components/layout/Navbar.jsx'
import Footer from './components/layout/Footer.jsx'
import LoadingScreen from './components/layout/LoadingScreen.jsx'
import Hero from './components/sections/Hero.jsx'
import About from './components/sections/About.jsx'
import Education from './components/sections/Education.jsx'
import Skills from './components/sections/Skills.jsx'
import Projects from './components/sections/Projects.jsx'
import Internships from './components/sections/Internships.jsx'
import Certificates from './components/sections/Certificates.jsx'
import Contact from './components/sections/Contact.jsx'
import { useLenis } from './hooks/useLenis.js'

export default function App() {
  const [loaded, setLoaded] = useState(false)
  const [showScroll, setShowScroll] = useState(false)
  useLenis()

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 450) {
        setShowScroll(true)
      } else {
        setShowScroll(false)
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      {!loaded && <LoadingScreen onDone={() => setLoaded(true)} />}

      <AmbientBackground />
      <CustomCursor />
      <Navbar />

      <main className="relative z-[1]">
        <Hero />
        <About />
        <Education />
        <Skills />
        <Internships />
        <Projects />
        <Certificates />
        <Contact />
      </main>

      <Footer />

      {/* Floating Scroll to Top Button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className={`fixed bottom-8 right-8 z-[80] flex h-11 w-11 items-center justify-center rounded-full border border-white/[0.12] bg-black/40 text-white backdrop-blur-md shadow-[0_8px_30px_rgb(0,0,0,0.5)] transition-all duration-300 hover:bg-accent hover:border-accent hover:scale-110 active:scale-95 ${
          showScroll ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 translate-y-4 pointer-events-none'
        }`}
        aria-label="Scroll to top"
      >
        <ArrowUp size={18} />
      </button>
    </>
  )
}

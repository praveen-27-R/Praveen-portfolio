import { skillCategories } from '../../data/skills.js'
import SectionHeading from '../ui/SectionHeading.jsx'
import GlassCard from '../ui/GlassCard.jsx'
import Reveal from '../ui/Reveal.jsx'

function TechIcon({ logo, name }) {
  // Custom SVGs for Vercel, SQL, and ECE/Embedded tools
  if (logo === 'vercel') {
    return (
      <svg viewBox="0 0 24 24" className="w-full h-full fill-white" xmlns="http://www.w3.org/2000/svg">
        <polygon points="12,2 22,20 2,20" />
      </svg>
    )
  }

  if (logo === 'sql') {
    return (
      <svg viewBox="0 0 24 24" className="w-full h-full fill-current text-accent" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2C6.48 2 2 3.79 2 6v12c0 2.21 4.48 4 10 4s10-1.79 10-4V6c0-2.21-4.48-4-10-4zm0 2c4.82 0 8 1.48 8 2s-3.18 2-8 2-8-1.48-8-2 3.18-2 8-2zm0 14c-4.82 0-8-1.48-8-2v-2.5c1.9 1.15 4.8 1.83 8 1.83s6.1-.68 8-1.83V16c0 .52-3.18 2-8 2zm0-5c-4.82 0-8-1.48-8-2V9.5c1.9 1.15 4.8 1.83 8 1.83s6.1-.68 8-1.83V11c0 .52-3.18 2-8 2z" />
      </svg>
    )
  }

  if (logo === 'verilog') {
    return (
      <svg viewBox="0 0 24 24" className="w-full h-full stroke-current text-accent fill-none" strokeWidth="1.5" xmlns="http://www.w3.org/2000/svg">
        <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" />
        <path d="M9 1h1M14 1h1M9 22h1M14 22h1M1 9v1M1 14v1M22 9v1M22 14v1" stroke="currentColor" strokeLinecap="round" />
        <text x="50%" y="58%" textAnchor="middle" fontSize="6.5" fontWeight="bold" fill="currentColor" fontFamily="sans-serif">HDL</text>
      </svg>
    )
  }

  if (logo === 'embeddedc') {
    return (
      <div className="relative w-full h-full flex items-center justify-center">
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/c/c-original.svg"
          alt="C Language"
          className="w-full h-full"
        />
        <span className="absolute bottom-0 right-0 bg-[#101010] text-accent text-[7px] px-0.5 border border-white/10 rounded font-mono font-bold leading-none scale-[0.8]">
          EMB
        </span>
      </div>
    )
  }

  if (logo === 'keil') {
    return (
      <svg viewBox="0 0 24 24" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="24" height="24" rx="6" fill="#004B87" />
        {/* Stylized greek letter mu (µ) for Keil µVision */}
        <path d="M6 18V8h2v7.5c0 0.8.7 1.5 1.5 1.5s1.5-.7 1.5-1.5V8h2v5.5c0 0.8.7 1.5 1.5 1.5s1.5-.7 1.5-1.5V8h2v6.5c0 2.2-1.8 4-4 4c-1.2 0-2.3-.5-3-1.4c-.7.9-1.8 1.4-3 1.4" fill="none" stroke="#00FFC4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    )
  }

  if (logo === 'proteus') {
    return (
      <svg viewBox="0 0 24 24" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="12" fill="#005A9C" />
        {/* Stylized P */}
        <path d="M9 7h4a3 3 0 0 1 0 6H9v4" stroke="#FFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        {/* Orbit circle representing simulation */}
        <ellipse cx="12" cy="12" rx="9" ry="3" transform="rotate(-30 12 12)" stroke="#00FFC4" strokeWidth="1.2" strokeDasharray="2 2" />
        <circle cx="17.5" cy="8.5" r="1.5" fill="#FFB300" />
      </svg>
    )
  }

  if (logo === 'vivado') {
    return (
      <svg viewBox="0 0 24 24" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="24" height="24" rx="6" fill="#18181B" />
        {/* Xilinx Butterfly/X Symbol */}
        <g transform="translate(12, 12)">
          <path d="M-6-6 L0-2 L6-6 L3-9 L-3-9 Z" fill="#D32F2F" />
          <path d="M-6 6 L0 2 L6 6 L3 9 L-3 9 Z" fill="#D32F2F" />
          <path d="M-6-6 L-2 0 L-6 6 L-9 3 L-9-3 Z" fill="#E53935" />
          <path d="M6-6 L2 0 L6 6 L9 3 L9-3 Z" fill="#E53935" />
          <circle cx="0" cy="0" r="1.5" fill="#FFF" />
        </g>
      </svg>
    )
  }

  if (logo === 'canoe') {
    return (
      <svg viewBox="0 0 24 24" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="24" height="24" rx="6" fill="#1A1A1A" />
        {/* Vector's Red Arrowhead/Chevron */}
        <path d="M6 5h4l7 7-7 7H6l7-7-7-7z" fill="#E30613" />
        {/* Abstract automotive network bus line */}
        <path d="M11 14h7M11 16h7" stroke="#888" strokeWidth="1" strokeLinecap="round" />
        <circle cx="12" cy="14" r="0.8" fill="#00FFC4" />
        <circle cx="16" cy="16" r="0.8" fill="#00FFC4" />
      </svg>
    )
  }

  // Fallback map to matching Devicon CDN assets
  const deviconMap = {
    python: 'python/python-original.svg',
    javascript: 'javascript/javascript-original.svg',
    html5: 'html5/html5-original.svg',
    css3: 'css3/css3-original.svg',
    vscode: 'vscode/vscode-original.svg',
    django: 'django/django-plain.svg',
    react: 'react/react-original.svg',
    git: 'git/git-original.svg',
    github: 'github/github-original.svg',
    matlab: 'matlab/matlab-original.svg',
  }

  const path = deviconMap[logo] || `${logo}/${logo}-original.svg`
  return (
    <img
      src={`https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${path}`}
      alt={name}
      className="w-full h-full object-contain"
      onError={(e) => {
        // Safe fallback in case of loading error
        e.target.style.display = 'none'
        e.target.parentNode.innerHTML = `<span class="text-[10px] font-mono font-bold text-accent">${name.slice(0, 3).toUpperCase()}</span>`
      }}
    />
  )
}

export default function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-[1280px] px-8 pb-36">
      <SectionHeading index="03" label="Skills" title="Tools I reach for" dimWord="when it matters." />

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {skillCategories.map((cat, i) => (
          <Reveal key={cat.id} delay={i * 80}>
            <GlassCard className="p-7 flex flex-col h-full">
              {/* Category Header */}
              <div className="mb-6 flex items-baseline justify-between border-b border-white/[0.04] pb-4">
                <div className="font-display text-[17px] font-semibold text-white/90">{cat.name}</div>
                <div className="font-mono text-[11px] text-grey/40">
                  {String(cat.items.length).padStart(2, '0')}
                </div>
              </div>

              {/* Grid of Tech Cards */}
              <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-3 xl:grid-cols-5 gap-3 mt-4">
                {cat.items.map((skill) => (
                  <div
                    key={skill.name}
                    className="group relative flex flex-col items-center justify-center gap-2.5 rounded-2xl border border-white/[0.04] bg-white/[0.02] p-3 hover:bg-white/[0.06] hover:border-white/[0.12] hover:shadow-[0_8px_20px_rgba(0,0,0,0.4)] transition-all duration-300 aspect-square w-full"
                  >
                    {/* Tech Logo */}
                    <div className="w-9 h-9 flex items-center justify-center text-grey/60 group-hover:text-accent group-hover:scale-[1.12] transition-all duration-300">
                      <TechIcon logo={skill.logo} name={skill.name} />
                    </div>

                    {/* Tech Name */}
                    <span className="font-mono text-[9px] tracking-wider uppercase text-white/90 group-hover:text-white transition-colors duration-300 text-center font-bold leading-tight">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </GlassCard>
          </Reveal>
        ))}
      </div>
    </section>
  )
}

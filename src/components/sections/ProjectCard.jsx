import GlassCard from '../ui/GlassCard.jsx'

function ProjectIllustration({ id }) {
  if (id === 'digital-alarm-clock') {
    return (
      <div className="relative w-full h-full bg-[#080808] flex flex-col items-center justify-center overflow-hidden rounded-2xl">
        <div className="absolute top-3 left-4 border border-white/[0.08] rounded px-2 py-0.5 text-[8px] font-mono tracking-wider text-grey/40 uppercase bg-white/[0.02]">
          VLSI & Digital Systems
        </div>
        <div className="font-mono text-[28px] font-bold text-[#FFD700] tracking-widest mt-3 drop-shadow-[0_0_12px_rgba(255,215,0,0.3)]">
          12:00<span className="text-xs align-super font-semibold text-[#FFD700]/70 ml-0.5">00</span>
        </div>
        <svg className="w-1/2 h-6 mt-3 opacity-50" viewBox="0 0 100 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 10 H35 L38 2 L42 18 L45 8 L48 12 L50 10 H100" stroke="#FFD700" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
    )
  }

  if (id === 'smart-door-lock') {
    return (
      <div className="relative w-full h-full bg-[#080808] flex flex-col items-center justify-center overflow-hidden rounded-2xl">
        <div className="absolute top-3 left-4 border border-white/[0.08] rounded px-2 py-0.5 text-[8px] font-mono tracking-wider text-grey/40 uppercase bg-white/[0.02]">
          Embedded Systems
        </div>
        <div className="flex items-center gap-3 mt-4">
          <svg className="w-10 h-10 text-[#FFD700]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <rect x="5" y="11" width="14" height="10" rx="2" ry="2" />
            <path d="M12 15v3" />
            <circle cx="12" cy="15" r="1" />
            <path d="M8 11V7a4 4 0 0 1 8 0v4" />
          </svg>
          <svg className="w-8 h-8 text-[#FFD700]/50" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M2 12a10 10 0 0 1 6-9" strokeWidth="1" strokeDasharray="2 2" />
            <path d="M5 12a7 7 0 0 1 4-6" />
            <path d="M8 12a4 4 0 0 1 2-3" strokeWidth="2" />
          </svg>
        </div>
      </div>
    )
  }

  if (id === 'tech-dining-system') {
    return (
      <div className="relative w-full h-full bg-[#080808] flex flex-col items-center justify-center overflow-hidden rounded-2xl">
        <div className="absolute top-3 left-4 border border-white/[0.08] rounded px-2 py-0.5 text-[8px] font-mono tracking-wider text-grey/40 uppercase bg-white/[0.02]">
          System Design
        </div>
        <div className="relative w-28 h-20 mt-4 flex items-center justify-center">
          <svg className="w-full h-full text-[#FFD700]/25" viewBox="0 0 120 80" fill="none" stroke="currentColor" strokeWidth="1">
            <circle cx="45" cy="35" r="22" />
            <text x="31" y="37" fill="#888" fontSize="4.5" fontWeight="bold" fontFamily="sans-serif">Feasible</text>
            <circle cx="75" cy="35" r="22" />
            <text x="69" y="37" fill="#888" fontSize="4.5" fontWeight="bold" fontFamily="sans-serif">Viable</text>
            <circle cx="60" cy="55" r="22" />
            <text x="50" y="58" fill="#888" fontSize="4.5" fontWeight="bold" fontFamily="sans-serif">Desirable</text>
          </svg>
        </div>
      </div>
    )
  }

  if (id === 'medtech-digital-partner' || id === 'modern-ece-portfolio') {
    return (
      <div className="relative w-full h-full bg-[#080808] flex flex-col items-center justify-center overflow-hidden rounded-2xl">
        <div className="absolute top-3 left-4 border border-white/[0.08] rounded px-2 py-0.5 text-[8px] font-mono tracking-wider text-grey/40 uppercase bg-white/[0.02]">
          Web Development
        </div>
        <div className="w-[70%] h-[55%] border border-white/[0.08] rounded-xl bg-[#121212] mt-4 flex flex-col p-2.5 shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
          <div className="flex gap-1 mb-2">
            <span className="w-1 h-1 rounded-full bg-[#FF5F56]" />
            <span className="w-1 h-1 rounded-full bg-[#FFBD2E]" />
            <span className="w-1 h-1 rounded-full bg-[#27C93F]" />
          </div>
          <div className="flex flex-col gap-1.5 w-full">
            <div className="h-2 rounded bg-white/[0.04] w-full flex items-center px-1">
              <div className="h-0.5 rounded bg-[#FFD700]/30 w-1/3" />
            </div>
            <div className="grid grid-cols-3 gap-1">
              <div className="h-7 rounded bg-white/[0.02] border border-white/5 flex flex-col justify-between p-1">
                <div className="h-0.5 w-1/2 rounded bg-[#FFD700]/20" />
                <div className="h-0.5 w-2/3 rounded bg-white/5" />
              </div>
              <div className="h-7 rounded bg-white/[0.02] border border-white/5 flex flex-col justify-between p-1">
                <div className="h-0.5 w-1/2 rounded bg-[#FFD700]/20" />
                <div className="h-0.5 w-2/3 rounded bg-white/5" />
              </div>
              <div className="h-7 rounded bg-white/[0.02] border border-white/5 flex flex-col justify-between p-1">
                <div className="h-0.5 w-1/2 rounded bg-[#FFD700]/20" />
                <div className="h-0.5 w-2/3 rounded bg-white/5" />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="relative w-full h-full bg-[#080808] flex items-center justify-center overflow-hidden rounded-2xl">
      <span className="font-mono text-xs text-grey/30">No image yet</span>
    </div>
  )
}

export default function ProjectCard({ project, onOpen }) {
  return (
    <GlassCard
      data-hover
      onClick={() => onOpen(project)}
      className="group relative cursor-pointer overflow-hidden p-7 h-full flex flex-col"
    >
      <div className="mb-5 flex h-40 items-center justify-center rounded-2xl border border-white/[0.08] bg-white/[0.03] overflow-hidden text-grey/30">
        {project.image ? (
          <img src={project.image} alt={project.title} className="h-full w-full rounded-2xl object-cover" />
        ) : (
          <ProjectIllustration id={project.id} />
        )}
      </div>

      <div className="mb-2 font-mono text-[11px] uppercase tracking-wider text-accent">{project.category}</div>
      <div className="font-display text-lg font-semibold transition-transform duration-300 group-hover:translate-x-1">
        {project.title}
      </div>
      <p className="mt-2 text-[13.5px] leading-relaxed text-grey/60 line-clamp-2">{project.description}</p>

      <div className="mt-auto pt-4 flex flex-wrap gap-2">
        {project.tools.map((t) => (
          <span key={t} className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-[11px] text-grey/60">
            {t}
          </span>
        ))}
      </div>
    </GlassCard>
  )
}

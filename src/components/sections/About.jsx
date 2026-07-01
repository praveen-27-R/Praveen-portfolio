import { profile } from '../../data/profile.js'
import SectionHeading from '../ui/SectionHeading.jsx'
import GlassCard from '../ui/GlassCard.jsx'
import Reveal from '../ui/Reveal.jsx'

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-[1280px] px-8 pb-36 pt-40">
      <SectionHeading index="01" label="About" title="A quick" dimWord="introduction." />

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1.1fr_1.4fr]">
        <div className="flex flex-col gap-6">
          <Reveal>
            <GlassCard className="relative overflow-hidden p-7">
              <div
                className="pointer-events-none absolute -left-1/2 -top-1/2 h-[200%] w-[200%]"
                style={{ background: 'radial-gradient(circle at 30% 20%, rgba(255,45,85,0.12), transparent 50%)' }}
              />
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-[18px] border border-white/15 bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] font-display text-[22px] font-semibold text-accent">
                {profile.initials}
              </div>
              <div className="font-display text-[19px] font-semibold">{profile.name}</div>
              <div className="mb-4 text-[13px] text-grey/70">{profile.roles[0]}</div>
              <div className="flex flex-col gap-2.5 border-t border-white/10 pt-4 text-[13px] text-grey/70">
                <div className="flex justify-between">
                  <span className="text-grey/50">Location</span>
                  <span>{profile.location}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-grey/50">CGPA</span>
                  <span>{profile.cgpa}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-grey/50">Status</span>
                  <span className="text-[#3ddc6f]">{profile.status}</span>
                </div>
              </div>
            </GlassCard>
          </Reveal>

          <Reveal delay={100}>
            <div className="grid grid-cols-2 gap-3.5">
              {profile.stats.map((s) => (
                <GlassCard key={s.label} className="p-5">
                  <div className="font-display text-[28px] font-semibold">{s.value}</div>
                  <div className="mt-1.5 text-xs text-grey/50">{s.label}</div>
                </GlassCard>
              ))}
            </div>
          </Reveal>
        </div>

        <div className="flex flex-col gap-5">
          <Reveal>
            <GlassCard className="p-8 px-9">
              <div className="mb-5 font-mono text-[11px] uppercase tracking-wider text-grey/50">
                Career Objective
              </div>
              <p className="text-[15px] leading-[1.75] text-grey/75">{profile.objective}</p>
            </GlassCard>
          </Reveal>

          <Reveal delay={100}>
            <GlassCard className="p-9">
              {profile.summary.map((para, i) => (
                <p key={i} className={`text-[15.5px] leading-[1.8] text-grey/75 ${i > 0 ? 'mt-4' : ''}`}>
                  {para}
                </p>
              ))}
            </GlassCard>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

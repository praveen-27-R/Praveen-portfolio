import { education } from '../../data/education.js'
import SectionHeading from '../ui/SectionHeading.jsx'
import GlassCard from '../ui/GlassCard.jsx'
import Reveal from '../ui/Reveal.jsx'

export default function Education() {
  return (
    <section id="education" className="mx-auto max-w-[1280px] px-8 pb-36">
      <SectionHeading index="02" label="Education" title="Academic" dimWord="background." />

      <div className="relative flex flex-col gap-5 pl-8 sm:pl-10">
        <div className="absolute left-[7px] top-2 h-[calc(100%-1rem)] w-px bg-white/10 sm:left-[11px]" />

        {education.map((item, i) => (
          <Reveal key={item.id} delay={i * 80} className="relative">
            <div className="absolute -left-8 top-2 h-3.5 w-3.5 rounded-full border-2 border-accent bg-bg sm:-left-10" />
            <GlassCard className="p-7">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <div className="font-mono text-xs text-accent">{item.period}</div>
                  <div className="mt-2 font-display text-lg font-semibold">{item.degree}</div>
                  <div className="mt-1 text-sm text-grey/70">{item.institution}</div>
                </div>
                {item.detail && (
                  <div className="whitespace-nowrap rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm font-medium text-grey/80">
                    {item.detail}
                  </div>
                )}
              </div>
            </GlassCard>
          </Reveal>
        ))}
      </div>
    </section>
  )
}

import { internships } from '../../data/internships.js'
import SectionHeading from '../ui/SectionHeading.jsx'
import GlassCard from '../ui/GlassCard.jsx'
import Reveal from '../ui/Reveal.jsx'

export default function Internships() {
  return (
    <section id="internships" className="mx-auto max-w-[1280px] px-8 pb-36">
      <SectionHeading index="04" label="Internships" title="Hands-on" dimWord="industry experience." />

      <div className="flex flex-col gap-5">
        {internships.map((item, i) => (
          <Reveal key={item.id} delay={i * 80}>
            <GlassCard className="p-8">
              <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <div className="font-display text-lg font-semibold">{item.company}</div>
                  {item.period && <div className="mt-1 font-mono text-xs text-grey/50">{item.period}</div>}
                </div>
                <div className="flex flex-wrap gap-2">
                  {item.tools.map((t) => (
                    <span key={t} className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-[11px] text-grey/60">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <p className="mt-5 text-[14.5px] leading-[1.7] text-grey/75">{item.description}</p>

              {item.highlights?.length > 0 && (
                <ul className="mt-5 flex flex-col gap-2">
                  {item.highlights.map((h) => (
                    <li key={h} className="flex items-start gap-2.5 text-[13.5px] text-grey/70">
                      <span className="mt-2 h-1 w-1 flex-shrink-0 rounded-full bg-accent" />
                      {h}
                    </li>
                  ))}
                </ul>
              )}
            </GlassCard>
          </Reveal>
        ))}
      </div>
    </section>
  )
}

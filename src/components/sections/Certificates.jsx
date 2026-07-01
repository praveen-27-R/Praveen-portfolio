import { certificates } from '../../data/certificates.js'
import SectionHeading from '../ui/SectionHeading.jsx'
import GlassCard from '../ui/GlassCard.jsx'
import Reveal from '../ui/Reveal.jsx'
import { Award } from 'lucide-react'

export default function Certificates() {
  return (
    <section id="certificates" className="mx-auto max-w-[1280px] px-8 pb-36">
      <SectionHeading index="06" label="Certificates" title="Credentials &" dimWord="coursework." />

      <Reveal>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificates.map((cert) => (
            <GlassCard
              key={cert.id}
              data-hover
              className="flex flex-col p-6 h-full"
            >
              <div className="mb-4 flex h-28 items-center justify-center rounded-2xl border border-white/[0.08] bg-white/[0.03] text-grey/30">
                {cert.image ? (
                  <img src={cert.image} alt={cert.title} className="h-full w-full rounded-2xl object-cover" />
                ) : (
                  <Award size={28} strokeWidth={1.5} />
                )}
              </div>
              <div className="font-display text-[15px] font-semibold leading-snug">{cert.title}</div>
              {cert.issuer && <div className="mt-1.5 text-[12.5px] text-grey/60">{cert.issuer}</div>}
              {cert.credential && (
                <span className={`mt-3 inline-flex w-fit rounded-full px-3 py-1 text-[11px] font-medium ${
                  cert.credential === 'Completed'
                    ? 'bg-white/[0.06] text-grey/60 border border-white/5'
                    : 'bg-accent/15 text-accent'
                }`}>
                  {cert.credential}
                </span>
              )}
            </GlassCard>
          ))}
        </div>
      </Reveal>
    </section>
  )
}

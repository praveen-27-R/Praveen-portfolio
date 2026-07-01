import Reveal from './Reveal.jsx'

/**
 * Standard section heading: a small mono "eyebrow" label (the
 * section's number + name) followed by a large display title.
 * Used at the top of every section so headings stay visually
 * consistent across the site.
 */
export default function SectionHeading({ index, label, title, subtitle, dimWord }) {
  return (
    <Reveal className="mb-14">
      <span className="mb-3.5 block font-mono text-xs uppercase tracking-wider text-accent">
        {index} · {label}
      </span>
      <h2 className="max-w-[640px] font-display text-[clamp(32px,4.5vw,48px)] font-semibold tracking-tight">
        {title} {dimWord && <span className="text-grey/50">{dimWord}</span>}
      </h2>
      {subtitle && <p className="mt-4 max-w-[520px] text-[15px] leading-relaxed text-grey/70">{subtitle}</p>}
    </Reveal>
  )
}

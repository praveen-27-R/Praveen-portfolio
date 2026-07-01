import { useReveal } from '../../hooks/useReveal.js'

/**
 * Wraps children and fades/translates them up into place the first
 * time they cross into the viewport. Used by every section to keep
 * reveal timing and easing consistent across the site.
 */
export default function Reveal({ children, className = '', delay = 0, as = 'div' }) {
  const [ref, inView] = useReveal()
  const Tag = as

  return (
    <Tag
      ref={ref}
      className={`transition-all duration-[800ms] ease-[cubic-bezier(0.16,0.8,0.2,1)] ${
        inView ? 'translate-y-0 opacity-100' : 'translate-y-9 opacity-0'
      } ${className}`}
      style={{ transitionDelay: inView ? `${delay}ms` : '0ms' }}
    >
      {children}
    </Tag>
  )
}

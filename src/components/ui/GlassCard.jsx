/**
 * Base glassmorphism card. All glass surfaces in the app (skill
 * cards, project cards, timeline items, etc.) should compose this
 * rather than redefining the blur/border/background combination.
 */
export default function GlassCard({ children, className = '', hover = true, ...rest }) {
  return (
    <div
      className={`rounded-3xl border border-white/[0.12] bg-white/[0.08] backdrop-blur-xl ${
        hover ? 'transition-all duration-300 hover:border-white/20 hover:bg-white/[0.1]' : ''
      } ${className}`}
      {...rest}
    >
      {children}
    </div>
  )
}

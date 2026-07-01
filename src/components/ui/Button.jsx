/**
 * Shared button/link styling. `as="a"` renders an anchor (for
 * external links, downloads, mailto), otherwise renders a button.
 */
export default function Button({
  children,
  variant = 'primary',
  as = 'button',
  className = '',
  ...rest
}) {
  const Tag = as
  const base =
    'inline-flex items-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold transition-all duration-200 hover:-translate-y-0.5'
  const variants = {
    primary: 'bg-accent text-white hover:brightness-110',
    glass: 'border border-white/[0.12] bg-white/[0.08] text-white backdrop-blur-xl hover:bg-white/[0.12]',
  }

  return (
    <Tag data-hover className={`${base} ${variants[variant]} ${className}`} {...rest}>
      {children}
    </Tag>
  )
}

import { AnimatePresence, motion } from 'framer-motion'
import { X } from 'lucide-react'
import { useEffect } from 'react'

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    if (!project) return
    const handleKey = (e) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', handleKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', handleKey)
      document.body.style.overflow = ''
    }
  }, [project, onClose])

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          className="fixed inset-0 z-[300] flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 12 }}
            transition={{ duration: 0.35, ease: [0.16, 0.8, 0.2, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="relative max-h-[88vh] w-full max-w-2xl overflow-y-auto rounded-3xl border border-white/[0.12] bg-[#101010]/95 p-8 backdrop-blur-2xl sm:p-10"
          >
            <button
              data-hover
              onClick={onClose}
              aria-label="Close"
              className="absolute right-6 top-6 rounded-full border border-white/10 bg-white/[0.06] p-2 text-grey/70 transition-colors hover:text-white"
            >
              <X size={16} />
            </button>

            <div className="font-mono text-[11px] uppercase tracking-wider text-accent">{project.category}</div>
            <h3 className="mt-2 font-display text-[28px] font-semibold tracking-tight">{project.title}</h3>

            <p className="mt-5 text-[15px] leading-[1.75] text-grey/75">{project.description}</p>

            {project.features?.length > 0 && (
              <div className="mt-6">
                <div className="mb-3 font-mono text-[11px] uppercase tracking-wider text-grey/50">Features</div>
                <ul className="flex flex-col gap-2">
                  {project.features.map((f) => {
                    const isLink = f.startsWith('http://') || f.startsWith('https://')
                    return (
                      <li key={f} className="flex items-start gap-2.5 text-[14px] text-grey/80">
                        <span className="mt-2 h-1 w-1 flex-shrink-0 rounded-full bg-accent" />
                        {isLink ? (
                          <a
                            href={f}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-accent hover:underline break-all transition-colors duration-200"
                          >
                            {f}
                          </a>
                        ) : (
                          f
                        )}
                      </li>
                    )
                  })}
                </ul>
              </div>
            )}

            <div className="mt-6 flex flex-wrap gap-2">
              {project.tools.map((t) => (
                <span key={t} className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-[12px] text-grey/70">
                  {t}
                </span>
              ))}
            </div>


          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

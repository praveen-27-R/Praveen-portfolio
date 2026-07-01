import { useState } from 'react'
import { Github, Linkedin, Mail, Send, Phone } from 'lucide-react'
import { socials, contactInfo } from '../../data/socials.js'
import SectionHeading from '../ui/SectionHeading.jsx'
import GlassCard from '../ui/GlassCard.jsx'
import Reveal from '../ui/Reveal.jsx'
import Button from '../ui/Button.jsx'

const ICONS = { github: Github, linkedin: Linkedin, mail: Mail, phone: Phone }

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  function handleChange(e) {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }))
  }

  async function handleSubmit(e) {
    e.preventDefault()
    setLoading(true)
    setError(null)

    try {
      const response = await fetch('https://formspree.io/f/xjgqeyar', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify(form),
      })

      if (response.ok) {
        setSent(true)
        setForm({ name: '', email: '', message: '' })
      } else {
        const data = await response.json()
        const errorMsg = data.errors ? data.errors.map(err => err.message).join(', ') : 'Failed to send message.'
        throw new Error(errorMsg)
      }
    } catch (err) {
      setError(err.message || 'Something went wrong. Please check your connection and try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contact" className="mx-auto max-w-[1280px] px-8 pb-32">
      <SectionHeading index="07" label="Contact" title="Let's build" dimWord="something." />

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1fr_1.2fr]">
        <Reveal>
          <GlassCard className="flex h-full flex-col justify-between p-8">
            <div>
              <div className="font-display text-xl font-semibold">Get in touch</div>
              <p className="mt-3 text-[14.5px] leading-relaxed text-grey/70">
                Open to internships, freelance frontend work, and collaboration on embedded/VLSI projects.
              </p>
              <div className="mt-6 text-sm text-grey/70">{contactInfo.email}</div>
              <div className="mt-1 text-sm text-grey/50">{contactInfo.location}</div>
            </div>

            <div className="mt-8 flex gap-3">
              {socials.map((s) => {
                const Icon = ICONS[s.icon] ?? Mail
                return (
                  <a
                    key={s.id}
                    data-hover
                    href={s.url}
                    target={['email', 'phone'].includes(s.id) ? undefined : '_blank'}
                    rel={['email', 'phone'].includes(s.id) ? undefined : 'noopener noreferrer'}
                    aria-label={s.label}
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-white/[0.12] bg-white/[0.06] text-grey/70 transition-colors hover:text-white"
                  >
                    <Icon size={17} />
                  </a>
                )
              })}
            </div>
          </GlassCard>
        </Reveal>

        <Reveal delay={100}>
          <GlassCard className="p-8">
            {sent ? (
              <div className="flex h-full flex-col items-center justify-center py-10 text-center">
                <div className="font-display text-lg font-semibold">Message sent.</div>
                <p className="mt-2 text-sm text-grey/60">I'll get back to you soon.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div className="mb-1">
                  <div className="font-display text-[17px] font-semibold text-white/90">Send a Secure Message</div>
                  <p className="text-xs text-grey/40 mt-1">Your message is securely transmitted.</p>
                </div>
                <div>
                  <label htmlFor="name" className="mb-1.5 block text-xs text-grey/50">
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    disabled={loading}
                    value={form.name}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-white/[0.12] bg-white/[0.04] px-4 py-3 text-sm text-white outline-none transition-colors focus:border-accent/50 disabled:opacity-50 disabled:cursor-not-allowed"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="mb-1.5 block text-xs text-grey/50">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    disabled={loading}
                    value={form.email}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-white/[0.12] bg-white/[0.04] px-4 py-3 text-sm text-white outline-none transition-colors focus:border-accent/50 disabled:opacity-50 disabled:cursor-not-allowed"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="mb-1.5 block text-xs text-grey/50">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    disabled={loading}
                    value={form.message}
                    onChange={handleChange}
                    className="w-full resize-none rounded-xl border border-white/[0.12] bg-white/[0.04] px-4 py-3 text-sm text-white outline-none transition-colors focus:border-accent/50 disabled:opacity-50 disabled:cursor-not-allowed"
                  />
                </div>
                {error && (
                  <div className="text-xs text-red-400 bg-red-500/10 border border-red-500/20 rounded-xl p-3">
                    {error}
                  </div>
                )}
                <Button type="submit" variant="primary" className="mt-2 justify-center" disabled={loading}>
                  {loading ? 'Sending...' : 'Send a Secure Message'} <Send size={15} className={loading ? 'animate-pulse' : ''} />
                </Button>
              </form>
            )}
          </GlassCard>
        </Reveal>
      </div>
    </section>
  )
}

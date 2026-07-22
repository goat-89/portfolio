import { useState } from 'react'
import { profile } from '../data/profile'
import { useReveal } from '../hooks/useReveal'

export default function Contact() {
  const ref = useReveal()
  const [copied, setCopied] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      /* clipboard unavailable — mailto link still works */
    }
  }

  const sendMessage = (e) => {
    e.preventDefault()
    const subject = encodeURIComponent(
      `Portfolio contact from ${form.name || 'a visitor'}`
    )
    const body = encodeURIComponent(
      `${form.message}\n\n— ${form.name}${form.email ? ` (${form.email})` : ''}`
    )
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`
  }

  const inputClass =
    'w-full rounded-xl border-2 border-white/25 bg-white/10 px-4 py-3 text-sm text-white placeholder-white/50 backdrop-blur transition focus:border-sun focus:bg-white/15 focus:outline-none'

  return (
    <section
      id="contact"
      ref={ref}
      className="relative overflow-hidden bg-flame py-24"
    >
      <div className="blob left-[10%] top-6 h-48 w-48 bg-sun/40" />
      <div className="blob right-[8%] bottom-4 h-52 w-52 bg-coal/25 [animation-delay:-7s]" />

      <div className="relative mx-auto grid max-w-5xl gap-12 px-6 lg:grid-cols-2">
        <div>
          <p className="reveal font-mono text-sm font-semibold text-sun">
            05. Contact
          </p>
          <h2 className="reveal mt-2 font-display text-3xl font-bold text-white sm:text-4xl">
            Let's build something together
          </h2>
          <p className="reveal reveal-delay-1 mt-4 max-w-lg text-white/85">
            Have a project in mind, an internship, or an entry-level role? My
            inbox is open.
          </p>

          <div className="reveal reveal-delay-2 mt-8 space-y-4 text-sm text-white/90">
            <p className="flex items-center gap-3">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/15">
                ✉️
              </span>
              {profile.email}
              <button
                onClick={copyEmail}
                className="chip-pop rounded-full border border-white/40 px-3 py-1 text-xs font-semibold text-white hover:bg-white hover:text-flame"
              >
                {copied ? '✓ Copied' : 'Copy'}
              </button>
            </p>
            <p className="flex items-center gap-3">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/15">
                📍
              </span>
              {profile.location}
            </p>
          </div>

          <div className="reveal reveal-delay-3 mt-8 flex gap-4 text-sm font-semibold">
            <a
              href={profile.social.github}
              target="_blank"
              rel="noreferrer"
              className="btn-bounce rounded-full border-2 border-white/50 px-5 py-2.5 text-white hover:bg-white hover:text-flame"
            >
              GitHub
            </a>
            <a
              href={profile.social.linkedin}
              target="_blank"
              rel="noreferrer"
              className="btn-bounce rounded-full border-2 border-white/50 px-5 py-2.5 text-white hover:bg-white hover:text-flame"
            >
              LinkedIn
            </a>
          </div>
        </div>

        <form
          onSubmit={sendMessage}
          className="reveal reveal-delay-2 flex flex-col gap-4 rounded-2xl bg-coal/20 p-6 backdrop-blur sm:p-8"
        >
          <label className="text-sm font-semibold text-white">
            Name
            <input
              type="text"
              required
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              placeholder="Your name"
              className={`mt-1.5 ${inputClass}`}
            />
          </label>
          <label className="text-sm font-semibold text-white">
            Your Email
            <input
              type="email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              placeholder="you@example.com"
              className={`mt-1.5 ${inputClass}`}
            />
          </label>
          <label className="text-sm font-semibold text-white">
            Message
            <textarea
              required
              rows={4}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              placeholder="Tell me about your project or role…"
              className={`mt-1.5 resize-none ${inputClass}`}
            />
          </label>
          <button
            type="submit"
            className="btn-bounce mt-2 rounded-full bg-white px-7 py-3 text-sm font-bold text-flame shadow-xl shadow-coal/20 hover:bg-sun hover:text-coal"
          >
            Send Message →
          </button>
          <p className="text-center text-xs text-white/60">
            Opens your email app with the message pre-filled.
          </p>
        </form>
      </div>
    </section>
  )
}

import { useEffect, useRef, useState } from 'react'
import { profile } from '../data/profile'
import portraitUrl from '../assets/portrait.jpg'

const roles = [
  'Full Stack Developer',
  'Java Developer',
  'Python Backend Developer',
  'AI / GenAI Engineer',
]

function useTypewriter(words) {
  const [text, setText] = useState('')
  const [wordIndex, setWordIndex] = useState(0)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const word = words[wordIndex % words.length]
    let delay = deleting ? 45 : 90
    if (!deleting && text === word) delay = 1800
    if (deleting && text === '') delay = 350

    const timer = setTimeout(() => {
      if (!deleting && text === word) {
        setDeleting(true)
      } else if (deleting && text === '') {
        setDeleting(false)
        setWordIndex((i) => i + 1)
      } else {
        setText(word.slice(0, text.length + (deleting ? -1 : 1)))
      }
    }, delay)
    return () => clearTimeout(timer)
  }, [text, deleting, wordIndex, words])

  return text
}

function ResumeMenu() {
  const [open, setOpen] = useState(false)
  const menuRef = useRef(null)

  useEffect(() => {
    if (!open) return
    const onClick = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) setOpen(false)
    }
    document.addEventListener('mousedown', onClick)
    return () => document.removeEventListener('mousedown', onClick)
  }, [open])

  return (
    <div ref={menuRef} className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="btn-bounce flex items-center gap-2 rounded-full bg-coal px-6 py-3 text-sm font-semibold text-white shadow-xl shadow-coal/30 hover:bg-coal-soft"
      >
        ↓ Resume
        <span
          className={`text-xs transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
        >
          ▾
        </span>
      </button>
      {open && (
        <div className="absolute left-0 top-full z-20 mt-2 w-56 overflow-hidden rounded-2xl border border-coal/10 bg-white shadow-2xl animate-[fadeUp_0.25s_ease_both]">
          {profile.resumes.map((r) => (
            <a
              key={r.label}
              href={r.file}
              download
              onClick={() => setOpen(false)}
              className="block px-5 py-3 text-sm font-medium text-coal transition hover:bg-flame hover:text-white"
            >
              {r.label}
            </a>
          ))}
        </div>
      )}
    </div>
  )
}

export default function Hero() {
  const typed = useTypewriter(roles)

  return (
    <section id="top" className="relative overflow-hidden bg-flame">
      <div className="blob left-[-80px] top-10 h-72 w-72 bg-sun/40" />
      <div className="blob right-[-60px] bottom-0 h-72 w-72 bg-coal/30 [animation-delay:-5s]" />

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-6 py-16 sm:py-24 lg:grid-cols-[1.2fr_1fr] lg:gap-6">
        <div className="flex flex-col items-start gap-5">
          <p className="hero-enter hero-enter-1 rounded-full bg-white/15 px-4 py-1.5 font-mono text-sm text-white backdrop-blur">
            👋 Welcome — based in {profile.location.split(',')[0]}
          </p>
          <h1 className="hero-enter hero-enter-2 font-display text-4xl font-bold leading-tight tracking-tight text-white sm:text-6xl">
            Hi, I'm {profile.name.split(' ')[0]},
            <br />
            <span className="typing-caret min-h-[1.2em] text-sun">{typed}</span>
          </h1>
          <p className="hero-enter hero-enter-3 max-w-xl leading-relaxed text-white/85">
            {profile.tagline}
          </p>

          <div className="hero-enter hero-enter-4 mt-3 flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="btn-bounce rounded-full bg-white px-6 py-3 text-sm font-semibold text-coal shadow-xl shadow-coal/20 hover:bg-sun"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="btn-bounce rounded-full border-2 border-white/60 px-6 py-3 text-sm font-semibold text-white hover:border-white hover:bg-white hover:text-flame"
            >
              Contact Me
            </a>
            <ResumeMenu />
          </div>
        </div>

        <div className="hero-enter hero-enter-5 relative mx-auto">
          <div className="absolute inset-0 -m-6 rounded-full bg-white/10" />
          <img
            src={portraitUrl}
            alt={profile.name}
            width="640"
            height="640"
            fetchPriority="high"
            className="portrait-ring relative h-56 w-56 rounded-full border-4 border-white/70 object-cover shadow-2xl sm:h-72 sm:w-72 lg:h-80 lg:w-80"
          />
        </div>
      </div>

      <svg
        viewBox="0 0 1440 60"
        preserveAspectRatio="none"
        className="block h-10 w-full text-paper"
      >
        <path d="M0,40 C360,80 1080,0 1440,40 L1440,60 L0,60 Z" fill="currentColor" />
      </svg>
    </section>
  )
}

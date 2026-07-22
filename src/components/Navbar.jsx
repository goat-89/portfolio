import { useEffect, useState } from 'react'
import { profile } from '../data/profile'

const links = [
  { href: '#top', id: 'top', label: 'Home' },
  { href: '#about', id: 'about', label: 'About' },
  { href: '#skills', id: 'skills', label: 'Skills' },
  { href: '#projects', id: 'projects', label: 'Projects' },
  { href: '#journey', id: 'journey', label: 'Journey' },
  { href: '#contact', id: 'contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('top')

  useEffect(() => {
    const sections = links
      .map((l) => document.getElementById(l.id))
      .filter(Boolean)
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id)
        })
      },
      { rootMargin: '-40% 0px -55% 0px' }
    )
    sections.forEach((s) => observer.observe(s))
    return () => observer.disconnect()
  }, [])

  return (
    <header className="sticky top-0 z-50 bg-coal shadow-[0_4px_24px_-8px_rgba(0,0,0,0.5)]">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a
          href="#top"
          className="font-display text-xl font-bold tracking-tight text-white"
        >
          {profile.name.split(' ')[0]}
          <span className="text-flame">.</span>
        </a>

        <ul className="hidden items-center gap-7 md:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={`relative text-sm font-medium transition-colors ${
                  active === link.id
                    ? 'text-white'
                    : 'text-white/60 hover:text-white'
                }`}
              >
                {link.label}
                <span
                  className={`absolute -bottom-1.5 left-0 h-0.5 rounded bg-flame transition-all duration-300 ${
                    active === link.id ? 'w-full' : 'w-0'
                  }`}
                />
              </a>
            </li>
          ))}
          <li>
            <a
              href={`mailto:${profile.email}`}
              className="btn-bounce rounded-full bg-flame px-5 py-2 text-sm font-semibold text-white shadow-lg shadow-flame/30 hover:bg-flame-dark"
            >
              Hire Me
            </a>
          </li>
        </ul>

        <button
          onClick={() => setOpen(!open)}
          className="text-white md:hidden"
          aria-label="Toggle menu"
        >
          {open ? '✕' : '☰'}
        </button>
      </nav>

      {open && (
        <ul className="flex flex-col gap-1 border-t border-white/10 bg-coal px-6 py-4 md:hidden">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className="block py-2 text-white/70 hover:text-flame"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href={`mailto:${profile.email}`}
              className="mt-2 inline-block rounded-full bg-flame px-5 py-2 text-sm font-semibold text-white"
            >
              Hire Me
            </a>
          </li>
        </ul>
      )}
    </header>
  )
}

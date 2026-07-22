import { profile } from '../data/profile'

const GithubIcon = (
  <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
    <path d="M12 2C6.48 2 2 6.58 2 12.25c0 4.53 2.87 8.37 6.84 9.73.5.09.68-.22.68-.49 0-.24-.01-.88-.01-1.73-2.78.62-3.37-1.37-3.37-1.37-.46-1.18-1.11-1.5-1.11-1.5-.91-.63.07-.62.07-.62 1 .07 1.53 1.06 1.53 1.06.89 1.57 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.37-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.7 0 0 .84-.28 2.75 1.05a9.36 9.36 0 0 1 5 0c1.91-1.33 2.75-1.05 2.75-1.05.55 1.4.2 2.44.1 2.7.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.8-4.57 5.06.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.81 0 .27.18.59.69.49A10.05 10.05 0 0 0 22 12.25C22 6.58 17.52 2 12 2Z" />
  </svg>
)

const LinkedinIcon = (
  <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
    <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5ZM.24 8.25h4.52V23H.24V8.25ZM8.34 8.25h4.33v2.01h.06c.6-1.14 2.08-2.34 4.28-2.34 4.57 0 5.42 3.01 5.42 6.92V23h-4.52v-7.16c0-1.71-.03-3.91-2.38-3.91-2.39 0-2.75 1.86-2.75 3.78V23H8.34V8.25Z" />
  </svg>
)

const MailIcon = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5">
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="m2 7 10 7L22 7" />
  </svg>
)

export default function SocialRail() {
  const items = [
    profile.social.github && {
      label: 'GitHub',
      href: profile.social.github,
      icon: GithubIcon,
    },
    profile.social.linkedin && {
      label: 'LinkedIn',
      href: profile.social.linkedin,
      icon: LinkedinIcon,
    },
    {
      label: 'Email',
      href: `mailto:${profile.email}`,
      icon: MailIcon,
    },
  ].filter(Boolean)

  return (
    <div className="fixed bottom-8 left-5 z-40 hidden flex-col items-center gap-1 lg:flex">
      <div className="flex flex-col gap-1 rounded-full border border-coal/10 bg-white/90 p-2 shadow-lg backdrop-blur">
        {items.map((item) => (
          <a
            key={item.label}
            href={item.href}
            target={item.href.startsWith('mailto') ? undefined : '_blank'}
            rel="noreferrer"
            aria-label={item.label}
            title={item.label}
            className="chip-pop flex h-10 w-10 items-center justify-center rounded-full text-coal/70 hover:bg-flame hover:text-white"
          >
            {item.icon}
          </a>
        ))}
      </div>
      <div className="mt-2 h-16 w-px bg-coal/20" />
    </div>
  )
}

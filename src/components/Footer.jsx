import { profile } from '../data/profile'

export default function Footer() {
  return (
    <footer className="bg-coal px-6 py-8 text-center text-sm text-white/60">
      © {new Date().getFullYear()}{' '}
      <span className="font-semibold text-white">{profile.name}</span> · Built
      with React &amp; Tailwind CSS
    </footer>
  )
}

import { useEffect, useRef, useState } from 'react'
import { profile } from '../data/profile'
import { useReveal } from '../hooks/useReveal'

const stats = [
  { value: 5, suffix: '+', label: 'Projects Built' },
  { value: 2, suffix: '', label: 'Internships Completed' },
  { value: 15, suffix: '+', label: 'Technologies Used' },
  { value: 4, suffix: '', label: 'Certifications' },
]

function Counter({ value, suffix }) {
  const ref = useRef(null)
  const [count, setCount] = useState(0)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        observer.disconnect()
        const duration = 1200
        const start = performance.now()
        const tick = (now) => {
          const t = Math.min((now - start) / duration, 1)
          const eased = 1 - Math.pow(1 - t, 3)
          setCount(Math.round(eased * value))
          if (t < 1) requestAnimationFrame(tick)
        }
        requestAnimationFrame(tick)
      },
      { threshold: 0.5 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [value])

  return (
    <span ref={ref} className="font-display text-4xl font-bold text-flame">
      {count}
      {suffix}
    </span>
  )
}

export default function About() {
  const ref = useReveal()

  return (
    <section id="about" ref={ref} className="mx-auto max-w-6xl px-6 py-20">
      <p className="reveal font-mono text-sm font-semibold text-flame">01. About</p>
      <h2 className="reveal section-title-line mt-2 font-display text-3xl font-bold text-coal sm:text-4xl">
        Who I am
      </h2>
      <p className="reveal reveal-delay-1 mt-8 max-w-3xl leading-relaxed text-coal/70">
        {profile.about}
      </p>

      <div className="reveal reveal-delay-2 mt-12 grid grid-cols-2 gap-6 lg:grid-cols-4">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="card-lift rounded-2xl border-2 border-coal/10 bg-white p-6 text-center"
          >
            <Counter value={stat.value} suffix={stat.suffix} />
            <p className="mt-2 text-sm font-medium text-coal/60">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

import { skills } from '../data/profile'
import { useReveal } from '../hooks/useReveal'

const categoryColors = {
  Languages: 'bg-flame text-white',
  'Backend & APIs': 'bg-sun text-coal',
  Frontend: 'bg-white text-coal',
  'AI / ML & GenAI': 'bg-flame-dark text-white',
  'Databases & Cloud': 'bg-sun text-coal',
  'Tools & DevOps': 'bg-flame text-white',
}

export default function Skills() {
  const ref = useReveal()

  return (
    <section id="skills" ref={ref} className="bg-coal py-20">
      <div className="mx-auto max-w-6xl px-6">
        <p className="reveal font-mono text-sm font-semibold text-sun">02. Skills</p>
        <h2 className="reveal section-title-line mt-2 font-display text-3xl font-bold text-white sm:text-4xl">
          What I work with
        </h2>

        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {skills.map((group, gi) => (
            <div
              key={group.category}
              className={`reveal reveal-delay-${(gi % 3) + 1} card-lift rounded-2xl border border-white/10 bg-coal-soft/60 p-6`}
            >
              <h3
                className={`inline-block rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wider ${
                  categoryColors[group.category] || 'bg-white/10 text-white'
                }`}
              >
                {group.category}
              </h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="chip-pop rounded-lg border border-white/15 bg-white/5 px-3 py-1.5 text-sm text-white/85 hover:bg-flame hover:text-white"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

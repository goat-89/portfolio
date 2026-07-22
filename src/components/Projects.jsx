import { useMemo, useState } from 'react'
import { projects } from '../data/projects'
import { useReveal } from '../hooks/useReveal'

const accentBorders = ['border-t-flame', 'border-t-sun', 'border-t-coal', 'border-t-flame-dark']

function ProjectCard({ project, index }) {
  return (
    <div
      className={`card-lift flex h-full flex-col rounded-2xl border-2 border-coal/10 border-t-4 ${
        accentBorders[index % accentBorders.length]
      } bg-white p-6`}
    >
      <div className="flex items-start justify-between gap-3">
        <h3 className="font-display text-xl font-bold text-coal">
          {project.title}
        </h3>
        {project.featured && (
          <span className="shrink-0 rounded-full bg-sun px-2.5 py-0.5 text-xs font-bold text-coal">
            ★ Featured
          </span>
        )}
      </div>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-coal/70">
        {project.description}
      </p>

      <div className="mt-4 flex flex-wrap gap-2">
        {project.tech.map((t) => (
          <span
            key={t}
            className="chip-pop rounded-full bg-mist px-2.5 py-1 font-mono text-xs text-coal/80"
          >
            {t}
          </span>
        ))}
      </div>

      <div className="mt-5 flex gap-5 text-sm font-semibold">
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="text-flame transition hover:text-flame-dark"
          >
            GitHub →
          </a>
        )}
        {project.demo && (
          <a
            href={project.demo}
            target="_blank"
            rel="noreferrer"
            className="text-coal transition hover:opacity-60"
          >
            Live Demo →
          </a>
        )}
      </div>
    </div>
  )
}

export default function Projects() {
  const ref = useReveal()
  const [filter, setFilter] = useState('All')

  const techs = useMemo(() => {
    const all = new Set()
    projects.forEach((p) => p.tech.forEach((t) => all.add(t)))
    return ['All', ...all]
  }, [])

  const visible =
    filter === 'All'
      ? projects
      : projects.filter((p) => p.tech.includes(filter))

  return (
    <section id="projects" ref={ref} className="bg-mist/60 py-20">
      <div className="mx-auto max-w-6xl px-6">
        <p className="reveal font-mono text-sm font-semibold text-flame">
          03. Projects
        </p>
        <h2 className="reveal section-title-line mt-2 font-display text-3xl font-bold text-coal sm:text-4xl">
          Things I've built
        </h2>

        <div className="reveal reveal-delay-1 mt-8 flex flex-wrap gap-2">
          {techs.map((t) => (
            <button
              key={t}
              onClick={() => setFilter(t)}
              className={`chip-pop rounded-full px-4 py-1.5 text-sm font-semibold transition-colors ${
                filter === t
                  ? 'bg-flame text-white shadow-md shadow-flame/30'
                  : 'bg-white text-coal/60 hover:text-coal'
              }`}
            >
              {t}
            </button>
          ))}
        </div>

        <div className="mt-8 grid gap-6 sm:grid-cols-2" key={filter}>
          {visible.map((project, i) => (
            <div
              key={project.title}
              className="animate-[fadeUp_0.5s_ease_both]"
              style={{ animationDelay: `${i * 0.08}s` }}
            >
              <ProjectCard project={project} index={i} />
            </div>
          ))}
        </div>

        {visible.length === 0 && (
          <p className="mt-8 text-coal/60">No projects match that filter.</p>
        )}
      </div>
    </section>
  )
}

import { experience, education, certifications } from '../data/profile'
import { useReveal } from '../hooks/useReveal'

export default function Journey() {
  const ref = useReveal()

  return (
    <section id="journey" ref={ref} className="mx-auto max-w-6xl px-6 py-20">
      <p className="reveal font-mono text-sm font-semibold text-flame">
        04. Experience &amp; Education
      </p>
      <h2 className="reveal section-title-line mt-2 font-display text-3xl font-bold text-coal sm:text-4xl">
        My journey so far
      </h2>

      <div className="mt-12 grid gap-12 lg:grid-cols-2">
        {/* Experience timeline */}
        <div>
          <h3 className="reveal font-display text-lg font-bold text-coal">
            💼 Internships
          </h3>
          <div className="mt-6 space-y-0 border-l-2 border-flame/25">
            {experience.map((job, i) => (
              <div
                key={job.company}
                className={`reveal reveal-delay-${i + 1} relative pb-10 pl-8 last:pb-0`}
              >
                <span className="absolute -left-[9px] top-1 h-4 w-4 rounded-full border-4 border-paper bg-flame" />
                <p className="font-mono text-xs font-semibold text-flame">
                  {job.period}
                </p>
                <h4 className="mt-1 font-display text-lg font-bold text-coal">
                  {job.role}
                </h4>
                <p className="text-sm font-semibold text-coal/60">{job.company}</p>
                <ul className="mt-3 space-y-2">
                  {job.points.map((point) => (
                    <li
                      key={point}
                      className="flex gap-2 text-sm leading-relaxed text-coal/70"
                    >
                      <span className="mt-1 text-sun">▸</span>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-10">
          {/* Education */}
          <div className="reveal reveal-delay-1 card-lift rounded-2xl border-2 border-coal/10 bg-white p-6">
            <h3 className="font-display text-lg font-bold text-coal">
              🎓 Education
            </h3>
            <p className="mt-3 font-display text-base font-bold text-flame">
              {education.degree}
            </p>
            <p className="mt-1 text-sm font-semibold text-coal/80">
              {education.school}
            </p>
            <p className="text-sm text-coal/60">
              {education.university} · {education.year}
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {education.coursework.map((c) => (
                <span
                  key={c}
                  className="chip-pop rounded-full bg-mist px-2.5 py-1 text-xs font-medium text-coal/75"
                >
                  {c}
                </span>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div className="reveal reveal-delay-2 card-lift rounded-2xl border-2 border-coal/10 bg-white p-6">
            <h3 className="font-display text-lg font-bold text-coal">
              🏅 Certifications
            </h3>
            <ul className="mt-4 space-y-3">
              {certifications.map((cert) => (
                <li key={cert.title} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-sun text-xs font-bold text-coal">
                    ✓
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-coal">{cert.title}</p>
                    {cert.issuer && (
                      <p className="text-xs text-coal/55">{cert.issuer}</p>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

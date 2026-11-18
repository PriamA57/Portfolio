import Reveal from '../components/Reveal.jsx'
import { JOBS, EDU, CERTS } from '../data.js'

export default function Career() {
  return (
    <div>
      <h2><small>Parcours</small>Expériences &amp; formations / certifications</h2>
      <div className="tl">
        {JOBS.map((j) => (
          <Reveal key={j.title}>
            <div className="job">
              <em>{j.date}</em>
              <h3>{j.title}</h3>
              <div className="co">{j.place}</div>
              <ul>{j.tasks.map((t) => <li key={t}>{t}</li>)}</ul>
            </div>
          </Reveal>
        ))}
      </div>

      <h2 style={{ margin: '44px 0 24px' }}>Formation</h2>
      <div className="grid">
        {EDU.map((e, i) => (
          <Reveal key={e.title} delay={i * 90}>
            <div className="box"><h3>{e.title}</h3>{e.place}<p>{e.date}</p></div>
          </Reveal>
        ))}
      </div>

      <h2 style={{ margin: '44px 0 24px' }}>Certification</h2>
      <div className="grid">
        {CERTS.map((e) => (
          <Reveal key={e.title}>
            <div className="box cert">
              <div className="ico">🏅</div>
              <h3>{e.title}</h3>
              {e.place}
              <p>{e.date}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  )
}

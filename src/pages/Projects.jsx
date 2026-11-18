import { Link } from 'react-router-dom'
import Reveal from '../components/Reveal.jsx'
import { PROJECTS } from '../data.js'

function Card({ p }) {
  const body = (
    <>
      <div className="top">
        <div className="ico">{p.icon}</div>
        {p.offline && <span className="badge off">Plus en ligne</span>}
      </div>
      <h3>{p.title}</h3>
      <div className="chips">{p.tags.map((t) => <span key={t}>{t}</span>)}</div>
      <p>{p.text}</p>
      {p.to && <p style={{ color: 'var(--ac)' }}>Voir le projet →</p>}
    </>
  )
  return p.to ? <Link className="box" to={p.to}>{body}</Link> : <div className="box">{body}</div>
}

export default function Projects() {
  return (
    <div>
      <h2><small>Projets</small>Ce que j’ai construit</h2>
      <div className="grid">
        {PROJECTS.map((p, i) => (
          <Reveal key={p.title} delay={i * 90}><Card p={p} /></Reveal>
        ))}
      </div>
    </div>
  )
}

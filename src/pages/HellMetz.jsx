import { Link } from 'react-router-dom'
import Reveal from '../components/Reveal.jsx'
import { HELLMETZ_FEATURES, GITHUB_SIOE } from '../data.js'

const STACK = ['Java', 'Spring Boot 3.2', 'PostgreSQL', 'Flyway', 'JPA / Hibernate', 'Thymeleaf', 'Tomcat', 'IntelliJ']

export default function HellMetz() {
  return (
    <div>
      <Link className="back" to="/projets">← Retour aux projets</Link>
      <h2><small>Projet BTS SIO</small>HellMetz (SIOE)</h2>
      <p className="lead" style={{ marginBottom: 20 }}>
        Application web de gestion d’un festival. Elle permet de piloter les artistes, les groupes et les scènes depuis un backoffice complet.
      </p>
      <div className="chips">{STACK.map((s) => <span key={s}>{s}</span>)}</div>
      <div className="btns" style={{ margin: '10px 0 34px' }}>
        <a className="btn p" href={GITHUB_SIOE} target="_blank" rel="noopener noreferrer">Voir le code sur GitHub</a>
        <Link className="btn" to="/contact">En discuter</Link>
      </div>
      <div className="grid">
        {HELLMETZ_FEATURES.map((f, i) => (
          <Reveal key={f.title} delay={i * 90}>
            <div className="box">
              <div className="ico">{f.icon}</div>
              <h3>{f.title}</h3>
              <ul>{f.items.map((x) => <li key={x}>{x}</li>)}</ul>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  )
}

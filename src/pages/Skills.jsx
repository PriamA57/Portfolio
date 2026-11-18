import { useState } from 'react'
import { Link } from 'react-router-dom'
import Reveal from '../components/Reveal.jsx'
import { SKILLS } from '../data.js'

function Group({ name, list }) {
  const [active, setActive] = useState(null)
  const current = list.find((s) => s.name === active)
  const clickable = list.some((s) => s.uses)

  return (
    <div className="box">
      <h3>{name}</h3>
      <div className="skill-list">
        {list.map((s) =>
          s.uses ? (
            <button
              type="button"
              key={s.name}
              className={`skill${active === s.name ? ' on' : ''}`}
              onClick={() => setActive(active === s.name ? null : s.name)}
            >
              {s.name}
              {s.level && <em>{s.level}</em>}
            </button>
          ) : (
            <span key={s.name} className="skill static">
              {s.name}
              {s.level && <em>{s.level}</em>}
            </span>
          )
        )}
      </div>
      {current ? (
        <div className="detail" key={current.name}>
          <strong>{current.name}</strong> : utilisé dans
          <ul>
            {current.uses.map((u) => (
              <li key={u.label}><Link to={u.to}>{u.label}</Link></li>
            ))}
          </ul>
        </div>
      ) : (
        clickable && <p className="hint">Touche une compétence pour voir où je l’ai utilisée.</p>
      )}
    </div>
  )
}

export default function Skills() {
  return (
    <div>
      <h2><small>Compétences</small>Ma boîte à outils</h2>
      <div className="grid">
        {Object.entries(SKILLS).map(([group, list], i) => (
          <Reveal key={group} delay={i * 90}>
            <Group name={group} list={list} />
          </Reveal>
        ))}
      </div>
    </div>
  )
}

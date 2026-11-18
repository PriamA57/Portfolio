import Reveal from '../components/Reveal.jsx'
import { MAIL, TEL } from '../data.js'

const ITEMS = [
  { icon: '✉️', label: 'E-mail', value: MAIL, href: `mailto:${MAIL}` },
  { icon: '📞', label: 'Téléphone', value: TEL, href: `tel:${TEL.replace(/ /g, '')}` },
  { icon: '📍', label: 'Localisation', value: 'Moulins-lès-Metz, France' },
]

export default function Contact() {
  return (
    <div>
      <h2><small>Contact</small>Travaillons ensemble</h2>
      <p className="lead" style={{ marginBottom: 30 }}>
        Un stage, une alternance ? Écrivez-moi ou appelez-moi, je réponds vite.
      </p>
      <div className="grid">
        {ITEMS.map((c, i) => {
          const inner = (
            <>
              <div className="ico">{c.icon}</div>
              <h3>{c.label}</h3>
              <div className="lg">{c.value}</div>
            </>
          )
          return (
            <Reveal key={c.label} delay={i * 90}>
              {c.href ? <a className="box" href={c.href}>{inner}</a> : <div className="box">{inner}</div>}
            </Reveal>
          )
        })}
      </div>
    </div>
  )
}

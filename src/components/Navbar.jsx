import { useEffect, useState } from 'react'
import { NavLink, Link, useLocation } from 'react-router-dom'
import { NAV } from '../data.js'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()

  // Ferme le menu quand on change de page
  useEffect(() => {
    setOpen(false)
  }, [pathname])

  // Ferme le menu avec la touche Échap
  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  return (
    <header>
      <nav>
        <Link className="logo" to="/">AP<span>.</span></Link>
        <button
          type="button"
          className={`burger${open ? ' open' : ''}`}
          aria-label={open ? 'Fermer le menu' : 'Ouvrir le menu'}
          aria-expanded={open}
          aria-controls="menu"
          onClick={() => setOpen((o) => !o)}
        >
          <span></span><span></span><span></span>
        </button>
        <ul id="menu" className={open ? 'open' : ''}>
          {NAV.map((n) => (
            <li key={n.to}>
              <NavLink to={n.to} end={n.to === '/'} className={({ isActive }) => (isActive ? 'on' : '')}>
                {n.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}

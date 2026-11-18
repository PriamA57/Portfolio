import { NavLink, Link } from 'react-router-dom'
import { NAV } from '../data.js'

export default function Navbar() {
  return (
    <header>
      <nav>
        <Link className="logo" to="/">AP<span>.</span></Link>
        <ul>
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

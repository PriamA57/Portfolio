import './Navigation.css';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';

export default function Navigation() {
    const [menuOpen, setMenuOpen] = useState(false);

    const closeMenu = () => setMenuOpen(false);

    return (
        <header>
            <nav className="wrap">
                <NavLink className="logo" to="/" end>AP<span>.</span></NavLink>
                <button
                    className="menu-btn"
                    type="button"
                    aria-label={menuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
                    aria-expanded={menuOpen}
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    Menu
                </button>
                <div className={`navlinks${menuOpen ? ' is-open' : ''}`}>
                <NavLink to="/profil" onClick={closeMenu}>Profil</NavLink>
                <NavLink to="/experiences" onClick={closeMenu}>Expériences</NavLink>
                <NavLink to="/competences" onClick={closeMenu}>Compétences</NavLink>
                <NavLink to="/projets" onClick={closeMenu}>Projets</NavLink>
                <NavLink to="/contact" onClick={closeMenu}>Contact</NavLink>
                </div>
            </nav>
        </header>
    )
};

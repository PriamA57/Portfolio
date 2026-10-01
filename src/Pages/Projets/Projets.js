import './Projets.css';
import { NavLink } from 'react-router-dom';

export default function Projets() {
    return (
        <main className="projects-page">
            <div className="wrap">
                <div className="kicker">Projets personnels</div>
                <h1 className="sec-title">Ce que je construis à côté</h1>
                <div className="projects">
            
                <article className="card">
                    <h3>Site multiservices</h3>
                    <ul>
                    <li>Création complète d'un site vitrine pour l'entreprise de mon frère</li>
                    <li>Conception UI/UX et intégration responsive</li>
                    <li>Déploiement en ligne de bout en bout</li>
                    </ul>
                    <p className="stack-label">Compétences utilisées</p>
                    <div className="stack"><span>React.js</span><span>CSS</span><span>Bootstrap</span><span>UI/UX</span><span>Responsive</span><span>Déploiement</span></div>
                    <NavLink to="" className="ProjectDisable openProject ">Indisponible</NavLink>
                </article>
            
                <article className="card">
                    <h3>Exploration IA &amp; automatisation</h3>
                    <ul>
                    <li>Utilisation d'outils d'intelligence artificielle sur des projets personnels</li>
                    <li>Intégration de LLM dans des workflows de développement</li>
                    </ul>
                    <p className="stack-label">Compétences utilisées</p>
                    <div className="stack"><span>Prompting</span><span>Automatisation</span><span>LLM</span><span>Workflows</span></div>
                </article>
            
                </div>
            </div>
        </main>
    );
}
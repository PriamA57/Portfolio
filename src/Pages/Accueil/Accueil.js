import './Accueil.css';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Accueil() {
    useEffect(() => {
        document.body.classList.add('home-page');

        return () => document.body.classList.remove('home-page');
    }, []);

    return (
        <main className="hero">
            <div className="wrap">
                <h1>Antoine Priam</h1>
                <p className="role">Etudiant BTS SIO option Developpement d'Application — à l'aise aussi bien sur une interface React que sur une baie de brassage.</p>
                <p className="pitch">Je viens d'un parcours en systèmes numériques, entre réseaux, maintenance informatique et développement d'application. J'aime comprendre une infrastructure de bout en bout, du câblage jusqu'à l'interface que l'utilisateur touche.</p>
                <div className="cta-row">
                    <Link className="btn btn-primary" to="/projets">Voir mes projets</Link>
                    <Link className="btn btn-ghost" to="/contact">Me contacter</Link>
                    <a className="btn btn-ghost" href="/E5-Synthèse.pdf" download>Télécharger la grille de compétences</a>
                    </div>
            </div>
        </main>
    );
}
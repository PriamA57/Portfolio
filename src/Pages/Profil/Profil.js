import './Profil.css';
import { useEffect } from 'react';

export default function Profil() {
    useEffect(() => {
        document.body.classList.add('profile-page');

        return () => document.body.classList.remove('profile-page');
    }, []);

    return (
        <main className="profile-page">
            <div class="wrap">
                <div className="kicker">Profil</div>
                <h1 className="sec-title">Entre réseau et développement</h1>
                <div className="about-grid">
                <div>
                    <p>Actuellement en BTS SIO au lycée Robert Schuman à Metz, après un Bac Pro Systèmes Numériques. Mon parcours m'a fait passer par le câblage de baies informatiques, la migration de postes vers Linux, et la construction d'interfaces en React et Angular.</p>
                    <p>Ce qui m'intéresse : comprendre comment un système tient debout, du réseau qui le fait tourner jusqu'au site qui l'expose. En dehors des cours, je suis les évolutions de l'IA et j'essaie d'intégrer des LLM dans mes propres projets.</p>
                </div>
                <dl className="facts">
                    <div className="fact"><dt>Localisation</dt><dd>Moulins-lès-Metz</dd></div>
                    <div className="fact"><dt>Formation</dt><dd>BTS SIO, en cours</dd></div>
                    <div className="fact"><dt>Permis</dt><dd>Permis B</dd></div>
                    <div className="fact"><dt>Langues</dt><dd>Français natif, anglais débutant</dd></div>
                </dl>
                </div>
            </div>
        </main>
    );
}
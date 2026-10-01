import './Experiences.css';

export default function Experiences() {
    return (
        <main className="experiences-page">
            <div className="wrap">
                <div className="kicker">Parcours</div>
                <h1 className="sec-title">Expériences professionnelles</h1>
                <div className="timeline">
            
                <div className="tl-item">
                    <div className="tl-head">
                    <span className="tl-role">Employé libre-service</span>
                    <span className="tl-org">Leclerc</span>
                    <span className="tl-date">2025 – 2026 · 1 mois</span>
                    </div>
                    <div className="tl-loc">Marly · Job étudiant</div>
                    <ul>
                    <li>Mise en rayon de nuit</li>
                    <li>Gestion des stocks et approvisionnement des rayons</li>
                    <li>Travail en équipe dans le respect des délais et des consignes de sécurité</li>
                    </ul>
                </div>
            
                <div className="tl-item">
                    <div className="tl-head">
                    <span className="tl-role">Développeur Web (Stage)</span>
                    <span className="tl-org">Brasserie Cheval</span>
                    <span className="tl-date">2025 – 2026</span>
                    </div>
                    <div className="tl-loc">Toul</div>
                    <ul>
                    <li>Modification et amélioration du site WordPress de l'entreprise</li>
                    <li>Mise à jour du contenu, des visuels et de la structure des pages</li>
                    <li>Optimisation de l'expérience utilisateur et de la navigation</li>
                    </ul>
                </div>
            
                <div className="tl-item">
                    <div className="tl-head">
                    <span className="tl-role">Technicien Informatique (Stage)</span>
                    <span className="tl-org">Tessi CRC</span>
                    <span className="tl-date">2024 – 2025</span>
                    </div>
                    <div className="tl-loc">Metz Technopole</div>
                    <ul>
                    <li>Installation et câblage de baies informatiques (connectivité réseau)</li>
                    <li>Migration de postes Windows vers Ubuntu Linux</li>
                    <li>Maintenance informatique et support utilisateurs</li>
                    </ul>
                </div>
            
                <div className="tl-item">
                    <div className="tl-head">
                    <span className="tl-role">Développeur Front-End &amp; Agent polyvalent (Stage)</span>
                    <span className="tl-org">Rotarex</span>
                    <span className="tl-date">2021 – 2024</span>
                    </div>
                    <div className="tl-loc">Lintgen, Luxembourg</div>
                    <ul>
                    <li>Développement d'une interface front-end en Angular pour le site internet</li>
                    <li>Maintenance de machines de production industrielles</li>
                    <li>Magasinier : tri de pièces et utilisation d'un transpalette</li>
                    <li>Agent de production : montage à la chaîne</li>
                    </ul>
                </div>
            
                </div>
            </div>
        </main>
    );
}
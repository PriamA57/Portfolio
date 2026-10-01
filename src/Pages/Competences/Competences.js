import './Competences.css';

export default function Competences() {
    return (
        <main className="skills-page">
            <div className="wrap">
                <div className="kicker">Compétences</div>
                <h1 className="sec-title">Ce que je maîtrise</h1>
                <div className="skill-groups">
            
                <div className="skill-group">
                    <h3>Developpement WEB</h3>
                    <div className="skill-row"><span className="skill-name">HTML / CSS</span><div className="bars"><i className="on"></i><i className="on"></i><i className="on"></i><i className="on"></i><i className="on"></i></div></div>
                    <div className="skill-row"><span className="skill-name">React.js</span><div className="bars"><i className="on"></i><i className="on"></i><i className="on"></i><i className="on"></i><i></i></div></div>
                    <div className="skill-row"><span className="skill-name">JavaScript</span><div className="bars"><i className="on"></i><i className="on"></i><i className="on"></i><i className="on"></i><i></i></div></div>
                    <div className="skill-row"><span className="skill-name">Bootstrap</span><div className="bars"><i className="on"></i><i className="on"></i><i className="on"></i><i className="on"></i><i></i></div></div>
                    <div className="skill-row"><span className="skill-name">Angular</span><div className="bars"><i className="on"></i><i className="on"></i><i className="on"></i><i></i><i></i></div></div>
                    <div className="skill-row"><span className="skill-name">Java</span><div className="bars"><i className="on"></i><i className="on"></i><i className="on"></i><i></i><i></i></div></div>
                </div>
            
                <div className="skill-group">
                    <h3>Autres langages & Outils</h3>
                    <div className="skill-row"><span className="skill-name">Python</span><div className="bars"><i className="on"></i><i className="on"></i><i className="on"></i><i></i><i></i></div></div>
                    <div className="skill-row"><span className="skill-name">Git / GitHub</span><div className="bars"><i className="on"></i><i className="on"></i><i className="on"></i><i></i><i></i></div></div>
                    <div className="skill-row"><span className="skill-name">Flutter / Dart</span><div className="bars"><i className="on"></i><i className="on"></i><i className="on"></i><i></i><i></i></div></div>

                </div>
            
                <div className="skill-group">
                    <h3>Système &amp; réseau</h3>
                    <div className="skill-row"><span className="skill-name">Windows</span><div className="bars"><i className="on"></i><i className="on"></i><i className="on"></i><i className="on"></i><i className="on"></i></div></div>
                    <div className="skill-row"><span className="skill-name">Linux</span><div className="bars"><i className="on"></i><i className="on"></i><i className="on"></i><i className="on"></i><i></i></div></div>
                    <div className="skill-row"><span className="skill-name">Réseaux / câblage</span><div className="bars"><i className="on"></i><i className="on"></i><i className="on"></i><i className="on"></i><i></i></div></div>
                </div>
            
                <div className="skill-group">
                    <h3>Bureautique &amp; autres</h3>
                    <div className="skill-row"><span className="skill-name">Pack Office</span><div className="bars"><i className="on"></i><i className="on"></i><i className="on"></i><i className="on"></i><i></i></div></div>
                    <div className="skill-row"><span className="skill-name">IA (prompting / outils)</span><div className="bars"><i className="on"></i><i className="on"></i><i className="on"></i><i className="on"></i><i></i></div></div>
                    <div className="skill-row"><span className="skill-name">Réseaux sociaux</span><div className="bars"><i className="on"></i><i className="on"></i><i className="on"></i><i className="on"></i><i></i></div></div>
                    <div className="skill-row"><span className="skill-name">Suite Adobe</span><div className="bars"><i className="on"></i><i className="on"></i><i className="on"></i><i></i><i></i></div></div>
                </div>
            
                <div className="skill-group">
                    <h3>Centres d'intérêt</h3>
                    <p className="interest-copy">Développement web personnel, veille technologique &amp; IA, gaming &amp; culture numérique, musculation.</p>
                </div>
                <div className="skill-group">
                    <h3>Certifications</h3>
                    <p className="interest-copy">Level Up Cybersecurity with Generative AI</p>
                </div>
            
                </div>
            </div>
        </main>
    );
}
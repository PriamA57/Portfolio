import { Link } from 'react-router-dom'
import Typed from '../components/Typed.jsx'
import Count from '../components/Count.jsx'
import Reveal from '../components/Reveal.jsx'
import photo from '../assets/photo.jpg'

export default function Home() {
  return (
    <div>
      <div className="hero">
        <div>
          <h1>Bienvenue, je suis <span className="grad">Antoine Priam</span></h1>
          <Typed />
          <p className="lead">
            Étudiant en BTS SIO, passionné par le développement web. Je conçois des interfaces modernes, rapides et soignées.
            J’ai de solides bases en systèmes, réseaux et support utilisateurs.
          </p>
          <div className="btns">
            <Link className="btn p" to="/projets">Voir mes projets</Link>
            <Link className="btn" to="/contact">Me contacter</Link>
            <a className="btn" href={`${import.meta.env.BASE_URL}CV_Antoine_Priam.pdf`} download="CV_Antoine_Priam.pdf">Télécharger mon CV</a>
          </div>
        </div>
      </div>

      <div className="stats">
        <div><strong><Count to={4} /></strong>stages réalisés</div>
        <div><strong><Count to={6} /></strong>langages &amp; frameworks</div>
        <div><strong><Count to={3} /></strong>projets web</div>
      </div>

      <Reveal>
        <Link className="box" to="/projets/hellmetz" style={{ marginTop: 40 }}>
          <div className="ico">🎪</div>
          <h3>Projet BTS à la une : HellMetz (SIOE) <span className="badge">Nouveau</span></h3>
          <p>Site de gestion de festival.</p>
        </Link>
      </Reveal>
    </div>
  )
}

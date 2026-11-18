export const MAIL = 'priam.antoine57@gmail.com'
export const TEL = '+33 6 11 50 06 09'
export const GITHUB_SIOE = 'https://github.com/LK7136/SIOE.git'

export const NAV = [
  { to: '/', label: 'Accueil' },
  { to: '/competences', label: 'Compétences' },
  { to: '/parcours', label: 'Parcours' },
  { to: '/projets', label: 'Projets' },
  { to: '/contact', label: 'Contact' },
]

// Où retrouver chaque compétence (liens vers les pages du site)
const U = {
  hell: { label: 'HellMetz (projet BTS)', to: '/projets/hellmetz' },
  multi: { label: 'Site web multiservices', to: '/projets' },
  ia: { label: 'Exploration IA & automatisation', to: '/projets' },
  brasserie: { label: 'Stage Brasserie Cheval', to: '/parcours' },
  tessi: { label: 'Stage Tessi CRC', to: '/parcours' },
  rotarex: { label: 'Stage Rotarex', to: '/parcours' },
  cert: { label: 'Certification IBM SkillsBuild', to: '/parcours' },
}

// level (facultatif) : Notions, Intermédiaire ou Avancé
export const SKILLS = {
  'Développement web': [
    { name: 'HTML / CSS', level: 'Avancé', uses: [U.multi, U.brasserie] },
    { name: 'JavaScript', level: 'Intermédiaire', uses: [U.multi, U.rotarex] },
    { name: 'React.js', level: 'Intermédiaire', uses: [U.multi] },
    { name: 'Bootstrap', uses: [U.multi] },
    { name: 'Angular', uses: [U.rotarex] },
  ],
  'Back-end & données': [
    { name: 'Java', level: 'Intermédiaire', uses: [U.hell] },
    { name: 'Spring Boot', uses: [U.hell] },
    { name: 'PostgreSQL', uses: [U.hell] },
    { name: 'JPA / Hibernate', uses: [U.hell] },
    { name: 'Python' },
  ],
  'Outils': [
    { name: 'Git / GitHub / GitLab', level: 'Intermédiaire', uses: [U.hell] },
    { name: 'Flutter / Dart' },
    { name: 'IA (prompting, outils)', uses: [U.ia, U.cert] },
  ],
  'Systèmes & réseaux': [
    { name: 'Windows', level: 'Avancé', uses: [U.tessi] },
    { name: 'Linux (Ubuntu)', level: 'Intermédiaire', uses: [U.tessi] },
    { name: 'Réseaux / câblage', uses: [U.tessi] },
  ],
  'Bureautique': [
    { name: 'Pack Office' },
    { name: 'Suite Adobe' },
  ],
}

export const JOBS = [
  { date: '2025 – 2026', title: 'Développeur web — Stage', place: 'Brasserie Cheval, Toul', tasks: ['Amélioration du site WordPress de l’entreprise', 'Mise à jour du contenu, des visuels et des pages', 'Optimisation de l’expérience utilisateur et de la navigation'] },
  { date: '2024 – 2025', title: 'Technicien informatique — Stage', place: 'Tessi CRC, Metz Technopole', tasks: ['Installation et câblage de baies informatiques', 'Migration de postes Windows vers Ubuntu Linux', 'Maintenance et support utilisateurs'] },
  { date: '2021 – 2024', title: 'Développeur Front-End & agent polyvalent — Stage', place: 'Rotarex, Lintgen (Luxembourg)', tasks: ['Interface Front-End en Angular pour le site internet', 'Maintenance de machines de production industrielles'] },
  { date: 'Juillet 2026 · Octobre 2026', title: 'Employé libre-service — CDD', place: 'Leclerc, Marly', tasks: ['Gestion des stocks et approvisionnement des rayons', 'Travail en équipe dans le respect des délais'] },
]

export const EDU = [
  { title: 'BTS SIO', place: 'Lycée Robert Schuman, Metz', date: 'Depuis 2025 · en cours' },
  { title: 'Bac Pro Systèmes Numériques', place: 'Lycée L. de Cormontaigne, Metz', date: '2025' },
]

export const CERTS = [
  { title: 'Level Up Cybersecurity with Generative AI', place: 'IBM SkillsBuild', date: 'Janvier 2026' },
]

export const PROJECTS = [
  { icon: '🎪', title: 'HellMetz (SIOE) — Projet BTS', tags: ['Java', 'Spring Boot', 'PostgreSQL'], text: 'Backoffice de gestion d’un festival : artistes, groupes, scènes et paramètres de l’application.', to: '/projets/hellmetz' },
  { icon: '🌐', title: 'Site web multiservices', tags: ['React.js', 'CSS', 'Bootstrap'], text: 'Site vitrine complet pour l’entreprise de mon frère : UI/UX et intégration responsive. Le site a été mis en ligne, mais il n’est plus accessible aujourd’hui.', offline: true },
  { icon: '🤖', title: 'Exploration IA & automatisation', tags: ['LLMs', 'Prompting', 'Workflows'], text: 'Outils d’IA pour mes projets personnels et intégration de LLMs dans mes workflows de développement.' },
]

export const HELLMETZ_FEATURES = [
  { icon: '🗄️', title: 'Accès aux données', items: ['Spring Boot et JPA / Hibernate, sans DAO écrits à la main', 'Entités Artiste et Groupe', 'Pool de connexions HikariCP'] },
  { icon: '🐘', title: 'Base de données', items: ['PostgreSQL (schéma hellmetz)', 'Migrations Flyway', 'Schéma vérifié par Hibernate (mode validate)'] },
  { icon: '🖥️', title: 'Interface backoffice', items: ['Pages Thymeleaf', 'Édition des scènes avec aperçu en iframe', 'Plans techniques de scène en PDF'] },
  { icon: '⚙️', title: 'Paramétrage', items: ['Page Paramètres de l’application', 'Nom de l’application modifiable dynamiquement'] },
]

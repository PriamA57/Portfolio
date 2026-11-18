# Portfolio – Antoine Priam

Portfolio en **React 18 + Vite + React Router**.

## Lancer le projet

```bash
npm install
npm run dev
```

Ouvre ensuite l’adresse affichée (souvent http://localhost:5173).

## Construire pour la mise en ligne

```bash
npm run build
```

Le dossier `dist/` contient le site prêt à être déployé (GitHub Pages, Netlify, Vercel).
Le routage utilise `HashRouter` : les URL ressemblent à `/#/projets` et fonctionnent partout sans configuration.

## Structure

- `src/pages/` : une page par route (Accueil, Compétences, Parcours, Projets, HellMetz, Contact)
- `src/components/` : composants réutilisables (Navbar, Reveal, Typed, SkillBar…)
- `src/data.js` : tout le contenu (compétences, expériences, projets) à modifier facilement
- `src/assets/photo.jpg` : ta photo

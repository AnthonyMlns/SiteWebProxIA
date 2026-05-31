# kAIros. — Site Web Landing Page

![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-deployed-brightgreen)
![Last Commit](https://img.shields.io/github/last-commit/AnthonyMlns/SiteWebKairosIA-live)

Landing page pour **kAIros.**, cabinet de conseil en transformation IA pour TPE/PME françaises.

> Du bon moment à la bonne action — accompagnement opérationnel, technique et pédagogique de la découverte à la mise en œuvre concrète.

## Description

Site vitrine statique (HTML/CSS/JS vanilla) avec cinq pages, alimenté dynamiquement via **Sanity CMS** pour les cas d'usage :

- **`index.html`** — page d'accueil (hero, cible, méthode, FAQ, contact)
- **`simulateur.html`** — simulateur de ROI IA (2 panneaux, sliders, métriques)
- **`cas-dusage.html`** — cas d'usage concrets (3 colonnes statiques + section dynamique via Sanity)
- **`about.html`** — À propos (étymologie, vision, posture, engagement, CTA)
- **`404.html`** — page d'erreur personnalisée (404)

## Stack

- **Frontend** : HTML/CSS/JS vanilla
- **CMS** : Sanity (`sanity/`) — headless CMS, projectId `deh20epq`, dataset `production`
- **Design system** : tokens CSS (variables) · [`design-system.md`](design-system.md) · `#cc2c22` rouge accent · Inter 800 (titres) + JetBrains Mono (labels)
- **SEO** : schema.org JSON-LD (Organization, LocalBusiness, ProfessionalService) · Open Graph · Twitter Card · `llms.txt`
- **Responsive** : hamburger menu mobile full-screen · breakpoints 900 px / 640 px
- **Animations** : `heroIn` page-load stagger · IntersectionObserver scroll · `prefers-reduced-motion`

## Prérequis

- Un navigateur web moderne (Chrome, Firefox, Safari, Edge)
- Node.js 18+ pour Sanity Studio

## Installation

```bash
git clone https://github.com/AnthonyMlns/SiteWebKairosIA-live.git
cd SiteWebKairosIA-live
```

### Lancer le site

```bash
# Serveur local (nécessaire pour le fetch Sanity)
npx serve .

# Ou via Python
python -m http.server 8000
```

### Lancer Sanity Studio

```bash
cd sanity
npm install
npm run dev
```

Configurez votre `.env` à partir de `.env.example` :

```env
SANITY_PROJECT_ID=deh20epq
SANITY_DATASET=production
SANITY_TOKEN=votre_read_token
```

## Structure du projet

```
├── index.html              # Accueil — hero, cible, méthode, FAQ, contact
├── about.html              # À propos — étymologie, vision, posture
├── cas-dusage.html         # Cas d'usage (statique + dynamique Sanity)
├── simulateur.html         # Simulateur de ROI IA
├── 404.html                # Page d'erreur personnalisée
│
├── js/
│   └── sanity.js           # Client Sanity CDN (fetch + render)
│
├── sanity/                 # Sanity CMS Studio
│   ├── package.json
│   ├── sanity.cli.js
│   ├── sanity.config.js
│   └── schemas/
│       ├── index.js
│       └── useCaseCategory.js   # Schéma : catégorie de cas d'usage
│
├── design-system.md        # Tokens et principes du design system
├── llms.txt                # Indexation LLM
├── .env.example            # Variables d'environnement Sanity
├── LICENSE
└── README.md
```

## Roadmap

- [x] **MVP** — Landing page statique
- [x] **v2 — Mise en production** — about.html, simulateur ROI, cas-dusage.html, rebranding kAIros., design system, GitHub Pages
- [x] **v2.1** — Page 404, animations unifiées, navigation simplifiée (Accueil, Cas d'usage, Simulateur, À propos)
- [x] **v3 — Sanity CMS** — Intégration Sanity, schéma useCaseCategory, chargement dynamique des cas d'usage
- [ ] **Blog** — Schéma Sanity + page blog dédiée avec articles
- [ ] **Témoignages clients** — Section témoignages dynamiques via Sanity
- [ ] **Services dédiés** — Pages services individuelles
- [ ] **Formulaire de contact** — Formulaire fonctionnel (au lieu du simple mailto)
- [ ] **Contenu rédactionnel** — 3 articles de blog, cas d'usage métier détaillés

## Contribuer

Les contributions ne sont pas ouvertes pour le moment. Ce projet est un site vitrine privé.

## Licence

All Rights Reserved — voir le fichier [`LICENSE`](LICENSE).

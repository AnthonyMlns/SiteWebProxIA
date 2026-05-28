# KairosIA — Site Web Landing Page

![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-deployed-brightgreen)
![Last Commit](https://img.shields.io/github/last-commit/AnthonyMlns/SiteWebKairosIA)

Landing page pour **kAIros.**, cabinet de conseil en transformation IA pour TPE/PME françaises.

> Du bon moment à la bonne action — accompagnement opérationnel, technique et pédagogique de la découverte à la mise en œuvre concrète.

## Description

Site vitrine statique (HTML/CSS/JS vanilla) avec deux pages :
- **`index.html`** — homepage complète (hero, cible, cas d'usage, méthode, offres, simulateur ROI, FAQ, contact)
- **`about.html`** — page À propos (équipe, étymologie, posture, engagements)

## Stack

- HTML/CSS/JS vanilla
- Design system : tokens CSS (variables) · [`design-system.md`](design-system.md) · `#cc2c22` rouge accent · Inter 800 (titres) + JetBrains Mono (labels)
- SEO : schema.org JSON-LD (Organization, LocalBusiness, ProfessionalService) · Open Graph · Twitter Card · `llms.txt`
- Responsive : hamburger menu mobile full-screen · breakpoints 900 px / 640 px
- Animations : `heroIn` page-load stagger · IntersectionObserver scroll · `prefers-reduced-motion`

## Prérequis

- Un navigateur web moderne (Chrome, Firefox, Safari, Edge)
- Aucun serveur ni dépendance requis

## Installation

```bash
git clone https://github.com/AnthonyMlns/SiteWebKairosIA.git
cd SiteWebKairosIA
```

## Utilisation

Ouvrez `index.html` dans votre navigateur :

```bash
open index.html
```

## Structure du projet

| Fichier / Dossier | Rôle |
|---|---|
| `index.html` | Homepage — HTML, CSS, JS en fichier unique |
| `about.html` | Page À propos |
| `llms.txt` | Indexation LLM (llmstxt.org) |
| `design-system.md` | Documentation du design system |
| `references/` | Brief v2, template design, maquette simulateur |

## Sections — `index.html`

1. Navbar sticky (logo Inter 800, drawer mobile 100vh)
2. Hero — 100vh, centrage vertical
3. Cible — pour qui / pour qui pas
4. Cas d'usage — 9 cas concrets de ROI
5. Méthode — 4 étapes (Comprendre · Prioriser · Expérimenter · Ancrer)
6. Offres — 3 cartes mod box avec tarifs
7. Simulateur ROI — 2 panneaux (sliders + métriques)
8. FAQ — 6 questions, accordéon natif `<details>`
9. Limites — ce que kAIros. ne fait pas
10. Contact — CTA « Parlons de votre kairos »
11. Footer

## Roadmap

- [x] **MVP** — Landing page statique avec toutes les sections
- [ ] **v2 — Mise en production** — about.html, simulateur ROI, rebranding kAIros., déploiement GitHub Pages
- [ ] **v2.1** — Pages services dédiées + témoignages clients
- [ ] **v3** — Back-office CMS léger + formulaire de contact fonctionnel

## Contribuer

Les contributions ne sont pas ouvertes pour le moment. Ce projet est un site vitrine privé.

## Licence

All Rights Reserved — voir le fichier [`LICENSE`](LICENSE).

## Suivi

Voir [Issue #2](../../issues/2) pour le détail complet des modifications de la v2 et la checklist de mise en production.

# kAIros. — Design System

> Version 1.0 — Issu du code source du site web (index.html, about.html)

---

## 1. Tokens

### Couleurs

| Token | HEX | Usage |
|---|---|---|
| `--red` | `#cc2c22` | Accent principal, prix, point du logo, marqueurs négatifs |
| `--black` | `#0c0c0c` | Texte principal, boutons primaires, fond du panneau simulateur |
| `--gray-900` | `#1a1a1a` | Hover des boutons |
| `--gray-700` | `#3d3d3d` | Texte secondaire, corps de texte |
| `--gray-500` | `#6b6b6b` | Texte meta, labels, navigation, footer |
| `--gray-200` | `#e2e2e0` | Bordures (`--border`), fond des tags neutres |
| `--gray-100` | `#f5f5f3` | Fond des sections CTA, hover des boutons outline, en-tête tableau |
| `--white` | `#ffffff` | Fond page, cartes |

### Couleurs "dures" (non tokenisées)

| HEX | Usage |
|---|---|
| `#b02218` | `--red` au hover |
| `#fdf0ef` | Fond du bouton de structure actif dans le simulateur |
| `#999` / `#888` / `#bbb` | Textes dans le panneau dark (simulateur) |
| `rgba(0,0,0,0.07)` | Ombre de la nav au scroll |
| `rgba(0,0,0,0.06)` | Ombre des cartes Offres au hover |
| `rgba(255,255,255,0.04)` | Fond des métriques dans le panneau dark |
| `rgba(255,255,255,0.08)` | Bordure des métriques dans le panneau dark |
| `rgba(255,255,255,0.1)` | Séparateurs dans la section Pourquoi (sur fond noir) |

### Typographie

| Token | Valeur |
|---|---|
| `--font-sans` | `'Inter', -apple-system, BlinkMacSystemFont, sans-serif` |
| `--font-mono` | `'JetBrains Mono', 'Courier New', monospace` |

Poids Inter disponibles : 300, 400 (y.c. italic), 500, 600, 700, 800, 900
Poids JetBrains Mono disponibles : 400, 500

### Espacement

| Token | Valeur |
|---|---|
| `--max-w` | `1120px` |
| `--pad-x` | `48px` (→ `32px` à ≤900px → `20px` à ≤640px) |
| `--border` | `1px solid var(--gray-200)` |

### Rayons de bordure

| Élément | Radius |
|---|---|
| Boutons, tags, métriques, photos | `2px` |
| Curseur du range slider | `50%` (circulaire) |
| Barre du range slider | `1px` |

---

## 2. Typographie appliquée

### Corps de texte (`body`)

```css
font-family: var(--font-sans);
font-size: 16px;
line-height: 1.6;
-webkit-font-smoothing: antialiased;
-moz-osx-font-smoothing: grayscale;
```

### Hiérarchie des titres

| Élément | Taille | Graisse | Line-Height | Letter-Spacing |
|---|---|---|---|---|
| `.hero-title` | `clamp(64px, 11vw, 116px)` | 800 | 0.92 | -0.045em |
| `.hero-about-title` | `clamp(42px, 6.5vw, 80px)` | 800 | 1.02 | -0.04em |
| `.contact-title` | `clamp(34px, 5.5vw, 60px)` | 800 | 1.04 | -0.04em |
| `.etym-title` | `clamp(32px, 4vw, 48px)` | 800 | 1.08 | -0.035em |
| `.pourquoi-title` | `clamp(32px, 4.5vw, 56px)` | 800 | 1.06 | -0.04em |
| `.section-title` | `clamp(26px, 3.5vw, 38px)` | 700 | 1.15 | -0.025em |
| `.equipe-name` | `clamp(28px, 3.5vw, 40px)` | 800 | 1.1 | -0.035em |
| `h3` (cartes/étapes) | `15.5–17px` | 600–700 | 1.3 | -0.01 à -0.02em |
| `.nav-logo` | `17px` | 800 | — | -0.045em |
| `.footer-logo` | `14px` | 800 | — | -0.045em |

### Label (composant récurrent)

```css
font-family: var(--font-mono);
font-size: 10.5px;
font-weight: 500;
letter-spacing: 0.09em;
text-transform: uppercase;
color: var(--gray-500);
display: inline-block;
```

Utilisé en eyebrow au-dessus des titres de section.

### Textes courants

| Élément | Taille | Couleur | Line-Height |
|---|---|---|---|
| Corps standard | `15–16px` | `--gray-700` | 1.65–1.75 |
| Texte secondaire | `13–14px` | `--gray-500` | 1.55–1.75 |
| Petit texte (meta) | `9.5–12.5px` | `--gray-500` | — |
| Mono (prix, numéros) | `9.5–14px` | `--red` ou `--gray-500` | — |

---

## 3. Boutons

### `.btn` (primaire)

```
display: inline-flex; align-items: center; gap: 8px;
background: var(--black); color: var(--white);
font-family: var(--font-sans); font-size: 13.5px; font-weight: 500;
padding: 11px 22px; border: 1px solid transparent; cursor: pointer;
text-decoration: none; border-radius: 2px;
transition: background 0.15s; white-space: nowrap;
```
Hover → `background: var(--gray-900)`

### `.btn-outline`

```
background: transparent; color: var(--black); border: var(--border);
```
Hover → `background: var(--gray-100)`

### `.btn-red`

```
background: var(--red); color: var(--white); border-color: var(--red);
```
Hover → `background: #b02218`

---

## 4. Navigation

### Barre (`<nav>`)

```
position: sticky; top: 0; z-index: 100;
background: rgba(255,255,255,0.94);
backdrop-filter: blur(10px); border-bottom: var(--border);
transition: box-shadow 0.2s;
```
Au scroll → `box-shadow: 0 1px 16px rgba(0,0,0,0.07)`

### Logo

```
font-size: 17px; font-weight: 800; letter-spacing: -0.045em; color: var(--black);
```
Le point (`.dot`) est en `var(--red)`.

### Liens desktop

`gap: 28px` — `font-size: 13.5px` — `color: var(--gray-500)` — hover → `--black`

### Hamburger (mobile ≤640px)

3 lignes de `1.5px` d'épaisseur, transition 0.25s. Au toggle, les lignes forment une croix (rotation 45° / opacity 0).

### Drawer mobile

Full screen (`100vh - 58px`), fond blanc, liens en `24px / 700`, séparés par `--border`. Animation d'entrée : `drawerIn` (0.22s, cubic-bezier).

---

## 5. Composants

### Dot — Signature de marque

```css
.dot { color: var(--red); }
```

Le point final rouge de *kAIros.* — utilisé dans le logo, le hero, le footer, les titres de sections.

### Hero (index.html)

```
min-height: calc(100vh - 58px); display: flex; flex-direction: column;
```
Contient : eyebrow + titre + headline + tagline + CTA + quote.
Animations staggered via `@keyframes heroIn` (0.55s à 0.80s, cubic-bezier).

### Hero (about.html)

```
padding: clamp(72px, 10vh, 120px) 0;
```
Titre editorial + 2 colonnes de texte (grid 1fr 1fr, gap 48px, max-width 880px).

### Cartes Offres (grille 3 colonnes)

```
border: var(--border); border-radius: 0;
hover → border-color: var(--gray-500); box-shadow: 0 4px 24px rgba(0,0,0,0.06);
```

### Badge / Tag

```css
font-family: var(--font-mono); font-size: 9.5px; letter-spacing: 0.1em;
text-transform: uppercase; padding: 4px 10px; border-radius: 2px; display: inline-block;
```

`.tag-neutral` → `background: var(--gray-100); color: var(--gray-500)`
`.tag-kairos` → `background: var(--red); color: var(--white)`

### Simulateur ROI

2 panneaux : formulaire (gauche) + métriques (droite, fond `--black`).
Range slider custom : thumb `16px` circulaire avec double anneau (blanc + contour noir).
Au hover du thumb → fond et contour `--red`.

### FAQ (accordéon natif)

Basé sur `<details>` / `<summary>`. Icône `+` tourne de 45° à l'ouverture.
Hover de la question → `background: var(--gray-100)`.

### Grille de comparaison (3 colonnes)

Tableau comparatif Intégrateur / Consultant / kAIros.
Chaque colonne a un tag coloré en haut.
Les listes à puces utilisent `—` (tiret) en pseudo-élément.
Colonne kAIros → tirets en `--red`.

---

## 6. Animations

### HeroIn (entrée de page)

```css
@keyframes heroIn {
  from { opacity: 0; transform: translateY(22px); }
  to   { opacity: 1; transform: translateY(0); }
}
```

### DrawerIn (menu mobile)

```css
@keyframes drawerIn {
  from { opacity: 0; transform: translateY(-8px); }
  to   { opacity: 1; transform: translateY(0); }
}
```

### Scroll reveal (`.anim`)

```css
.anim {
  opacity: 0; transform: translateY(22px);
  transition: opacity 0.65s cubic-bezier(0.16,1,0.3,1),
              transform 0.65s cubic-bezier(0.16,1,0.3,1);
}
.anim.in-view { opacity: 1; transform: none; }
```

Stagger : enfants nth-child(1) à (6) avec délais de 70ms chacun.

### Easing constant

`cubic-bezier(0.16, 1, 0.3, 1)` — courbe d'ease-out personnalisée utilisée partout.

### Reduced motion

Respecte `prefers-reduced-motion: reduce` — toutes les animations sont neutralisées (opacity: 1, transform: none, animation: none). Également désactivé en JS.

---

## 7. Breakpoints

| État | Largeur | `--pad-x` | Section padding |
|---|---|---|---|
| Desktop | > 900px | 48px | 88px (index) / 96px (about) |
| Tablet | ≤ 900px | 32px | inchangé |
| Mobile | ≤ 640px | 20px | 56px |

### Passage en colonne unique à ≤900px

- `about.html` : hero-about-cols, etym-grid, diff-grid, equipe-grid, pourquoi-grid
- `index.html` : sim-panels

### Passage en colonne unique à ≤640px

- `index.html` : cible-grid, offres-grid, limits-grid
- `about.html` : posture-grid

### Navigation à ≤640px

Liens desktop et CTA masqués, hamburger visible, drawer full screen activé.

---

## 8. Grilles et layouts

| Composant | Colonnes | Gap | Remarque |
|---|---|---|---|
| Hero CTA | flex row | 10px | → column en mobile |
| Cible | 2 | — | Séparateur vertical via border-right |
| Méthode | 1 | — | Étapes séparées par border-bottom |
| Offres | 3 | 16px | → 1 en mobile |
| Simulateur | 1fr + 380px | — | → 1 colonne ≤900px |
| Limites | 2 | — | → 1 en mobile |
| Étymologie (about) | 2 | 80px | → 1 ≤900px |
| Pourquoi (about) | 3 | 0 | → 1 ≤900px |
| Comparaison (about) | 3 | — | → 1 ≤900px |
| Posture (about) | 2 | 0 | → 1 ≤640px |
| Équipe (about) | 280px + 1fr | 64px | → 1 ≤900px |

---

## 9. Ombres

| Élément | Ombre |
|---|---|
| Nav au scroll | `0 1px 16px rgba(0,0,0,0.07)` |
| Carte Offre au hover | `0 4px 24px rgba(0,0,0,0.06)` |
| Curseur range slider | `0 0 0 1.5px var(--black)` |

---

*Généré depuis le code source — kAIros. Conseil IA pour TPE/PME*

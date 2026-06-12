# Plan — Template Premium BTP & Entreprise de Construction

## Contexte
Création d'un template web premium pour les entreprises de Bâtiment et Travaux Publics (BTP) — artisants, entreprises générales, bureaux d'études structure, entreprises de génie civil. Basé sur les fichiers de référence uploadés : `sector-24-btp.md` et `24_btp_entreprise_construction.md`.

## Skill Principal
- `web-template-library` — Conception de templates sectoriels premium

## Phases d'Exécution

### Phase 1: Recherche & Analyse
- Lire les deux fichiers de référence fournis
- Comprendre le contexte métier BTP, les personas, les besoins
- Définir la structure des pages et les parcours utilisateurs

### Phase 2: Système de Design
- Créer la palette de couleurs : Orange BTP (#EA580C) + Gris béton (#6B7280) + Jaune sécurité (#FBBF24) + Blanc/Noir
- Définir la typographie : Geist Sans (titres) + Geist Mono (labels)
- Définir les espacements, grille responsive, composants réutilisables
- Créer le design system complet

### Phase 3: Génération des Assets Visuels
- Générer les images de chantier (hero, portfolio, équipes)
- Créer les icônes et éléments graphiques nécessaires
- Préparer les photos de team et portraits

### Phase 4: Développement React (Next.js + Tailwind)
- **Architecture** : Template React multi-pages avec routing
- **Pages publiques** :
  - Accueil (Hero réalisation + métiers + chiffres + références + CTA devis)
  - Nos Métiers (Gros œuvre, Second œuvre, Rénovation, Maintenance, Génie civil)
  - Réalisations (Portfolio filtrable par type)
  - Expertises (BIM, Sécurité, QSE)
  - Carrières (Métiers, recrutement, témoignages)
  - À Propos (Histoire, équipe, valeurs, chiffres)
  - Contact (Formulaire de devis, coordonnées)
- **Animations** : fade-up, scroll reveals, hover states
- **Responsive** : Desktop / Tablet / Mobile

### Phase 5: Optimisation & Déploiement
- SEO (meta tags, Schema.org LocalBusiness)
- Accessibilité WCAG AA
- Déploiement sur l'environnement de production

## Sous-Agents
| Agent | Rôle | Phase |
|-------|------|-------|
| BTP_DesignSystem | Crée le design system complet | Phase 2 |
| BTP_AssetGenerator | Génère toutes les images de chantier et assets | Phase 3 |
| BTP_Dev_Frontend | Développe le template React complet | Phase 4 |
| BTP_Optimizer | SEO, accessibilité, polish final | Phase 5 |

## Livrables
- Template React complet et fonctionnel
- Design system documenté
- Assets visuels générés
- Site déployé et accessible

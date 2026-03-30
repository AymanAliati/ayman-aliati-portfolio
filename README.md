# Documentation technique – Portfolio d’Ayman Aliati

Ce fichier décrit les projets référencés dans `src/components/Projects.tsx` ainsi que les éléments techniques nécessaires à leur compréhension. Toutes les informations proviennent du code et des métadonnées présentes dans ce dépôt.

---

## Portfolio Personnel
- **Titre exact** : Portfolio Personnel
- **Description complète** : Site portfolio moderne avec animations type Matrix, interface premium et navigation terminal, destiné à présenter les compétences et projets d’Ayman Aliati.
- **Liens disponibles** :
  - Démo : https://ayman-aliati-portfolio.vercel.app/
  - GitHub : https://github.com/AymanAliati/ayman-aliati-portfolio
- **Stack technique détaillée** :
  - Frontend : React 18, TypeScript, Vite, Tailwind CSS, Framer Motion, shadcn/ui (Radix UI), lucide-react, sonner, @tanstack/react-query, React Router DOM.
  - Backend : Non spécifié (SPA statique).
  - Base de données : Non spécifié.
  - APIs / services tiers : @vercel/analytics (télémétrie), toast sonner pour les retours utilisateur.
  - Déploiement / hébergement : Vercel (d’après l’URL de démonstration).
- **Architecture logicielle** : SPA React/TypeScript construite avec Vite, rendue côté client et servie comme site statique.
- **Fonctionnalités principales** :
  - Loader type “terminal” (`Loader.tsx`) piloté par un effet dactylographie avant le rendu de la page.
  - Fond animé Matrix en canvas (`MatrixBackground.tsx`) géré via `requestAnimationFrame`/`setInterval`.
  - Barre supérieure fixe (`TopBar.tsx`) avec navigation à défilement fluide et lancement d’un terminal overlay.
  - Section projets (`Projects.tsx`) avec carrousels d’images synchronisés et toasts informant des liens non disponibles.
  - Terminal interactif (`Terminal.tsx`) simulant des commandes (`help`, `projects`, `clear`, etc.) avec parsing minimaliste.
  - Formulaire de contact stylé “console” (`Contact.tsx`) incluant logs animés et collecte des champs requis.
- **Points techniques remarquables** :
  - Composition d’UI basée sur shadcn/ui et Radix pour maintenir accessibilité et thèmes cohérents.
  - Gestion centralisée des toasts (shadcn + sonner) et de la toolchain via QueryClientProvider, TooltipProvider et Vercel Analytics dans `App.tsx`.
  - Animations multiples (Framer Motion classes personnalisées, canvas matrix, carrousels contrôlés par `useEffect`) sans bibliothèques lourdes supplémentaires.
- **Structure du code** :
  ```
  src/
    main.tsx
    App.tsx
    pages/Index.tsx
    components/
      Loader.tsx
      MatrixBackground.tsx
      TopBar.tsx
      Projects.tsx
      Skills.tsx
      EducationTimeline.tsx
      Contact.tsx
      Terminal.tsx
      ui/… (bibliothèque de composants shadcn)
    hooks/
      use-mobile.tsx
      use-toast.ts
    lib/utils.ts
  public/ (assets statiques)
  ```

---

## SecureXplorer (Projet Binôme avec Houssam EL bouamraoui)
- **Titre exact** : SecureXplorer (Projet Binôme avec Houssam EL bouamraoui)
- **Description complète** : Outil d'analyse de sécurité permettant de détecter les vulnérabilités d’applications web et d’auditer leur niveau de sécurité.
- **Liens disponibles** :
  - Démo : Non spécifié (`#` dans le code).
  - GitHub : https://github.com/HoussamElBouamraoui/SecureXplorer
- **Stack technique détaillée** :
  - Frontend : HTML, CSS (d’après `tech`).
  - Backend : Python, PHP.
  - Base de données : MySQL.
  - APIs / services tiers : Non spécifié.
  - Déploiement / hébergement : Non spécifié.
- **Architecture logicielle** : Non spécifié.
- **Fonctionnalités principales** :
  - Détection des vulnérabilités web.
  - Audit de sécurité pour applications web.
- **Points techniques remarquables** :
  - Combinaison explicitement listée de Python, PHP et MySQL pour couvrir analyses et persistance.
- **Structure du code** : Non spécifié (le dépôt courant ne contient que les métadonnées du projet).

---

## Sahara Traveling
- **Titre exact** : Sahara Traveling
- **Description complète** : Plateforme de réservation de voyages avec interface utilisateur intuitive et système de gestion des réservations ciblant l’expérience tourisme désertique.
- **Liens disponibles** :
  - Démo : https://project-sahara-traveling.vercel.app/
  - GitHub : https://github.com/AymanAliati/PROJECT_Sahara_Traveling
- **Stack technique détaillée** :
  - Frontend : HTML, CSS, JavaScript.
  - Backend : Non spécifié.
  - Base de données : Non spécifié.
  - APIs / services tiers : Non spécifié.
  - Déploiement / hébergement : Vercel (URL de démonstration).
- **Architecture logicielle** : Non spécifié.
- **Fonctionnalités principales** :
  - Interface orientée réservation.
  - Gestion des réservations (informations présentes dans la description).
- **Points techniques remarquables** :
  - Conception responsive pure HTML/CSS/JS (stack listée).
- **Structure du code** : Non spécifié (projet non inclus dans ce dépôt).

---

## NOTEAI
- **Titre exact** : NOTEAI
- **Description complète** : Application de prise de notes intelligente avec recherche avancée et organisation automatique des contenus.
- **Liens disponibles** :
  - Démo : Non spécifié (`#`).
  - GitHub : https://github.com/AymanAliati/PROJECT-S1-GESTION_TRANSPORT
- **Stack technique détaillée** :
  - Frontend : HTML, CSS, JavaScript.
  - Backend : PHP.
  - Base de données : MySQL.
  - APIs / services tiers : Non spécifié.
  - Déploiement / hébergement : Non spécifié.
- **Architecture logicielle** : Application web PHP/MySQL avec interface HTML/JS (d’après la liste de technologies).
- **Fonctionnalités principales** :
  - Prise de notes intelligente.
  - Recherche avancée.
  - Organisation automatique.
- **Points techniques remarquables** :
  - Couplage PHP/MySQL pour la persistance des notes.
- **Structure du code** : Non spécifié (non présent dans ce dépôt).

---

## Gestion du Transport Scolaire
- **Titre exact** : Gestion du Transport Scolaire
- **Description complète** : Système de gestion du transport scolaire intégrant suivi en temps réel et interface d’administration.
- **Liens disponibles** :
  - Démo : https://aymanschool.atwebpages.com/
  - GitHub : Non spécifié (`#`).
- **Stack technique détaillée** :
  - Frontend : HTML, CSS, JavaScript.
  - Backend : Non spécifié.
  - Base de données : Non spécifié.
  - APIs / services tiers : Non spécifié.
  - Déploiement / hébergement : atwebpages.com (service AwardSpace).
- **Architecture logicielle** : Non spécifié.
- **Fonctionnalités principales** :
  - Suivi du transport en temps réel.
  - Interface d’administration.
- **Points techniques remarquables** :
  - Couverture de fonctionnalités temps réel malgré une stack front simple (information issue de la description).
- **Structure du code** : Non spécifié (projet externe).

---

## ProMailer | Script d'Envoi d'Email Professionnel
- **Titre exact** : ProMailer | Script d'Envoi d'Email Professionnel
- **Description complète** : Script Python d’automatisation de l’envoi d’emails professionnels, conçu pour envoyer des campagnes efficacement.
- **Liens disponibles** :
  - Démo : Non spécifié (`#`).
  - GitHub : https://github.com/AymanAliati/ProMailer
- **Stack technique détaillée** :
  - Frontend : Non spécifié (script CLI).
  - Backend : Python.
  - Base de données : Non spécifié.
  - APIs / services tiers : Non spécifié.
  - Déploiement / hébergement : Non spécifié.
- **Architecture logicielle** : Script Python autonome (aucune autre information fournie).
- **Fonctionnalités principales** :
  - Automatisation complète de l’envoi d’emails professionnels (mentionné dans la description).
- **Points techniques remarquables** :
  - Script entièrement Python pour industrialiser l’envoi d’emails (information issue du champ `tech` et de la description).
- **Structure du code** : Non spécifié (non présent dans ce dépôt).

---


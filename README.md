# 890 Restaurant — Site web

Site vitrine haut de gamme pour le **890 Restaurant**, cuisine sichuanaise authentique
et grillades — 40 Rue Alexandre Dumas, 75011 Paris.

Toutes les informations (adresse, téléphone, horaires, descriptif, chef, livraison) et
les **photos** sont reprises du site officiel [www.890restaurant.fr](https://www.890restaurant.fr).

## Fonctionnalités

- Page d'accueil immersive (héro plein écran, identité 890 / 八九零)
- Présentation du restaurant et du chef de Chengdu
- Plats emblématiques en vitrine (vrais visuels du restaurant)
- **Carte complète** par catégories, avec niveau de piment 🌶️ et options végé 🌱
- **Réservation en ligne** (formulaire connecté à un back-end qui enregistre les demandes)
- Horaires, accès, carte Google Maps, liens Uber Eats & Deliveroo
- Design responsive (mobile / tablette / desktop)

## Stack

- **client/** — React 18 + TypeScript + Vite (CSS sur-mesure, sans dépendance UI)
- **server/** — Node + Express (TypeScript). Les réservations sont stockées dans
  `server/data/reservations.json`.

## Démarrage

Dans deux terminaux séparés :

```bash
# 1) Back-end (port 4000)
cd server
npm install
npm run dev

# 2) Front-end (port 5173)
cd client
npm install
npm run dev
```

Puis ouvrir http://localhost:5173 — l'appel `/api` est automatiquement redirigé vers le
serveur via le proxy Vite.

### Consulter les réservations (admin)

```bash
curl -H "x-admin-token: 890-admin" http://localhost:4000/api/reservations
```

Le jeton se configure via la variable d'environnement `ADMIN_TOKEN`.

## Personnalisation

- **Carte / plats / prix** : `client/src/data/menu.ts`
- **Infos, horaires, contact, liens** : `client/src/data/info.ts`
- **Photos** : `client/public/images/`

> Les prix et certains plats de la carte sont **indicatifs** : la commande en ligne du
> site officiel étant fermée au moment de la conception, ils ont été établis à partir des
> plats signature réellement proposés par le restaurant et des classiques sichuanais.
> Ils se modifient en un seul fichier (`menu.ts`).

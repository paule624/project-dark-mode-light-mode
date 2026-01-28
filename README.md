# Pokémon Card Pricing Landing Page

Ce projet est une landing page dédiée à la consultation des prix des cartes Pokémon. Il s'agit d'un projet éducatif réalisé en **HTML, CSS et JavaScript natif (Vanilla JS)**, sans aucun framework ni dépendance externe.

Les données sont récupérées dynamiquement via l'API [TCGdex](https://tcgdex.dev/fr).

## Objectifs du Projet

- Créer une interface utilisateur (UI) propre et responsive.
- Implémenter un système de **Dark Mode / Light Mode**.
- Récupérer et afficher les données des cartes (images, noms, prix si disponibles) via l'API.
- Gérer la logique de présentation en JavaScript pur.

## Stack Technique

- **HTML5** : Structure sémantique de la page.
- **CSS3** : Mise en forme, Flexbox/Grid, variables CSS pour le _theming_ (Dark/Light).
- **JavaScript (Vanilla)** : Manipulation du DOM, appels API (`fetch`), gestion des événements.

## 📦 Structure et Workflow Git

Le projet suit ce flux de développement :

1.  **`development`** : Branche principale de développement. Toutes les nouvelles fonctionnalités (`feat/`) partent d'ici et y sont fusionnées.
2.  **`main`** : Branche stable. Reflète l'état validé du projet.
3.  **`gh-pages`** : Branche de production pour le déploiement statique.

## Installation et Lancement

1.  Cloner le dépôt :
    ```bash
    git clone https://github.com/paule624/project-dark-mode-light-mode.git
    ```
2.  Ouvrir le fichier `index.html` dans votre navigateur.

## API

Nous utilisons l'API publique TCGdex :

- Documentation : [https://tcgdex.dev/fr](https://tcgdex.dev/fr)



# Documentation : Structure de l'objet `pokedetails`

Ce document décrit les champs génériques accessibles dans l'objet de réponse (JSON) d'un Pokémon via l'API. Ces informations sont valables quel que soit le Pokémon interrogé.

## 1. Identité & Base
| Propriété | Type | Description |
| :--- | :--- | :--- |
| **`id`** | `Number` | L'identifiant unique du Pokémon dans la base de données. |
| **`name`** | `String` | Le nom technique du Pokémon (en minuscules, sans caractères spéciaux). |
| **`order`** | `Number` | L'ordre de tri utilisé pour l'affichage (proche de l'ordre du Pokédex National). |
| **`is_default`** | `Boolean` | Indique si c'est la forme par défaut du Pokémon (ex: `true` pour Carapuce, `false` pour Méga-Dracaufeu). |

## 2. Caractéristiques Physiques
| Propriété | Type | Unité / Note |
| :--- | :--- | :--- |
| **`height`** | `Number` | La taille du Pokémon en **décimètres** (diviser par 10 pour obtenir des mètres). |
| **`weight`** | `Number` | Le poids du Pokémon en **hectogrammes** (diviser par 10 pour obtenir des kilogrammes). |
| **`base_experience`** | `Number` | Le nombre de points d'expérience de base rapportés en le battant. |

## 3. Médias (Visuels & Audio)
| Propriété | Type | Description |
| :--- | :--- | :--- |
| **`sprites`** | `Object` | Contient les URLs des images (front_default, back_default, shiny, etc.). |
| **`cries`** | `Object` | Contient les URLs des fichiers audio `.ogg` (clés : `latest`, `legacy`). |

## 4. Données de Combat (Tableaux)
| Propriété | Type | Contenu |
| :--- | :--- | :--- |
| **`stats`** | `Array` | Liste des 6 statistiques de base (PV, Attaque, Défense, Atq. Spé, Déf. Spé
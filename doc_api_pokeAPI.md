# Documentation : Structure de l'objet `pokedetails`

Ce document décrit les champs génériques accessibles dans l'objet de réponse (JSON) d'un Pokémon via l'API. Ces informations sont valables quel que soit le Pokémon interrogé.

## 1. Identité & Base

| Propriété        | Type      | Description                                                                                              |
| :--------------- | :-------- | :------------------------------------------------------------------------------------------------------- |
| **`id`**         | `Number`  | L'identifiant unique du Pokémon dans la base de données.                                                 |
| **`name`**       | `String`  | Le nom technique du Pokémon (en minuscules, sans caractères spéciaux).                                   |
| **`order`**      | `Number`  | L'ordre de tri utilisé pour l'affichage (proche de l'ordre du Pokédex National).                         |
| **`is_default`** | `Boolean` | Indique si c'est la forme par défaut du Pokémon (ex: `true` pour Carapuce, `false` pour Méga-Dracaufeu). |

## 2. Caractéristiques Physiques

| Propriété             | Type     | Unité / Note                                                                           |
| :-------------------- | :------- | :------------------------------------------------------------------------------------- |
| **`height`**          | `Number` | La taille du Pokémon en **décimètres** (diviser par 10 pour obtenir des mètres).       |
| **`weight`**          | `Number` | Le poids du Pokémon en **hectogrammes** (diviser par 10 pour obtenir des kilogrammes). |
| **`base_experience`** | `Number` | Le nombre de points d'expérience de base rapportés en le battant.                      |

## 3. Médias (Visuels & Audio)

| Propriété     | Type     | Description                                                              |
| :------------ | :------- | :----------------------------------------------------------------------- |
| **`sprites`** | `Object` | Contient les URLs des images (front_default, back_default, shiny, etc.). |
| **`cries`**   | `Object` | Contient les URLs des fichiers audio `.ogg` (clés : `latest`, `legacy`). |

## 4. Données de Combat (Tableaux)

| Propriété   | Type    | Contenu                                                                     |
| :---------- | :------ | :-------------------------------------------------------------------------- |
| **`stats`** | `Array` | Liste des 6 statistiques de base (PV, Attaque, Défense, Atq. Spé, Déf. Spé) |

# Billpad - Plan Détaillé

## 1. Setup Technique

### 1.1 Environnement
- 1.1.1 Installer Node.js + VS Code + extensions
- 1.1.2 Créer projet Vite + React + TypeScript
- 1.1.3 Configurer Tailwind CSS + ESLint
- 1.1.4 Setup Git + GitHub

### 1.2 Architecture
- 1.2.1 Structure dossiers (src/, components/, services/, types/)
- 1.2.2 Interfaces TypeScript (Transaction, Category, Budget)
- 1.2.3 Service localStorage
- 1.2.4 Utils (formatage dates, montants, validation)

## 2. Import CSV

### 2.1 Parser CSV
- 2.1.1 Détection séparateurs (;, ,, tab)
- 2.1.2 Gestion encodage (UTF-8, ISO-8859-1)
- 2.1.3 Parsing robuste + gestion erreurs
- 2.1.4 Preview données avant import

### 2.2 Formats Bancaires
- 2.2.1 Crédit Agricole (mapping colonnes + parsing dates/montants)
- 2.2.2 BNP Paribas
- 2.2.3 LCL/Société Générale
- 2.2.4 Néo-banques (Revolut, N26)
- 2.2.5 Détection automatique format

### 2.3 Nettoyage Données
- 2.3.1 Suppression doublons
- 2.3.2 Normalisation libellés (espaces, caractères spéciaux)
- 2.3.3 Extraction nom marchand
- 2.3.4 Validation cohérence

## 3. Catégorisation IA

### 3.1 Base Mots-Clés
- 3.1.1 Alimentation (CARREFOUR, MCDO, BOULANGERIE...)
- 3.1.2 Transport (RATP, SNCF, TOTAL, UBER...)
- 3.1.3 Loisirs (NETFLIX, CINEMA, SPORT...)
- 3.1.4 Shopping, Santé, Logement

### 3.2 Algorithme
- 3.2.1 Recherche mots-clés exacts
- 3.2.2 Recherche similarité (Levenshtein)
- 3.2.3 Score de confiance
- 3.2.4 Apprentissage corrections utilisateur

### 3.3 Interface Validation
- 3.3.1 Écran "Carte d'identité dépense"
- 3.3.2 Boutons validation rapide
- 3.3.3 Option modification
- 3.3.4 Validation par lot

## 4. Interface Web

### 4.1 Design System
- 4.1.1 Palette couleurs (primary, semantic, catégories)
- 4.1.2 Typography (titres, texte, montants)
- 4.1.3 Composants base (Button, Input, Card, Modal)

### 4.2 Navigation
- 4.2.1 Header principal
- 4.2.2 Navigation responsive (sidebar desktop, bottom mobile)
- 4.2.3 Layout adaptatif

### 4.3 Pages Principales
- 4.3.1 Dashboard
  - 4.3.1.1 Résumé mois en cours
  - 4.3.1.2 Dernières dépenses (5)
  - 4.3.1.3 Alertes importantes
  - 4.3.1.4 Actions rapides
- 4.3.2 Page Import (zone drop CSV + preview)
- 4.3.3 Page Transactions (liste + filtres + recherche)
- 4.3.4 Page Rapports (graphiques + insights)

## 5. Rapports "Temps d'Écran"

### 5.1 Calculs
- 5.1.1 Agrégations par période (jour/semaine/mois)
- 5.1.2 Comparaisons périodes précédentes
- 5.1.3 Répartition par catégorie
- 5.1.4 Patterns temporels

### 5.2 Interface Rapports
- 5.2.1 Vue Quotidienne ("Aujourd'hui : 23€")
- 5.2.2 Vue Hebdomadaire ("Cette semaine : 156€ (+12%)")
- 5.2.3 Vue Mensuelle ("Ce mois : 680€ + breakdown")

### 5.3 Graphiques
- 5.3.1 Intégration Chart.js
- 5.3.2 Barres (évolution temporelle)
- 5.3.3 Camembert (répartition catégories)
- 5.3.4 Lignes (tendances)

## 6. Système d'Alertes

### 6.1 Détection Patterns
- 6.1.1 Dépenses répétées même jour
- 6.1.2 Catégorie excessive vs moyenne
- 6.1.3 Accumulation micro-dépenses

### 6.2 Messages
- 6.2.1 Ton bienveillant et informatif
- 6.2.2 Exemples : "3ème café = 9€", "40% plus le vendredi"
- 6.2.3 Actionnable et personnalisé

### 6.3 Interface
- 6.3.1 Notifications in-app
- 6.3.2 Badges dashboard
- 6.3.3 Section alertes dédiée

## 7. Version Mobile

### 7.1 Setup React Native
- 7.1.1 Installation Expo CLI
- 7.1.2 Projet TypeScript + React Navigation
- 7.1.3 Configuration testing mobile

### 7.2 Adaptation
- 7.2.1 Migration composants web → mobile
- 7.2.2 localStorage → AsyncStorage
- 7.2.3 Navigation mobile (Tab + Stack)
- 7.2.4 UX mobile (tailles touch, gestures)

### 7.3 Features Mobiles
- 7.3.1 Notifications push locales
- 7.3.2 Haptic feedback
- 7.3.3 Import fichier mobile
- 7.3.4 Mode offline

## 8. Authentification

### 8.1 Système Auth
- 8.1.1 Inscription (email + mot de passe fort)
- 8.1.2 Connexion + remember me
- 8.1.3 Sessions JWT + refresh tokens
- 8.1.4 Reset mot de passe

### 8.2 Sécurité
- 8.2.1 Chiffrement données sensibles
- 8.2.2 Validation côté serveur
- 8.2.3 Protection CSRF + rate limiting

## 9. Backend & API

### 9.1 Setup
- 9.1.1 Node.js + Express + TypeScript
- 9.1.2 PostgreSQL + Prisma ORM
- 9.1.3 Configuration environnements

### 9.2 Endpoints
- 9.2.1 Auth (/auth/register, /login, /refresh)
- 9.2.2 Transactions (CRUD complet)
- 9.2.3 Catégories + Rapports

### 9.3 Sync
- 9.3.1 Online/offline sync
- 9.3.2 Gestion conflits
- 9.3.3 Cache intelligent

## 10. Déploiement

### 10.1 Web
- 10.1.1 Build production optimisé
- 10.1.2 Déploiement Vercel/Netlify
- 10.1.3 Domaine + HTTPS + monitoring

### 10.2 Mobile
- 10.2.1 Expo EAS build
- 10.2.2 Android (APK/AAB) + iOS (IPA)
- 10.2.3 Tests devices réels

### 10.3 Stores
- 10.3.1 Assets (icônes + screenshots)
- 10.3.2 Métadonnées + descriptions
- 10.3.3 Soumission Google Play + App Store

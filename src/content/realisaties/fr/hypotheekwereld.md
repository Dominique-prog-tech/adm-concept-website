---
title: "Hypotheekwereld — Intégration BLUE via CreditSoft"
customer: "Hypotheekwereld"
sector: "Intermédiation en crédit"
platform: "CreditSoft"
year: "2026"
summary: "CreditSoft étendu avec un couplage fluide vers BLUE, la plateforme hypothécaire des banques, pour que les dossiers soient automatiquement transférés sans double encodage."
heroImage: "/images/tech-laptop.jpg"
technologies:
  - CreditSoft
  - BLUE API
  - Workflow multi-banques
  - Calcul de commissions
featured: true
order: 3
lang: "fr"
draft: true
---

Hypotheekwereld travaille quotidiennement avec des dossiers de crédit qui arrivent à la fois dans **BLUE** (la plateforme bancaire pour les demandes hypothécaires) et dans leur propre système administratif. Auparavant, cela signifiait un double encodage pour chaque dossier. ADM-Concept a donc développé une intégration entre **CreditSoft** et BLUE qui réunit les deux mondes dans un seul flux de travail.

## Le défi

Pour chaque demande de crédit, les courtiers de Hypotheekwereld devaient encoder deux fois les mêmes données :
- Une fois dans BLUE pour soumettre la demande à plusieurs banques
- Une seconde fois dans leur gestion de dossiers pour le suivi, les commissions et l'archivage

Le résultat : du travail en plus, le risque d'écarts entre les deux systèmes et aucune vue centralisée.

## Notre approche

ADM-Concept a développé un couplage bidirectionnel entre CreditSoft et BLUE :

### Création de dossier depuis une seule source
Les courtiers créent un dossier dans CreditSoft. En un clic, les données sont envoyées via API vers BLUE pour la soumission multi-banques — pas de second encodage.

### Synchronisation statuts et décisions
Les réponses bancaires (décisions, questions, contre-propositions) reviennent automatiquement dans CreditSoft par dossier — sans que le courtier doive garder BLUE ouvert.

### Transfert des commissions
Les commissions des dossiers acceptés sont calculées automatiquement selon le barème CreditSoft par banque et par intermédiaire. Hypotheekwereld peut tenir son suivi du chiffre d'affaires et des commissions dans un seul système.

### Flux documentaire
Les documents échangés dans BLUE arrivent automatiquement dans le dossier CreditSoft — pour la conformité, l'audit et le self-service.

## Le résultat

- **Plus de double encodage** pour les dossiers de crédit
- **Vision statut en temps réel** dans CreditSoft, sans devoir garder BLUE ouvert
- **Délai de traitement plus court** par dossier
- **Historique complet des commissions** dans un seul système
- **Sécurité de conformité** grâce aux documents synchronisés

## Ce que nous en avons retenu

Les intégrations avec des plateformes bancaires comme BLUE exigent de l'attention pour les **cas particuliers** : dossiers modifiés, demandes retirées, décisions partielles. Ce qui aide est une plateforme comme CreditSoft qui est naturellement construite autour du flux de crédit — la couche d'intégration devient alors une extension, pas une refonte.

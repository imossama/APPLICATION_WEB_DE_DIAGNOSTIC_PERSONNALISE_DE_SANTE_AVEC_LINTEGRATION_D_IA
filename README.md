# Cahier des charges - Application web santéia

### Introduction
Ce document décrit les spécifications fonctionnelles et non fonctionnelles de l'application web santéia. Cette application permettra aux utilisateurs de différents domaines d'évaluer leur santé mentale et physique à travers des questionnaires générés par une Intelligence Artificielle (IA), et de recevoir un diagnostic personnalisé en fonction de leurs réponses.

### Spécifications fonctionnelles

#### Outils utilisés

##### React
React est une bibliothèque JavaScript open-source utilisée pour construire des interfaces utilisateur, en particulier des interfaces utilisateur pour les applications web. Voici quelques points clés sur l'utilisation de React dans notre projet :
- **Composants réutilisables**: React permet de créer des composants réutilisables, ce qui facilite la construction d'une interface utilisateur modulaire et extensible.
- **Virtual DOM**: React utilise un Virtual DOM pour améliorer les performances en minimisant les manipulations directes du DOM.
- **Écosystème robuste**: React est soutenu par un écosystème de bibliothèques et d'outils (comme Redux pour la gestion de l'état) qui facilitent le développement d'applications complexes.

##### Flask
Flask est un framework web léger écrit en Python. Il est principalement utilisé pour construire des API web. Voici comment nous utiliserons Flask dans notre projet :
- **API RESTful**: Flask permet de créer facilement des API RESTful, ce qui sera utilisé pour la communication entre le frontend et le backend de notre application.
- **Extensibilité**: Flask est hautement extensible grâce à son architecture modulaire. Nous pourrons facilement intégrer de nouvelles fonctionnalités ou des extensions tierces selon les besoins du projet.
- **Facilité d'apprentissage**: Flask est connu pour sa courbe d'apprentissage douce, ce qui le rend idéal pour les petits et moyens projets où la simplicité et la flexibilité sont importantes.

##### MongoDB
MongoDB est une base de données NoSQL, orientée document, conçue pour le développement et le déploiement d'applications hautement évolutives. Voici comment nous l'utiliserons dans notre projet :
- **Stockage flexible des données**: MongoDB stocke les données au format JSON-like, ce qui permet une flexibilité maximale dans la modélisation des données.
- **Scalabilité horizontale**: MongoDB est conçu pour être hautement évolutif, ce qui signifie que nous pourrons facilement faire évoluer notre application pour gérer un volume croissant de données et de trafic.
- **Haute disponibilité**: MongoDB offre des fonctionnalités de réplication et de tolérance aux pannes pour assurer une disponibilité élevée de nos données.

##### GeminiAI API
GeminiAI est une API qui utilise l'intelligence artificielle pour l'analyse de texte. Nous utiliserons cette API pour la génération et l'analyse des réponses des utilisateurs aux questionnaires et la génération de diagnostics personnalisés. Voici quelques points importants :
- **Analyse sémantique**: GeminiAI utilise des techniques d'analyse sémantique avancées pour comprendre le sens des textes fournis en entrée.
- **Modèle de langage pré-entraîné**: L'API dispose d'un modèle de langage pré-entraîné qui peut être adapté à nos besoins spécifiques pour une analyse précise des réponses des utilisateurs.
- **Facilité d'intégration**: GeminiAI offre une API simple et bien documentée, ce qui facilitera son intégration avec notre application.

#### Authentification
- Les utilisateurs doivent pouvoir s'inscrire et se connecter à l'application.

#### Questionnaires
- Les questionnaires doivent être générés dynamiquement en fonction des besoins de l'utilisateur.
- Les questions seront présentées de manière interactive et conviviale grâce à React.

#### Analyse des réponses
- Les réponses aux questionnaires seront envoyées au backend Flask pour analyse.
- L'IA sera intégrée à l'aide de l'API GeminiAI pour analyser les réponses et générer un diagnostic.

#### Diagnostic personnalisé
- Le diagnostic généré par l'IA sera retourné au frontend et présenté à l'utilisateur de manière claire et compréhensible.
- Des recommandations spécifiques seront fournies en fonction du diagnostic.

#### Interface utilisateur
- L'interface utilisateur sera développée à l'aide de React pour offrir une expérience utilisateur intuitive et interactive.
- Les questionnaires, le diagnostic et les recommandations seront présentés de manière attrayante et conviviale.

### Spécifications non fonctionnelles

#### Confidentialité des données
- Toutes les données des utilisateurs seront stockées de manière sécurisée dans MongoDB.
- Les données personnelles seront cryptées avant d'être stockées.

#### Sécurité
- Les communications entre le frontend et le backend seront sécurisées à l'aide de HTTPS.
- Les données sensibles transmises entre les composants seront chiffrées.

#### Performances
- L'application sera conçue pour gérer un grand nombre d'utilisateurs simultanément grâce à l'évolutivité offerte par React et Flask.
- Les temps de réponse seront optimisés pour assurer une expérience utilisateur fluide.

#### Extensibilité
- L'architecture de l'application sera modulaire et extensible pour permettre l'ajout de nouvelles fonctionnalités à l'avenir.
- Les mises à jour et les corrections de bugs pourront être déployées facilement sans perturber le fonctionnement de l'application.

### Conclusion
En respectant les spécifications fonctionnelles et non fonctionnelles décrites dans ce document, l'application web santéia pourra offrir une expérience utilisateur robuste, sécurisée et efficace. L'utilisation de React, Flask, MongoDB et l'API GeminiAI permettra de développer une application moderne et performante, répondant aux besoins des utilisateurs en matière d'évaluation de leur santé mentale et physique.

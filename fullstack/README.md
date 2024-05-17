# Guide d'utilisation de l'application web santéia

Pour utiliser l'application web santéia, vous n'aurez pas besoin de saisir des commandes directement dans un terminal comme vous le feriez avec une application en ligne de commande. Cependant, voici quelques commandes générales que vous pourriez rencontrer lors du déploiement ou de la configuration de l'application :

### Commandes pour le Backend Flask :
1. **Installation des dépendances Python** :
   ```bash
   pip install -r requirements.txt
   ```

2. **Démarrage du serveur Flask en mode développement** :
   ```bash
   flask run
   ```

3. **Création d'une base de données MongoDB locale** :
   ```bash
   mongod --dbpath /path/to/database
   ```

### Commandes pour le Frontend React :
1. **Installation des dépendances Node.js** :
   ```bash
   npm install
   ```

2. **Démarrage de l'application React en mode développement** :
   ```bash
   npm start
   ```

### Commandes pour la Gestion de Versionnement (Git) :
1. **Clonage du dépôt Git** :
   ```bash
   git clone <URL_du_dépôt>
   ```

2. **Ajout des fichiers modifiés au suivi de Git** :
   ```bash
   git add .
   ```

3. **Validation des changements avec un message de commit** :
   ```bash
   git commit -m "Message de commit"
   ```

4. **Pousser les changements vers le dépôt distant (GitHub, GitLab, etc.)** :
   ```bash
   git push origin <nom_de_la_branche>
   ```

5. **Mise à jour du dépôt local avec les changements du dépôt distant** :
   ```bash
   git pull origin <nom_de_la_branche>
   ```

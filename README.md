# Projet 11

### Argent Bank - Implémentez le front-end d'une application bancaire avec React

Ce dépot contient le code du projet 11 de ma formation d'Intégrateur Web.

## Lancement du projet

Cloner le dépôt:

```bash
git clone https://github.com/kosmik7/oc-projet-11.git
cd oc-projet-11
```

### Lancement du Backend

Le backend utilise le tech stack suivant:

- [Node.js v12](https://nodejs.org/en/)
- [MongoDB Community Server](https://www.mongodb.com/try/download/community)

MongoDB doit etre en cours d'éxécution.<br>
Exemple pour lancer rapidement MongoDB sous linux/wsl:

```bash
sudo mongod --dbpath ~/data/db
```

Dans le répertoire /backend, vous pouvez exécuter:

```bash
# Installe la version de node.js spécifiée dans le fichier /backend/.nvmrc.
nvm install

# Installe les dépendances du backend.
npm install

# Exécute le serveur local de développement.
npm run dev:server

# Ajoute deux utilisateurs à la base de données mongoDB.
npm run populate-db
```

Pour plus d'informations, voir le fichier README.md spécifique au backend dans le dossier /backend

### Lancement du frontend

Le frontend utilise le tech stack suivant:

- [Node.js v18](https://nodejs.org/en/)

Dans le répertoire /frontend, vous pouvez exécuter:

```bash
# Installe la version de node spécifiée dans le fichier /frontend/.nvmrc.
nvm install

# Installe les dépendances du frontend.
npm install

# Exécute l'application en mode développement.
# Ouvrez http://localhost:3000 pour l'afficher dans votre navigateur.
npm start
```

Pour plus d'informations, voir le fichier README.md spécifique au frontend dans le dossier /frontend

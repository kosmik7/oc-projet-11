# Projet 11: Implémentez le front-end d'une application bancaire avec React

Argent Bank

## Lancement du projet

Pour plus d'informations, voir les fichiers README.md du /backend et du /frontend dans leurs dossier respectifs.

## Lancement du backend

Le backend utilise le tech stack suivant :

- [Node.js v12](https://nodejs.org/en/)
- [MongoDB Community Server](https://www.mongodb.com/try/download/community)

MongoDB doit etre en cours d'éxécution pour le backend.

Exemple pour lancer rapidement MongoDB sous linux :

```bash
sudo mongod --dbpath ~/data/db
```

### Dans le répertoire /backend, vous pouvez exécuter:

```bash
# Installe la version de node spécifiée dans le fichier /backend/.nvmrc.
nvm use

# Installe toutes les dépendances du backend.
npm install

# Exécute le serveur local de développement.
npm run dev:server

# Ajoute deux utilisateurs à la base de données mongoDB.
npm run populate-db
```

## Lancement du frontend

Le frontend utilise le tech stack suivant :

- [Node.js v18](https://nodejs.org/en/)

### Dans le répertoire /frontend, vous pouvez exécuter:

```bash
# Installe la version de node spécifiée dans le fichier /frontend/.nvmrc.
nvm use

# Installe toutes les dépendances du frontend.
npm install

# Exécute l'application en mode développement.
# Ouvrez http://localhost:3000 pour l'afficher dans votre navigateur.
# La page se rechargera lorsque vous apporterez des modifications.
npm start
```

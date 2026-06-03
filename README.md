# Bot Discord Pierre Feuille Ciseaux ✂️

Base de création d'un bot discord 

---

# Installation

1. Créer l'application Discord

Rends-toi sur le portail développeur Discord :

Discord Developer Portal

Clique sur New Application
Donne un nom à ton bot
Va dans Bot
Clique sur Add Bot
Copie le Token (ne le partage jamais)

2. Inviter le bot sur ton serveur

Dans OAuth2 > URL Generator :

Coche bot
Coche éventuellement applications.commands
Sélectionne les permissions nécessaires
Ouvre l'URL générée et invite le bot sur ton serveur

3. Installer les dépendances
```bash
npm install
```

Completter le fichier .env :

DISCORD_TOKEN=votre_token
CLIENT_ID=id_application
GUILD_ID=id_serveur

Ne jamais mettre le token directement dans le code source. Discord invalide rapidement les tokens exposés publiquement.

4. Lancer le bot
```bash
node index.js
```

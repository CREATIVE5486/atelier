# Atelier

Le guide complet, pas à pas, est dans le document « Atelier : guide d'installation pas à pas ».

Résumé :
1. Créer un dépôt GitHub public `atelier`, y envoyer tous ces fichiers, activer Settings > Pages (branche main, root).
2. Firebase : projet, Authentication email/mot de passe (+ ton utilisateur, inscriptions désactivées),
   Firestore (mode production) avec les règles de `firestore.rules`, puis app Web pour récupérer les clés.
3. (Facultatif) Azure / Entra : inscription d'app « Comptes Microsoft personnels uniquement »,
   URI de redirection SPA = l'adresse GitHub Pages exacte avec le / final.
4. Remplir `config.js` (le seul fichier à modifier), directement sur GitHub.
5. Installer l'app depuis Chrome (Android/PC) ou Safari (iPhone).

Mise à jour : renvoyer tous les fichiers SAUF `config.js`.

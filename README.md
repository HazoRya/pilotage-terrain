# Pilotage Terrain — vitrine GitHub Pages

Site vitrine statique pour présenter le kit Excel de suivi des commandes, livraisons, installations et SAV.

## Avant l’ouverture des ventes

Dans `site/site-config.js` :

- renseignez `priceText` avec le prix que vous aurez choisi, par exemple `29 €` ;
- renseignez `checkoutUrl` avec le lien HTTPS de votre page de paiement hébergée.

Quand le lien est valide, le bouton « Obtenir le kit » ouvre la page de paiement. Sans lien, le bouton reste désactivé et la page affiche que les ventes ouvrent prochainement.

Ne placez pas le fichier Excel payant dans ce dépôt public : tout fichier ajouté au site peut être téléchargé par les visiteurs. Après paiement, fournissez le classeur depuis votre service de vente ou un espace de téléchargement contrôlé.

## Déploiement sur GitHub Pages

Le workflow `.github/workflows/pages.yml` publie le contenu de `site/` automatiquement à chaque envoi sur la branche `main`.

1. Créez un dépôt GitHub pour ce site et envoyez-y les fichiers de ce dossier.
2. Dans le dépôt, ouvrez **Settings → Pages**.
3. Dans **Build and deployment**, choisissez **GitHub Actions** comme source.
4. Après l’envoi sur `main`, suivez le workflow dans l’onglet **Actions** ; l’adresse publiée apparaîtra dans le déploiement GitHub Pages.

GitHub Pages publie les fichiers du site sur Internet. N’ajoutez pas de données client, mots de passe, clés secrètes ou fichier de vente dans ce dépôt.

## Aperçu local

Ouvrez `site/index.html` dans un navigateur. Le site n’utilise pas de dépendance JavaScript externe.

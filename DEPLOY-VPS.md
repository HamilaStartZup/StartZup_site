# Guide de déploiement sur VPS OVH

## Problème identifié

Les variables d'environnement `VITE_*` sont injectées **au moment du build**, pas au runtime. Si le build a été fait sans la variable, elle ne sera pas dans le code compilé.

## Solution : Build avec la variable d'environnement

### Option 1 : Utiliser le script de déploiement

1. **Sur votre VPS, clonez le dépôt :**
```bash
git clone https://github.com/dahmane7/start-zup.git
cd start-zup
```

2. **Rendez le script exécutable :**
```bash
chmod +x deploy-vps.sh
```

3. **Exportez la variable d'environnement et lancez le script :**
```bash
export VITE_AIRTABLE_API_KEY='VOTRE_CLE_API_AIRTABLE_ICI'
./deploy-vps.sh
```

### Option 2 : Créer un fichier .env.production

1. **Créez le fichier `.env.production` sur le VPS :**
```bash
echo "VITE_AIRTABLE_API_KEY=VOTRE_CLE_API_AIRTABLE_ICI" > .env.production
```

2. **Build l'application :**
```bash
npm install
npm run build
```

### Option 3 : Build en une ligne

```bash
VITE_AIRTABLE_API_KEY='VOTRE_CLE_API_AIRTABLE_ICI' npm run build
```

## Configuration du serveur web

### Avec Nginx

1. **Créez la configuration :**
```bash
sudo nano /etc/nginx/sites-available/start-zup
```

2. **Ajoutez cette configuration :**
```nginx
server {
    listen 80;
    server_name votre-domaine.com;
    root /chemin/vers/votre/projet/dist;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }
}
```

3. **Activez le site :**
```bash
sudo ln -s /etc/nginx/sites-available/start-zup /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl reload nginx
```

### Avec Apache

1. **Créez un fichier `.htaccess` dans le dossier `dist/` :**
```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>
```

## Vérification

Après le déploiement, testez un formulaire et vérifiez dans la console du navigateur (F12) :
- Si vous voyez l'erreur "Clé API Airtable manquante", le build n'a pas été fait avec la variable
- Si vous voyez une erreur 401, vérifiez que la clé API est correcte

## Important

⚠️ **À chaque modification du code, vous devez rebuilder avec la variable d'environnement !**


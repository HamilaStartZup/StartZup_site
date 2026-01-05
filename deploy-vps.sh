#!/bin/bash

# Script de déploiement pour VPS OVH
# Ce script build l'application avec les variables d'environnement

echo "🚀 Déploiement sur VPS OVH..."

# Vérifier que la clé API est définie
if [ -z "$VITE_AIRTABLE_API_KEY" ]; then
    echo "❌ Erreur: VITE_AIRTABLE_API_KEY n'est pas définie"
    echo "💡 Exportez la variable avant de lancer le script:"
    echo "   export VITE_AIRTABLE_API_KEY='votre_cle_api'"
    exit 1
fi

echo "✅ Variable d'environnement détectée"

# Installer les dépendances si nécessaire
if [ ! -d "node_modules" ]; then
    echo "📦 Installation des dépendances..."
    npm install
fi

# Build l'application avec la variable d'environnement
echo "🔨 Build de l'application..."
npm run build

if [ $? -eq 0 ]; then
    echo "✅ Build réussi!"
    echo "📁 Les fichiers sont dans le dossier 'dist/'"
    echo "💡 Vous pouvez maintenant servir le dossier 'dist/' avec nginx ou apache"
else
    echo "❌ Erreur lors du build"
    exit 1
fi


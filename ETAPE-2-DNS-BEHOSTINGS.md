# 🎯 ÉTAPE 2 : Configurer les DNS sur BEHostings

## ✅ VOUS AVEZ FAIT L'ÉTAPE 1 - Parfait !

Vercel vous a donné les DNS records à configurer.

---

## 🔧 MAINTENANT : Aller sur BEHostings

### 1️⃣ Connexion BEHostings
1. Allez sur https://www.behostings.net
2. Connectez-vous à votre compte
3. Cliquez sur **"Mes domaines"**
4. Cliquez sur **"cles-auto-liege.be"**

### 2️⃣ Trouver la Zone DNS
Cherchez un bouton qui dit:
- **"Gestion DNS"** ou
- **"Zone DNS"** ou
- **"DNS Records"** ou
- **"Gérer DNS"**

Cliquez dessus.

---

## 📋 CONFIGURER LES 2 DNS RECORDS

### ⚠️ IMPORTANT : Supprimez d'abord les anciens !

Si vous voyez déjà des enregistrements A ou CNAME pour **@** ou **www**, **SUPPRIMEZ-LES** avant d'ajouter les nouveaux !

---

### Enregistrement #1 : DOMAINE PRINCIPAL

Cliquez sur **"Ajouter un enregistrement"** ou **"Add Record"**

```
Type: A
Nom/Host/Name: @ (ou laissez vide, ou tapez "cles-auto-liege.be")
Valeur/Value/Pointe vers: 216.198.79.1
TTL: 3600 (ou laissez par défaut)
```

**⚠️ IMPORTANT :** L'adresse IP est **216.198.79.1** (celle que Vercel vous a donnée)

Cliquez sur **"Enregistrer"** ou **"Save"**

---

### Enregistrement #2 : WWW

Cliquez encore sur **"Ajouter un enregistrement"**

```
Type: CNAME
Nom/Host/Name: www
Valeur/Value/Pointe vers: c13bd7b4d6efe587.vercel-dns-017.com
TTL: 3600 (ou laissez par défaut)
```

**⚠️ IMPORTANT :** Le CNAME est **c13bd7b4d6efe587.vercel-dns-017.com** (celui que Vercel vous a donné)

Cliquez sur **"Enregistrer"** ou **"Save"**

---

## ✅ VALIDATION

Vous devriez maintenant voir dans votre Zone DNS :

```
Type    Nom     Valeur
─────────────────────────────────────────
A       @       216.198.79.1
CNAME   www     c13bd7b4d6efe587.vercel-dns-017.com
```

---

## ⏱️ ÉTAPE 3 : ATTENDRE (15-30 minutes)

### Que se passe-t-il maintenant ?

1. **Propagation DNS** : Les serveurs DNS dans le monde se mettent à jour (15-30 min)
2. **Vercel vérifie** : Vercel attend que les DNS soient visibles
3. **SSL généré** : Vercel crée automatiquement le certificat SSL HTTPS

### Pendant ce temps, vous pouvez :
- ☕ Prendre un café
- 📧 Préparer votre email de lancement
- 📱 Préparer vos posts réseaux sociaux

---

## 🔍 VÉRIFIER LA PROPAGATION

Après 15-20 minutes, vérifiez si ça marche :

### Option 1 : Site web (le plus simple)
Allez sur : https://dnschecker.org/
- Tapez : `cles-auto-liege.be`
- Cliquez sur **"Search"**
- Si vous voyez `216.198.79.1` partout → ✅ C'est bon !

### Option 2 : Terminal (pour les experts)
```bash
nslookup cles-auto-liege.be
```

Devrait afficher : `216.198.79.1`

---

## 🎯 ÉTAPE 4 : RETOUR SUR VERCEL

### Après 15-30 minutes :

1. Retournez sur Vercel
2. Allez dans votre projet **cles-auto-liege-v3**
3. **Settings** → **Domains**
4. Cliquez sur le bouton **"Refresh"** (🔄) à côté de chaque domaine
5. Si tout est bon, vous verrez :
   - ✅ `cles-auto-liege.be` → **Valid Configuration**
   - ✅ `www.cles-auto-liege.be` → **Valid Configuration**

---

## 🔐 SSL AUTOMATIQUE

Une fois que Vercel affiche "Valid Configuration" :
- **Automatiquement**, Vercel génère un certificat SSL (5-10 min)
- Votre site sera accessible en **HTTPS** avec le cadenas 🔒
- Renouvellement automatique tous les 90 jours

---

## 🎉 TESTER VOTRE SITE

Une fois le SSL actif, testez :

```
✅ https://cles-auto-liege.be
✅ https://www.cles-auto-liege.be (redirige vers cles-auto-liege.be)
✅ http://cles-auto-liege.be (redirige vers https://)
```

---

## ⚙️ ÉTAPE 5 : VARIABLE D'ENVIRONNEMENT (Important !)

### Dans Vercel Dashboard :

1. **Settings** → **Environment Variables**
2. Cherchez `NEXT_PUBLIC_SITE_URL`
3. Si elle existe, modifiez-la, sinon ajoutez-la :

```
Name: NEXT_PUBLIC_SITE_URL
Value: https://cles-auto-liege.be
Scope: Production ✅  Preview ✅  Development ✅
```

4. Cliquez sur **"Save"**

### Re-déployer l'application :

1. Allez dans **Deployments**
2. Cliquez sur les **"..."** du dernier déploiement
3. Cliquez sur **"Redeploy"**
4. Attendez 2-3 minutes

**OU** depuis votre ordinateur :
```bash
cd /Users/Wadie/IdeaProjects/ClesAutoLiegeV3
git commit --allow-empty -m "Update domain to cles-auto-liege.be"
git push
```

---

## 🏆 DÉFINIR LE DOMAINE PRINCIPAL

Pour que `cles-auto-liege.be` soit votre domaine principal :

1. **Settings** → **Domains**
2. À côté de `cles-auto-liege.be`, cliquez sur les **"..."**
3. Cliquez sur **"Set as Primary"**

Cela redirigera automatiquement :
- `www.cles-auto-liege.be` → `cles-auto-liege.be`
- `cles-auto-liege-v3.vercel.app` → `cles-auto-liege.be`

---

## ✅ CHECKLIST FINALE

- [x] Domaine ajouté dans Vercel ✅
- [ ] DNS configurés sur BEHostings
  - [ ] Enregistrement A (@ → 216.198.79.1)
  - [ ] Enregistrement CNAME (www → c13bd7b4d6efe587.vercel-dns-017.com)
- [ ] Attendu 15-30 minutes
- [ ] Vérifié la propagation DNS
- [ ] Cliqué "Refresh" dans Vercel
- [ ] "Valid Configuration" affiché ✅
- [ ] SSL actif (cadenas 🔒)
- [ ] Variable NEXT_PUBLIC_SITE_URL mise à jour
- [ ] Application re-déployée
- [ ] Domaine défini comme "Primary"
- [ ] Site accessible sur https://cles-auto-liege.be

---

## ❗ PROBLÈMES ?

### "Invalid Configuration" dans Vercel après 2 heures
1. Vérifiez que vous avez bien entré les DNS sur BEHostings
2. Vérifiez sur https://dnschecker.org/
3. Attendez encore 1 heure (parfois c'est plus long)
4. Contactez le support BEHostings si besoin

### Le site ne s'affiche pas
1. Videz le cache du navigateur (Ctrl+Shift+R)
2. Essayez en navigation privée
3. Attendez encore 30 minutes

### Support
- **Vercel** : https://vercel.com/support
- **BEHostings** : support@behostings.net

---

**📱 BESOIN D'AIDE ?**
Si vous êtes bloqué, prenez une capture d'écran de votre zone DNS sur BEHostings et contactez-moi !

**🎉 Une fois terminé, votre site sera live sur https://cles-auto-liege.be !**

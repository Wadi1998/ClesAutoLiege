# 🌐 Configuration Domaine cles-auto-liege.be → Vercel

## 📋 CE QUE VOUS AVEZ
- ✅ Domaine: **cles-auto-liege.be** (acheté chez BEHostings)
- ✅ App Vercel: **cles-auto-liege-v3.vercel.app**
- ✅ Hébergeur DNS: **BEHostings** (ns1.behostings.net / ns2.behostings.net)

---

## 🎯 ÉTAPE 1: AJOUTER LE DOMAINE DANS VERCEL

### 1.1 Dans Vercel Dashboard
1. Allez sur votre projet: **cles-auto-liege-v3**
2. Cliquez sur **Settings** (en haut)
3. Dans le menu de gauche, cliquez sur **Domains**
4. Cliquez sur **Add** ou **Buy**
5. Tapez: `cles-auto-liege.be`
6. Cliquez sur **Add**

### 1.2 Vercel va vous demander de choisir
- **Option recommandée**: Ajouter `cles-auto-liege.be` et `www.cles-auto-liege.be`
- Cochez les deux cases
- Cliquez sur **Add**

### 1.3 Vercel va vous afficher les DNS Records à configurer
**Notez-les bien** (ils ressembleront à ça):

```
Type: A
Name: @
Value: 76.76.21.21

Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

---

## 🔧 ÉTAPE 2: CONFIGURER LES DNS CHEZ BEHOSTINGS

### 2.1 Connexion BEHostings
1. Connectez-vous sur https://www.behostings.net
2. Allez dans **Mes domaines**
3. Cliquez sur **cles-auto-liege.be**
4. Cliquez sur **Gestion DNS** ou **Zone DNS**

### 2.2 Configuration DNS à faire

**IMPORTANT**: Supprimez d'abord les anciens enregistrements A et CNAME existants pour @ et www

#### Enregistrement 1: Domaine Principal
```
Type: A
Nom/Host: @ (ou laissez vide ou "cles-auto-liege.be")
Valeur/Pointe vers: 76.76.21.21
TTL: 3600 (ou Auto)
```

#### Enregistrement 2: Sous-domaine WWW
```
Type: CNAME
Nom/Host: www
Valeur/Pointe vers: cname.vercel-dns.com
TTL: 3600 (ou Auto)
```

### 2.3 Configuration Additionnelle (Optionnelle mais Recommandée)

#### Pour les emails (si vous voulez recevoir des emails @cles-auto-liege.be)
```
Type: MX
Nom: @
Priorité: 10
Valeur: mail.behostings.net
```

#### Verification TXT pour Google/Bing (à ajouter plus tard)
```
Type: TXT
Nom: @
Valeur: [Votre code de vérification Google]
```

---

## ⏱️ ÉTAPE 3: ATTENDRE LA PROPAGATION DNS

### Délai Normal
- **Minimum**: 5-15 minutes
- **Maximum**: 24-48 heures (rare)
- **Moyenne**: 1-2 heures

### Vérifier la propagation
Utilisez ces outils:
1. https://dnschecker.org/ (tapez: cles-auto-liege.be)
2. https://www.whatsmydns.net/ (tapez: cles-auto-liege.be)

### Dans le terminal (pour les experts)
```bash
# Vérifier l'enregistrement A
nslookup cles-auto-liege.be

# Vérifier le CNAME www
nslookup www.cles-auto-liege.be

# Vérifier avec dig (plus détaillé)
dig cles-auto-liege.be
dig www.cles-auto-liege.be
```

---

## ✅ ÉTAPE 4: VÉRIFICATION DANS VERCEL

### 4.1 Retour sur Vercel
1. Allez dans **Settings** → **Domains**
2. Vous devriez voir:
   - ✅ `cles-auto-liege.be` (Valid Configuration)
   - ✅ `www.cles-auto-liege.be` (Valid Configuration)

### 4.2 Si vous voyez encore "Invalid Configuration"
- Attendez 10-15 minutes
- Cliquez sur **Refresh** ou **Verify**
- Si après 2 heures ça ne marche pas, vérifiez vos DNS

---

## 🔐 ÉTAPE 5: CERTIFICAT SSL (AUTOMATIQUE)

### Vercel s'occupe de tout !
- Vercel génère automatiquement un certificat SSL Let's Encrypt
- Votre site sera accessible en **HTTPS** (🔒)
- Délai: 5-10 minutes après validation DNS
- Renouvellement automatique tous les 90 jours

### Vérification SSL
```
✅ https://cles-auto-liege.be
✅ https://www.cles-auto-liege.be
```

---

## ⚙️ ÉTAPE 6: CONFIGURER LES VARIABLES D'ENVIRONNEMENT

### 6.1 Dans Vercel Dashboard
1. **Settings** → **Environment Variables**
2. Ajoutez/Modifiez:

```
NEXT_PUBLIC_SITE_URL=https://cles-auto-liege.be
```

3. Scope: **Production, Preview, Development**
4. Cliquez sur **Save**

### 6.2 Re-déployer l'application
Après avoir ajouté la variable:
```bash
git commit --allow-empty -m "Update domain configuration"
git push
```

Ou dans Vercel:
- **Deployments** → Cliquez sur les **...** du dernier déploiement
- Cliquez sur **Redeploy**

---

## 🎨 ÉTAPE 7: CONFIGURER LE DOMAINE PRINCIPAL

### 7.1 Définir le domaine principal dans Vercel
1. **Settings** → **Domains**
2. À côté de `cles-auto-liege.be`, cliquez sur **...** → **Set as Primary**
3. Cela redirigera automatiquement:
   - `www.cles-auto-liege.be` → `cles-auto-liege.be`
   - `cles-auto-liege-v3.vercel.app` → `cles-auto-liege.be`

---

## 📧 ÉTAPE 8 (OPTIONNELLE): CONFIGURER LES EMAILS

### Si vous voulez des emails @cles-auto-liege.be

#### Option 1: Utiliser l'email de BEHostings
Déjà configuré avec l'enregistrement MX ci-dessus.

#### Option 2: Google Workspace (Payant - ~6€/mois)
1. Créer un compte Google Workspace
2. Ajouter les enregistrements MX de Google:
```
Type: MX
Priorité: 1
Valeur: ASPMX.L.GOOGLE.COM

Type: MX
Priorité: 5
Valeur: ALT1.ASPMX.L.GOOGLE.COM
```

#### Option 3: Zoho Mail (Gratuit jusqu'à 5 utilisateurs)
1. Créer un compte sur zoho.com/mail
2. Ajouter les enregistrements MX de Zoho
3. Créer contact@cles-auto-liege.be

---

## 🔍 ÉTAPE 9: CONFIGURER GOOGLE SEARCH CONSOLE

### 9.1 Ajouter votre domaine
1. Allez sur https://search.google.com/search-console
2. Cliquez sur **Ajouter une propriété**
3. Choisissez **Domaine**: `cles-auto-liege.be`

### 9.2 Vérification DNS
Google vous donnera un code TXT à ajouter:
```
Type: TXT
Nom: @
Valeur: google-site-verification=XXXXXXXXXXXXXXX
```

Ajoutez cet enregistrement dans vos DNS BEHostings.

### 9.3 Soumettre le sitemap
Une fois vérifié:
1. Dans Search Console, allez dans **Sitemaps**
2. Ajoutez: `https://cles-auto-liege.be/sitemap.xml`
3. Cliquez sur **Soumettre**

---

## 🎯 ÉTAPE 10: TESTER TOUT

### Checklist finale
```
✅ https://cles-auto-liege.be → Fonctionne
✅ https://www.cles-auto-liege.be → Redirige vers cles-auto-liege.be
✅ http://cles-auto-liege.be → Redirige vers https://
✅ Certificat SSL actif (cadenas 🔒)
✅ Google Search Console configuré
✅ Sitemap accessible: /sitemap.xml
✅ Robots.txt accessible: /robots.txt
✅ Structured data valides
```

### Tests à faire
1. **Test vitesse**: https://pagespeed.web.dev/
2. **Test SEO**: https://search.google.com/test/rich-results
3. **Test mobile**: https://search.google.com/test/mobile-friendly
4. **Test SSL**: https://www.ssllabs.com/ssltest/

---

## ❗ PROBLÈMES COURANTS

### Problème 1: "Invalid Configuration" dans Vercel
**Causes possibles:**
- DNS pas encore propagés (attendre 1-2h)
- Mauvaise configuration DNS chez BEHostings
- Ancien cache DNS

**Solutions:**
```bash
# Vider le cache DNS local (Mac)
sudo dscacheutil -flushcache; sudo killall -HUP mDNSResponder

# Windows
ipconfig /flushdns
```

### Problème 2: Site toujours sur vercel.app
**Solution:**
- Vérifier que le domaine est bien "Primary" dans Vercel
- Vérifier la redirection dans **Settings** → **Domains**
- Vider le cache du navigateur (Ctrl+Shift+R)

### Problème 3: SSL pas actif
**Solution:**
- Attendre 15 minutes après validation DNS
- Vercel génère automatiquement le certificat
- Si après 1h toujours rien, contacter le support Vercel

### Problème 4: Email ne fonctionne pas
**Solution:**
- Vérifier les enregistrements MX dans les DNS
- Attendre la propagation DNS (24h max)
- Tester avec https://mxtoolbox.com/

---

## 📞 SUPPORT

### Vercel Support
- Documentation: https://vercel.com/docs/custom-domains
- Support: https://vercel.com/support

### BEHostings Support
- Email: support@behostings.net
- Téléphone: Vérifier sur leur site

### Communauté
- Vercel Discord: https://vercel.com/discord
- Next.js Discussions: https://github.com/vercel/next.js/discussions

---

## 🚀 APRÈS LA CONFIGURATION

### À faire immédiatement
1. ✅ Mettre à jour tous les liens dans votre marketing
2. ✅ Ajouter le domaine dans Google My Business
3. ✅ Mettre à jour vos réseaux sociaux
4. ✅ Créer des cartes de visite avec le nouveau domaine
5. ✅ Configurer Google Analytics avec le nouveau domaine

### Monitoring
- Vérifier Google Search Console chaque semaine
- Suivre les Core Web Vitals dans Vercel Analytics
- Surveiller les erreurs dans Vercel Logs

---

## 🎉 FÉLICITATIONS !

Une fois tout configuré, vous aurez:
- ✅ Un domaine professionnel: **cles-auto-liege.be**
- ✅ HTTPS sécurisé avec certificat SSL
- ✅ Redirection automatique www → non-www
- ✅ Performance maximale avec Vercel CDN
- ✅ SEO optimisé au maximum
- ✅ Email professionnel (optionnel)

**Votre site est maintenant 100% professionnel et prêt pour le succès ! 🚀**

---

**Dernière mise à jour**: 14 février 2026  
**Domaine**: cles-auto-liege.be  
**Hébergeur**: Vercel  
**DNS**: BEHostings

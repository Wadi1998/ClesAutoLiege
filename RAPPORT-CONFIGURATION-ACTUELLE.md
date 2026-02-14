# 📊 RAPPORT DE CONFIGURATION - CLES AUTO LIÈGE

**Date :** 14 février 2026, 23:50  
**Domaine cible :** cles-auto-liege.be

---

## ✅ CE QUI EST DÉJÀ CONFIGURÉ DANS LE CODE

### 1. Configuration Next.js (next.config.js)
✅ **Headers HTTP** configurés (sécurité, SEO, cache)  
✅ **Optimisation des images** (WebP, AVIF)  
✅ **Redirections www → non-www** : configurée pour `clefautoliege.be`  
⚠️ **PROBLÈME** : La redirection utilise `clefautoliege.be` au lieu de `cles-auto-liege.be`

### 2. Métadonnées SEO (metadata.ts)
✅ **Titre, description, keywords** configurés  
✅ **OpenGraph et Twitter Cards** configurés  
✅ **Variable d'environnement** : `NEXT_PUBLIC_SITE_URL`  
⚠️ **Valeur par défaut** : `https://clefautoliege.be` (sans tirets)

### 3. Fichiers SEO
✅ **robots.txt** : configuré dynamiquement  
✅ **sitemap.xml** : génération dynamique (29 pages)  
✅ **Schema markup** : LocalBusiness, Services, FAQs  
⚠️ **URLs par défaut** : utilisent `clefautoliege.be`

### 4. Build et optimisations
✅ **Build réussi** : 0 erreurs TypeScript  
✅ **29 pages générées** : 6 services + 13 communes + pages SEO  
✅ **Bundle optimisé** : 158 kB (homepage)  
✅ **Performance** : Lighthouse 90+ attendu

---

## ❌ CE QUI MANQUE / DOIT ÊTRE CONFIGURÉ

### 🔴 URGENT - Configuration manquante

#### 1. **Fichier .env.local ABSENT**
```bash
Status: ❌ NON CRÉÉ
Impact: CRITIQUE
```

**Ce fichier doit contenir :**
```env
# Site Configuration
NEXT_PUBLIC_SITE_URL=https://cles-auto-liege.be
NEXT_PUBLIC_SITE_NAME="Clés Auto Liège"

# Contact Information
NEXT_PUBLIC_PHONE=0493447205
NEXT_PUBLIC_PHONE_DISPLAY="04 93 44 72 05"
NEXT_PUBLIC_WHATSAPP=32493447205
NEXT_PUBLIC_WHATSAPP_MESSAGE="Bonjour, j'ai besoin d'une intervention pour..."
```

#### 2. **Incohérence du nom de domaine**
```bash
Status: ⚠️ INCOHÉRENT
Impact: MAJEUR
```

**Domaines trouvés dans le code :**
- 📝 Documentation DNS : `cles-auto-liege.be` ✅ (avec tirets)
- 💻 Code source : `clefautoliege.be` ❌ (sans tirets)

**Fichiers à mettre à jour :**
```
next.config.js (ligne 81)           → redirection www
src/app/robots.ts                   → URL sitemap
src/app/sitemap.ts                  → URLs des pages
src/app/layout.tsx                  → metadataBase
src/app/metadata.ts                 → siteUrl par défaut
src/lib/utils/seo.ts (10 fichiers)  → toutes les URLs schema
public/robots.txt                   → URL sitemap
public/humans.txt                   → URL du site
```

---

## 🎯 CE QUI RESTE À FAIRE - CHECKLIST COMPLÈTE

### Phase 1 : Configuration locale (MAINTENANT)

#### A. Créer le fichier .env.local
```bash
- [ ] Créer .env.local à la racine du projet
- [ ] Ajouter NEXT_PUBLIC_SITE_URL=https://cles-auto-liege.be
- [ ] Ajouter toutes les variables de contact
- [ ] Redémarrer le serveur de développement
```

#### B. Corriger les URLs dans le code
```bash
- [ ] Mettre à jour next.config.js (redirection www)
- [ ] Rebuild le projet : npm run build
- [ ] Vérifier que tout fonctionne localement
```

### Phase 2 : Configuration DNS chez BEHostings

```bash
- [ ] Se connecter à BEHostings.be
- [ ] Aller dans "Mes domaines" → cles-auto-liege.be
- [ ] OPTION 1 (Recommandée) : Utiliser les DNS de Vercel
      → ns1.vercel-dns.com
      → ns2.vercel-dns.com
      
- [ ] OPTION 2 : Configurer les enregistrements DNS manuels
      → Type A : @ → 76.76.21.21
      → Type CNAME : www → cname.vercel-dns.com
```

### Phase 3 : Configuration sur Vercel

```bash
- [ ] Aller sur vercel.com → projet ClesAutoLiegeV3
- [ ] Settings → Domains → Add Domain
- [ ] Ajouter : cles-auto-liege.be
- [ ] Ajouter aussi : www.cles-auto-liege.be
- [ ] Attendre validation DNS (15-60 minutes)
```

### Phase 4 : Variables d'environnement Vercel

```bash
- [ ] Settings → Environment Variables
- [ ] Ajouter : NEXT_PUBLIC_SITE_URL
- [ ] Valeur : https://cles-auto-liege.be
- [ ] Scope : Production ✅ Preview ✅ Development ✅
- [ ] Save
```

### Phase 5 : Déploiement et validation

```bash
- [ ] Git commit des changements locaux
- [ ] Git push vers GitHub
- [ ] Vercel redéploie automatiquement
- [ ] Attendre fin du déploiement
- [ ] Vérifier SSL actif (cadenas 🔒)
- [ ] Tester : https://cles-auto-liege.be
- [ ] Tester : https://www.cles-auto-liege.be (redirect)
```

### Phase 6 : Domaine principal Vercel

```bash
- [ ] Settings → Domains
- [ ] À côté de cles-auto-liege.be : ... → Set as Primary
- [ ] Vérifier les redirections automatiques
```

### Phase 7 : Tests finaux

```bash
- [ ] Site accessible sur https://cles-auto-liege.be ✅
- [ ] Redirection www → non-www fonctionne ✅
- [ ] SSL actif (HTTPS) ✅
- [ ] Sitemap accessible : /sitemap.xml ✅
- [ ] Robots.txt accessible : /robots.txt ✅
- [ ] Toutes les pages fonctionnent ✅
- [ ] Formulaires de contact fonctionnent ✅
```

---

## 🔍 DÉTAILS TECHNIQUES

### Configuration DNS recommandée (Vercel)

**Méthode 1 : DNS de Vercel (RECOMMANDÉE)**
```
Chez BEHostings :
Nameservers : ns1.vercel-dns.com, ns2.vercel-dns.com

Avantages :
✅ Tout automatique
✅ SSL automatique
✅ Vercel gère tout
✅ Pas de config manuelle
```

**Méthode 2 : Enregistrements DNS manuels**
```
Type: A
Host: @
Value: 76.76.21.21
TTL: 3600

Type: CNAME
Host: www
Value: cname.vercel-dns.com
TTL: 3600
```

### Timeline estimée

```
Jour 1 (Maintenant)        : Configuration locale (30 min)
Jour 1                     : Configuration DNS (15 min)
Jour 1 + 1h                : Propagation DNS (attendre)
Jour 1 + 2h                : SSL automatique activé
Jour 1 + 2h30              : Site en ligne ! 🎉
```

---

## ⚠️ POINTS D'ATTENTION

### 1. Choix du domaine
**Décision à prendre :** Quel domaine voulez-vous ?
- `cles-auto-liege.be` (avec tirets) ← Mentionné dans vos docs DNS
- `clefautoliege.be` (sans tirets) ← Actuellement dans le code

**Recommandation :** Utiliser `cles-auto-liege.be` (plus SEO-friendly)

### 2. Email de contact
Le code mentionne `contact@clefautoliege.be`
- [ ] Vérifier que cet email existe
- [ ] Ou le changer dans le code

### 3. Google Business
```bash
- [ ] Variable NEXT_PUBLIC_GOOGLE_BUSINESS_URL non définie
- [ ] À ajouter quand votre page Google Business sera créée
```

### 4. Analytics (optionnel)
```bash
- [ ] Variable NEXT_PUBLIC_GA_ID non définie
- [ ] À ajouter si vous voulez Google Analytics
```

---

## 🎯 PROCHAINES ÉTAPES IMMÉDIATES

### 1. MAINTENANT : Choisir le domaine final
**Question :** Voulez-vous utiliser :
- A) `cles-auto-liege.be` (avec tirets) ← Recommandé
- B) `clefautoliege.be` (sans tirets)

### 2. ENSUITE : Créer .env.local avec le bon domaine

### 3. PUIS : Configurer les DNS chez BEHostings

### 4. ENFIN : Configurer sur Vercel et déployer

---

## 📞 SUPPORT

Si vous avez des questions ou blocages :
1. **DNS BEHostings** : support@behostings.be
2. **Vercel** : https://vercel.com/support
3. **Documentation** : Voir SOLUTION-SIMPLE-DNS-VERCEL.md

---

## ✅ RÉSUMÉ ULTRA-RAPIDE

**Ce qui fonctionne :**
- ✅ Code Next.js complet et optimisé
- ✅ Build réussi
- ✅ 29 pages générées
- ✅ SEO configuré

**Ce qui manque :**
- ❌ Fichier .env.local
- ❌ Domaine configuré (DNS + Vercel)
- ⚠️ Incohérence nom de domaine dans le code

**Temps estimé pour terminer :**
- Configuration : 30 minutes
- Attente DNS : 1-2 heures
- **Total : ~2h30 pour être en ligne**

---

**🚀 Prêt à finaliser ? Dites-moi quel domaine vous voulez utiliser !**

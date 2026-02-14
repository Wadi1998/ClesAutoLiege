# 📝 DNS Records à Configurer chez BEHostings

## 🎯 ÉTAPES RAPIDES

### 1️⃣ Allez sur Vercel
1. Ouvrez votre projet: **cles-auto-liege-v3**
2. **Settings** → **Domains** → **Add**
3. Tapez: `cles-auto-liege.be`
4. Vercel vous donnera les DNS records exacts

### 2️⃣ Sur l'écran BEHostings que vous avez montré
Dans la section **"Serveurs DNS"**, configurez ces 2 enregistrements:

---

## 📋 DNS RECORDS À AJOUTER

### Enregistrement #1 - Domaine Principal
```
Type: A
Nom/Host: @ (ou laissez vide)
Valeur: 76.76.21.21
TTL: 3600
```

**⚠️ IMPORTANT:** Supprimez l'ancien enregistrement A si il y en a un!

---

### Enregistrement #2 - WWW
```
Type: CNAME  
Nom/Host: www
Valeur: cname.vercel-dns.com
TTL: 3600
```

**⚠️ IMPORTANT:** Supprimez l'ancien CNAME pour www si il existe!

---

## 🔍 VÉRIFICATION DNS APRÈS CONFIG

### DNS Serveur 1 (rempli automatiquement)
```
ns1.behostings.net
```

### DNS Serveur 2 (rempli automatiquement)
```
ns2.behostings.net
```

**NE TOUCHEZ PAS** à ces serveurs DNS ! Ils doivent rester sur ns1 et ns2.behostings.net

---

## ⏱️ APRÈS LA CONFIG

1. Cliquez sur **"Continuer"** dans BEHostings
2. Attendez **15-30 minutes** pour la propagation
3. Retournez sur Vercel → **Settings** → **Domains**
4. Cliquez sur **Refresh** ou **Verify**
5. Vous devriez voir: ✅ **Valid Configuration**

---

## 🔐 SSL AUTOMATIQUE

Une fois les DNS validés par Vercel:
- Certificat SSL généré automatiquement (5-10 min)
- Votre site sera accessible en HTTPS 🔒
- Renouvellement automatique tous les 90 jours

---

## ✅ CHECKLIST FINALE

- [ ] Domaine ajouté dans Vercel
- [ ] Enregistrement A configuré (@ → 76.76.21.21)
- [ ] Enregistrement CNAME configuré (www → cname.vercel-dns.com)
- [ ] Cliqué sur "Continuer" dans BEHostings
- [ ] Attendu 15-30 minutes
- [ ] Vérifié dans Vercel (Valid Configuration)
- [ ] SSL actif (cadenas 🔒)
- [ ] Site accessible sur https://cles-auto-liege.be

---

## 📞 SI ÇA NE MARCHE PAS APRÈS 2 HEURES

1. **Vérifiez vos DNS records:**
   - https://dnschecker.org/
   - Tapez: `cles-auto-liege.be`

2. **Vérifiez dans le terminal:**
   ```bash
   nslookup cles-auto-liege.be
   # Devrait montrer: 76.76.21.21
   ```

3. **Contactez le support:**
   - Vercel: https://vercel.com/support
   - BEHostings: support@behostings.net

---

## 🚀 BONUS: VARIABLE D'ENVIRONNEMENT VERCEL

Une fois le domaine validé, mettez à jour dans Vercel:

**Settings** → **Environment Variables**

```
Nom: NEXT_PUBLIC_SITE_URL
Valeur: https://cles-auto-liege.be
Scope: Production, Preview, Development
```

Puis **Redeploy** l'application!

---

**Date**: 14 février 2026  
**Domaine**: cles-auto-liege.be  
**Hébergeur**: Vercel  
**DNS**: BEHostings (ns1.behostings.net, ns2.behostings.net)

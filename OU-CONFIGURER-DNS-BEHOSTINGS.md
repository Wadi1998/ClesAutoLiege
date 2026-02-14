# 🎯 OÙ CONFIGURER LES DNS SUR BEHOSTINGS

## ⚠️ VOUS ÊTES SUR LA MAUVAISE PAGE !

La page "Serveurs DNS" que vous voyez n'est **PAS** la bonne !

**NE TOUCHEZ PAS** aux serveurs DNS (ns1.behostings.net, ns2.behostings.net) !

---

## ✅ VOICI OÙ ALLER :

### Sur l'écran que vous voyez maintenant :

Dans le menu de gauche, cherchez une option qui dit :

1. **"Enregistrements DNS"** ou
2. **"Zone DNS"** ou  
3. **"Gérer les enregistrements"** ou
4. **"DNS Records"** ou
5. **"Zone de DNS"**

---

## 🔍 SI VOUS NE TROUVEZ PAS :

### Option 1 : Retour à l'accueil du domaine

1. Dans le menu de gauche, cliquez sur **"Aperçu"** (tout en haut)
2. Ou retournez à **"Mes noms de domaines"**
3. Re-cliquez sur **"cles-auto-liege.be"**
4. Cherchez un bouton ou onglet **"Zone DNS"** ou **"Enregistrements DNS"**

---

## 📋 CE QUE VOUS DEVEZ VOIR

Quand vous êtes sur la BONNE page, vous verrez :
- Un tableau avec les colonnes : **Type**, **Nom**, **Valeur**, **TTL**
- Des boutons comme **"Ajouter un enregistrement"** ou **"Add Record"**
- Peut-être déjà quelques enregistrements (A, MX, TXT, etc.)

---

## 🎯 CE QU'IL FAUT FAIRE UNE FOIS SUR LA BONNE PAGE

### Enregistrement 1 : 
Cliquez sur **"Ajouter un enregistrement"**

```
Type: A
Nom: @ (ou laissez vide)
Valeur: 216.198.79.1
TTL: 3600
```

Cliquez sur **"Enregistrer"**

### Enregistrement 2 :
Cliquez encore sur **"Ajouter un enregistrement"**

```
Type: CNAME
Nom: www
Valeur: c13bd7b4d6efe587.vercel-dns-017.com
TTL: 3600
```

Cliquez sur **"Enregistrer"**

---

## 📸 BESOIN D'AIDE ?

Si vous ne trouvez toujours pas la bonne page :

1. Prenez une capture d'écran du menu de gauche complet
2. Ou contactez le support BEHostings : support@behostings.net
3. Dites-leur : "Je veux ajouter des enregistrements DNS A et CNAME pour mon domaine"

---

## 💡 ALTERNATIVE : Utiliser Vercel DNS (Plus Simple)

Si vous ne trouvez vraiment pas où configurer les DNS chez BEHostings, vous pouvez utiliser les DNS de Vercel directement :

### Sur BEHostings (page Serveurs DNS) :
Changez les serveurs DNS pour :
```
Serveur DNS 1: ns1.vercel-dns.com
Serveur DNS 2: ns2.vercel-dns.com
```

### Sur Vercel :
Tout sera automatique ! Vercel gérera tous les DNS pour vous.

**⚠️ Mais attendez avant de faire ça !** Essayez d'abord de trouver la page "Zone DNS" chez BEHostings.

---

## 📞 SUPPORT

- **BEHostings** : support@behostings.net
- Téléphone BEHostings : (vérifiez sur leur site)

Demandez-leur : **"Comment ajouter des enregistrements DNS A et CNAME pour connecter mon domaine à Vercel ?"**

---

**🎯 La bonne page doit vous permettre d'ajouter des ENREGISTREMENTS DNS, pas de changer les SERVEURS DNS !**

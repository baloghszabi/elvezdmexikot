# Élvezd Mexikót – magyarul 🇲🇽🇭🇺

Egy reszponzív, többoldalas weboldal, amely bemutatja a mexikói utazási lehetőségeket magyar turisták számára. Az oldal célja, hogy segítsen magyar nyelven eligazodni a cancúni nyaralás szervezésében, legyen szó kirándulásokról, transzferről vagy autóbérlésről.

https://elvezdmexikotmagyarul.com/

## 📸 Képernyőképek


## 📁 Oldalstruktúra

- `index.html` – főoldal
- `portfolio-details.html` – kirándulások részletes aloldala
- `assets/` – képek, ikonok, videók, CSS és JS fájlok
- `forms/` - kapcsolatfelvételi űrlap
- reszponzív dizájn Bootstrap 5-tel

## 🛠️ Technológiák

- HTML5, CSS3
- Bootstrap 5
- Swiper.js (carousel slider)
- AOS (animáció görgetésre)
- FontAwesome + Bootstrap Icons

## ⚙️ Funkciók

- Smooth scroll navigáció
- Több szekció: Rólunk, Szolgáltatások, Kirándulások, Árlista, Kapcsolat
- Külön oldal a részletes kirándulásleírásoknak
- Teljesen reszponzív kialakítás mobilra és nagy kijelzőkre

## 📦 Telepítés és futtatás

1. Klónozd vagy töltsd le a repót:
   ```bash
   git clone https://github.com/baloghszabi/elvezdmexikot.git
2. Nyisd meg index-dev.html-t Live Serverrel fejlesztéshez
vagy index.html-t GitHub Pages-hez publikáláshoz

📘 Megjegyzés GitHub Pages használatához
A index.html tartalmaz egy <base href="/elvezdmexikot/"> taget, hogy GitHub Pages alatt helyesen működjenek a fájlútvonalak. Lokális fejlesztéshez használd a index-dev.html fájlt, amely ezt nem tartalmazza.

## ✉️ Kapcsolatfelvételi űrlap (PHP)

Az oldal tartalmaz egy működő kapcsolatfelvételi űrlapot, amely a következő fájlban van kezelve:

- `forms/contact.php` – kezeli az űrlap elküldését és e-mail küldést (PHP)

A `contact.php` fájl felelős az alábbiakért:
- beérkező mezők (név, email, tárgy, üzenet) validálása
- e-mail küldés a megadott címre
- válasz visszaküldése AJAX-on keresztül (JSON)

**Fontos:** Az űrlap működéséhez PHP-s backend szükséges (pl. Apache + PHP szerver), ezért GitHub Pages alatt nem fog működni.


👤 Készítette
Szabolcs Balogh
Frontend fejlesztő
GitHub: baloghszabi

📄 Licenc
Ez a projekt a BootstrapMade által készített "Knight" sablonon alapszik.

---

## ✅ Használat

1. Hozd létre a `README.md` fájlt a repo főkönyvtárában.
2. Illeszd be ezt a tartalmat.
3. Adj hozzá képernyőképeket, ha van (pl. `screenshots/hero.png`).

---

Ha szeretnéd, készítek belőle `.md` fájlt `.zip`-ben is, vagy segítek screenshot beszúrásával is. Szólj bátran!

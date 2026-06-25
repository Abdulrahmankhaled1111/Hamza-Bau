# Hamza Alkhaled Bau und Hausdienstleistungen

Statische Unternehmenswebsite für Hamza Alkhaled Bau und Hausdienstleistungen in ganz Hessen.

Kontakt:

- Telefon: +49 1590 1328051
- E-Mail: hamzabau06@gmail.com
- Postanschrift: Dill Str. 4, 35630 Ehringshausen
- Einsatzgebiet: ganz Hessen

## Inhalt

- Startseite mit Leistungen, Ablauf, Sprechzeiten, Adresse und Kontaktbereich
- Impressum
- Datenschutzerklärung
- Bildmaterial im Ordner `assets`
- `.nojekyll` für GitHub Pages

## Dateien, die veröffentlicht werden sollen

- `index.html`
- `impressum.html`
- `datenschutz.html`
- `styles.css`
- `.nojekyll`
- `assets/`
- `README.md`

Nicht veröffentlichen: `tmp/`, `downloads/` und `*.log`. Diese Dateien werden über `.gitignore` ausgeschlossen.

## GitHub-Repository

Ziel-Repository:

```text
git@github.com:Abdulrahmankhaled1111/Hamza-Bau.git
```

Falls lokal noch ein anderes Repository als `origin` eingetragen ist, muss die Verbindung einmalig umgestellt werden:

```bash
git remote set-url origin git@github.com:Abdulrahmankhaled1111/Hamza-Bau.git
```

Danach können die Änderungen veröffentlicht werden:

```bash
git add .
git commit -m "Prepare website for GitHub Pages"
git push -u origin main
```

## Veröffentlichung mit GitHub Pages

1. Repository `Hamza-Bau` auf GitHub öffnen.
2. `Settings` -> `Pages` öffnen.
3. Bei `Build and deployment` die Quelle `Deploy from a branch` wählen.
4. Branch `main` und Ordner `/root` auswählen.
5. Speichern.

Danach ist die Seite unter der GitHub-Pages-Adresse des Repositorys erreichbar.

## Vor dem Livegang prüfen

- Impressum mit vollständigen Unternehmensdaten prüfen.
- Datenschutzerklärung rechtlich prüfen lassen.
- Wartungsmodus in `assets/site-status.js` muss auf `maintenance: false` stehen.

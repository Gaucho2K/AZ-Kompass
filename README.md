# AZ-Kompass Android

Android-Hülle für den AZ-Kompass-Prototypen.

## Enthalten
- mobile Android-App (WebView)
- lokale Speicherung im WebView-Speicher
- Arbeitszeit, Wegzeit, Rufbereitschaftseinsatz
- Ruhezeit-Kompass
- GitHub Actions Workflow zum automatischen Erstellen einer installierbaren Debug-APK

## APK mit GitHub Actions erstellen
1. Projekt in ein GitHub-Repository hochladen.
2. Unter **Actions** den Workflow **Build AZ-Kompass APK** öffnen.
3. **Run workflow** ausführen oder auf `main` pushen.
4. Nach erfolgreichem Build das Artifact **AZ-Kompass-debug-apk** herunterladen.
5. Darin liegt `app-debug.apk`.

## Lokal mit Android Studio
Projektordner in Android Studio öffnen und **Build > Build APK(s)** ausführen.

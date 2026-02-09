# 1.3 - Projektstruktur

Nach der Ausführung von `cds init` werden im Root-Verzeichnis des Projekts eine Reihe an Ordner und Dateien angelegt, welche im folgenden Erläutert werden.

```zsh
my-project/         # Root-Verzeichnis des Projekts
├─ app/             # UI-App, z.B. Fiori Elements
├─ srv/             # Service Dateien
├─ db/              # Domain Modelle und Datenbankinfrastruktur
└─ readme.md        # Readme Datei des Projekts.
```

## 1.3.1 - Root Verzeichnis

```zsh
my-project/
```

Das ist das Stammverzeichnis (Root) des Projekts. Alle projektbezogenen Daten und Ordner befinden sich hier.

## 1.3.2 - Datenbankschicht

```zsh
├─ db/
```

In diesem Verzeichnis wird das Datenmodell definiert und gespeichert.

- Hier werden Entitäten (vergleichbar mit Tabellen in einer Datenbank), deren Felder und die Beziehungen zwischen ihnen festgelegt.
  - Zur Beschreibung der Struktur werden hier hauptsächlich sog. `cds`-Dateien abgelegt.
  - Oftmals findet man auch CSV-Dateien für initiale Tests auf.

## 1.3.3 - Serviceschicht

```bash
├─ srv/
```

In diesem Verzeichnis werden die Services definiert, sprich die Grundlage dafür, Daten nach außen hin sichtbar zu machen.

- Hier wird festgelegt, welche Entitäten aus dem `db`-Verzeichnis bereitgestellt werden. Des weiteren wird hier auch die Geschäftslogik implementiert, z.B. Validierungen, Berechnungen oder Berechtigungsprüfungen.
  - Der Inhalt besteht hauptsächlich aus `cds`-Dateien zur Definition der Services, sowie `.java`-Dateinen zur Implementierung von Logik

:::info
Erläuterung des Prinzips der `cds`-Dateien sowie dem Konzept hinter Cap siehe 1.4 Grundkonzept von Cap
:::

## 1.3.4 - Anwendungsschicht/UI

```bash
├─ app/
```

- Hier befinden sich die clientseitigen Anwendungen (z.B. SAP Fiori Elements Apps), die die Services aus der `srv`-Schicht konsumieren. Dieser Teil ist das, was der Endbenutzer im Browser sieht
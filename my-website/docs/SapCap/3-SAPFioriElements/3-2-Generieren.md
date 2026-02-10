---
sidebar_position: 32
---

# 3.2 - Fiori Elements UI erstellen

## 3.2.1 - Voraussetzungen

Im folgenden wird beschrieben wie eine SAP Fiori Elements App generiert werden kann. Dabei wird sich dem SAP Fiori Generator bedient. Dieser steht in Visual Studio Code als Extention zur Verfügung.

:::warning
Damit die Fiori App generiert werden kann, muss bereits ein **Cap Projekt existieren** und mit Datengrundlage sowie Service (Meistens CatalogService) ausgestattet sein. Sollte dies nicht der Fall sein, bitte zuerst einen Service bzw. ggf. ein Cap Projekt erzeugen.
:::

## 3.1.2 - Generieren einer Anwendung

### Schritt 1: Command Palette in Visual Studio Code öffnen
`cmd` + `umschalt` + `P`

### Schritt 2: Generator starten
Führe den Befehl _Fiori: Open Application Generater_ aus

### Schritt 3: Template auswählen
Wähle das Template aus, was du umsetzten möchtest; klicke auf _Next_

:::tip
Für den Anfang eignet sich meinst die ListView-Page, da diese bei vorher festgelegter Komposition ListView und Object Page verbindet.
:::

### Schritt 4: Datengrundlage/Service festlegen
Wähle für die **Data Source gleich _Use local cap project_**, bei **Choose a Cap Project dein Cap Project** und bei **OData-Service den Service aus, auf dem die View basieren soll.** Klicke anschließend auf _Next_.

:::warning
Damit die Fiori App generiert werden kann, muss bereits ein **Cap Projekt existieren** und mit Datengrundlage sowie Service (Meistens CatalogService) ausgestattet sein. Sollte dies nicht der Fall sein, bitte zuerst einen Service bzw. ggf. ein Cap Projekt erzeugen.
:::

### Schritt 5: Entity Selection
- Wähle als **Main Entity den Eintrag der Datengrundlage aus, der auf der Starting Page (List View) angezeigt werden soll.** 
- **Navigation Entry** beschreibt den **auf der ObjectPage dargestellten Inhalt,** welcher in Abhängigkeit des ausgewählten ListView-Eintrags entsteht (Komposition).
- Table Type (standardmäßig Responisve) und "Automatically add table columns to the list page..." (Empfehlung _yes_) können nach Belieben ausgewählt werden.
- Klicke _Next_

### Schritt 6: Project Attributes
- Lege einen Modulnamen fest (min 3 Buchstaben; Kleinbuchstaben)
- Lege einen Application Title fest (dieser wird dann u.a. im Fiori Launchpad angezeigt)
- Lege eine Beschreibung fest (diese wird dann u.a. im Fiori Launchpad angezeigt)
- Wähle eine geeignete (möglichst aktuelle und stabile) UI5 Version
- Sofern nicht gewünscht, belasse die restlichen Einstellungen bei Standardwerten 

:::note
Nach Bestätigung mittels `Finish`-Button werden automatisch neue Verzeichnisse und Daten angelegt. Die Struktur, Bedeutung, etc. dieser Dateien wird in Kapitel 3.3 erläutert.
::: 
# 1.2 - Erstellen eines Projekts

## 1.2.1 - Projekt initialisieren

Mithilfe des cds-tools lässt sich über den Terminal automatisch eine grundlegende Projektstruktur anlegen.

```bash
cds init myproject      # Generiert benötigte Struktur
cd myproject            # Verzeichniswechsel ins Projekt
```

:::info
Die von _cds init_ generierten Ordnerstrukturen/Dateien werden in _1.3 - Projektstruktur_ erläutert.
:::

## 1.2.2 - Simulation starten

Mithilfe von _Maven_ lässt sich aus dem root-Verzeichnis des Projektes ein Server starten, der es ermöglicht, mit dem Frontend als auch Backend des Projekts zu interagieren.

```bash
mvn spring-boot:run
```

Dies verwendet automatisch eine kompilierte Java-Anwendung und verhält sich in der Praxis meist vergleichsweise nah an der Produktionsumgebung. Grundlage für die Ausführung von `mvn spring-boot:run` ist die _pom.xml_ Datei (siehe 1.3 - Projektstruktur).

:::warning
Im Kontext von Cap wird ebenfalls der Befehl `cds watch` zum Testen von CAP Anwendungen mit Hot-Reload genannt - Dieser Befehl agiert allerdings viel leichtgewichtiger, weshalb es insbesondere beim Testen von Backend-Anbindungen zu _nicht gekennzeichneten Logik-Fehlern_ kommen kann.
:::

Nach dem Start wird lokal unter [http://localhost:8080/](http://localhost:8080/) eine Preview des erstellten Projektes generiert. Von dort aus lassen sich später metadaten, Fiori Previews und sogar konzeptionierte WebApps abrufen und anschauen.

## 1.2.3 - Java Backend hinzufügen

Um die nötigen Backend Anbindungen umsetzen zu können, muss mittels cds das nötige Java-Feature hinzugefügt werden.

```bash
cds add java
```

:::info
Mithilfe von `cds add` lassen sich ebenfalls weitere Features und Facets hinzufügen, wie z.B. hana, xsuaa, ias, multitenancy, etc.
:::

## 1.2.4 - Projekt aktuell halten

Development Environment aktuell halten:

```bash
brew upgrade
npm upgrade --global
```

Project-Dependancies aktuell halten:

```bash
npm upgrade         # innerhalb des Projektordners
```

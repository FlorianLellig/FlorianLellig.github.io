# 1.1 - Voraussetzungen

Um das Framework SAP Cap sinnvoll nutzen zu können empfielt werden gewisse Tools benötigt, sowie optionale empfohlen. Im folgenden wird die Ersteinrichtung für Mac-User beschrieben, für Windows-User befindet sich ein Guide auf der offiziellen SAP Capire Dokumentationspage.

## 1.1.1 - Required

Zur Nutzung von Cap wird im wesentlichen lediglich die sog. "cds-dk" benötigt. Die Installation erfolgt über Node.js

### Schritt 1: Installation von Homebrew

Sollte Homebrew bereits installiert sein kann dieser Schritt übersprungen werden.

```bash
bash -c "$( curl https://raw.githubusercontent.com/homebrew/install/HEAD/install.sh )"
```

### Schritt 2: Installation von Node.js

Sollte Node.js bereits installiert und aktuell sein, kann dieser Schritt übersprungen werden

```bash
brew install node
```

### Schritt 3: Installation von cds-dk

Die Installation von cds-dk ist zwangshaft notwendig, um mit SAP Cap arbeiten zu können.

```bash
npm i -g @sap/cds-dk
```

## 1.1.2 - Optional

Um später ebenfalls mit Java-Backend-Anbindung arbeiten zu können, werden sowohl die Programmiersprache Java, als auch das Tool Maven benötigt. Außerdem empfielt sich ein Code Editor wie Visual Studio Code (Mit den entsprechenden Extentions).

### Schritt 1: Installation von Java

Außerhalb von SAP:

```bash
brew install java
```

Im Kontext von SAP wird mit Java als sog. Java-SAPmachine gearbeitet, auf Firmengeräten daher anstelle von _brew install java_ folgendes ausgeführt:

```bash
brew install sapmachine-jdk
```

### Schritt 2: Installation von Maven

Maven ist ein Build-Automatisierungstool, was hier benötigt wird, um die CAP Applikation (inklusive Backend) zu testen.

```bash
brew install maven
```

### Schritt 3: Visual Studio Code

Falls noch nicht installiert, kann Visual Studio Code mit folgenden Extentions genutzt werden.

```bash
brew install --cask visual-studio-code            # VS Code itself
```
:::info
Natürlich kann auch jede weitere IDE genutzt werden, insbesondere für IntelliJ IDEA wird ebenfalls Support bereitgestellt.
:::

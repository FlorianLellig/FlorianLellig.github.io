# 1.3 Aufbau von Betriebssystemen

## Grundlagen
### Aufgaben von Betriebssystemen
- Benutzerführung (Mausschupsen heheh)
- Laden und Unterbrechen von Programmen
- Anpassung der Benutzerwelt an die Maschninenwelt
- Verwalten von:
    - Prozessorzeit
    - Internem Speicherplatz für Anwendungen
    - Angeschlossenen Ressourcen (und Betrieb)
    - Betriebsabläufen (Organisation, Koordination und Protokollierung)

## Elemente eines COMPUTERsystems

- Man gliedert ein Betriebssystem in:
    1. Benutzer(ebene)
    2. Anwendung(sebene) --> Details siehe unten
    3. Betriebssystem(ebene) --> Details siehe unten
    4. Hardware(ebene) --> Details siehe unten

![Picture](/documents/Wirtschaftsinformatik/Studienjahr-1/BetriebssystemeKommunikationssysteme/Betriebssysteme1.png)

:::tip
Das Betriebssystem bildet die Schnittstelle zwischen der Hardware und der Anwendungssoftware des Benutzers - es umfasst dabei alle Programme die den Betrieb des Systems steuern und überwachen.
:::

## Start eines Betriebssystems

:::tip
_Booten_ kommt von Bootstrapping. Dies bezeichnet einen Vorgang bei dem ein einfaches System ein komplexeres System startet. 
Der Name stammt von der sogenannten Münchhausen-Methode, welche allgemein beschreibt das ein System sich selbst in Gang setzt.
:::

### 1. Einschalten
Der Computer wird eingeschaltet

### 2. Hardwareerkennung
Hardwareerkennung wird durchgeführt
- POST --> Power on self test

### 3. Fest enthaltenes Maschinenprogramm
Fest enthaltenes Maschinenprogramm wird gestartet
1. Lesen des Sektors 0 auf physikalisch ersten Festplatte
2. Lesen der Partitionstabelle
3. Sprungbefehl zum Bootstrap Loader (innerhalb des Sektors 0)
### 4. Start des Ladeprogramms
- Auch genannt Bootstrap Loader
- Lädt weiteres Ladeprogramm oder das Betriebssystem
### 5. Treiber/Kern laden
- Das letzte Ladeprogramm lädt Treiber UND den Kern des Betriebssystems
### 6. Kommunikationsaufbau 
- Betriebssystem startet Programm zur Kommunikation zwischen OS und User
- z.B. Shell (Nimmt Befehle entgegen und übermittelt diese an User)

## BIOS und UEFI

Für beide Systeme gilt:
- Sind für den Kaltstart des Rechners zuständig
- Gespeichert auf:
    - Früher im ROM oder EPROM
    - Heute in Flash-Speichern
- Hardwaregebundener Teil eines Betriebssystems
    - Schnittstelle zwischen Hardware und Betriebssystem
- Beinhaltet grundlegende/elementare Hilfsprogramme zur Ansteuerung der Hardwarekomponenten (Treiber)
- Aufgaben beim Systemstart:
    - Aufforderung zur Passworteingabe
    - Prüfung/Funktionstest der Geräte (POST)
    - Startbildschirm darstellen
    - Setup für fundamentale Einstellungen bereitstellen
    - Laden des Betriebssystems

### BIOS
- Steht für "Basic Input/Output System"
- eigentlich veraltet
- Übernimmt den Prozess des "ersten Ladens von Software" in den Hauptspeicher

:::tip
Man beschreibt dies oft als Henne-Ei-Problem (Was war zuerst da, das Huhn oder das Ei?)
- Um Software zu starten muss sie in den Hauptspeicher laden, aber das wiederum braucht auch Software....
:::

### UEFI 
- Aktueller Standard
- Beinhaltet zusätzlich zum BIOS alle speziellen Treiber und Konfigurationsdaten
- Aufruf über Tastendruck gleich nach Power On
:::warning
Im Gegensatz zum BIOS ist ein Update möglich, jedoch darf dies auf keinen Fall unterbrochen werden.
:::

## Betriebssystem-Schichtenmodell

![Picture](/documents/Wirtschaftsinformatik/Studienjahr-1/BetriebssystemeKommunikationssysteme/Betriebssysteme2.png)

- Betriebssystemkern:
    - Dauerhaft aktives Programm zur Unterstützung von Anwendungs- und Systemprozessen
- Anwendungsprogramme:
    - Programme die nicht ständig gebraucht werden außerhalb dese Kernels behandelt
    - Werden nur nach Bedarf zum Kernel geladen

## DOS - Disc Operation System
Erstes Betriebssystem für PC's mit Intel 8088 Prozessoren (Entwickelt von IBM und Microsoft)

### Kommandointerpreter
- Teil eines Betriebssystems, der Befehle, die durch Menschen ausgegeben worden sind, versteht und ausübt.
- Ziel: Vermeidung von maschinellen Befehlen für die Kommandoeingabe des Users
- Eingaben werden analysiert und ans Betriebssystem weitergegeben
- Zusammenfassen von mehreren Befehlen in Batch-Dateien möglich

### Interne vs. externe Befehle

#### Interne Befehle sind Teil des Betriebssystem-Kernels 

| Befehl | Beschreibung |
| :--- | :--- |
| `del`, `erase` | Dateien löschen |
| `rd`, `rmdir` | Verzeichnis löschen |
| `dir` | Verzeichnisinhalt anzeigen |
| `cd`, `chdir` | Verzeichnis wechseln |
| `cls` | Löscht den Bildschirminhalt |
| `path` | Zeigt den Suchpfad an |
| `md`, `mkdir` | Verzeichnis erstellen |
| `copy` | Kopieren einer oder mehrerer Dateien |
| `ren`, `rename` | Umbenennen von Dateien oder Verzeichnissen |
| `type` | Anzeigen von Textdateien |
| `set` | Zeigt Umgebungsvariablen oder legt eine neue fest |
| `ver` | Zeigt die Windows-Versionsnummer |
| `vol` | Zeigt die Datenträgerbezeichnung an |


#### Externe Befehle sind Teil der Anwendungsprogramme

| Befehl | Beschreibung |
| :--- | :--- |
| `attrib` | Zeigt Attribute von Dateien oder legt diese fest |
| `format` | Formatieren eines Datenträgers |
| `chkdsk` | Checkdisk – Überprüfung eines Datenträgers |
| `cmd` | Command (Kommandointerpreter öffnen) |
| `defrag` | Defragmentierung der Festplatte |
| `help` | Hilfe zu Befehlen anzeigen |
| `xcopy` | Erweiterte Kopierfunktionen |



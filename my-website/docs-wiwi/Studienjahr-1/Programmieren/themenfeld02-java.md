# Themenfeld 2 - Grundlagen von Java

## Klassifizierung von Software

:::note
Unter Software versteht man im generellen Programme zur Steuerung der Verarbeitungsprozesse, der Übertragungsprozesse und der Speicherungsprozesse in Computern.
:::

### Systemsoftware
- Grundlegende Dienste für andere Programme
- Steuerung des Computersystems (Hardware)
- Ablaufsteuerung anderer Programme

### Anwendungssoftware
- Programme zur Verarbeitung der Daten
- Unterhaltungssoftware
    - inkl. Spiele

### Entwicklungssoftware
- Erstellung und Modifikation von Programmen
- Übersetzungsprogramme für Programmiersprachen

## Eigenschaften von Java
- vollständig objektorientiert
    - ohne prozedurale Altlasten
- unkompliziert - einfach und leicht erlernbar
    - Syntax ähnlich zu C, C++
    - Beschränkung auf das Notwendigste
    - keine Pointer
    - keine Header-Dateien
    - keine Präprozessor-Anweisungen
    - keine Mehrfachvererbung
- Plattformunabhängig (architekturneutral)
    - Übersetzte Java-Programme (Bytecode) sind auf jeder javafähigen Plattform ausführbar
    - fest definierter Wertebereich für Zahlen
- sicher
    - keine direkten Speicherzugriffe mit * Pointerarithmetik
    - strenge Typüberprüfung
    - keine Programmierung mit Sprachverletzung
- robust
    - keine Rechnerabstürze durch Programmierfehler
    - Überprüfung der Speicherzugriffe
    - Ausnahmeroutinen zur Fehlerbehandlung
- multithreaded
    - parallele Ausführung von Programmteilen
- internetfähig
    - Java-Applets sind über das Internet verteilbar und können lokal auf dem Rechner ausgeführt werden

## Umwandlung des Maschinencodes in Bytecode
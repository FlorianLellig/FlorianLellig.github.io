# 1.1 Einführung in Betriebssysteme

## Grundlagen

### Definition
Ein Betriebssystem ist die Software, die den **Betrieb eines Computers ermöglicht** und bildet die **Schnittstelle zwischen Hardwarekomponenten und Anwendungssoftware** des Benutzers.

### Wo gibt es Betriebssysteme?
- In PCs, Telefonen, Smartphones und Tablets
- In Datacentern
- In medizinischen Geräten
- Im Verkehr
- In Fahrzeugmanagement-Systemen
- In der Infrastruktur
- Im Weltall

### Welche Betriebssystemversionen gibt es?


#### 1. Mainframe Betriebssysteme 
- Großrechner
    - Große Speicherkapazitäten
    - Paralleles Processing
    - Schnelle I/O
    - z.B. von IBM oder Sienix

#### 2. Server-Betriebssysteme
- Dienste, die **mehereren Clients zur Verfügung gestellt** werden
- **Performante Kommunikation**
- **Skalierbarkeit**
    - Darauf ausgelegt, **verbaute aber nicht verkaufte Hardware nachträglich** (bei Nachkauf) **freizuschalten**
        - **Günstiger** als durch Techniker nachbauen zu lassen

#### 3. Parallelrechner-Betriebssyssteme
- Gleichzeitige Rechenoperationen auf mehreren Prozessoren
    - Meist mehrere tausend Prozessoren
    - Geeignet für
        - Parallel-Algorithmen mit hohem Rechenbedarf
        - Wettervorhersagen
        - Big Data

#### 4. Desktop/Laptop-Betriebssysteme
- Geeignet für Enduser:
    - Leichte Bedienbarkeit
    - Grafische Oberfläche
    - Interaktionen
- Ursprünglich als Einzelplatzsystem gedacht, später dann um Netzwerkfunktion erweitert
- Z.B. Linux, Windows

#### 5. Echtzeit-Betriebssysteme
- Spezielle Betriebssysteme die Vorgaben haben, wie lange für eine bestimmte Operation gebraucht werden darf
- z.B. Maschinensteuerung, Fahrzeugsteuerung, Unfallerkennung, Ampelsteuerung, ...

#### 6. Eingebettete Betriebssysteme
- Spezielle Betriebssysteme für z.B.
    - Smartphone, Handy, Tablets, ...
    - VoIP-Telefone, Fernseher, ...
    - Kaffeemaschinen, Sensoren, ...

#### 7. Betriebssysteme für Chipkarten
- Spezielle Betriebssysteme für spezielle Anwendungen
- Manchmal nur für EINE konkrete Funktion entwickelt
- z.B. Smartcards (Chip auf einer Kreditkarte)


## Verarbeitungsmodelle von Betriebssystemen
:::note
Verarbeitungssysteme sind Systeme, wie ein Betriebssystem konkret Aufträge abarbeitet.
:::

### Stapelverarbeitung - batch processing
- Prinzip der Queue (wird im Kontext von Betriebssystemen aber als batch processing bezeichnet)
    - Alle Aufträge werden in eine Warteschlange eingereiht
    - First in, First out --> Aufträge werden ausgeführt, sobald sie den Kopf der Warteschlange erreichen und ein Prozessor verfügbar ist
- Keine Interaktion zwischen Benutzer und Programm während der Ausführung
- Beispiele: 
    - Drucken (kann abgebrochen, aber währenddessen nicht verändert werden)
    - Lesen von einer Festplatte (Serielle Verarbeitung)


### Dialogverarbeitung - conversational mode
- Ständige Kommunikation zwischen Benutzer und Rechner während schrittweiser Auftragsabwicklung
- Parallele Ausführung mehrerer Programme
    - Während Programm auf Usereingabe wartet kann ein anderes Ressourcen nutzen
    - Programme können mehrfach parallel gestartet werden
    - Benutzer können Programme während der Ausführung interaktiv beeinflussen
- Zeitscheiben:
    - "Kleine Portionen", die die Ausführungszeiten festlegen
    - Jedes in Ausführung befindliche Programm bekommt demensprechend nur einen Teil der Hardware-Leistung zugeteilt.
- Verzahnung der Wartezeiten ermöglichen Ressourcennutzung für Berechnung anderer Programme

### Echtzeitverarbeitung
- Verarbeitungszeitpunkt wird von Aufgabe selbst bestimmt, um Bearbeitungszeiten einzuhalten

:::warning
Ein System mit Echzeitverarbeitung muss darauf ausgelegt sein, wichtige Reize gleichzeitig zu verarbeiten.
:::










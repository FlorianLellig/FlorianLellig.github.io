# 1.6 Virtualisierte Betriebssysteme

## Grundlagen

- **Virtualisierung** = konkretes Nachbilden/Simulieren eines Hard- oder Softwareobjekts durch ein ähnliches Objekt desselben Typs mithilfe einer Softwareschicht
- Ermöglicht das Erzeugen virtueller (nicht physischer) Komponenten:
    - Emulierte Hardware
    - Software
    - Datenspeicher
    - Betriebssysteme
    - Netzwerkressourcen
- Transparentes Aufteilen oder Zusammenfassen von Computerressourcen möglich
- Ein Betriebssystem kann innerhalb eines anderen ausgeführt werden
- Aquivalentes Verhalten:
    - Gleiche Ressourcen wie reale Maschine (nur meist kleiner/weniger)
- Ressourcen Aufteilung:
    - Keine VM hat beliebig vuele Ressourcen, sondern muss sich diese Teilen

## Begriffliches
- Hostsystem:
    - Betriebssystem was die reale Hardware steuert und verwaltet
- Gastsystem: 
    - Betriebssystem, was in der VM läuft
- Hypervisor:
    - Virtualisierungssoftware
    - Geschafft die Umgebungen für virtuelle Maschinen
    
| Typ | Beschreibung |
|-----|-------------|
| Typ 1 | VMs laufen direkt auf der Hardware |
| Typ 2 | VMs laufen innerhalb eines vollwertigen Betriebssystems |

## Vorteile der Virtualisierung
- Weniger, dafür größere Maschinen
    - Bessere Hardwareauslastung
- Weniger Wartungsaufwand
- Isolation und Sicherheit
- **Veringerung der total cost of Ownership**

## Anwendungsvirtualisierung

*   **Konzept**: Anwendungen laufen lokal in einer **virtuellen Umgebung**, die alle notwendigen Ressourcen bereitstellt.
*   **Positionierung**: Die Virtual Machine (VM) fungiert als Zwischenschicht zwischen der Anwendung und dem Betriebssystem.
*   **Kernbeispiel: Java Virtual Machine (JVM)**:
    *   **Funktion**: Dient als Schnittstelle zwischen Java-Programmen und dem jeweiligen Rechnersystem.
    *   **Abhängigkeit**: Für jedes Wirtsbetriebssystem ist eine spezifische JVM erforderlich.
*   **Bytecode & Interpretation**: 
    *   Der Java-Bytecode ist **hardwareunabhängig**.
    *   Ein Interpreter übersetzt diesen Bytecode in die jeweilige Maschinensprache.
*   **Vor- und Nachteile**:
    *   **Vorteil**: Hohe Plattformunabhängigkeit ("Write once, run anywhere").
    *   **Nachteil**: Geringere Ausführungsgeschwindigkeit im Vergleich zu nativer Programmausführung.

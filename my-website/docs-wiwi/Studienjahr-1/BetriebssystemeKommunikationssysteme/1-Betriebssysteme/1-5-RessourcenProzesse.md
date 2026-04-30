# 1.5 Ressourcen und Prozesse

## Grundlagen

Man unterscheidet zwischen Physikalischen und virtuellen Ressourcen.

### Physikalische Ressourcen
- Prozessor
- Hauptspeicher
- I/O-Geräte
- Hintergrundspeicher

### Virtuelle Ressourcen
- Vom Betriebssystem geschaffene Ressourcen
- Speichersegmente, Dateien, ...

## Interrupts

:::tip
Ein Interrupt ist eine **vorrübergehende zeitliche Unterbrechung eines laufenden Programms**, um einen anderen wichtigeren Vorgang abzuarbeiten.
:::

| **Externe Interrupts** | Bedingt durch Hardware (Gerät an Prozessor)                                          | z.B. Tastatureingabe, Festplatte, Ankommende Netzwerknachricht |
|------------------------|--------------------------------------------------------------------------------------|----------------------------------------------------------------|
| **Interne Interrupts** | Beding durch Prozessor (Prozessor an Prozessor) oder Software (Software an Software) | z.B. bei Bestimmten Fehlersituationen (Divided by Zero)        |

### Ablauf eines Interrupts
 ![Picture](/documents/Wirtschaftsinformatik/Studienjahr-1/BetriebssystemeKommunikationssysteme/Betriebssysteme7.png)

 - Unterbrochene Befehlsfolge bleibt i.d.R. unberührt
 - Verschachtelte Interrupts möglich


## Prozesse
| **Programm** | Folge von Anweisungen und dazugehörigen Dateien                                                                              |
|--------------|------------------------------------------------------------------------------------------------------------------------------|
| **Prozess**  | Programm das sich AKTUELL im Hauptspeicher befindet (Ein Programm kann auch mehrfach im Hauptspeicher als Prozess vorliegen) |

## Thread
- dt. Aktivitätsträger
- Kleinste Einheit eines Prozesses
    - Teilt Programm mit anderen Threads
    - Läuft unabhängig von anderen Threads
        - Jeder Thread repräsentiert eine eigene Aktivität
- Vorteile:
    - Nebenläufige Programmierung möglich

## Parallelität und Nebenläufigkeit

| **Parallelität**    | Unabhängig voneinander, zeitgleich ausgeführt; nur auf Multiprozessoren möglich          |
|---------------------|------------------------------------------------------------------------------------------|
| **Nebenläufigkeit** | Scheduling-Strategie, um Prozesse/Threads zu durchmichen und Parallelität zu simmulieren |

## Application Programmers Interface

- **Definition:** 
    - Eine API ist ein Regelwerk für die Kommunikation zwischen verschiedenen Anwendungen oder zwischen einer Anwendung und dem Betriebssystem.

- **Funktion:** 
    - Sie dient als Vermittlungsebene, die den Datenaustausch zwischen verschiedenen Systemen verarbeitet.

- Alltagsbeispiel (Restaurant):
    - Gast (Anwendung) gibt Bestellung auf.
    - Bedienung (API) übermittelt die Bestellung an die Küche (Betriebssystem).
    - Bedienung (API) bringt das fertige Ergebnis (Essen/Daten) zurück zum Gast.
- Technisches Beispiel (Smartphone):
    - Eine App sendet Daten über das Internet an einen Server.
    - Der Server verarbeitet diese und sendet Ergebnis-Daten zurück.
    - Die API wickelt diesen gesamten Prozess der Datenübertragung und -interpretation ab.
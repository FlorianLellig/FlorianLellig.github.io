# 1.4 Festplatten und Dateien 

## Formatieren einer Festplatte
Man unterscheidet das Formatieren einer Festplatte in unterschiedliche Gruppen:

### Low-Level-Formatierung
- Physikalische Einteilung eines Speichermediums in Spuren und Sektoren durch den Controller 
- Defekte Sektoren werden ausgeblendet
- I.d.R. vom Hersteller durchgeführt

### Partitionierung
- Logische Einteilung eines Speichermediums in zusammenhängende Strukturen
- z.B. in C-Disk, D-Disk, ...

### High-Level-Formatierung
#### A. Normalformatierung
- Suche nach fehlerhaften Sektoren undabhängig vom Dateisystem
    - Ausblenden von fehlerhaften Sektoren
- Logische Einteilung der Partitionsstruktur mit einem Dateisystem
    - Einrichten eines Dateisystems
        - Z.B. FAT32, NTFS, ext2, ...
    - Evtl. vorhandene Daten werden gelöscht.
        - Seit Windows Vista werden Dateien physisch mit Nullen überschrieben

#### B. Schnellformatierung
- Keine Suche nach fehlerhaften Sektoren
- Schreiben einer neuen Dateitabelle
- Evtl. vorhandene Dateien werden gelöscht
    - Achtung: Nur das Inhaltsverzeichnis wird gelöscht, die eigentliche Datei bleibt

### Zusammenfassung

| **Formatierungstyp**   | **Physikalische Einteilung eines Speichermediums** | **Suche bzw. Ausblenden fehlerhafter Sektoren** | **Logische Einteilung in Partitionen** | **Daten werden gelöscht** |
|------------------------|----------------------------------------------------|-------------------------------------------------|----------------------------------------|---------------------------|
| Low-Level-Formatierung | ✅                                                  | ✅                                               | ❌                                      | ✅                         |
| Partitionierung        | ❌                                                  | ❌                                               | ✅                                      | ❌                         |
| Normalformatierung     | ❌                                                  | ✅                                               | ✅                                      | ✅                         |
| Schnellformatierung    | ❌                                                  | ❌                                               | ❌                                      | ✅*                        |

:::warning
Bei der Schnellformatierung werden die Dateien nicht vollständig gelöscht, es wird lediglich das Inhaltsverzeichnis entfernt. Mit entsprechender Software können Daten also nachträglich wiederhergestellt werden.
:::

## Strukturieren von Dateien

### Verzeichnisse

#### Grundlagen
- Konzept zur Strukturierung bzw. Gruppierung von Dateien
- Es gilt: 
    - Ein Verzeichnis ist eine Art Inhaltsverzeichnis mit allen zugeordneten Dateinamen und Einträgen 
    - Ein Verzeichnis wird in der Shell durch einen Punkt (.) signalisiert
- Ein Verzeichnis besteht aus:
    - Der Punkt (.) - Datei
    - Der PunktPunkt (..) - Datei (Verweis auf das übergeordnete Verzeichnis)
    - Inhalt bzw. Daten

#### Root Verzeichnis
- Das Root-Verzeichnis ist das oberste Verzeichnis (meist "C:\ ")


### Path-Befehl
- Umgebungsvariable für den Suchpfad in einem Betriebssystem
- Ermöglicht ein direktes Ausführen eines Programms, ohne das der gesamte Pfad angegeben werden muss
- Aktuell definierte "Path's" lassen sich mittels `path` ausgeben

### Dateisysteme

Es gibt verschiedene Dateisysteme:

| Dateisystem | FAT16 | VFAT | FAT32 | NTFS |
| :--- | :--- | :--- | :--- | :--- |
| **Ursprung** | MS-DOS | Windows 95 | Windows 95B | Windows NT |
| **Maximale Dateigröße** | 2 GByte | 4 GByte | 4 GByte | 18 Exabyte |
| **Maximale Partitionsgröße** | 2 GByte | 4 GByte | 8 Tbyte | 18 Exabyte (256 TB) |
| **Maxim. Länge der Datei- und Verzeichnisnamen** | 8 | 255 | 255 | 255 |
| **Datei- und Verzeichnisattribute** | 3 | 3 | 3 | erweitert |

## Eigenschaften von Dateien

### Attribute bei NTFS-Dateien
Attribute bei NTFS-Daten beschreiben diese näher. Man kann diese mithilfe von `attrib +S/-S` setzen oder entfernen. Man unterscheidet zwischen "Normalen" und "Erweiterten" Attributen:

#### "Normale" Attribute
1. Attribut `schreibgeschützt`
2. Attribut `versteckt`
3. Attribut `Archiv`
4. Attribut `System` 
    - Nicht direkt sichtbar (kennzeichnet Systemdatei)
    - Versteckte Attribute lassen sich mithilfe von `attrib *.*` anzeigen.

#### "Erweiterte" Attribute
1. Attribut `Indexattribut`
2. Attribut `Komprimierungsattribut`
3. Attribut `Verschlüsselungsattribut`

### Zugriffskontrollmatrix (access-control-List)
- Legt fest, wie User und Systemprozesse Zugriff auf Dateien haben
- ACLs bestehen aus ACE's (Access-control-entities)
    - Negative ACE's --> Entziehen Berechtigungen
    - Positive ACE's --> Lassen Berechtigungen zu
- Man unterscheidet zwischen folgenden Berechtigungen

Für Dateien:
| **Dateiberechtigung** | **Zugriffsmöglichkeiten**                                              |
|-----------------------|------------------------------------------------------------------------|
| Read                  | Dateien (inkl. Berechtigungen, Besitzrechte, Attribute, etc.) einsehen |
| Write                 | Dateien und Attribute überschreiben; Berechtigungen/Besitzrechte LESEN |
| Execute               | Lesen + Ausführen                                                      |
| Ändern                | Schreiben, lesen und ausführen  Dateien ändern und löschen             |
| Vollzugriff           | Alle übrigen (z.B. Berechtigungen ändern; Besitz übernehmen)       |

Für Ordner:
| **Ordnerberechtigung**  | **Zugriffsmöglichkeiten**                                                        |
|-------------------------|----------------------------------------------------------------------------------|
| Lesen                   | Unterverzeichnisse auflisten; Dateien lesen; Berechtigungen, Besitzrechte, Attribute einsehen |
| Schreiben               | Unterverzeichnisse und Dateien erstellen; Berechtigungen, Besitzrechte einsehen; Attribute ändern |
| Ordnerinhalt auflisten  | Unterverzeichnisse und Dateien auflisten und lesen                               |
| Lesen, Ausführen        | Lesen + Ordnerinhalt auflisten + Navigieren im Verzeichnis                       |
| Ändern                  | Lesen, Ausführen + Schreiben + Verzeichnis löschen                               |
| Vollzugriff             | Übrige Berechtigungen + Besitz übernehmen + Berechtigungen ändern                |


## Dateispeicherung

### Bit und Byte

#### Bit (Binary Digit)
- Kleinstmögliche Einheit von Informationen
- Zustand 0 oder 1 wird entsprechend kodiert
    - 0 = falsch und 1 = wahr
    - 0 = nein und 1 = ja
    - 0 = unmagnetisiert und 1 = magnetisiert

#### Byte
- Zusammenfassen von Bits in einer Gruppe
- 8 Bit = 1 Byte

### Hard-Disk-Drive (HDD)
- Ist den magnetischen Speicherverfahren untergeordnet (Magnetisiert = 1; unmagnetisiert = 0)
- Besteht aus einem Staubdichten, aber nicht luftdichten Körper
- Scheiben werden unterteilt in Zylinder und Sektoren
    - Damit lassen sich kleinstmögliche Bereiche ansteuern
- Früher aus Aluminium mit Magnetschicht, Mittlerweile aus Cobalt-Chrom-Platin
- Schreibköpfe sind Induktiv und erzeugen damit ein Magnetfeld zum magnetisieren und entmagnetisieren von Blöcken
    - Müssen sehr nah an der Platte sein (damit Staub nicht verhindert muss die Platte möglichst Staub und Rauchfrei sein)

:::tip
**Logischer Aufbau von Festplatten**

![Picture](/documents/Wirtschaftsinformatik/Studienjahr-1/BetriebssystemeKommunikationssysteme/Betriebssysteme3.png)

Man unterteilt eine Hard-Disk-Drive in folgende Bauteile
1. **Platten:**
    - Beschreiben die einzelnen "Scheiben" die von den Schreib/Leseköpfen gelesen werden
2. **Sektoren**
    - Vergleichbar zu einem "Kuchenstück"
    - Sektor hat die Breite eines Blocks
3. **Spuren**
    - Kreisförmige Spuren
    - Man unterscheidet zwischen
        1. Tracks
            - Einzelne Spur auf einer Platte
            - Unterteilt in die durch Sektoren vorgegebenen Blöcke
        2. Zylinder
            - Alle Spuren, die direkt übereinander liegen
4. **Block**
    - Überschneidung eines durch Spur und Sektor vorgegebenen Bereichs
    - Typischerweise 512 Bytes groß
    - Mehrere Blöcke bilden zusammen ein Cluster
:::

#### Cluster
- Zusammenschluss von der Hälfte aller Blöcke auf einer Spur
- Kleinste Menge an Speicherplatz die zum Speichern einer Datei zugeordnet werden kann
- Clustergröße variiert je nachdem wie groß die Festplatte ist:
    - bis 16 TByte = 4 kByte Cluster*
    - bis 32 TByte = 8 kByte Cluster*
    - bis 64 TByte = 16 kByte Cluster*
    - bis 128 TByte = 32 kByte Cluster*
    - bis 256 TByte = 64 kByte Cluster*

    *gilt für NTFS-Filesystem

### Solid-State-Drives (SSD)

#### Grundlegendes
- Halbleiterlaufwerke (Arbeiten mit Halbleitern statt mit mechanischen Bauteilen)
    - Baut auf Gesetzmäßigkeiten der Quantenmechanik auf
- Vorteile:
    - Kurze Zugriffszeiten
    - Geringer Energieverbrauch
    - Keine Geräuchentwicklung
    - Mechanische Robustheit
    - Geringes Gewicht
    - Datenposition irrelevant (und damit auch Defragmentierung)
- Nachteile:
    - Höherer Preis
    - Begrenzte Anzahl an Löschzyklen (heute bis zu 5 Mio.)

#### Funktionsweise der Flash-Speicher

Aufbau:

![Picture](/documents/Wirtschaftsinformatik/Studienjahr-1/BetriebssystemeKommunikationssysteme/Betriebssysteme4.png)

- **Schreiben von Daten:**
    1. Spannung (5 Volt) von Source nach Drain
    2. Hohe Spannung (12 Volt) an Control Gate
        - Zieht Elektronen durch Isolator in Floating Gate
    3. Bei Spannungsentfernung bleiben sie im Floating Gate
        - Das Floating Gate ist negativ geladen
:::note
Durch die Negative Ladung des Floating Gates ist es Elektronen nicht mehr so einfach möglich, von der Source zur Drain zu fließen
:::
- **Lesen von Daten:**
    1. Anlegen einer geringen Spannung (1 Volt) zwischen Source und Drain
        - Wenn Floating Gate negativ geladen kann der Kreislauf (mit geringer Spannung) nicht geschlossen werden
    2. Auswertung:
        - Kein Stromfluss --> Ladefalle geladen --> Logische 1
        - Stromfluss --> Ladefalle nicht geladen --> Logische 0
- **Löschen von Daten:**
    1. Anlegen von 0 Volt an Control Gate und 12 Volt an Drain
        - Elektronen werden aus Floating Gate rausgezogen
:::warning
Durch den Löschvorgang leidet die isolierende Schicht - demnach nimmt der Flash-Speicher Schaden an.
- Irgendwann ist die isolierende Schicht nicht mehr ausreichend, um die Ladung in der Ladungsfalle zu halten.
:::

:::warning
Vor jedem Schreibvorgang erfolgt ein Löschvorgang - daher sollte eine SSD nicht defragmentiert werden (Meist sowieso nicht mehr möglich)
- Zur Prävention wird ein Counter geführt, der die Löschzyklen zählt, um eine gleichmäßige Abnutzung zu erzielen.
:::

### Weitere Speichertypen (inkl. Speicherpyramide)

#### Random Access Memory (RAM)
- Dateien bei Anlage der Betriebsspannung beliebig lange speicherbar

#### Dynamic Random Access Memory (DRAM)
- Die Informationen sind in Kondensatoren gespeichert

#### Nichtflüchtiger Speicher
- Read-only-Memory (ROM)
- Ultra-Violet-Erasable-Prgrammable ROM (UV-EPROM)
- Electrically Erasable Prgrammable ROM (EEPROM)

#### Speicherpyramide
![Picture](/documents/Wirtschaftsinformatik/Studienjahr-1/BetriebssystemeKommunikationssysteme/Betriebssysteme5.png)

- **Primärspeicher:** Darauf kann der Prozessor direkt zugreifen
    - Register:
        - Genauso schnell getaktet wie CPU
    - Cache:
        - Schell und Prozessornah
        - Für Schreibzugriffe zwei Methoden:
            1. Write-Back
                - Erst zurückschreiben wenn Daten aus dem Hauptspeicher verdrängt werden
                - Ggf. Dateninkonsitenzen möglich
            2. Write-Through
                - Sofortiges Durchschreiben auf tiefere Ebenen
                - Langsamer
        - Drei Typen:
            - L1-Cache (16 bis 256kB)
            - L2-Cache (256kB bis 12 MB)
            - L3-Cache (4MB bis 15 MB)
- **Sekundärspeicher:** Hintergrundspeicher, der über einen Controller angesprochen wird
- **Tertiärspeicher:** Nicht dauerhaft verfügbar, oder über ein Laufwerk mit dem Rechner verbunden. Hauptaufgabe ist Archivierung
    - Unterschieden in 
        - Nearline-Speicher (ohne menschl. Eingreifen erreichbar)
        - Offlinespeicher (Gelagert)

## Swapping

### Grundsituation
- Aktiven Programme benötigen mehr Hauptspeicher als vorhanden ODER Lücken im Hauptspeicher
    - Früher: Fehler
    - Heute: Swapping (temporäre Auslagerung auf Festplatte)

### Lösung
 ![Picture](/documents/Wirtschaftsinformatik/Studienjahr-1/BetriebssystemeKommunikationssysteme/Betriebssysteme6.png)


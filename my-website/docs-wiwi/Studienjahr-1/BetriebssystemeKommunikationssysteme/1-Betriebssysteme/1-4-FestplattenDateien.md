# 1.4 Festplatten und Dateien 

## Formatieren einer Festplatte
Man unterscheidet das Formatieren einer Festplatte in unterschiedliche Gruppen:

### Low-Level-Formatierung
- Physikalische Einteilung eines Speichermediums in Spuren und Sektoren durch den Controller 
- Defekte Sektoren werden ausgeblendet
- I.d.R. vom Hersteller durchgeführt

### Partitionierung
- Physikalische und logische Einteilung eines Speichermediums in zusammenhängende Strukturen
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
| Partitionierung        | ✅                                                  | ❌                                               | ✅                                      | ❌                         |
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


## Eingenschaften von Dateien

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

### Zugriffskontrollmatrix
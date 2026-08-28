# 1. Unix

:::note
**Wichtiges Vorwissen:**
>Hierbei handelt es sich lediglich um einen kurzen Auszug, Details siehe 1. Studienjahr (Kommunikationssysteme)
#### 1 - Physical layer
- Hubs, Switches --> Bitweise Übertragung
#### 2 - Data link layer
- Fehlerfreie Kommunikation sicher stellen
- Mac Adressen
#### 3 - Internet Layer
- Router, etc. --> Routing im Netzwerk durchführen
- IP-Adressen
#### 4 - Transport Layer
- Sockets --> Ermöglichen Kommunikation zum Prozess
- Ports
    - Bsp: Email
        - Damit man den richtigen Prozess für das Email-Datenpaket erreicht waren an Ports spezielle Prozesse, die genau die richtigen, entsprechenden Datenpakete verarbeiten können
#### 5 - Anwendungslayer
- Anwendungen wie z.B. Http-Server
:::

## 1.1 - Ausgangslage

## 1.2 - Grundlagen über Unix
- Betriebsssystem, was 1969 von Bell Labortories entwickelt worden ist
    - Ist zu großen Teilen in C geschrieben
- Mehrbenutzerbetriebssystem, d.h. mehrere Arbeitsplätze können an derselben Maschine genutzt werden 
- Geeignet für Großrechner, Server, Computer-Cluster, Notebooks, Smartphones, Embedded Devices, usw.

## 1.3 - Stellenwert von Unix
- Unix teilte sich im wesentlichen in zwei Zweige auf:
    1. Proprietärzweig
        - Zweig mit spezieller Lizenz, die eine Verwendung von Unix erlaubt ohne das Änderungen offengelegt werden müssen
        - Genutzt von z.B. MacOS, HP-UX, AIX (von IBM)
    2. Open source Zweig
        - Zweig der voraussetzt, das Änderungen offengelegt werden müssen
        - z.B. Free-BSD, **Linux**, Android

:::note
**Linux - SONDERFALL:**
Der Zusammenhang zu Unix ist bei Linux nicht die Abstammung, sondern Nachbau der Schnittstelle. Linux verhält sich wie Unix, weil es POSIX (siehe 1.1.4) implementiert – dieselben System Calls, dieselbe Shell, dieselben Kommandos. Aber die Implementierung dahinter ist unabhängig entstanden.
--> Man spricht auch von _Unix-like_
:::

## 1.4 - POSIX (Portable Operating System Interface)
- Ein durch die IEEE festgelegter Standard der beschreibt, **wie sie ein Unix-artiges System nach außen hin verhalten muss**
    - Standardisierte Programmschnittstelle in Unix
- Standard legt das Verhalten fest:
    1. **System Calls** (für Programmierer):
        - Festlegen, welche Funktionen der Kernel anbieten muss und wie sie sich verhalten
    2. **Shell und Hilfsprogramme** (für Anwender/-innen):
        - Dass eine Shell mit definierter Syntax existiert (Pipes, Umleitungen, Variablen) 
        - Dass Kommandos wie `ls`, `grep`, `sed`, `awk`, `chmod` vorhanden sind und sich mit bestimmten Optionen erwartbar verhalten.

:::info
Der Standard für POSIX wurde im Jahr 1988 eingeführt, um der durch die Spaltung des Unix in verschiedene Variationen der einzelnen Hersteller entgegenzuwirken.
In den 80ern hatte nahezu jeder Hersteller seine eigene Unix Variante. Dies führte dazum dass Software immer nur mit einem Herstellersystem - und nie übergreifend - kompatibel war. Dies nannte man damals die sog. Unix-Wars.
:::

## 1.5 - Shell
### 1.5.1 - Grundlagen
- Programm, das eingetippte Befehle entgegennimmt und dafür sorgt, dass diese ausgeführt werden
    - Bildlich gesprochen: Shell ist die _Schale um den Kernel herum_. Der Kernelverwaltet Hardware, Speicher und Prozesse, kann aber nur durch die Shell, sprich die Schale, angesprochen werden.
- Textbasierte Benutzungsschnittstelle

:::tip
Die Shell lässt sich in gewisser Weise wie eine Art _Starter_ bzw. _Verkabler_ von Hilfsprogrammen beschreiben: Sie startet die nötigen Prozesse, welche wiederum direkt mit dem Kernel sprechen können. Außerdem richtet sie Umgebungsvariablen ein, stellt Arbeitsverzeichnis bereit und verbindet Pipes (mehrere in Reihe _geschaltete_ Befehle) um anschließend auf deren Ergebnis zu warten.

**Metapher von Claude:**
>Die Shell ist die Steckdosenleiste und das Patchfeld im Tonstudio. Die Geräte funktionieren eigenständig, aber jemand muss sie einstecken und die Kabel richtig stecken. Und ein paar Schalter sitzen direkt am Patchfeld selbst – das sind die Built-ins.
:::

### 1.5.2 - Typische Funktionen
>Die folgenden Funktionen werden alle von Haus aus - ohne zusätzliche Hilfsprogramme - durch die Shell bereitgestellt
- Stoppen und Starten von Programmen als Prozesse im Vorder- oder Hintergrund
- Verkettung von Pipes
- Abbruch eines Programms mit `Ctrl-C`
- Bereitstellen von Umgebungsvariablen (z.B. `$HOME` und `$PATH`)
- Ein-/Ausgabeumlenkung (Details siehe Unterpunkt 1.6 - Bash)
- Bedingungen (`if`, `case`) und Schleifen (`while`, `for`)
- Interne Kommandos (`cd`, `read`)
    - Hierbei handelt es sich um Befehle, die ähnlich wie Hilfsprogramme funktionieren, jedoch NICHT mittels `$PATH` Variable abgerufen, sondern von der Shell direkt bereitgestellt werden
- Editieren der Kommandozeile und früherer Kommandos

## 1.6 - Bash
- Bash = "Bourne-Again-Shell"
- freie Unix-Shell mit vielen Funktionen
:::info
Die Bash ist eine konkrete Implementierung - die Shell ist eine Art Gattung. Ähnlich wie "Browser" und "Firefox".
:::

### 1.6.1 - Ein-/Ausgabeumleitungen

Jedes Programm hat in Unix drei standardmäßige Kanäle, über die es mit der Außenwelt kommuniziert:

| Kanal | Name | Nummer | Bedeutung |
|-------|------|--------|-----------|
| stdin  | Standardeingabe  | 0 | Woher liest das Programm Daten? (Standard: Tastatur) |
| stdout | Standardausgabe  | 1 | Wohin schreibt das Programm seine Ergebnisse? (Standard: Terminal) |
| stderr | Fehlerausgabe    | 2 | Wohin schreibt das Programm Fehlermeldungen? (Standard: Terminal) |

Diese Kanäle lassen sich mit folgenden Operatoren **umleiten**:

| Operator | Bedeutung | Beispiel |
|----------|-----------|---------|
| `<`  | Eingabe aus Datei lesen statt von Tastatur | `sort < liste.txt` |
| `>`  | Ausgabe in Datei schreiben (überschreibt) | `ls > ausgabe.txt` |
| `>>` | Ausgabe an Datei anhängen (kein Überschreiben) | `echo "neu" >> log.txt` |
| `2>` | Fehlerausgabe in Datei umleiten | `cmd 2> fehler.txt` |
| `\|`  | Pipe: Ausgabe eines Befehls als Eingabe des nächsten | `ls \| grep txt` |

:::tip
**Merkhilfe:** Der Pfeil zeigt an, in welche Richtung die Daten fließen.  
`<` = Daten fließen *in* das Programm hinein  
`>` = Daten fließen *aus* dem Programm heraus
:::

**Spezielle Gerätedateien:**

Unix behandelt fast alles als Datei — auch Geräte. Drei besonders nützliche Pseudodateien:

- `/dev/null` — das „Nirwana": Alles was hineingeschrieben wird, verschwindet. Nützlich um unerwünschte Ausgaben zu unterdrücken: `cmd 2> /dev/null`
- `/dev/zero` — liefert beim Lesen eine endlose Folge von Null-Bits. Wird z.B. zum Löschen von Festplattenbereichen genutzt.
- `/dev/urandom` — liefert beim Lesen eine endlose Folge von Zufallsbits. Wird z.B. zur Schlüsselgenerierung genutzt.

:::note
**Beispiel — Ausgabeumleitung mit `>`:**
```bash
ls > dateien.txt
```
Statt die Verzeichnisliste im Terminal anzuzeigen, wird sie in die Datei `dateien.txt` geschrieben. Existiert die Datei bereits, wird sie **überschrieben**. Mit `>>` würde der Inhalt stattdessen angehängt.
:::

:::note
**Beispiel — Pipe:**
```bash
cat datei.txt | grep "Fehler" | sort | uniq
```
Hier liest `cat` die Datei, `grep` filtert nur Zeilen mit "Fehler", `sort` sortiert sie, und `uniq` entfernt Duplikate — alles ohne eine einzige Zwischendatei.
:::

### 1.6.2 - Bash-Programmierung

Bash-Skripte sind Textdateien mit einer Folge von Shell-Befehlen. Sie beginnen immer mit der sogenannten **Shebang-Zeile**, die dem System sagt, welcher Interpreter das Skript ausführen soll:

```bash
#!/bin/bash
# Das ist ein Kommentar — Zeilen mit # werden ignoriert
```

**Eingabe einlesen:**

`read` liest eine Zeile von stdin und speichert sie in einer Variable:

```bash
read name
echo "Hallo $name"
```

**if-Anweisung:**

```bash
if [ Bedingung ] ; then
  # falls Bedingung wahr
else
  # falls Bedingung falsch
fi
```

**while-Schleife:**

```bash
while [ Bedingung ] ; do
  # Befehl(e) in Schleife
done
```

**for-Schleife:**

```bash
for i in $( ls ); do
  echo item: $i
done
```

:::tip
`$( ls )` ist eine sogenannte **Befehlssubstitution** — die Ausgabe von `ls` wird als Liste von Werten in die Schleife eingesetzt. Das Prinzip funktioniert mit jedem Befehl: `$( befehl )`.
:::

## 1.7 - Unix-Befehle

### 1.7.1 - Wichtige System-Befehle

| Befehl | Beschreibung |
|--------|-------------|
| `man` | Öffnet die Manual-Seite (Hilfe) zu einem Befehl, z.B. `man ls` |
| `cd` | Wechsel des Arbeitsverzeichnisses, z.B. `cd /home/user` |
| `ls` | Listet Dateien und Verzeichnisse auf |
| `ls -l` | Lange Ausgabe inkl. Zugriffsrechte, Besitzer, Größe und Datum |
| `rm` | Löscht Dateien; mit `-r` rekursiv (Verzeichnisse), mit `-f` ohne Rückfrage |
| `cp` | Kopiert Dateien, z.B. `cp quelle.txt ziel.txt` |
| `ln` | Erstellt einen Hard-Link (zwei Namen für dieselbe Datei) |
| `ln -s` | Erstellt einen Symbolic-Link (eine Art Verknüpfung/Shortcut) |
| `chmod` | Ändert Zugriffsrechte einer Datei oder eines Verzeichnisses |
| `sudo` | Führt einen Befehl mit Root-Rechten (Systemrechten) aus |

:::info
**Hard-Link vs. Symbolic-Link:** Ein Hard-Link ist ein zweiter Name für dieselbe Datei — löscht man das Original, existiert die Datei weiter. Ein Symbolic-Link ist nur ein Verweis; löscht man das Original, ist der Link „kaputt".
:::

### 1.7.2 - Ausgabe- und Filter-Befehle

| Befehl | Beschreibung |
|--------|-------------|
| `echo` | Gibt Text aus, z.B. `echo "Hallo Welt"` |
| `cat` | Gibt den gesamten Inhalt einer Datei aus |
| `less` | Zeigt Dateiinhalt seitenweise an — mit Pfeiltasten navigieren, `q` zum Beenden |
| `head` | Gibt die ersten 10 Zeilen einer Datei aus (anpassbar mit `-n`) |
| `tail` | Gibt die letzten 10 Zeilen einer Datei aus — nützlich z.B. für Logfiles |
| `wc` | Zählt Zeichen, Wörter und Zeilen einer Datei (`-l` nur Zeilen, `-w` nur Wörter) |
| `grep` | Filtert Zeilen nach einem Muster, z.B. `grep "Fehler" logfile.txt` |

### 1.7.3 - Systeminformationen

| Befehl | Beschreibung |
|--------|-------------|
| `ps` | Zeigt laufende Prozesse und deren Zustände |
| `top` | Interaktive Systemübersicht mit sortierter, sich aktualisierender Prozessliste |
| `df` | Zeigt freien Speicherplatz aller eingehängten Dateisysteme |
| `du` | Zeigt belegten Speicherplatz von Dateien und Verzeichnissen |
| `id` | Gibt Informationen zur eigenen Kennung aus (UID, GID, Gruppen) |
| `mount` | Zeigt alle eingehängten Dateisysteme und deren Mount-Punkte |
| `dmesg` | Gibt Kernel-Meldungen und Fehlermeldungen aus (nur root) |

### 1.7.4 - Tools

| Befehl | Beschreibung |
|--------|-------------|
| `nano` | Einfacher Texteditor im Terminal — `Ctrl-O` speichern, `Ctrl-X` beenden |
| `find` | Durchsucht Verzeichnisse rekursiv nach Dateinamen, z.B. `find . -name "*.txt"` |
| `sed` | Stream Editor: bearbeitet Texte zeilenweise, z.B. Ersetzen von Mustern |
| `awk` | Skriptsprache zur Verarbeitung strukturierter Textdaten (spaltenweise) |

:::note
**Beispiel `sed` — Text ersetzen:**
```bash
echo "IT 1" | sed 's/1/Advanced/'
# Ausgabe: IT Advanced
```
`s/alt/neu/` ist das Suchmuster: ersetze `alt` durch `neu`.
:::

:::note
**Beispiel `awk` — Spalte ausgeben:**
```bash
echo "Advanced IT" | awk '{print $2}'
# Ausgabe: IT
```
`$1`, `$2`, ... stehen für die einzelnen Spalten (durch Leerzeichen getrennt). `$0` ist die gesamte Zeile.
:::


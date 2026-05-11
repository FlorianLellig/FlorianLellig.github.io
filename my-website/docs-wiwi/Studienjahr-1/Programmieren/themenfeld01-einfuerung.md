# Themenfeld 1 - Einführung

## Algorithmus
:::note 
Ein Algorithmus ist eine präzise und endliche Beschreibung eines allgemeinen Verfahrens unter Verwendung von ausführbaren und elementaren (Verarbeitungs-)Schritten.
:::

### Eigenschaften eines Algorithmus
#### Terminierung
Terminierung beschreibt, dass ein Algorithmus nach endlich vielen Schritten abbricht und nicht unendlich läuft.

#### Determinismus
Determinismus beschreibt die Festlegung der "Wahlfreiheit" eines Algorithmus. 
- Deterministisches Ablauf
    - Legt einen eindeutigen Ablauf der Schrittabfolge fest
    - Schrittabfolge bei gleich bleibenden Eingabewerten bzw. Parametern immer gleich
- Determinisitsches Ergebnis
    - Es wird ein eindeutiges Ergebnis geliefert - auch bei mehrfacher Ausführung

### Bestandteile eines Algorithmus

| Bestandteil | Beschreibung | Beispiel |
|---|---|---|
| Elementare Operationen | Ausdrücke und Anweisungen | Berechne 5 plus 7 |
| Sequenzielle Ausführung | Schritte werden nacheinander ausgeführt | Berechne 10 minus 3, dann multipliziere das Ergebnis mit 4 |
| Parallele Ausführung | Schritte werden gleichzeitig ausgeführt | Du rechnest Aufgabe 1 und ich rechne Aufgabe 2 |
| Bedingte Ausführung | Ein Schritt wird nur unter einer Bedingung ausgeführt | Wenn Du Aufgabe 1 gelöst hast, dann beginne mit Aufgabe 2 |
| Schleife | Ein Schritt wird wiederholt ausgeführt | Rechne Aufgabe 1, bis Du das richtige Ergebnis bekommst |
| Unterprogramm | Ausführung eines ausgelagerten Teilprogramms | Rechne Aufgabe 1 anhand der Lösung auf Seite 106 |
| Variablen und Konstanten | Benannte Speicherplätze für Werte | - |

### Darstellungsformen von Algorithmen

:::warning
Im folgenden werden einzelne Darstellungsformen nur kurz erleutert - die konkrete Umsetzung erfolgt laut Vorlesungsskript.
:::

#### Pseudocode
- Angelehnt an die Struktur verbreiteter Programmiersprachen
- Verwendet feststehende englische Schlüsselwörter (z. B. `IF`, `WHILE`, `PRINT`)
- Diese Schlüsselwörter haben eine eindeutig festgelegte Bedeutung

#### Programmablaufplan
- Genormt nach DIN 66001
- Hat seinen Ursprung in der linearen Programmierung
- Aufgrund eingeschränkter Übersichtlichkeit nur für kleinere Programme geeignet

#### Nassi-Shneiderman-Diagramm (Struktogramm)
- Entwickelt im Jahr 1973
- Darstellung genormt nach DIN 66261 (seit 1985)
- Wird überwiegend in der prozeduralen Programmierung eingesetzt

## Grundbegriffe der Programmierung

| Begriff | Beschreibung | Beispiel |
|---|---|---|
| Ausdruck | Kombination von Operanden und Operatoren als „Vorschrift" zur Berechnung eines Werts; liefert immer einen Ergebniswert | `(a + b) * 2` |
| Anweisung | Kombination von Ausdrücken und Methoden als „Vorschrift" zur Ausführung einer Aktion | `z = a + b` (Wertzuweisung), `System.out.println(name)` (Ausgabe) |
| Sequenz | Zeitliche Abfolge von Anweisungen; Schritte werden durchnummeriert oder durch Semikolon getrennt | 1. Eingabe lesen; 2. Berechnung durchführen; 3. Ergebnis ausgeben |
| Bedingte Anweisung | Bedingungen werden auf ihre Richtigkeit geprüft; für wahre und falsche Bedingungen können unterschiedliche Anweisungen ausgeführt werden | `if (alter >= 18) { zutritt(); } else { ablehnen(); }` |
| Schleife | Bestimmte Anweisungen werden wiederholt, bis eine definierte Endbedingung erfüllt wird; Unterscheidung in drei Schleifenarten | `while (i < 10) { summe += i; i++; }` |
| Unterprogramm | Beinhaltet einen Teilalgorithmus, der in mehreren Algorithmen wiederverwendet werden kann | `berechneRabatt(preis, prozent)` |
| Variable | „Platzhalter" für einen konkreten Wert; von einem bestimmten Datentyp; kann ihren Wert ändern | `int punktestand = 0;` |
| Konstante | Hat einen festen Wert; von einem bestimmten Datentyp; kann ihren Wert **nicht** ändern | `final double MWST = 0.19;` |



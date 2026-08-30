# Themenfeld 5 - Objektorientierung

:::info
Dieses Themenfeld wurde nach der Klausur mit Hilfe von KI der Vollständigkeit halber ergänzt.
:::

## Grundbegriffe

| Begriff | Beschreibung | Beispiel |
|---------|-------------|---------|
| **Klasse** | Bauplan/Schablone für gleichartige Objekte; beschreibt Attribute und Methoden | `class Auto {}` |
| **Objekt** | Konkrete Instanz einer Klasse mit eigenen Attributwerten | `Auto meinAuto = new Auto();` |
| **Attribut** | Variable, die den Zustand eines Objekts beschreibt | `String farbe;` |
| **Methode** | Funktion innerhalb einer Klasse, die das Verhalten eines Objekts beschreibt | `void fahren() {}` |

## UML Klassendiagramm

Ein Klassendiagramm zeigt die Struktur einer Klasse in drei Bereichen:

```
+-----------------------------+
|         Klassenname         |
+-----------------------------+
| - attribut1 : Typ           |
| + attribut2 : Typ           |
+-----------------------------+
| + methode1() : Rückgabewert |
| - methode2(param : Typ)     |
+-----------------------------+
```

**Modifier:**
- `-` private
- `+` public
- `#` protected
- `~` package (default)

## Objekte erzeugen

Objekte werden mit dem `new`-Operator erzeugt. Dieser reserviert Speicher und ruft den Konstruktor auf.

```java
class Auto {
    String farbe;
    int geschwindigkeit;
}

// Objekt erzeugen
Auto meinAuto = new Auto();
meinAuto.farbe = "rot";
meinAuto.geschwindigkeit = 120;
```

## Konstruktoren

:::note
Ein Konstruktor ist eine spezielle Methode, die beim Erzeugen eines Objekts aufgerufen wird. Er hat denselben Namen wie die Klasse und keinen Rückgabetyp.
:::

```java
class Auto {
    String farbe;
    int geschwindigkeit;

    // Standardkonstruktor (kein Parameter)
    Auto() {
        farbe = "weiß";
        geschwindigkeit = 0;
    }

    // Konstruktor mit Parametern
    Auto(String farbe, int geschwindigkeit) {
        this.farbe = farbe;
        this.geschwindigkeit = geschwindigkeit;
    }
}
```

### Überladen von Konstruktoren
Eine Klasse kann mehrere Konstruktoren mit unterschiedlichen Parameterlisten haben.

### Konstruktor-Verkettung mit this()
Mit `this()` kann ein Konstruktor einen anderen Konstruktor der gleichen Klasse aufrufen. Der Aufruf muss als **erste Anweisung** im Konstruktor stehen.

```java
Auto() {
    this("weiß", 0); // ruft den parametrisierten Konstruktor auf
}
```

:::tip
Wird kein Konstruktor definiert, stellt Java automatisch einen parameterlosen **Standardkonstruktor** bereit, der alle Attribute mit Standardwerten (0, null, false) initialisiert.
:::

## Kapselung

:::note
Kapselung (Encapsulation) bedeutet, dass die internen Attribute einer Klasse vor direktem Zugriff von außen geschützt werden. Der Zugriff erfolgt ausschließlich über Methoden (Getter/Setter).
:::

```java
class Konto {
    private double kontostand; // direkt nicht zugreifbar

    public double getKontostand() { // Getter
        return kontostand;
    }

    public void einzahlen(double betrag) { // Setter mit Logik
        if (betrag > 0) {
            kontostand += betrag;
        }
    }
}
```

### Sichtbarkeitsmodifier

| Modifier | Klasse | Paket | Subklasse | Überall |
|----------|--------|-------|-----------|---------|
| `private` | ✓ | — | — | — |
| _(default)_ | ✓ | ✓ | — | — |
| `protected` | ✓ | ✓ | ✓ | — |
| `public` | ✓ | ✓ | ✓ | ✓ |

## Überladene Methoden

Methoden können den gleichen Namen haben, wenn sie sich in der **Parameterliste** (Anzahl oder Typ) unterscheiden. Der Rückgabetyp allein reicht nicht.

```java
class Rechner {
    int addiere(int a, int b) { return a + b; }
    double addiere(double a, double b) { return a + b; }
    int addiere(int a, int b, int c) { return a + b + c; }
}
```

## varargs

Mit `...` kann eine Methode eine variable Anzahl an Argumenten desselben Typs entgegennehmen. Das Argument wird intern als Array behandelt.

```java
int summe(int... zahlen) {
    int gesamt = 0;
    for (int z : zahlen) gesamt += z;
    return gesamt;
}

summe(1, 2, 3);      // 6
summe(10, 20);       // 30
```

:::warning
varargs muss der **letzte Parameter** in der Methodensignatur sein.
:::

## Klassenattribute und -methoden (static)

`static`-Elemente gehören zur **Klasse** selbst, nicht zu einzelnen Objekten. Sie existieren genau einmal und können ohne Instanz aufgerufen werden.

```java
class Zaehler {
    static int anzahl = 0; // Klassenattribut

    Zaehler() {
        anzahl++; // wird bei jeder Instanz erhöht
    }

    static int getAnzahl() { // Klassenmethode
        return anzahl;
    }
}

System.out.println(Zaehler.getAnzahl()); // Aufruf ohne Objekt
```

## Enum

Eine Enum ist eine spezielle Klasse zur Definition einer festen Menge benannter Konstanten.

```java
public enum CarBrand {
    BMW, AUDI, MERCEDES, VOLKSWAGEN
}

CarBrand marke = CarBrand.BMW;
```

:::tip
Enums können zusätzlich Attribute und Methoden besitzen, genau wie normale Klassen.
:::

## Garbage Collector

:::note
Der Garbage Collector (GC) ist ein automatischer Speicherverwaltungsmechanismus der JVM. Er erkennt Objekte, auf die keine Referenz mehr zeigt, und gibt deren Speicher automatisch frei.
:::

- Wird von der JVM automatisch im Hintergrund ausgeführt
- `System.gc()` kann dem GC einen Hinweis geben, aber nicht erzwingen
- `finalize()` war früher die Methode, die vor der Freigabe aufgerufen wurde — seit Java 9 **deprecated**

## Beziehungen zwischen Klassen

### Assoziation
Allgemeine Beziehung zwischen zwei Klassen. Eine Klasse kennt die andere.
- UML: einfache Linie zwischen den Klassen

### Aggregation
„Hat-ein"-Beziehung. Das Teil kann ohne das Ganze existieren (schwache Bindung).
- UML: Linie mit **leerer Raute** auf der Seite des Ganzen
- Beispiel: Ein Auto hat Räder — Räder können auch ohne Auto existieren.

### Komposition
Starke „Hat-ein"-Beziehung. Das Teil kann **nicht** ohne das Ganze existieren.
- UML: Linie mit **ausgefüllter Raute** auf der Seite des Ganzen
- Beispiel: Ein Haus hat Zimmer — Zimmer existieren nicht ohne das Haus.

### Kardinalität

| Notation | Bedeutung |
|----------|-----------|
| `1` | genau eins |
| `0..1` | null oder eins |
| `0..*` | beliebig viele (auch null) |
| `1..*` | mindestens eins |
| `n` | genau n |

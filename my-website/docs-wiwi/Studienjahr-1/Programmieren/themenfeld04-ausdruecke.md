# Themenfeld 4 - Ausdrücke und Anweisungen

:::info
Dieses Themenfeld wurde nach der Klausur mit Hilfe von KI der Vollständigkeit halber ergänzt.
:::

## Ausdrücke

:::note
Ein Ausdruck ist eine Kombination von Operanden und Operatoren, die zu einem Wert ausgewertet wird. Jeder Ausdruck hat einen Typ und liefert ein Ergebnis.
:::

```java
int x = 5 + 3;      // 5 + 3 ist ein Ausdruck (Ergebnis: 8)
boolean b = x > 4;  // x > 4 ist ein Ausdruck (Ergebnis: true)
```

## Operatoren

### Arithmetische Operatoren

| Operator | Beschreibung | Beispiel |
|----------|-------------|---------|
| `+` | Addition | `5 + 3` → `8` |
| `-` | Subtraktion | `5 - 3` → `2` |
| `*` | Multiplikation | `5 * 3` → `15` |
| `/` | Division (ganzzahlig bei int) | `7 / 2` → `3` |
| `%` | Modulo (Rest der Division) | `7 % 2` → `1` |
| `++` | Inkrement (Präfix: erst erhöhen, dann nutzen) | `++x` |
| `++` | Inkrement (Postfix: erst nutzen, dann erhöhen) | `x++` |
| `--` | Dekrement (Präfix / Postfix analog) | `--x` / `x--` |

:::warning
Bei ganzzahliger Division (`int / int`) wird das Ergebnis abgerundet: `7 / 2 = 3`. Um Dezimalstellen zu erhalten, muss mindestens ein Operand ein `double` sein: `7.0 / 2 = 3.5`.
:::

### Relationale Operatoren

| Operator | Beschreibung | Beispiel |
|----------|-------------|---------|
| `==` | Gleichheit | `a == b` |
| `!=` | Ungleichheit | `a != b` |
| `<` | kleiner als | `a < b` |
| `<=` | kleiner oder gleich | `a <= b` |
| `>` | größer als | `a > b` |
| `>=` | größer oder gleich | `a >= b` |

### Logische Operatoren

| Operator | Beschreibung |
|----------|-------------|
| `!` | Negation (NOT) |
| `&&` | logisches UND (Short-Circuit: zweiter Operand wird nicht ausgewertet, wenn erster `false`) |
| `\|\|` | logisches ODER (Short-Circuit: zweiter Operand wird nicht ausgewertet, wenn erster `true`) |
| `&` | logisches UND (kein Short-Circuit, beide Seiten werden immer ausgewertet) |
| `\|` | logisches ODER (kein Short-Circuit) |
| `^` | exklusives ODER (XOR) |

:::tip
**Short-Circuit-Auswertung:** Mit `&&` und `||` wird der zweite Operand nur ausgewertet, wenn das Ergebnis noch nicht feststeht. Das verhindert z.B. eine `NullPointerException`:
```java
if (obj != null && obj.wert > 0) { ... }
```
:::

### Zuweisungsoperatoren

| Operator | Beschreibung | Beispiel | Äquivalent |
|----------|-------------|---------|-----------|
| `=` | einfache Zuweisung | `x = 5` | — |
| `+=` | Addition und Zuweisung | `x += 3` | `x = x + 3` |
| `-=` | Subtraktion und Zuweisung | `x -= 3` | `x = x - 3` |
| `*=` | Multiplikation und Zuweisung | `x *= 3` | `x = x * 3` |
| `/=` | Division und Zuweisung | `x /= 3` | `x = x / 3` |
| `%=` | Modulo und Zuweisung | `x %= 3` | `x = x % 3` |

### Sonstige Operatoren

**Ternärer Operator (`?:`)** — kompakte if-else-Zuweisung:
```java
int max = (a > b) ? a : b; // wenn a > b, dann max = a, sonst max = b
```

**Cast-Operator** — explizite Typumwandlung:
```java
double d = 9.99;
int i = (int) d; // i = 9
```

**String-Verkettung (`+`):**
```java
String s = "Hallo" + " " + "Welt"; // "Hallo Welt"
String t = "Zahl: " + 42;          // "Zahl: 42"
```

## Anweisungen

### Leere Anweisung
Eine leere Anweisung besteht nur aus einem Semikolon und führt nichts aus.
```java
; // leere Anweisung
```

### Anweisungsblock
Ein Anweisungsblock fasst mehrere Anweisungen in geschweifte Klammern zusammen. Er definiert einen eigenen **Scope** (Gültigkeitsbereich).
```java
{
    int x = 10;
    System.out.println(x);
}
```

## Kontrollfluss

### Verzweigung: if / if-else / if-else-if

```java
// einfache if-Anweisung
if (bedingung) {
    // wird ausgeführt, wenn Bedingung true
}

// if-else
if (note <= 3) {
    System.out.println("Bestanden");
} else {
    System.out.println("Nicht bestanden");
}

// if-else-if (Mehrfachverzweigung)
if (note == 1) {
    System.out.println("Sehr gut");
} else if (note == 2) {
    System.out.println("Gut");
} else if (note == 3) {
    System.out.println("Befriedigend");
} else {
    System.out.println("Ungenügend");
}
```

### Verzweigung: switch

```java
switch (wochentag) {
    case 1:
        System.out.println("Montag");
        break;
    case 2:
        System.out.println("Dienstag");
        break;
    default:
        System.out.println("Anderer Tag");
        break;
}
```

:::warning
**Fall-Through:** Wird `break` vergessen, wird die Ausführung in den nächsten `case`-Block fortgesetzt (Fall-Through). Dies kann gewollt oder unbeabsichtigt sein.
:::

### Switch Expression (seit Java 14)

```java
// Arrow-Syntax (kein Fall-Through, kein break nötig)
String tag = switch (wochentag) {
    case 1 -> "Montag";
    case 2 -> "Dienstag";
    case 3 -> "Mittwoch";
    default -> "Unbekannt";
};

// Mit yield für mehrzeilige Blöcke
String ergebnis = switch (code) {
    case 1 -> "Einfach";
    case 2 -> {
        String s = "Kom" + "plex";
        yield s;
    }
    default -> "Unbekannt";
};
```

## Schleifen

### while-Schleife (kopfgesteuert)
Die Bedingung wird **vor** jedem Durchlauf geprüft. Ist sie beim ersten Aufruf `false`, wird der Rumpf nie ausgeführt.

```java
int i = 0;
while (i < 5) {
    System.out.println(i);
    i++;
}
```

### do-while-Schleife (fußgesteuert)
Die Bedingung wird **nach** jedem Durchlauf geprüft. Der Rumpf wird mindestens einmal ausgeführt.

```java
int i = 0;
do {
    System.out.println(i);
    i++;
} while (i < 5);
```

### for-Schleife (zählend)

```java
for (int i = 0; i < 5; i++) {
    System.out.println(i);
}
// Aufbau: for (Initialisierung; Bedingung; Aktualisierung)
```

### Erweiterte for-Schleife (for-each)
Iteriert über alle Elemente einer Aufzählung (Array, Collection).

```java
int[] zahlen = {1, 2, 3, 4, 5};
for (int zahl : zahlen) {
    System.out.println(zahl);
}
```

## Sprunganweisungen

### break
Beendet die aktuelle Schleife oder den aktuellen `switch`-Block sofort.

```java
for (int i = 0; i < 10; i++) {
    if (i == 5) break; // Schleife endet bei i = 5
    System.out.println(i);
}
```

### continue
Überspringt den Rest des aktuellen Schleifendurchlaufs und springt zur nächsten Iteration.

```java
for (int i = 0; i < 10; i++) {
    if (i % 2 == 0) continue; // gerade Zahlen überspringen
    System.out.println(i); // gibt nur ungerade Zahlen aus
}
```

## Lesbarkeit

:::tip
Einrückungen (Indentation) sind entscheidend für die Lesbarkeit. Jeder Codeblock innerhalb von `{}` wird um eine Ebene eingerückt (üblich: 4 Leerzeichen oder 1 Tabulator). Java erzwingt dies zwar nicht syntaktisch, es ist jedoch eine bewährte Praxis.
:::

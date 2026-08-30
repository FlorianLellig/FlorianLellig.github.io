# Themenfeld 6 - Vererbung

:::info
Dieses Themenfeld wurde nach der Klausur mit Hilfe von KI der Vollständigkeit halber ergänzt.
:::

## Eigenschaften der Vererbung

:::note
Vererbung ermöglicht es, eine neue Klasse (Subklasse) auf Basis einer bestehenden Klasse (Superklasse) zu definieren. Die Subklasse erbt alle nicht-privaten Attribute und Methoden der Superklasse.
:::

- **Einfachvererbung:** In Java kann eine Klasse nur von **einer** Superklasse erben
- **Generalisierung:** Gemeinsamkeiten werden in der Superklasse zusammengefasst
- **Spezialisierung:** Die Subklasse fügt eigene Attribute und Methoden hinzu oder überschreibt geerbte
- **Wiederverwendung (Reuse):** Einmal geschriebener Code muss nicht dupliziert werden

### UML-Darstellung
Vererbung wird in UML durch einen **Pfeil mit nicht-ausgefüllter Spitze** dargestellt, der von der Subklasse zur Superklasse zeigt.

## Vererbung in Java

```java
class Fahrzeug {
    String marke;
    int geschwindigkeit;

    void beschleunigen(int wert) {
        geschwindigkeit += wert;
    }
}

class Auto extends Fahrzeug {
    int anzahlTueren;

    void hupe() {
        System.out.println("Huuup!");
    }
}
```

:::note
Das Schlüsselwort `extends` gibt an, von welcher Klasse geerbt wird.
:::

## Die Object-Klasse

:::note
Jede Klasse in Java erbt implizit von `java.lang.Object`. Sie ist die Wurzel der gesamten Klassenhierarchie.
:::

Wichtige Methoden von `Object`:

| Methode | Beschreibung |
|---------|-------------|
| `toString()` | Gibt eine String-Repräsentation des Objekts zurück |
| `equals(Object o)` | Prüft inhaltliche Gleichheit (Standard: Referenzvergleich) |
| `hashCode()` | Gibt einen Hash-Wert zurück (konsistent mit `equals`) |
| `clone()` | Erstellt eine flache Kopie des Objekts |

## Sichtbarkeit bei Vererbung

- `private` Attribute/Methoden werden **nicht** vererbt und sind in der Subklasse nicht direkt zugreifbar
- `protected` Attribute/Methoden sind innerhalb der Subklasse **und** im gesamten Paket zugreifbar

## Methoden überschreiben

Eine Subklasse kann eine Methode der Superklasse mit gleicher Signatur **überschreiben** (Override). Die Annotation `@Override` ist optional, aber empfohlen.

```java
class Tier {
    void lautGeben() {
        System.out.println("...");
    }
}

class Hund extends Tier {
    @Override
    void lautGeben() {
        System.out.println("Wau!");
    }
}
```

:::note
**Dynamisches Binden:** Die JVM entscheidet zur Laufzeit anhand des tatsächlichen Objekttyps, welche Methode aufgerufen wird — nicht anhand des Referenztyps.
:::

## Modifier `abstract` und `final`

### abstract

- Eine **abstrakte Klasse** kann nicht direkt instanziiert werden
- Kann abstrakte Methoden enthalten (ohne Implementierung)
- Subklassen **müssen** alle abstrakten Methoden implementieren (oder selbst abstrakt sein)
- UML: Klassenname und Methodenname werden _kursiv_ dargestellt

```java
abstract class Form {
    abstract double flaeche(); // keine Implementierung

    void beschreiben() {
        System.out.println("Ich bin eine Form.");
    }
}

class Kreis extends Form {
    double radius;

    @Override
    double flaeche() {
        return Math.PI * radius * radius;
    }
}
```

### final

- Eine **finale Klasse** kann nicht weiter abgeleitet werden: `final class String {}`
- Eine **finale Methode** kann in Subklassen nicht überschrieben werden

```java
class Basis {
    final void methode() {
        System.out.println("Nicht überschreibbar");
    }
}
```

## this und super

| Schlüsselwort | Verwendung |
|---------------|-----------|
| `this` | Referenz auf das aktuelle Objekt; Zugriff auf eigene Attribute/Methoden |
| `super` | Referenz auf die Superklasse; Zugriff auf geerbte Attribute/Methoden |
| `this()` | Aufruf eines anderen Konstruktors der gleichen Klasse |
| `super()` | Aufruf des Konstruktors der Superklasse |

:::warning
`this()` und `super()` müssen immer die **erste Anweisung** im Konstruktor sein. Beide können nicht gleichzeitig verwendet werden.
:::

```java
class Fahrzeug {
    String marke;

    Fahrzeug(String marke) {
        this.marke = marke;
    }
}

class Auto extends Fahrzeug {
    int tueren;

    Auto(String marke, int tueren) {
        super(marke); // Konstruktor der Superklasse aufrufen
        this.tueren = tueren;
    }
}
```

## Upcast und Downcast

### Upcast (widening — erweiternde Konvertierung)
- Subklassen-Objekt wird über eine Superklassen-Referenz angesprochen
- Automatisch, kein expliziter Cast nötig
- Die Sicht auf das Objekt ist eingeschränkt (nur Superklassen-Methoden sichtbar)

```java
Fahrzeug f = new Auto("BMW", 4); // Upcast — automatisch
f.beschleunigen(50);             // Superklassen-Methode — OK
// f.hupe();                     // Fehler! Methode von Auto nicht sichtbar
```

### Downcast (narrowing — einschränkende Konvertierung)
- Superklassen-Referenz wird auf den tatsächlichen Subklassentyp zurückgeführt
- **Unsicher:** führt zur `ClassCastException` wenn der tatsächliche Typ nicht passt
- `instanceof` vor dem Cast prüfen

```java
if (f instanceof Auto) {
    Auto a = (Auto) f; // Downcast
    a.hupe();          // jetzt zugreifbar
}
```

## Polymorphie

:::note
Polymorphie (Vielgestaltigkeit) bedeutet, dass eine Superklassen-Referenz auf Objekte unterschiedlicher Subklassen zeigen kann und zur Laufzeit die richtige Methode aufgerufen wird (dynamisches Binden).
:::

```java
Tier[] tiere = { new Hund(), new Katze(), new Vogel() };

for (Tier t : tiere) {
    t.lautGeben(); // ruft je nach Objekttyp die richtige Methode auf
}
// Ausgabe: Wau!, Miau!, Piep!
```

:::tip
Polymorphie ermöglicht es, allgemeinen Code zu schreiben, der mit beliebigen Subklassen funktioniert — ohne diese zu kennen. Neue Subklassen können hinzugefügt werden, ohne bestehenden Code ändern zu müssen.
:::

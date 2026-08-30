# Themenfeld 7 - Interfaces

:::info
Dieses Themenfeld wurde nach der Klausur mit Hilfe von KI der Vollständigkeit halber ergänzt.
:::

## Eigenschaften von Interfaces

:::note
Ein Interface ist ein Vertrag: Es legt fest, **was** eine Klasse können muss, ohne zu definieren, **wie** es umgesetzt wird.
:::

- Alle Methoden sind implizit `public abstract` (ohne Implementierung)
- Alle Attribute sind implizit `public static final` (Konstanten)
- Eine Klasse kann **mehrere** Interfaces implementieren (Mehrfachimplementierung)
- Interfaces selbst können nicht instanziiert werden
- **Namenskonvention:** Interfaces enden oft auf `-able` (z.B. `Comparable`, `Serializable`, `Flyable`)

## Interface deklarieren

```java
public interface Flyable {
    int MAX_HOEHE = 10000; // implizit public static final

    void fliegen();        // implizit public abstract
    void landen();
}
```

## Interface implementieren

Eine Klasse implementiert ein Interface mit dem Schlüsselwort `implements`. Sie muss alle deklarierten Methoden implementieren — oder selbst als `abstract` deklariert werden.

```java
class Flugzeug implements Flyable {
    @Override
    public void fliegen() {
        System.out.println("Flugzeug hebt ab");
    }

    @Override
    public void landen() {
        System.out.println("Flugzeug landet");
    }
}
```

### Mehrfachimplementierung

Eine Klasse kann mehrere Interfaces gleichzeitig implementieren.

```java
class Hubschrauber implements Flyable, Steuerbar, Wartbar {
    // muss alle Methoden aller drei Interfaces implementieren
}
```

## UML-Darstellung

Interfaces werden in UML mit dem Stereotyp `«interface»` gekennzeichnet. Die Implementierungsbeziehung wird durch einen **gestrichelten Pfeil** mit nicht-ausgefüllter Spitze dargestellt.

```
«interface»
Flyable
---------
fliegen()
landen()
    ▲
    ╎ (gestrichelter Pfeil = «implements»)
    ╎
Flugzeug
```

## Polymorphie über Interfaces

Genau wie bei Vererbung kann ein Interface als Referenztyp verwendet werden (Upcast). Damit kann man Code schreiben, der mit allen implementierenden Klassen funktioniert.

```java
Flyable objekt = new Flugzeug(); // Upcast zu Interface-Referenztyp
objekt.fliegen();

Flyable[] fliegendeObjekte = { new Flugzeug(), new Hubschrauber(), new Vogel() };
for (Flyable f : fliegendeObjekte) {
    f.fliegen(); // dynamisches Binden
}
```

## default-Implementierungen (seit Java 8)

Seit Java 8 können Interfaces Methoden mit einer **default-Implementierung** enthalten. Dadurch können bestehenden Interfaces neue Methoden hinzugefügt werden, ohne alle implementierenden Klassen ändern zu müssen (Abwärtskompatibilität).

```java
public interface Flyable {
    void fliegen();

    default void notlandung() { // default-Methode mit Implementierung
        System.out.println("Notlandung wird durchgeführt");
    }
}
```

:::tip
Implementierende Klassen können `default`-Methoden überschreiben, müssen es aber nicht. Das ermöglicht eine Art **Dummy-Implementierung** als Basis.
:::

### Namenskonflikte bei default-Methoden

Wenn eine Klasse zwei Interfaces implementiert, die beide eine `default`-Methode mit demselben Namen haben, entsteht ein Konflikt. Die Klasse **muss** die Methode dann selbst überschreiben.

```java
interface A {
    default void methode() { System.out.println("A"); }
}

interface B {
    default void methode() { System.out.println("B"); }
}

class C implements A, B {
    @Override
    public void methode() {
        A.super.methode(); // expliziter Aufruf der gewünschten Interface-Methode
    }
}
```

## Vererbung von Interfaces

Interfaces können von anderen Interfaces erben — mit `extends`. Eine implementierende Klasse muss dann alle Methoden aller beteiligten Interfaces implementieren.

```java
interface Steuerbar {
    void steuern();
}

interface Flugzeugfahig extends Flyable, Steuerbar {
    void autopilot();
}
```

## Downcast mit instanceof

Genau wie bei der Vererbung kann ein Interface-Referenztyp per Downcast auf den tatsächlichen Typ zurückgeführt werden. Vorher sollte `instanceof` geprüft werden.

```java
Flyable f = new Flugzeug();

if (f instanceof Flugzeug) {
    Flugzeug flugzeug = (Flugzeug) f;
    // Zugriff auf Flugzeug-spezifische Methoden
}
```

## Exkurs: Kopieren von Objekten

:::warning
Der `=`-Operator kopiert bei Objekten **nicht** den Wert, sondern nur die Referenz. Beide Variablen zeigen danach auf dasselbe Objekt im Speicher.
:::

```java
Auto a1 = new Auto("BMW", 4);
Auto a2 = a1; // kein echtes Kopieren — a2 zeigt auf dasselbe Objekt wie a1

a2.marke = "Audi"; // ändert auch a1.marke!
```

### clone()-Methode
Die `clone()`-Methode aus `Object` erstellt eine **flache Kopie** (shallow copy) — Referenzattribute werden nicht tief kopiert. Um `clone()` nutzen zu können, muss die Klasse das `Cloneable`-Interface implementieren.

```java
class Auto implements Cloneable {
    @Override
    public Auto clone() throws CloneNotSupportedException {
        return (Auto) super.clone();
    }
}
```

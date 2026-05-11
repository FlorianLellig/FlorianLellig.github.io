# Themenfeld 9 - Exception Handling

## Grundlagen

### Unterschiedliche Fehlertypen
In Java unterscheidet man grundsätzlich zwischen zwei Fehlertypen
1. **Compiler Fehler**: Sind **Syntaxfehler**, die i.d.R. bereits vom Compiler abgefangen werden
2. **Laufzeitfehler**: Treten während der Programmlaufzeit auf. Man unterteilt sie in zwei Typen
    1. **Errors**: Schwerwiegende Fehler, die meist außerhalb der Kontrolle liegen (z.B. Spiecher voll, etc.)
    2. **Ausnahmen (Exceptions)**
        1. **Checked Exceptions**
            - Ausnahmen, die der Compiler überprüft - Das bedeutet das Programm lässt sich nur dann kompilieren, wenn die Ausnahmen explizit behandelt werden
            - Es gibt zwei Möglichkeiten der Behandlung: 
                - `try...catch` zum Abfangen 
                - `throws` zur Weiterleitung entlang des Call Stacks nach oben
                - Details siehe unten 
        2. **Unchecked Exceptions**
            - Treten erst während der Laufzeit auf - z.B. durch Falscheingaben des Users
                - Compiler erzwingt kein Exception Handling, es kann aber zum Handling verwendet werden
            - Kann meistens durch saubere Programmierung vermieden werden.

## Handhabung von Fehlern
:::warning
Werden Fehler nicht behandelt mit `try...catch` oder `throws`, so werden 
:::

### `try....catch`
- Behandlung der Ausnahme am jeweiligen Auslöseort

```java
public class TryCatchExample {

    static void main() {
        int mydividend = 5;
        int mydivisor = 0;

        try {
            System.out.println(mydividend/mydivisor);
        } catch (ArithmeticException e) {
            System.out.println("Fehler: " + e.getMessage());
        } finally {
            System.out.println("Das hier wird immer ausgegeben - egal ob Fehler oder nicht");
        }
    }
}
```

### `throws`
- Weitergabe der Exception an seinen Aufrufer
- Ist eine Art "Warnschild" im Kopf einer Methode, der signalisiert, das hier ggf. ein Fehler verursacht werden könnte der dann wiederum in einer Ebene obendrüber gehandhabt werden muss

```java
public class ThrowsExampleOne {
    public static int division (int valueOne, int valueTwo) throws ArithmeticException {
        int divisionValue = valueOne / valueTwo;
        return divisionValue;
    }

    static void main() {
        try {
            System.out.println(division(50, 10));
            System.out.println(division(50, 0));
        } catch (ArithmeticException e) {
            System.out.println("Hier gabs einen Fehler! - Der wurde von einer Ebene weitergegeben");
        }
    }
}
```

## Eigene Ausnahmeklassen

### Eigene Ausnahmeklassen implementieren

:::tip
**Grundaufbau**:
- Vorraussetzung für die Umsetzung eigener Ausnahmeklassen ist der Zusatz `extends Exception`. Damit wird die eigene Exception auf die Ebene von z.B. der Runtime Exception gesetzt.

![Picture](/documents/Wirtschaftsinformatik/Studienjahr-1/Programmieren-2/exceptionhandlingImage.png)

:::

```java
public class FalscheZeit extends Exception {
    public FalscheZeit(int stunde) {
        if (stunde <= 24) {
            System.out.println("Die Stunde liegt außerhalb des 12h Formats - versuche es mal mit " + (stunde-12));
            super("Die Stunde liegt außerhalb des 12h Formats - versuche es mal mit " + (stunde-12)); //Wird benötigt um .getMessage() vom Interface Nutzbar zu machen
        } else {
            System.out.println("Die Stunde liegt außerhalb des 12h Formats");
            super("Die Stunde liegt außerhalb des 12h Formats"); //Wird benötigt um .getMessage() vom Interface Nutzbar zu machen
        }
    }
}
```
:::note
Nun kann die ExceptionKlasse ganz normal wie andere Exceptions genutzt werden:
```java
public class Uhrzeitpruefer {
     public void Uhrzeit(int meineStunde) throws FalscheZeit{

        if (meineStunde > 12 || meineStunde < 0) {
            throw new FalscheZeit(meineStunde);
        }
    }
}
```
:::

## Try-with-ressources

:::danger
Wenn man mittels normalen `try...except` Ressourcen öffnet verbleibt das Risiko, dass diese nicht richtig geschlossen werden und damit Speicher belegen oder nicht mehr geöffnet werden können.
**Lösung:** Try-with-ressources
:::

Mittles Try-with-ressources wird von Java garantiert, dass mit Blockende die Datei automatisch geschlossen wird.
- Vorraussetzung: Das zu schließende Objekt muss `Autoclosable` oder `Closable` implementiert haben

```java
public class ReadWithResources {
    public static void main(String[] args) {
        
        // Die Ressource wird in den Klammern deklariert
        // Man kann sogar mehrere Ressourcen mit Semikolon getrennt angeben
        try (FileReader fr = new FileReader("meineDatei.txt")) {

            System.out.println("Datei wurde gelesen.");

        } catch (IOException e) {
            System.err.println("Fehler beim Lesen der Datei: " + e.getMessage());
        }
    }
}
```

:::note
Theoretisch könnte die Verbindung auch manuell im `finally`-Teil des Exception Handlings geschlossen werden - try-with-ressources macht dies allerdings übersichtlicher.
:::

## Interface `Throwable`
Das Interface ermöglicht es uns, einige Informationen über den Error zu erhalten:

### `public string getMessage()`
- liefert den Fehlertext zurück
    - kann in der eigenen Exception-Klasse mittels `super("Mein Exception Text")` realisiert werden
```bash
/ by zero   #Demoausgabe bei Division durch 0
```
:::tip
Natürlich lässt sich das Ganze auch mittels `@Override` realisieren:
```java
@Override
public String getMessage() {
    // Hier generierst du die Nachricht erst, wenn sie abgefragt wird
    return "Warnung: Es fehlen " + literFehlend + " Liter zum Weiterfahren!";
}
``` 
:::

### `public String toString()`
- liefert die Objektbeschreibung und den Fehlertext zurück
```bash
java.lang.ArithmeticException: / by zero   #Demoausgabe bei Division durch 0
```

### `public void printStackTrace()`
- liefert die Objektbeschreibung, den Fehlertext sowie die Weitergabehierarchie bis zur genauen Auslösestelle zurück
```bash
java.lang.ArithmeticException: / by zero
	at temp.exceptions.TryCatchExample.main(TryCatchExample.java:10)  #Demoausgabe bei Division durch 0
```



# Themenfeld 11 - Collection Framework

Das Collection Framework bietet eine vereinheitlichte Architektur zum Speichern und Verwalten von Gruppen von Objekten mithilfe von generischen Containern. Es stellt diese mithilfe von _Interfacen_ und _Klassen_ bereit. 

## Grundstruktur des Collection Framework

![Picture](/documents/Wirtschaftsinformatik/Studienjahr-1/Programmieren-2/collectionFramework.png)

Das Bild zeigt eine Art _Stammbaum der Java Strukturen_. 
Die gelben Boxen mit `<<Interface>>` stellen die Interfaces als Baupläne der einzelnen Klassen dar - sie definieren hier, was die jeweiligen Klassen können müssen damit sie sich sich der `Set`, `SortedSet`, `Map`, `SortedMap` oder `list` unterordnen können.

Die grünen Boxen hingegen sind die `Klassen`, sprich die tatsächlichen Implementierungen bzw. Umsetzungen der in den Interfaces definierten Werkzeuge. Im Kontext der Klassen ist es jedoch wichtig, zwischen `abstrct`- Klassen und normalen Klassen zu unterscheiden: Während normale Klassen von Anwendern im Code später tatsächlich mit `new` angewendet werden können, dienen die anderen lediglich zum Aufbau einer Vererbungsstruktur.

Man unterscheidet zwischen drei verschiedenen grundlegenden Arten von Containern:
1. **Listen**(List)
2. **Mengen**(Set)
3. **Schlüssel-Mengen-Paare**(Map)

### Collection Framework als Container
In Java werden Daten hierarchisch organisiert - vom Kleinsten zum Größten. Dabei werden die jeweiligen Datentypen verschachtelt

1. **Einfache Datentypen**
    - Hierzu zählen `Byte`, `Int`, `Long`, `Double`, `Float`, ...
    - Unterste Ebene, sprich tief verschachtelt
2. **Objekte**
    - Objekte beinhalten Einfache Datentypen - somit wird hier das erste Mal verschachtelt
3. **Container**
    - Container beinhalten Objekte - Sie stehen am Ende der Kette
    - Zu ihnen zählen genau 3 Kategorien:
        1. Listen (`List`)
        2. Mengen (`Set`)
        3. Schlüssel-Wert-Paare (`Map`)
    - Wichtig: In einem Container können NUR Objekte gespeichert werden - d.h. sollte man Einfache Datentypen wie `Int` speichern wollen, so werden Wrapper-Klassen benötigt (siehe Unterpunkt Wrapper-Klassen)

## Listen (List)

Listen bieten eine geeignete Möglichkeit, mehrere Elemente mit unterschiedlichem Datentyp in einer Aneinanderreihung - ähnlich zum Array - zu speichern. Die Eigenschaften einer Liste unterscheiden sich dabei jedoch in vielen Bereichen vom normalen Array. 

Das zu implementierende Interface `list` gibt dabei die folgenden Eigenschaften vor:
- Auffindbar im Packege `java.util`
- Zugriff auf die Container erfolgt sequenziell oder wahlfrei (über den Index)
    - für den sequenziellen Zugriff empfielt sich die Verwendung von Iteratoren (siehe Unterpunkt)
    - Index beginnt mit 0 und endet bei n Elementen bei n-1
- Größe der Liste wird dynamisch beim Einfügen oder Löschen von Elementen angepasst
- Duplikate sind erlaubt
- die Reihenfolge, in der Elemente eingefügt werden, bleibt erhalten


### Unterschiedliche Listentypen

Dem Bild aus _Grundstruktur des Collection Framework_ ist zu entnehmen, dass es mehrere unterschiedliche Typen von Listen gibt. Im folgenden wird vor allem die `ArrayList` und die `LinkedList` näher erläutert.

#### ArrayList
Eine ArrayList ist Intern ein Array, was den Typ `object[]` nutzt. Da in Java alles ein Object ist, passt technisch gesehen jedes Objekt in dieses Array. Aufgrund ihrer systematischen Hinterenanderreihung der einzelnen Objekte in einem fest reservierten Speicher ist der Zugriff über einen Index-Wert technisch gesehen sehr schnell - das Verschieben, Löschen oder Einfügen eines Elements jedoch nicht, da ein vollständig neues Array erzeugt werden muss. 

```java
List myList = new ArrayList();
myList.add("Julius");
myList.add(new Auto());
myList.add("Jannes");

System.out.println("Element mit index 0: " + myList[0])
// Weitere Methoden siehe "Weitere Methoden im Umgang mit Listen"
```

#### LinkedList
Im Gegensatz zur ArrayList basiert die LinkedList NICHT auf einem Array, sondern auf einem Node-Konzepts. Dies kann man sich wie eine Kette von Elementen vorstellen, wobei jedes Element auf das nachfolgende Element zeigt. Dies macht ein nachträgliches Einfügen von Elementen zwar schneller, eine Index-Abfrage ist jedoch langsamer, da der Compiler die Gesamte Node-Verkettung von Vorne durchgehen muss, bis er das Element erreicht.

Die Handhabung einer LinkedList ist in der Anwendung sehr ähnlich zur Arraylist.


### Weitere Methoden im Umgang mit Listen
- `add(int i, Object o)` oder `add(Object o)` fügt neue Objekte in die Liste ein
- `set(int i, Object o)` überschreibt das Objekt an der Stelle i mit dem Objekt o
- `get(int i)` liefert das Objekt an der Stelle i zurück
- `contains(Object o)` überprüft, ob das Objekt o in der Liste enthalten ist
- `indexOf(Object o)` liefert den Index zurück, an der das Objekt o in der Liste abgelegt ist (-1, wenn das Objekt nicht enthalten ist)
- `remove(int i)` oder `remove(Object o)` löscht das Objekt aus der Liste
- `clear()` entfernt alle Elemente (initialisierung)
- `size()` gibt die Länge der Liste zurück


### Iteratoren
#### Ausgangsproblem
Ein typisches Anwendungsfeld von Listen ist das Durchlaufen dieser mit einer `for...each`-Schleife. Dies funktioniert problemlos, solange man die Liste nicht parallel verändert. 
Sollte man während des Durchlauf-Prozesses die Liste jedoch verändern, z.B. indem man ein Element löscht, funktioniert die `for...each`-Schleife nichtmehr und es kommt zu einem `ConcurrentModificationException`.
```java
List<String> namen = new ArrayList<>(Arrays.asList("Anna", "Bob", "Anton"));

for (String name : namen) {
    if (name.startsWith("A")) {
        namen.remove(name); // BOOM! ConcurrentModificationException
    }
}
```
:::warning
Intern nutzt die `for...each`-Schleife zwar einen Iterator, jedoch wird diesem "von außen" mit dem `name.remove` ins _Handwerk gegriffen_.
:::

#### Problemlösung mithilfe des Iterators
Der Iterator stellt das einzige Werkzeug dar, dass während des Durchlaufprozesses sicher löschen kann. Er ist sozusagen autorisiert, die Liste zu verändern, weil er genau weiß, wo er gerade steht.
```java
Iterator<String> it = namen.iterator();
while (it.hasNext()) {
    String name = it.next();
    if (name.startsWith("A")) {
        it.remove(); // Das ist sicher! Der Iterator korrigiert seine Position intern.
    }
}
```

:::tip
**Zusammenfassung über Listen:**
- Erlauben Duplikate (derselbe Wert darf mehrfach vorkommen).  
- Die Reihenfolge des Einfügens bleibt erhalten.  
- Der Zugriff erfolgt entweder sequentiell oder wahlfrei über einen Index.
:::

## Mengen (Sets)
Mengen bezeichnen spezielle Container, die das Interface `Set` bzw. `SortedSet` implementieren. 

### Grundlegende Implementierung eines Sets
```java
Set<String> namen = new TreeSet<>(); // Ein sortiertes Set
namen.add("Zoe");
namen.add("Adam");
namen.add("Bernhard");
namen.add("Adam"); // Wird ignoriert (Duplikat!)

System.out.println(namen); // Ausgabe: [Adam, Bernhard, Zoe] -> Automatisch sortiert!
```

### Iteratoren im Kontext von Sets
Auch im Berech der Mengen (Sets) wird zur Vermeidung von Fehlern beim Durchlaufen einer Schleife mit Bezug zum Set der Iterator verwendet.
```java
import java.util.*;

public class SetIteratorDemo {
    public static void main(String[] args) {
        // 1. Eine Menge erstellen (HashSet - Reihenfolge ist zufällig)
        Set<String> obstKorb = new HashSet<>();
        obstKorb.add("Apfel");
        obstKorb.add("Banane");
        obstKorb.add("Zitrone");
        obstKorb.add("Zwetschge");

        // 2. Den Iterator anfordern
        Iterator<String> it = obstKorb.iterator();

        // 3. Die Menge durchlaufen
        System.out.println("Filtere Früchte mit 'Z' heraus...");
        
        while (it.hasNext()) { 
            String frucht = it.next(); // Springt zum nächsten Element und gibt es zurück
            
            if (frucht.startsWith("Z")) {
                it.remove(); // Löscht das Element sicher aus der Menge
                System.out.println("Entfernt: " + frucht);
            }
        }
    }
}
```

### Der "sort"-Aspekt - `SortedSet` und `TreeSet`
Während ein normales `Hashset` seine Elemente völlig ungeordnet aufnimmt, ist ein TreeSet (die gängigste Implementierung von SortedSet) eine geordnete Sortierung aller Elemente. 

#### Die natürliche Ordnung
- Die Sortierung innerhal einer Menge erfolgt **standardmäßig über die natürliche Ordnung**
    - **Inhärente Sortierlogik von Objekten**, die ohne explizite Anweisung angewendet wird
        - Bereits für bestehende Java-Klassen definiert
        - Für eingene Objekte muss Sortierlogik **expliziet implementiert** werden
- Objekt, das einer `SortedSet`-Implementierung hinzugefügt wird, **setzt zwingend eine Sortierlogik voraus** 
    - Üblicherweise durch die Implementierung des `Comparable`-Interfaces in der jeweiligen Klasse.
    - Bei jedem Einfügen eines Objekts zu einem Set wird dieses **mit den anderen bereits vorhandenen Objekten im Set verglichen**, um die richtige Position identifizieren zu können. 
        - Für diesen automatischen Vergleich benötigt man das **`Comparable`-Interface**
            

##### Beispiel für Natürliche Ordnung mit `comparable`-Interface
```java
public class Car implements Comparable {
    public final int productionNumber;
    public String color;
    public String licensePlate;

    public Car(int productionNumber, String color, String licenseplate) {
        this.productionNumber = productionNumber;
        this.color = color;
        this.licensePlate = licensePlate;
    }

    // Die vom Interface geforderte Methode
    public int compareTo (Car vCar) {
        return this.productionNumber - vCar.productionNumber;
        // Sortiert Aufsteigend
    }
}
```

:::tip
Die Methode `compareTo()` liefert einen Integer als Rückgabewert. Dabei gilt:
- `Wert < 0`: das aufgerufene Objekt ist **kleiner** als das übergebene Objekt
- `Wert = 0`: das aufgerufene Objekt ist **gleich** dem übergebenen Objekt
- `Wert > 0`: das aufgerufene Objekt ist **größer** als das übergebene Objekt
:::


#### Eigene Sortierungen
Als Alternative zur natürlichen Ordnung, sprich der Ordnung die Standardmäßig angewendet wird, kann ebenfalls eine sperate `Comparator`-Klasse erstellt und genutzt werden.
- Genauso wie die natürliche Ordnung **sortiert** die `Comparator`-Klasse **beim Einfügen von Elementen** in `Sets` oder `Maps`
- Sortierung **übersteuert die natürliche Ordnung**
- Eine `Comparator`-Klasse implementiert das `Comparator` Interface.

:::note
Das `Comparator`-Interface sieht wie folgt aus:
```java
@FunctionalInterface
public interface Comparator<T> {

    int compare(T o1, T o2);

    // Hinweis: Im Originalcode folgen hier noch weitere Methoden 
    // zur Implementierung, jedoch keine weitere abstract-Methode

    // Equals wird von Object als Abstrakt übergeben, d.h. es zählt 
    // im Comparator NICHT als abstrakte Methode
}
```
Da es sich bei dem Comparator um ein **funktionales Interface** handelt, kann dieser ebenfalls **für `Lambda`-Expressions genutzt** werden.
- Eine abstrakte Methode ohne default Implementierung!
:::

- Die Bewertung erfolgt ebenfalls über Vergleichswerte:
    - Wert < 0: o1 liegt vor o2
    - Wert = 0: o1 und o2 sind gleich
    - Wert > 0: o1 liegt hinter o2

Das folgende Beispiel zeigt einen Comparator, der die Elemente der Klasse `Car` (siehe _"Die natürliche Ordnung"_) absteigend (statt aufsteigend, wie die natürliche Ordnung vorsieht) sortiert.

```java
public class CarSorterDecending implements Comparator {
    public int compare(Car v1, Car v2) {
        // Absteigende Sortierung
        return v2.productionNumber - v1.productionNumber;

        // Wenn compare einen negativen Wert zurückgibt, dann wird v1 vor v2 einsortiert
        // Wenn compare einen positiven Wert zurückgibt, dann wird v2 vor v1 einsortiert
    }
}
```

```java
public class Demo {
    public static void main (String[] args) {
        TreeSet demo = new TreeSet<Car>(new CarSorterDecending());

        demo.add(new Car(15, "Red", "SAB-C-977"));
        demo.add(new Car(145, "Blue", "SAB-F-265"));

        Iterator i = demo.iterator();
        while (i.hasNext()) {
            Car tempCar = i.next();
            System.out.println("Car with Production number: " + tempCar.productionNumber);
        }
    }
}
```

:::tip
Alternativ kann die Sortierung auch mittels Lambda Expression realisiert werden - der Code wird dadurch kürzer:
```java
public class Demo {
    public static void main (String[] args) {
        TreeSet demo = new TreeSet<Car>((v1, v2)->{return v2.productionNumber - v1.productionNumber;});
    }
}
```
Hinweis: 
ein Lambda **mit Geschweiften Klammern** benötigt ein vollwertiges return Statement, während hingegen ein Lambda **ohne geschweifte Klammern** kein return Statement braucht - der Return erfolgt hier automatisch. 
:::

:::tip
**Zusammenfassung über Mengen:**
- Erlauben keine Duplikate (jeder Wert ist einzigartig).  
- Die Reihenfolge des Einfügens bleibt normalerweise nicht erhalten.  
- Der Zugriff erfolgt typischerweise über Iteratoren.
:::


## Schlüssel-Wert-Paare (Map)

Schlüssel-Wert-Paare sind wie eine Art Telefonbuch, bei dem man einen eindeutigen Begriff, den Schlüssel, einer bestimmten Information zuordnet. Dabei gilt grundsätzlich:
1. **Zusammenhängende Paare**
    - Es werden immer zwei zusammengehörige Werte miteinander verknüpft
2. Eindeutige Schlüssel
    - Jeder Schlüssel darf nur einmal vorkommen
3. **Werte-Zugriff**
    - Der Wertezugriff auf die Daten erfolgt über den jeweiligen Schlüssel
4. **Überschreiben**
    - Versucht man einen bereits bestehenden Schlüssel erneut hinzuzufügen, so wird der bereits exisiterende Wert des Schlüssels überschrieben

### Grundlegende Implementierung einer Map

:::note
Es gibt (für uns) zwei relevante Konzepte für eine Map: 
1. **`TreeSet`**
    - Einträge werden nach Schlüsseln sortiert
    - Wichtig: die Klasse der Schlüssel MUSS das Interface `Comparable` implementiert haben, damit ein Vergleich durch die Map möglich ist
2. **`HashSet`**
    - auf Basis der hashCode()-Methode der Schlüsselklasse wird eine interne Position (Bucket) berechnet, an der das Schlüssel- Werte-Paar in die Map aufgenommen wird.

:::

```java
public class TreeMapDemo {
    static void main() {
        TreeMap myMap = new TreeMap();
        myMap.put(new Integer(1), new Student("Borgmann", "Jannes"));
        myMap.put(new Integer(2), new Student("Fischer", "Felix"));
        myMap.put(new Integer(3), new Student("Lellig", "Florian"));
        myMap.put(new Integer(3), new Student("Timon", "Strauß"));      // Achtung auf Key

        Set mykeysfromMap = myMap.keySet();
        Iterator i = mykeysfromMap.iterator();

        while (i.hasNext()) {
            Integer currentStudent = (Integer) i.next();
            Student currentStudentObject = (Student) myMap.get(currentStudent);

            System.out.println("Der Student " + currentStudentObject.getVorname() + " " + currentStudentObject.getName() + " ist in der Map.");

        }
    }
}
```

:::warning
Achtung - da es sich bei der Map ebenfalls um einen Container handelt müssen auch hier sowohl der Wert als auch der Schlüssel ein Objekt sein. Ggf. ist also die Verwendung von Wrapperklassen nötig.
:::

### Iteratoren
Wie bereits dem Beispiel der grundlegenden Implementierung zu entnehmen ist, verwendet man im Kontext einer Map ebenfalls den Iterator. Dies lässt sich darauf zurückführen, dass die Map mithilfe der Methode `.keySet()` alle Keys als Set zurückgibt - und hier eignet sich erneut ein Iterator zum drüberloopen.

- Wichtig: Aufgrund der Datentypen der Map ist ein explizites Casten notwendig. 

### Wichtige Methoden im Umgang mit Map
1. `keySet()`
    - Liefert ein Set der Schlüssel zurück - jedes Element des KeySets ist einzigartig
2. `values()` 
    - Liefert eine Collection der Werte einer Map zurück
        - Daher können Werte theoretisch Doppelt vorkommen
    - Man erhält eine Collection, d.h.
        - Man kann die Collection problemlos mittels Liste oder Iterator durchlaufen
3. `put(Object k, Object v)`
    - Nimmt ein Schlüssel-Wert-Paar in die Map auf
    - `Object k` für den Schlüssel
    - `Object v` für den Wert
4. `get(Object k)`
    - Liefert den Wert zum Schlüssel-Objekt k zurück
5. `containsKey(Object k)`
    - Liefert true zurück, sollte zu dem Schlüssel k ein Eintrag vorhanden sein.
6. `containsValue(Object v)`
    - Liefert true zurück, wenn zu dem Wert v ein Eintrag in der Map enthalten ist
7. `remove(Object k)`
    - Löscht den Eintrag zum Schlüssel k aus der Map
8. `size()`
    - Liefert die Länge der Map zurück
9. `clear()`
    - Initialisiert die Map


## `equals()`-Methode
:::note
Damit auch weiterhin bestimmte Methoden wie `.contains()` oder `remove()` bei Listen, sowie die Vorgabe, Duplikate in Set zu vermeiden und die Eindeutigkeit der Schlüssel beibehalten zu können, muss die Methode `equals()` in verwendeten direkten und indirekten Sub-Klassen überschrieben werden. hierfür gibt es genaue Programmabläufe:
:::

### Direkte Sub-Klassen
:::tip
Bei direkten Sub-Klassen handelt es sich um Klassen (bzw. Objekte), die direkt von Object erben
:::

**Ablauf der Inhaltsüberprüfung:**
1. Alias Check mittels == Operator
2. Test auf Null
3. Typenverträglichkeit überprüft, ob es sich um Instanzen der selben Klasse handelt
4. Feldvergleich überprüft die inhaltliche Gleichheit der Attribute

**Beispielimplementierung:**
```java
public class Haustier {
    String name;
    int alterInJahren;
    String geschlecht;

    Haustier(String name, int alterInJahren, String geschlecht) {
        this.name = name;
        this.alterInJahren = alterInJahren;
        this.geschlecht = geschlecht;
    }

    @Override
    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj == null) {
            return false;
        }
        if (obj.getClass() != this.getClass()) {
            return false;
        }

        Haustier myComparedHaustier = (Haustier) obj;

        if (!this.name.equals(myComparedHaustier.name) |
                !this.geschlecht.equals(myComparedHaustier.geschlecht) |
                this.alterInJahren != myComparedHaustier.alterInJahren) {
            return false;
        }
        return true;
    }
}
```
### Indirekte Sub-Klassen
:::tip
Bei indirekten Subklassen handelt es sich um Klassen, die nicht direkt von Object erben sondern von einer dazwischengelegenen Klasse. Um sich an das DRY-Prinzip zu halten wird hier anders vorgegangen.
:::

**Ablauf der Inhaltsüberprüfung:**
1. Alias-Check mittels ==-Operators
2. Delegation an die `.equals()`-Methode der Superklasse
    - Hiermit spart man sich repetitiven Code
3. Feldvergleich überprüft die inhaltliche Gleichheit der Attribute der Sub-Klasse

**Beispielimplementierung:**
```java
//Die folgende Klasse baut auf der Haustier-Klasse auf
public class Hund extends Haustier{

    boolean halsband;
    Hund(String name, int alterInJahren, String geschlecht, boolean halsband) {
        super(name, alterInJahren, geschlecht);
        this.halsband = halsband;
    }

    @Override
    public boolean equals(Object obj) {
        if (obj == this) {
            return true;
        }
        if (!super.equals(obj)) {
            return false;
        }
        
        Hund myTempHund = (Hund)obj;
        if (this.halsband != myTempHund.halsband) {
            return false;
        }
        return true;
    }
}
```

### Anpassen der `.hashCode()`-Methode
:::warning
**WICHTIG**: Immer wenn `.equals()` überschrieben wird sollte auch immer `.hashCode()` überschrieben werden. 
:::

Die `.hashCode()`-Methode liefert einen Wert zurück, der auf Basis der Attribute des Objekts erzeugt wird. Mit ihm lassen sich zwei Objekte vergleichen:
- Ist der Hashcode gleich, so sind die Objekte dies ebenfalls
- Es gilt der Hashcode-Contract:
    - ***Wenn o1.equals(o2) den Wert true liefert, dann muss o1.hashCode() den gleichen Wert ergeben, wie o2.hashCode()***

**Ergänzung zur Haustier-Klasse**
```java
@Override
public int hashCode() {
    return this.alterInJahren ^ this.name.hashCode() ^ this.geschlecht.hashCode();
}
```
**Ergänzung zur Hund-Klasse**
```java
@Override
public int hashCode() {
    return super.hashCode() ^ Boolean.hashCode(halsband);
}
```


## Wrapper-Klassen
:::note
Im Kontext von Containern werden als Inhalt Objekte erwartet - d.h. nativ lässt sich z.B. ein Integer als einfacher Datentyp nicht direkt einem Container zuordnen
- Lösung: Wrapper-Klassen!
:::

- Wrapper Klassen "verpacken" einen einfachen Datentyp in ein Objekt, sodass dieses nun doch einem Container zugeordnet werden kann.
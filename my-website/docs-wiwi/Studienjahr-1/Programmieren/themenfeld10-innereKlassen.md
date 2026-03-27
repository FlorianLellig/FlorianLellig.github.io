# Themenfeld 10 - Innere Klassen

Eine **innere Klasse** ist eine Klasse, die innerhalb des Rumpfes einer anderen Klasse definiert wird. Sie gehört zum Namensraum der umschließenden Klasse. 

:::info
_"Innere Klassen sind wie spezialisierte Werkzeuge, die fest in einer Werkstatt (der äußeren Klasse) verbaut sind. Sie helfen dir, deinen Code sauber zu strukturieren und Zugriffsrechte geschickt zu nutzen."_
:::

## Warum macht man das?

Es gibt im Wesentlichen drei Gründe, warum Entwickler/-innen das Prinzip der inneren Klassen anwenden:

1. **Logische Gruppierung:** Wenn eine Klasse nur von einer einzigen anderen Klasse verwendet wird, ist es ordentlicher, sie direkt dort hineinzuschreiben.
d.
2. **Kapselung (Privatsphäre):** Eine innere Klasse kann auf alle Variablen und Methoden der äußeren Klasse zugreifen – sogar auf die privaten (`private`). 

3. **Lesbarkeit:** Der Code wird wartbarer, weil zusammengehörige Dinge nah beieinander stehen.


## Die vier Arten von inneren Klassen

Man unterscheidet (in Java) zwischen den folgenden inneren Klassentypen:

### 1 - Static nested class (Statisch verschachtelte Klasse)

:::info
Eine **Static nested Class** ist eine Klasse _mit Bezeichner_, die innerhalb einer anderen Klasse verschachtelt ist. Sie ist `static`, daher kann sie **nicht** auf de Instanzenkontext zugreifen. Lediglich statische Mitglieder der Outer-Klasse können aufgerufen werden. Static nested classes können abhängig von der Sichtbarkeit innerhalb und außerhalb der OuterClass verwendet werden.
:::

```java
public class Reisepass {
    private String inhaber = "Max Mustermann";

    //****************************** Innere Klasse ****************************************
    public static class Biometriedaten {
        String Augenfarbe = "Blau";

        public void zeigeDaten {
            System.out.println("Die Augenfarbe ist: " + Augenfarbe);
            // System.out.println(inhaber); // FEHLER! Kein Zugriff auf Instanzvariablen
        }
    }
    //*************************************************************************************
}

// Aufruf:
Reisepass.Biometrie bio = new Reisepass.Biometrie();
bio.zeigeDaten();
```

In dem vorliegenden Beispiel wird eine Reisepass-Klasse erstellt und mit einem Attribut ausgestattet. Dieses Attribut ist nicht von innerhalb der Static nested class (Biometriedaten) aufrufbar, da diese theoretisch unabhängig von der OuterClass existiert. Somit ist eine Initialisierung der Inner-Class auch möglich, wenn keine Instanz der Outer-Class exisitert.


### 2 - Member inner Class (Elementklasse)

:::info
Eine **Member inner Class** ist eine Klasse _mit Bezeichner_, die innerhalb einer anderen Klasse verschachtelt ist. Sie ist _nicht `static`_, daher kann sie auf den vollständigen Instanzenkontext, d.h. auch als `private`-Deklarierte Methoden und Attribute der Outer-Klasse zugreifen. Member inner Classes können abhängig von der Sichtbarkeit innerhalb und außerhalb der OuterClass verwendet werden.
:::

```java
public class Bankkonto {

    //Dieser Wert ist private, er kann also von außen nicht aufgerufen werden
    private float kontostand = 1000.0; 

    //****************************** Innere Klasse ****************************************
    public class Zinsrechner {
        public void berechneZinsen(float zinssatzInProzent) {
            float zinsen = kontostand * (zinssatzInProzent/100);
            System.out.println("Die berechneten Zinsen betragen: " + zinsen + " Euro");
        }
    }
    //*************************************************************************************

    public void addMoney(float value) {
        kontostand += value;
    }
    public void debitMoney(float value) {
        kontostand -= value;
    }

}

// Aufrufen des Zinsrechners:
Bankkonto meinKonto = new Bankkonto();
meinKonto.addMoney(500.0);

Bankkonto.Zinsrechner meinZinsrechner = meinKonto.new Zinsrechner();
meinZinsrechner.berechneZinsen(5.0);
```

In dem vorliegenden Beispiel wird ein Bankkonko erstellt und mit zwei Methoden sowie einem _privatem_ Attribut, dem Kontostand, ausgestattet. Dieses private Attribut ist von außerhalb der Klasse nicht aufrufbar um die sensiblen Werte zu schützen. Um nun trotzdem einen Zinssatz auf Basis des Kontostandes bestimmen zu können, wird eine Member Inner Class genutzt, die aufgrund der fehlenden `static`-Bezeichnung Zugriff auf den kompletten Instanzkontext hat.  

### 3 - Inner local Class (Innere lokale Klasse)

:::info 
Eine **Inner local Class** ist eine Klasse _mit Bezeichner_, die innerhalb einer anderen Klasse - um genauer zu sein einer konkreten Methode - verschachtelt ist. Dies beschränkt ihre Anwendbarkeit ausschließlich auf den Scope der jeweiligen Methode, außerhalb dieser ist die Inner local Class unreachable und damit nicht verwendbar. Sie ist _nicht `static`_, daher kann sie auf den vollständigen Instanzenkontext, d.h. auch als `private`-Deklarierte Methoden und Attribute der Outer-Klasse zugreifen.
:::

```java
public class User {
    public String mailAdress;

    public void registerMailAdress(String mail) {
        
        //****************************** Innere Klasse ****************************************
        class Validator {
            boolean validateMailAdress(String mail) {
                return email.contains("@") && email.contains(".");
            }
        }
        //*************************************************************************************

        Validator myValidator = new Validator();
        if (myValidator.validateMailAdress(mail) == true) {
            mailAdress = mail;
            System.out.println("Mail erfolgreich gespeichert");
        } else {
            System.out.println("Ungültige Mailadresse");
        }
    }
}
```

In dem vorliegenden Beispiel wird eine User-Klasse erstellt, die wiederum in einer Methode eine Inner local Class beinhaltet. Aufgrund der Verschachtelung der Inneren Klasse innerhalb der Methode `registerMailAdress` ist diese auch NUR in diesem Scope erreichbar - außerhalb der Methode existiert keine Referenz und der Validator wäre unreachable.

### 4 - Anonymous Classes (Anonyme Klassen)

:::info
Eine **Anonyme Klasse** ist eine Klasse _ohne Bezeichner_, die innerhalb einer anderen Klasse verschachtelt ist. Im Gegensatz zu den anderen Arten der inneren Klassen wird diese Klasse direkt aus einem Interface _"on the fly"_ umgesetzt. Dies macht einen Bezeichner überflüssig. 
:::

```java
interface Geraet {
    void einschalten();
}

public class Main {
    public static void main(String[] args) {
        // Anonyme Klasse implementiert das Interface "on the fly"
        Geraet radio = new Geraet() {
            @Override
            public void einschalten() {
                System.out.println("Radio spielt: 'The Best of Java Hits'!");
            }
        };

        radio.einschalten();
    }
}
```
In dem vorliegenden Beispiel wird eine Main-Klasse erstellt, die verschachtelt ein Interface als Grundlage für eine innere Klasse nutzt. Durch die direkte Implementierung der Methode des Interfaces kann man sich den Bezeichner, sprich den Namen der verschachtelten Klasse, die das Interface implementiert, sparen.

## Lambda-Funktionen

### Grundlagen

- Funktion, die vom Prinzip her **ähnlich zu einer inneren anonymen Klasse** ist
    - Ebenfalls Erstellung auf Basis eines Interfaces
    - Lebt **im Kontext der Outher Class** und ist damit _quasi_ keine eigene Klasse

:::warning
Lambda Funktionen setzten **funktionale Interfaces** voraus, d.h.:
- Interfaces mit genau _einer abstrakten Methode ohne default Implementierung_
- Zusätzlich sind _static oder default Methoden im Interface erlaubt_
:::

- Die Lambda Funktion ist definiert als **()->{}**
- Haben Zugriff auf den umliegenden Kontext der `final`-Variablen

### Beispiel einer Lambda Expression

```java
public class LambdaExpression {
    static void main(String[] args) {
        // Im folgenden wird ein Lambda-Expression Test festgelegt, dieser kann später aufgerufen werden
        Printable lambdaTest = (myMessage) -> {IO.println(myMessage);};

        // Aufrufen der Lambda Expression
        lambdaTest.printMessage("Test");
    }

}
```

:::note
Damit dies funktioniert, wird ein Interface "Printable" vorausgesetzt:
```java
public interface Printable {
    public void printMessage(String message);
}
```